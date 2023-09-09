// This module's primary used case is the validation of SCL type schemas
// Test are therefore any run with this type of schemas and incorrect once
import { expect } from "chai";

import { invalidXsd2003, xsd2003 } from "./testfiles/schemas/scl2003.js";
import { xsd2007B } from "./testfiles/schemas/scl2007B.js";
import { xsd2007B4 } from "./testfiles/schemas/scl2007B4.js";

import { validate } from "./xml-schema-validator.js";

const invalid2003 = await fetch("/testfiles/scl-files/invalid2003.scd").then(
  (response) => response.text()
);

const valid2003 = await fetch("/testfiles/scl-files/valid2003.scd").then(
  (response) => response.text()
);

const invalid2007B = await fetch("/testfiles/scl-files/invalid2007B.scd").then(
  (response) => response.text()
);

const valid2007B = await fetch("/testfiles/scl-files/valid2007B.scd").then(
  (response) => response.text()
);

const invalid2007B4 = await fetch(
  "/testfiles/scl-files/invalid2007B4.scd"
).then((response) => response.text());

const valid2007B4 = await fetch("/testfiles/scl-files/valid2007B4.scd").then(
  (response) => response.text()
);

describe("XSD type schema validator", () => {
  it("returns issues for invalid Edition 1 files", async () => {
    const issues = await validate(
      { content: invalid2003, name: "invalid2003" },
      { content: invalidXsd2003, name: "invalid.xsd" }
    );
    expect(issues).to.be.null;
  });

  it("returns issues for invalid Edition 1 files", async () => {
    const issues = await validate(
      { content: invalid2003, name: "invalid2003" },
      { content: xsd2003, name: "2003.xsd" }
    );
    expect(issues!.length).to.equal(2);
    expect(issues![0].title).to.include("nomFreq");
    expect(issues![1].title).to.include("numPhases");
  });

  it("returns valid indication for valid Edition 1 files", async () =>
    expect(
      (await validate(
        { content: valid2003, name: "valid2003" },
        { content: xsd2003, name: "2003.xsd" }
      ))![0].title
    ).to.equal("Project is schema valid")).timeout(10000);

  it("returns issues for invalid Edition 2 files", async () => {
    const issues = await validate(
      { content: invalid2007B, name: "invalid2007B" },
      { content: xsd2007B, name: "2007B.xsd" }
    );
    expect(issues!.length).to.equal(2);
    expect(issues![0].title).to.include("fixed value constraint 'V'");
    expect(issues![1].title).to.include("This element is not expected");
  });

  it("does not add up issues on re-run", async () => {
    await validate(
      { content: invalid2007B, name: "invalid2007B" },
      { content: xsd2007B, name: "2007B.xsd" }
    );
    const issues = await validate(
      { content: invalid2007B, name: "invalid2007B" },
      { content: xsd2007B, name: "2007B.xsd" }
    );

    expect(issues!.length).to.equal(2);
  });

  it("returns valid indication for valid Edition 2 files", async () =>
    expect(
      (await validate(
        { content: valid2007B, name: "valid2007B" },
        { content: xsd2007B, name: "2007B.xsd" }
      ))![0].title
    ).to.equal("Project is schema valid"));

  it("returns issues for invalid Edition 2.1 files", async () => {
    const issues = await validate(
      { content: invalid2007B4, name: "invalid2007B4" },
      { content: xsd2007B4, name: "2007B4.xsd" }
    );
    expect(issues!.length).to.equal(3);
    expect(issues![0].title).to.include("'None' is not accepted");
  });

  it("returns valid indication for valid Edition 2.1 files", async () =>
    expect(
      (await validate(
        { content: valid2007B4, name: "valid2007B4" },
        { content: xsd2007B4, name: "2007B4.xsd" }
      ))![0].title
    ).to.equal("Project is schema valid"));
});
