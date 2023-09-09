/** The XML file to be validated */
export type XML = {
  /** XML file content */
  content: string;
  /** XML file name */
  name: string;
};

/** The XSD to validate against */
export type XSD = {
  /** XSD file content */
  content: string;
  /** XSD file name !must ent with .xsd */
  name: string;
};

/** Validator issue */
export interface Issue {
  title: string;
  message?: string;
}

interface ValidationError {
  file: string;
  line: number;
  column: number;
  level: 0 | 1 | 2 | 3;
  message: string;
  node: string;
  part: string;
  code: number;
  valid?: undefined;
  loaded?: undefined;
}

interface LoadSchemaResult {
  file: string;
  valid?: undefined;
  loaded: boolean;
}

type WorkerMessage =
  | ValidationError
  | ValidationResult
  | LoadSchemaResult
  | string;

function isValidationResult(msg: WorkerMessage): msg is ValidationResult {
  return (
    typeof msg !== "string" &&
    msg.file !== undefined &&
    msg.valid !== undefined &&
    msg.loaded === undefined
  );
}

export function isValidationError(msg: WorkerMessage): msg is ValidationError {
  return (
    typeof msg !== "string" &&
    msg.file !== undefined &&
    msg.valid === undefined &&
    msg.loaded === undefined
  );
}

export function isLoadSchemaResult(
  msg: WorkerMessage
): msg is LoadSchemaResult {
  return (
    typeof msg !== "string" &&
    msg.file !== undefined &&
    msg.valid === undefined &&
    msg.loaded !== undefined
  );
}

interface ValidationResult {
  file: string;
  code: number;
  valid: boolean;
  loaded?: undefined;
}

type Validator = (
  xml: string,
  xmlName: string,
  result: Issue[]
) => Promise<ValidationResult>;

const validators: Partial<Record<string, Validator>> = {};

export async function validate(xml: XML, xsd: XSD): Promise<Issue[] | null> {
  const issues: Issue[] = [];

  async function getValidator(
    xsd: string,
    xsdName: string
  ): Promise<Validator> {
    // Catch browsers not supporting workers
    if (!window.Worker) throw new Error("Invalid schema");
    // Avoid init same XSD multiple times
    if (validators[xsdName]) return validators[xsdName]!;

    const worker: Worker = new Worker(
      new URL("./xmlvalidate/worker.js", import.meta.url)
    );

    async function validate(
      xml: string,
      xmlName: string,
      results: Issue[]
    ): Promise<ValidationResult> {
      return new Promise((resolve) => {
        worker.addEventListener("message", (e: MessageEvent<WorkerMessage>) => {
          if (isValidationResult(e.data) && e.data.file === xmlName) {
            resolve(e.data);
          } else if (isValidationError(e.data)) {
            const parts = e.data.message.split(": ", 2);
            const description = parts[1] ? parts[1] : parts[0];
            const qualifiedTag = parts[1] ? ` (${parts[0]})` : "";
            results.push({
              title: description,
              message: `${e.data.file}:${e.data.line} ${e.data.node} ${e.data.part}${qualifiedTag}`,
            });
          }
        });
        worker.postMessage({ content: xml, name: xmlName });
      });
    }

    validators[xsdName] = validate;

    return new Promise((resolve, reject) => {
      worker.addEventListener("message", (e: MessageEvent<WorkerMessage>) => {
        if (isLoadSchemaResult(e.data)) {
          if (e.data.loaded) resolve(validate);
          else reject("Schema cannot be loaded");
        }
      });
      worker.postMessage({ content: xsd, name: xsdName });
    });
  }

  try {
    const validate = await getValidator(xsd.content, xsd.name);
    const result = await validate(xml.content, xml.name, issues);
    if (result.valid) issues.push({ title: "Project is schema valid" });
  } catch {
    return null;
  }

  return issues;
}
