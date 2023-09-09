export const xsd2003 = `<?xml version="1.0" encoding="UTF-8"?>
  <xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified"
      targetNamespace="http://www.iec.ch/61850/2003/SCL" version="1.7"
      xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:scl="http://www.iec.ch/61850/2003/SCL"
      xmlns:xs="http://www.w3.org/2001/XMLSchema">
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:simpleType name="tRef">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+/.+/.+/.+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAnyName">
          <xs:restriction base="xs:normalizedString"/>
      </xs:simpleType>
      <xs:simpleType name="tName">
          <xs:restriction base="tAnyName">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[\\d,\\p{L}]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrLdName">
          <xs:restriction base="xs:Name">
              <xs:maxLength value="64"/>
              <xs:pattern value="\\p{L}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stU">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Lu}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stL">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Ll}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPAddr">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="IP"/>
              <xs:enumeration value="IP-SUBNET"/>
              <xs:enumeration value="IP-GATEWAY"/>
              <xs:enumeration value="OSI-NSAP"/>
              <xs:enumeration value="OSI-TSEL"/>
              <xs:enumeration value="OSI-SSEL"/>
              <xs:enumeration value="OSI-PSEL"/>
              <xs:enumeration value="OSI-AP-Title"/>
              <xs:enumeration value="OSI-AP-Invoke"/>
              <xs:enumeration value="OSI-AE-Qualifier"/>
              <xs:enumeration value="OSI-AE-Invoke"/>
              <xs:enumeration value="MAC-Address"/>
              <xs:enumeration value="APPID"/>
              <xs:enumeration value="VLAN-PRIORITY"/>
              <xs:enumeration value="VLAN-ID"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="\\p{Lu}[\\d,\\p{L},\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypeEnum">
          <xs:union memberTypes="tPredefinedPTypeEnum tExtensionPTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedAttributeNameEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="T"/>
              <xs:enumeration value="Test"/>
              <xs:enumeration value="Check"/>
              <xs:enumeration value="SIUnit"/>
              <xs:enumeration value="Oper"/>
              <xs:enumeration value="SBO"/>
              <xs:enumeration value="SBOw"/>
              <xs:enumeration value="Cancel"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionAttributeNameEnum">
          <xs:restriction base="tRestrName1stL"/>
      </xs:simpleType>
      <xs:simpleType name="tAttributeNameEnum">
          <xs:union memberTypes="tPredefinedAttributeNameEnum tExtensionAttributeNameEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCommonConductingEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="CBR"/>
              <xs:enumeration value="DIS"/>
              <xs:enumeration value="VTR"/>
              <xs:enumeration value="CTR"/>
              <xs:enumeration value="GEN"/>
              <xs:enumeration value="CAP"/>
              <xs:enumeration value="REA"/>
              <xs:enumeration value="CON"/>
              <xs:enumeration value="MOT"/>
              <xs:enumeration value="EFN"/>
              <xs:enumeration value="PSH"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="BSH"/>
              <xs:enumeration value="CAB"/>
              <xs:enumeration value="GIL"/>
              <xs:enumeration value="LIN"/>
              <xs:enumeration value="RRC"/>
              <xs:enumeration value="SAR"/>
              <xs:enumeration value="TCF"/>
              <xs:enumeration value="TCR"/>
              <xs:enumeration value="IFL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="E\\p{Lu}*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCommonConductingEquipmentEnum">
          <xs:union memberTypes="tPredefinedCommonConductingEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPowerTransformerEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTransformerWindingEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedEquipmentEnum">
          <xs:union
              memberTypes="tCommonConductingEquipmentEnum tPowerTransformerEnum tTransformerWindingEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tEquipmentEnum">
          <xs:union memberTypes="tPredefinedEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="AXN"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="MOT"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="E\\p{Lu}*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGeneralEquipmentEnum">
          <xs:union memberTypes="tPredefinedGeneralEquipmentEnum tExtensionGeneralEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Dyn"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPhaseEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="A"/>
              <xs:enumeration value="B"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="all"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAuthenticationEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="password"/>
              <xs:enumeration value="week"/>
              <xs:enumeration value="strong"/>
              <xs:enumeration value="certificate"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAssociationKindEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="pre-established"/>
              <xs:enumeration value="predefined"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLPHDEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LPHD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLLN0Enum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LLN0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupAEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="A[A-Z]*"/>
              <xs:enumeration value="ANCR"/>
              <xs:enumeration value="ARCO"/>
              <xs:enumeration value="ATCC"/>
              <xs:enumeration value="AVCO"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupCEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="C[A-Z]*"/>
              <xs:enumeration value="CILO"/>
              <xs:enumeration value="CSWI"/>
              <xs:enumeration value="CALH"/>
              <xs:enumeration value="CCGR"/>
              <xs:enumeration value="CPOW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupGEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="G[A-Z]*"/>
              <xs:enumeration value="GAPC"/>
              <xs:enumeration value="GGIO"/>
              <xs:enumeration value="GSAL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupIEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="I[A-Z]*"/>
              <xs:enumeration value="IHMI"/>
              <xs:enumeration value="IARC"/>
              <xs:enumeration value="ITCI"/>
              <xs:enumeration value="ITMI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupMEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="M[A-Z]*"/>
              <xs:enumeration value="MMXU"/>
              <xs:enumeration value="MDIF"/>
              <xs:enumeration value="MHAI"/>
              <xs:enumeration value="MHAN"/>
              <xs:enumeration value="MMTR"/>
              <xs:enumeration value="MMXN"/>
              <xs:enumeration value="MSQI"/>
              <xs:enumeration value="MSTA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupPEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="P[A-Z]*"/>
              <xs:enumeration value="PDIF"/>
              <xs:enumeration value="PDIS"/>
              <xs:enumeration value="PDIR"/>
              <xs:enumeration value="PDOP"/>
              <xs:enumeration value="PDUP"/>
              <xs:enumeration value="PFRC"/>
              <xs:enumeration value="PHAR"/>
              <xs:enumeration value="PHIZ"/>
              <xs:enumeration value="PIOC"/>
              <xs:enumeration value="PMRI"/>
              <xs:enumeration value="PMSS"/>
              <xs:enumeration value="POPF"/>
              <xs:enumeration value="PPAM"/>
              <xs:enumeration value="PSCH"/>
              <xs:enumeration value="PSDE"/>
              <xs:enumeration value="PTEF"/>
              <xs:enumeration value="PTOC"/>
              <xs:enumeration value="PTOF"/>
              <xs:enumeration value="PTOV"/>
              <xs:enumeration value="PTRC"/>
              <xs:enumeration value="PTTR"/>
              <xs:enumeration value="PTUC"/>
              <xs:enumeration value="PTUV"/>
              <xs:enumeration value="PUPF"/>
              <xs:enumeration value="PTUF"/>
              <xs:enumeration value="PVOC"/>
              <xs:enumeration value="PVPH"/>
              <xs:enumeration value="PZSU"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupREnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="R[A-Z]*"/>
              <xs:enumeration value="RSYN"/>
              <xs:enumeration value="RDRE"/>
              <xs:enumeration value="RADR"/>
              <xs:enumeration value="RBDR"/>
              <xs:enumeration value="RDRS"/>
              <xs:enumeration value="RBRF"/>
              <xs:enumeration value="RDIR"/>
              <xs:enumeration value="RFLO"/>
              <xs:enumeration value="RPSB"/>
              <xs:enumeration value="RREC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupSEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="S[A-Z]*"/>
              <xs:enumeration value="SARC"/>
              <xs:enumeration value="SIMG"/>
              <xs:enumeration value="SIML"/>
              <xs:enumeration value="SPDC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupTEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="T[A-Z]*"/>
              <xs:enumeration value="TCTR"/>
              <xs:enumeration value="TVTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupXEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="X[A-Z]*"/>
              <xs:enumeration value="XCBR"/>
              <xs:enumeration value="XSWI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupYEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="Y[A-Z]*"/>
              <xs:enumeration value="YPTR"/>
              <xs:enumeration value="YEFN"/>
              <xs:enumeration value="YLTC"/>
              <xs:enumeration value="YPSH"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupZEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="Z[A-Z]*"/>
              <xs:enumeration value="ZAXN"/>
              <xs:enumeration value="ZBAT"/>
              <xs:enumeration value="ZBSH"/>
              <xs:enumeration value="ZCAB"/>
              <xs:enumeration value="ZCAP"/>
              <xs:enumeration value="ZCON"/>
              <xs:enumeration value="ZGEN"/>
              <xs:enumeration value="ZGIL"/>
              <xs:enumeration value="ZLIN"/>
              <xs:enumeration value="ZMOT"/>
              <xs:enumeration value="ZREA"/>
              <xs:enumeration value="ZRRC"/>
              <xs:enumeration value="ZSAR"/>
              <xs:enumeration value="ZTCF"/>
              <xs:enumeration value="ZTCR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNEnum">
          <xs:union
              memberTypes="tDomainLNGroupAEnum tDomainLNGroupCEnum tDomainLNGroupGEnum tDomainLNGroupIEnum tDomainLNGroupMEnum tDomainLNGroupPEnum tDomainLNGroupREnum tDomainLNGroupSEnum tDomainLNGroupTEnum tDomainLNGroupXEnum tDomainLNGroupYEnum tDomainLNGroupZEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tPredefinedLNClassEnum">
          <xs:union memberTypes="tLPHDEnum tLLN0Enum tDomainLNEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tExtensionLNClassEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:pattern value="\\p{Lu}+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNClassEnum">
          <xs:union memberTypes="tPredefinedLNClassEnum tExtensionLNClassEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="SPS"/>
              <xs:enumeration value="DPS"/>
              <xs:enumeration value="INS"/>
              <xs:enumeration value="ACT"/>
              <xs:enumeration value="ACD"/>
              <xs:enumeration value="SEC"/>
              <xs:enumeration value="BCR"/>
              <xs:enumeration value="MV"/>
              <xs:enumeration value="CMV"/>
              <xs:enumeration value="SAV"/>
              <xs:enumeration value="WYE"/>
              <xs:enumeration value="DEL"/>
              <xs:enumeration value="SEQ"/>
              <xs:enumeration value="HMV"/>
              <xs:enumeration value="HWYE"/>
              <xs:enumeration value="HDEL"/>
              <xs:enumeration value="SPC"/>
              <xs:enumeration value="DPC"/>
              <xs:enumeration value="INC"/>
              <xs:enumeration value="BSC"/>
              <xs:enumeration value="ISC"/>
              <xs:enumeration value="APC"/>
              <xs:enumeration value="SPG"/>
              <xs:enumeration value="ING"/>
              <xs:enumeration value="ASG"/>
              <xs:enumeration value="CURVE"/>
              <xs:enumeration value="DPL"/>
              <xs:enumeration value="LPL"/>
              <xs:enumeration value="CSD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:pattern value="\\p{Lu}+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCDCEnum">
          <xs:union memberTypes="tPredefinedCDCEnum tExtensionCDCEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tTrgOptEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="dchg"/>
              <xs:enumeration value="qchg"/>
              <xs:enumeration value="dupd"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTrgOptControlEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="dchg"/>
              <xs:enumeration value="qchg"/>
              <xs:enumeration value="dupd"/>
              <xs:enumeration value="period"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="ST"/>
              <xs:enumeration value="MX"/>
              <xs:enumeration value="CO"/>
              <xs:enumeration value="SP"/>
              <xs:enumeration value="SG"/>
              <xs:enumeration value="SE"/>
              <xs:enumeration value="SV"/>
              <xs:enumeration value="CF"/>
              <xs:enumeration value="DC"/>
              <xs:enumeration value="EX"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="BOOLEAN"/>
              <xs:enumeration value="INT8"/>
              <xs:enumeration value="INT16"/>
              <xs:enumeration value="INT24"/>
              <xs:enumeration value="INT32"/>
              <xs:enumeration value="INT128"/>
              <xs:enumeration value="INT8U"/>
              <xs:enumeration value="INT16U"/>
              <xs:enumeration value="INT24U"/>
              <xs:enumeration value="INT32U"/>
              <xs:enumeration value="FLOAT32"/>
              <xs:enumeration value="FLOAT64"/>
              <xs:enumeration value="Enum"/>
              <xs:enumeration value="Dbpos"/>
              <xs:enumeration value="Tcmd"/>
              <xs:enumeration value="Quality"/>
              <xs:enumeration value="Timestamp"/>
              <xs:enumeration value="VisString32"/>
              <xs:enumeration value="VisString64"/>
              <xs:enumeration value="VisString129"/>
              <xs:enumeration value="VisString255"/>
              <xs:enumeration value="Octet64"/>
              <xs:enumeration value="Struct"/>
              <xs:enumeration value="EntryTime"/>
              <xs:enumeration value="Unicode255"/>
              <xs:enumeration value="Check"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Lu}[\\p{L},\\d]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tBasicTypeEnum">
          <xs:union memberTypes="tPredefinedBasicTypeEnum tExtensionBasicTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tValKindEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Spec"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="RO"/>
              <xs:enumeration value="Set"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGSEControlTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="GSSE"/>
              <xs:enumeration value="GOOSE"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSIUnitEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="none"/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="kg"/>
              <xs:enumeration value="s"/>
              <xs:enumeration value="A"/>
              <xs:enumeration value="K"/>
              <xs:enumeration value="mol"/>
              <xs:enumeration value="cd"/>
              <xs:enumeration value="deg"/>
              <xs:enumeration value="rad"/>
              <xs:enumeration value="sr"/>
              <xs:enumeration value="Gy"/>
              <xs:enumeration value="q"/>
              <xs:enumeration value="°C"/>
              <xs:enumeration value="Sv"/>
              <xs:enumeration value="F"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="S"/>
              <xs:enumeration value="H"/>
              <xs:enumeration value="V"/>
              <xs:enumeration value="ohm"/>
              <xs:enumeration value="J"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="Hz"/>
              <xs:enumeration value="lx"/>
              <xs:enumeration value="Lm"/>
              <xs:enumeration value="Wb"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="W"/>
              <xs:enumeration value="Pa"/>
              <xs:enumeration value="m^2"/>
              <xs:enumeration value="m^3"/>
              <xs:enumeration value="m/s"/>
              <xs:enumeration value="m/s^2"/>
              <xs:enumeration value="m^3/s"/>
              <xs:enumeration value="m/m^3"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="kg/m^3"/>
              <xs:enumeration value="m^2/s"/>
              <xs:enumeration value="W/m K"/>
              <xs:enumeration value="J/K"/>
              <xs:enumeration value="ppm"/>
              <xs:enumeration value="s^-1"/>
              <xs:enumeration value="rad/s"/>
              <xs:enumeration value="VA"/>
              <xs:enumeration value="Watts"/>
              <xs:enumeration value="VAr"/>
              <xs:enumeration value="phi"/>
              <xs:enumeration value="cos_phi"/>
              <xs:enumeration value="Vs"/>
              <xs:enumeration value="V^2"/>
              <xs:enumeration value="As"/>
              <xs:enumeration value="A^2"/>
              <xs:enumeration value="A^2 s"/>
              <xs:enumeration value="VAh"/>
              <xs:enumeration value="Wh"/>
              <xs:enumeration value="VArh"/>
              <xs:enumeration value="V/Hz"/>
              <xs:enumeration value="b/s"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tUnitMultiplierEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value=""/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="k"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="mu"/>
              <xs:enumeration value="y"/>
              <xs:enumeration value="z"/>
              <xs:enumeration value="a"/>
              <xs:enumeration value="f"/>
              <xs:enumeration value="p"/>
              <xs:enumeration value="n"/>
              <xs:enumeration value="c"/>
              <xs:enumeration value="d"/>
              <xs:enumeration value="da"/>
              <xs:enumeration value="h"/>
              <xs:enumeration value="G"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="P"/>
              <xs:enumeration value="E"/>
              <xs:enumeration value="Z"/>
              <xs:enumeration value="Y"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:attributeGroup name="agDesc">
          <xs:attribute form="unqualified" name="desc" type="xs:normalizedString" use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tBaseElement">
          <xs:sequence>
              <xs:any maxOccurs="unbounded" minOccurs="0" namespace="##other" processContents="lax"/>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Private"
                  type="tPrivate"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tUnNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="name" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tIDNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="id" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" mixed="true" name="tAnyContentFromOtherNamespace">
          <xs:sequence maxOccurs="unbounded" minOccurs="0">
              <xs:any namespace="##other" processContents="lax"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tText">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tPrivate">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tHeader">
          <xs:sequence>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" minOccurs="0" name="History">
                  <xs:complexType>
                      <xs:sequence>
                          <xs:element form="qualified" maxOccurs="unbounded" name="Hitem"
                              type="tHitem"/>
                      </xs:sequence>
                  </xs:complexType>
              </xs:element>
          </xs:sequence>
          <xs:attribute form="unqualified" name="id" type="xs:normalizedString" use="required"/>
          <xs:attribute form="unqualified" name="version" type="xs:normalizedString"/>
          <xs:attribute default="" form="unqualified" name="revision" type="xs:normalizedString"/>
          <xs:attribute form="unqualified" name="toolID" type="xs:normalizedString"/>
          <xs:attribute default="IEDName" form="unqualified" name="nameStructure" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:Name">
                      <xs:enumeration value="IEDName"/>
                      <!-- xs:enumeration value="FuncName"/ -->
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType mixed="true" name="tHitem">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="version" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="revision" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="when" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="who" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="what" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="why" type="xs:normalizedString"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="sGroup" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tValueWithUnit">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute form="unqualified" name="unit" type="tSIUnitEnum" use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tVoltage">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="V" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tBitRateInMbPerSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="b/s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute fixed="M" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInMilliSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute fixed="m" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:attributeGroup name="agVirtual">
          <xs:attribute default="false" form="unqualified" name="virtual" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tLNodeContainer">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="LNode"
                          type="tLNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tPowerSystemResource">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipmentContainer">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="PowerTransformer" type="tPowerTransformer">
                          <xs:unique name="uniqueWindingInPowerTransformer">
                              <xs:selector xpath="./scl:TransformerWinding"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tAbstractConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="2" minOccurs="0" name="Terminal"
                          type="tTerminal"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="tSubEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:attribute form="unqualified" name="type" type="tCommonConductingEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attribute default="none" form="unqualified" name="phase" type="tPhaseEnum"
                      use="optional"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPowerTransformer">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="TransformerWinding"
                          type="tTransformerWinding"/>
                  </xs:sequence>
                  <xs:attribute fixed="PTR" form="unqualified" name="type"
                      type="tPowerTransformerEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTransformerWinding">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TapChanger" type="tTapChanger"
                      />
                  </xs:sequence>
                  <xs:attribute fixed="PTW" form="unqualified" name="type"
                      type="tTransformerWindingEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTapChanger">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attribute fixed="LTC" form="unqualified" name="type" type="xs:Name"
                      use="required"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGeneralEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:attribute form="unqualified" name="type" type="tGeneralEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubstation">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="VoltageLevel"
                          type="tVoltageLevel">
                          <xs:unique name="uniqueBayInVoltageLevel">
                              <xs:selector xpath="./scl:Bay"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniquePowerTransformerInVoltageLevel">
                              <xs:selector xpath="./scl:PowerTransformer"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInVoltageLevel">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInVoltageLevel">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueSubFunctionInFunction">
                              <xs:selector xpath="./scl:SubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInFunction">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVoltageLevel">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Voltage" type="tVoltage"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="Bay" type="tBay">
                          <xs:unique name="uniquePowerTransformerInBay">
                              <xs:selector xpath="./scl:PowerTransformer"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueConductingEquipmentInBay">
                              <xs:selector xpath="./scl:ConductingEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInBay">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInBay">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBay">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="tConnectivityNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNode">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="lnInst" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute default="None" form="unqualified" name="iedName" type="tName"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="ldInst" type="tAnyName"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubFunction" type="tSubFunction">
                          <xs:unique name="uniqueGeneralEquipmentInSubFunction">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectivityNode">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer">
                  <xs:attribute form="unqualified" name="pathName" type="tRef" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTerminal">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="name" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="connectivityNode" type="tRef" use="required"/>
                  <xs:attribute form="unqualified" name="substationName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="voltageLevelName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="bayName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="cNodeName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:element name="Substation" type="tSubstation">
          <xs:unique name="uniqueVoltageLevelInSubstation">
              <xs:selector xpath="./scl:VoltageLevel"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniquePowerTranformerInSubstation">
              <xs:selector xpath="./scl:PowerTransformer"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGeneralEquipmentInSubstation">
              <xs:selector xpath="./scl:GeneralEquipment"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueFunctionInSubstation">
              <xs:selector xpath="./scl:Function"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="ConnectivityNodeKey">
              <xs:selector xpath=".//scl:ConnectivityNode"/>
              <xs:field xpath="@pathName"/>
          </xs:key>
          <!-- This identity constraint must be removed, as there is a problem with the (according to part 6 text)
    predefined connectivity node grounded resp GROUNDED. If a terminal references this node, which
    is naturally NOT defined explicitely in the SCL file, verification fails. As far as I know, there is no way
    to restrict the constraint in this respect, so that for value grounded it is allowed to have no explicit definition.
    <xs:keyref name="ref2ConnectivityNode" refer="ConnectivityNodeKey">
        <xs:selector xpath=".//scl:Terminal"/>
        <xs:field xpath="@connectivityNode"/>
    </xs:keyref>
    -->
          <xs:unique name="uniqueLNode">
              <xs:selector xpath=".//scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
          <xs:unique name="uniqueChildNameInSubstation">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agAuthentication">
          <xs:attribute default="true" form="unqualified" name="none" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="password" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="weak" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="strong" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="certificate" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agSmvOpts">
          <xs:attribute default="false" form="unqualified" name="refreshTime" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleSynchronized" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleRate" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="security" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agOptFields">
          <xs:attribute default="false" form="unqualified" name="seqNum" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="timeStamp" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataSet" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="reasonCode" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="entryID" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="configRef" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLDRef">
          <xs:attribute form="unqualified" name="iedName" type="tName" use="required"/>
          <xs:attribute form="unqualified" name="ldInst" type="tName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLNRef">
          <xs:attributeGroup ref="agLDRef"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
          <xs:attribute form="unqualified" name="lnInst" type="tAnyName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agDORef">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="doName" type="tName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agDARef">
          <xs:attributeGroup ref="agDORef"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="optional"/>
      </xs:attributeGroup>
      <xs:complexType name="tIED">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Services" type="tServices"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="AccessPoint"
                          type="tAccessPoint">
                          <xs:unique name="uniqueLNInAccessPoint">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="manufacturer" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="configVersion" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServices">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="DynAssociation" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SettingGroups">
                  <xs:complexType>
                      <xs:all>
                          <xs:element form="qualified" minOccurs="0" name="SGEdit"
                              type="tServiceYesNo"/>
                          <xs:element form="qualified" minOccurs="0" name="ConfSG"
                              type="tServiceYesNo"/>
                      </xs:all>
                  </xs:complexType>
              </xs:element>
              <xs:element form="qualified" minOccurs="0" name="GetDirectory" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataObjectDefinition"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataObjectDirectory"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataSetValue" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SetDataSetValue" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataSetDirectory" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfDataSet"
                  type="tServiceWithMaxAndMaxAttributesAndModify"/>
              <xs:element form="qualified" minOccurs="0" name="DynDataSet"
                  type="tServiceWithMaxAndMaxAttributes"/>
              <xs:element form="qualified" minOccurs="0" name="ReadWrite" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="TimerActivatedControl"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfReportControl"
                  type="tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="GetCBValues" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLogControl" type="tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="ReportSettings" type="tReportSettings"/>
              <xs:element form="qualified" minOccurs="0" name="LogSettings" type="tLogSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSESettings" type="tGSESettings"/>
              <xs:element form="qualified" minOccurs="0" name="SMVSettings" type="tSMVSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSEDir" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GOOSE" type="tServiceWithMaxAndClient"/>
              <xs:element form="qualified" minOccurs="0" name="GSSE" type="tServiceWithMaxAndClient"/>
              <xs:element form="qualified" minOccurs="0" name="FileHandling" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLNs" type="tConfLNs"/>
          </xs:all>
      </xs:complexType>
      <xs:complexType name="tAccessPoint">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:choice minOccurs="0">
                      <xs:element form="qualified" name="Server" type="tServer">
                          <xs:unique name="uniqueAssociationInServer">
                              <xs:selector xpath="./scl:Association"/>
                              <xs:field xpath="@associationID"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element maxOccurs="unbounded" ref="LN"/>
                  </xs:choice>
                  <xs:attribute default="false" form="unqualified" name="router" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="clock" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServer">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" name="Authentication">
                          <xs:complexType>
                              <xs:attributeGroup ref="agAuthentication"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" name="LDevice"
                          type="tLDevice">
                          <xs:unique name="uniqueLNInLDevice">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="Association" type="tAssociation"/>
                  </xs:sequence>
                  <xs:attribute default="30" form="unqualified" name="timeout" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLDevice">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element ref="LN0"/>
                      <xs:element maxOccurs="unbounded" minOccurs="0" ref="LN"/>
                      <xs:element form="qualified" minOccurs="0" name="AccessControl"
                          type="tAccessControl"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="inst" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="ldName" type="tRestrLdName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tAccessControl">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAssociation">
          <xs:attribute form="unqualified" name="kind" type="tAssociationKindEnum" use="required"/>
          <xs:attribute form="unqualified" name="associationID" type="tName" use="optional"/>
          <xs:attributeGroup ref="agLNRef"/>
      </xs:complexType>
      <xs:element name="LN0">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tLN0"/>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueReportControlInLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGSEControlInLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueSampledValueControlInLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyLN0">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReportLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLogLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetGSELN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetSVLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
      </xs:element>
      <xs:element name="LN" type="tLN">
          <xs:unique name="uniqueReportControlInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyInLN">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReport" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLog" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
      </xs:element>
      <xs:complexType abstract="true" name="tAnyLN">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DataSet"
                          type="tDataSet"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ReportControl" type="tReportControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="LogControl" type="tLogControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DOI"
                          type="tDOI"/>
                      <xs:element form="qualified" minOccurs="0" name="Inputs" type="tInputs"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN0">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GSEControl" type="tGSEControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SampledValueControl" type="tSampledValueControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SettingControl"
                          type="tSettingControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SCLControl" type="tSCLControl"/>
                      <xs:element form="qualified" minOccurs="0" name="Log" type="tLog"/>
                  </xs:sequence>
                  <xs:attribute fixed="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDataSet">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="FCDA" type="tFCDA"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFCDA">
          <xs:attribute form="unqualified" name="ldInst" type="tName" use="optional"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControl">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:attribute form="unqualified" name="datSet" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControlWithTriggerOpt">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TrgOps" type="tTrgOps"/>
                  </xs:sequence>
                  <xs:attribute default="0" form="unqualified" name="intgPd" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTrgOps">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="period" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:sequence>
                      <xs:element form="qualified" name="OptFields">
                          <xs:complexType>
                              <xs:attributeGroup ref="agOptFields"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="RptEnabled" type="tRptEnabled"
                      />
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="rptID" type="tName" use="optional">
                      <xs:annotation>
                          <xs:documentation xml:lang="en">Even if rptID is optional, it is
                              recommended, for backward compatibility reason, that tools that
                              instantiate ReportControl element, set the attribute rptID to the
                              default system value defined by 8-1: the reference to the Report Control
                              Block.</xs:documentation>
                      </xs:annotation>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="buffered" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tRptEnabled">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ClientLN"
                          type="tClientLN"/>
                  </xs:sequence>
                  <xs:attribute default="1" form="unqualified" name="max" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientLN">
          <xs:attributeGroup ref="agLNRef"/>
      </xs:complexType>
      <xs:complexType name="tLogControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:attribute form="unqualified" name="logName" type="tName" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="logEna" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="reasonCode" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tInputs">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ExtRef" type="tExtRef"
                      />
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tExtRef">
          <xs:attributeGroup ref="agDORef"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="intAddr" type="xs:normalizedString" use="optional"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tLog">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tControlWithIEDName">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="IEDName"
                          type="tName"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSEControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:attribute default="GOOSE" form="unqualified" name="type"
                      type="tGSEControlTypeEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="appID" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSampledValueControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:sequence>
                      <xs:element form="qualified" name="SmvOpts">
                          <xs:complexType>
                              <xs:attributeGroup ref="agSmvOpts"/>
                          </xs:complexType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="smvID" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute default="true" form="unqualified" name="multicast" type="xs:boolean"/>
                  <xs:attribute form="unqualified" name="smpRate" type="xs:unsignedInt" use="required"/>
                  <xs:attribute form="unqualified" name="nofASDU" type="xs:unsignedInt" use="required"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSettingControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="numOfSGs" type="xs:unsignedInt"
                      use="required"/>
                  <xs:attribute default="1" form="unqualified" name="actSG" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSCLControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tRestrName1stU" use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceYesNo"/>
      <xs:complexType name="tServiceWithMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributes">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute form="unqualified" name="maxAttributes" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributesAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMaxAndMaxAttributes">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndClient">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="client" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tServiceSettings">
          <xs:attribute default="Fix" form="unqualified" name="cbName" type="tServiceSettingsEnum"
              use="optional"/>
          <xs:attribute default="Fix" form="unqualified" name="datSet" type="tServiceSettingsEnum"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="rptID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="bufTime"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLogSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="logEna"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSESettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="appID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="dataLabel"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SmpRate">
                          <xs:simpleType>
                              <xs:restriction base="xs:decimal">
                                  <xs:minInclusive value="0"/>
                              </xs:restriction>
                          </xs:simpleType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="svID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="smpRate"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConfLNs">
          <xs:attribute default="false" form="unqualified" name="fixPrefix" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="fixLnInst" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:element name="IED" type="tIED">
          <xs:unique name="uniqueAccessPointInIED">
              <xs:selector xpath="./scl:AccessPoint"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice"/>
              <xs:field xpath="@inst"/>
          </xs:key>
          <xs:keyref name="ref2LDeviceInIED" refer="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0/scl:LogControl"/>
              <xs:field xpath="@logName"/>
          </xs:keyref>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:complexType abstract="true" name="tControlBlock">
          <xs:annotation>
              <xs:documentation xml:lang="en">A control block within a Logical Device (in
                  LLN0).</xs:documentation>
          </xs:annotation>
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="ldInst" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="cbName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCommunication">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SubNetwork"
                          type="tSubNetwork">
                          <xs:unique name="uniqueConnectedAP">
                              <xs:selector xpath="./scl:ConnectedAP"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@apName"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubNetwork">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="BitRate"
                          type="tBitRateInMbPerSec"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ConnectedAP"
                          type="tConnectedAP">
                          <xs:unique name="uniqueGSEinConnectedAP">
                              <xs:selector xpath="./scl:GSE"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                          <xs:unique name="uniqueSMVinConnectedAP">
                              <xs:selector xpath="./scl:SMV"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional">
                      <xs:annotation>
                          <xs:documentation xml:lang="en">The bus protocol types are defined in IEC
                              61850 Part 8 and 9</xs:documentation>
                      </xs:annotation>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectedAP">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="GSE"
                          type="tGSE"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="SMV"
                          type="tSMV"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="PhysConn"
                          type="tPhysConn"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="iedName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="apName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAddress">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="P" type="tP"/>
          </xs:sequence>
      </xs:complexType>
      <xs:complexType name="tGSE">
          <xs:complexContent>
              <xs:extension base="tControlBlock">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="MinTime"
                          type="tDurationInMilliSec"/>
                      <xs:element form="qualified" minOccurs="0" name="MaxTime"
                          type="tDurationInMilliSec"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMV">
          <xs:complexContent>
              <xs:extension base="tControlBlock"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPhysConn">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="P" type="tP"/>
          </xs:sequence>
          <xs:attribute form="unqualified" name="type" type="xs:normalizedString" use="required"/>
      </xs:complexType>
      <xs:complexType name="tP">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypeEnum" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP">
          <xs:annotation>
              <xs:documentation xml:lang="en">A TCP/IP address</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-SUBNET">
          <xs:annotation>
              <xs:documentation xml:lang="en">A subnet Mask for TCP/IP profiles</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-GATEWAY">
          <xs:annotation>
              <xs:documentation xml:lang="en">A First Hop IP gateway address for TCP/IP
                  profiles</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-NSAP">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Network Address</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="40"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-NSAP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-TSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Transport Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="8"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-TSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-SSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Session Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-SSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-PSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Presentation Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-PSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Title">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AP Title value</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9,]+"/>
                  <xs:attribute fixed="OSI-AP-Title" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
              <!--<xs:pattern value="&#34;[\\d,&#44;]+&#34;"/>-->
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Invoke">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AP Invoke ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AP-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Qualifier">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AE Qualifier</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AE-Qualifier" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Invoke">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AE Invoke ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AE-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MAC-Address">
          <xs:annotation>
              <xs:documentation xml:lang="en">A Media Access Address value</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="17"/>
                  <xs:maxLength value="17"/>
                  <xs:pattern
                      value="[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}"/>
                  <xs:attribute fixed="MAC-Address" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_APPID">
          <xs:annotation>
              <xs:documentation xml:lang="en">An Application Identifier</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="4"/>
                  <xs:maxLength value="4"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="APPID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-PRIORITY">
          <xs:annotation>
              <xs:documentation xml:lang="en">A VLAN User Priority</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-7]"/>
                  <xs:attribute fixed="VLAN-PRIORITY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-ID">
          <xs:annotation>
              <xs:documentation xml:lang="en">A VLAN ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="3"/>
                  <xs:maxLength value="3"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="VLAN-ID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:element name="Communication" type="tCommunication">
          <xs:unique name="uniqueSubNetwork">
              <xs:selector xpath="./scl:SubNetwork"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agDATrgOp">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tAbstractDataAttribute">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="bType" type="tBasicTypeEnum" use="required"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="type" type="tAnyName" use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="count" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNodeType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="DO" type="tDO"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDO">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tRestrName1stU" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="transient" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDO" type="tSDO"/>
                      <xs:element form="qualified" name="DA" type="tDA"/>
                  </xs:choice>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="cdc" type="tCDCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDO">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute">
                  <xs:attributeGroup ref="agDATrgOp"/>
                  <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="BDA" type="tBDA"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="EnumVal"
                          type="tEnumVal"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="ord" type="xs:integer" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDataTypeTemplates">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="LNodeType" type="tLNodeType">
                  <xs:unique name="uniqueDOInLNodeType">
                      <xs:selector xpath="scl:DO"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" name="DOType" type="tDOType">
                  <xs:unique name="uniqueDAorSDOInDOType">
                      <xs:selector xpath="./*"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DAType"
                  type="tDAType">
                  <xs:unique name="uniqueBDAInDAType">
                      <xs:selector xpath="scl:BDA"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="EnumType"
                  type="tEnumType">
                  <xs:unique name="uniqueOrdInEnumType">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="@ord"/>
                  </xs:unique>
              </xs:element>
          </xs:sequence>
      </xs:complexType>
      <xs:element name="DataTypeTemplates" type="tDataTypeTemplates">
          <xs:unique name="uniqueLNodeType">
              <xs:selector xpath="scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@iedType"/>
          </xs:unique>
          <xs:key name="DOTypeKey">
              <xs:selector xpath="scl:DOType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:keyref name="ref2DOType" refer="DOTypeKey">
              <xs:selector xpath="scl:LNodeType/scl:DO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:keyref name="ref2DOTypeForSDO" refer="DOTypeKey">
              <xs:selector xpath="scl:DOType/scl:SDO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:key name="DATypeKey">
              <xs:selector xpath="scl:DAType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:key name="EnumTypeKey">
              <xs:selector xpath="scl:EnumType"/>
              <xs:field xpath="@id"/>
          </xs:key>
      </xs:element>
      <xs:element name="SCL">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tBaseElement">
                      <xs:sequence>
                          <xs:element name="Header" type="tHeader">
                              <xs:unique name="uniqueHitem">
                                  <xs:selector xpath="./scl:History/scl:Hitem"/>
                                  <xs:field xpath="@version"/>
                                  <xs:field xpath="@revision"/>
                              </xs:unique>
                          </xs:element>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Substation"/>
                          <xs:element minOccurs="0" ref="Communication"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="IED"/>
                          <xs:element minOccurs="0" ref="DataTypeTemplates"/>
                      </xs:sequence>
                  </xs:extension>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueSubstation">
              <xs:selector xpath="./scl:Substation"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="IEDKey">
              <xs:selector xpath="./scl:IED"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:key name="LNodeTypeKey">
              <xs:selector xpath="./scl:DataTypeTemplates/scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@lnClass"/>
          </xs:key>
          <xs:keyref name="ref2LNodeTypeDomain1" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeDomain2" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeLLN0" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
      </xs:element>
  </xs:schema>
  `


  export const invalidXsd2003 = `<?xml version="1.0" encoding="UTF-8"?>
  <schema attributeFormDefault="unqualified" elementFormDefault="qualified"
      targetNamespace="http://www.iec.ch/61850/2003/SCL" version="1.7"
      xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:scl="http://www.iec.ch/61850/2003/SCL"
      xmlns:xs="http://www.w3.org/2001/XMLSchema">
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:simpleType name="tRef">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+/.+/.+/.+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAnyName">
          <xs:restriction base="xs:normalizedString"/>
      </xs:simpleType>
      <xs:simpleType name="tName">
          <xs:restriction base="tAnyName">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[\\d,\\p{L}]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrLdName">
          <xs:restriction base="xs:Name">
              <xs:maxLength value="64"/>
              <xs:pattern value="\\p{L}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stU">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Lu}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stL">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Ll}[\\d,\\p{L}]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPAddr">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="IP"/>
              <xs:enumeration value="IP-SUBNET"/>
              <xs:enumeration value="IP-GATEWAY"/>
              <xs:enumeration value="OSI-NSAP"/>
              <xs:enumeration value="OSI-TSEL"/>
              <xs:enumeration value="OSI-SSEL"/>
              <xs:enumeration value="OSI-PSEL"/>
              <xs:enumeration value="OSI-AP-Title"/>
              <xs:enumeration value="OSI-AP-Invoke"/>
              <xs:enumeration value="OSI-AE-Qualifier"/>
              <xs:enumeration value="OSI-AE-Invoke"/>
              <xs:enumeration value="MAC-Address"/>
              <xs:enumeration value="APPID"/>
              <xs:enumeration value="VLAN-PRIORITY"/>
              <xs:enumeration value="VLAN-ID"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="\\p{Lu}[\\d,\\p{L},\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypeEnum">
          <xs:union memberTypes="tPredefinedPTypeEnum tExtensionPTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedAttributeNameEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="T"/>
              <xs:enumeration value="Test"/>
              <xs:enumeration value="Check"/>
              <xs:enumeration value="SIUnit"/>
              <xs:enumeration value="Oper"/>
              <xs:enumeration value="SBO"/>
              <xs:enumeration value="SBOw"/>
              <xs:enumeration value="Cancel"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionAttributeNameEnum">
          <xs:restriction base="tRestrName1stL"/>
      </xs:simpleType>
      <xs:simpleType name="tAttributeNameEnum">
          <xs:union memberTypes="tPredefinedAttributeNameEnum tExtensionAttributeNameEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCommonConductingEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="CBR"/>
              <xs:enumeration value="DIS"/>
              <xs:enumeration value="VTR"/>
              <xs:enumeration value="CTR"/>
              <xs:enumeration value="GEN"/>
              <xs:enumeration value="CAP"/>
              <xs:enumeration value="REA"/>
              <xs:enumeration value="CON"/>
              <xs:enumeration value="MOT"/>
              <xs:enumeration value="EFN"/>
              <xs:enumeration value="PSH"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="BSH"/>
              <xs:enumeration value="CAB"/>
              <xs:enumeration value="GIL"/>
              <xs:enumeration value="LIN"/>
              <xs:enumeration value="RRC"/>
              <xs:enumeration value="SAR"/>
              <xs:enumeration value="TCF"/>
              <xs:enumeration value="TCR"/>
              <xs:enumeration value="IFL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="E\\p{Lu}*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCommonConductingEquipmentEnum">
          <xs:union memberTypes="tPredefinedCommonConductingEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPowerTransformerEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTransformerWindingEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="PTW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedEquipmentEnum">
          <xs:union
              memberTypes="tCommonConductingEquipmentEnum tPowerTransformerEnum tTransformerWindingEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tEquipmentEnum">
          <xs:union memberTypes="tPredefinedEquipmentEnum tExtensionEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="AXN"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="MOT"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="E\\p{Lu}*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGeneralEquipmentEnum">
          <xs:union memberTypes="tPredefinedGeneralEquipmentEnum tExtensionGeneralEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Dyn"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPhaseEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="A"/>
              <xs:enumeration value="B"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="all"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAuthenticationEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="password"/>
              <xs:enumeration value="week"/>
              <xs:enumeration value="strong"/>
              <xs:enumeration value="certificate"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAssociationKindEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="pre-established"/>
              <xs:enumeration value="predefined"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLPHDEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LPHD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLLN0Enum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="LLN0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupAEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="A[A-Z]*"/>
              <xs:enumeration value="ANCR"/>
              <xs:enumeration value="ARCO"/>
              <xs:enumeration value="ATCC"/>
              <xs:enumeration value="AVCO"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupCEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="C[A-Z]*"/>
              <xs:enumeration value="CILO"/>
              <xs:enumeration value="CSWI"/>
              <xs:enumeration value="CALH"/>
              <xs:enumeration value="CCGR"/>
              <xs:enumeration value="CPOW"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupGEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="G[A-Z]*"/>
              <xs:enumeration value="GAPC"/>
              <xs:enumeration value="GGIO"/>
              <xs:enumeration value="GSAL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupIEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="I[A-Z]*"/>
              <xs:enumeration value="IHMI"/>
              <xs:enumeration value="IARC"/>
              <xs:enumeration value="ITCI"/>
              <xs:enumeration value="ITMI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupMEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="M[A-Z]*"/>
              <xs:enumeration value="MMXU"/>
              <xs:enumeration value="MDIF"/>
              <xs:enumeration value="MHAI"/>
              <xs:enumeration value="MHAN"/>
              <xs:enumeration value="MMTR"/>
              <xs:enumeration value="MMXN"/>
              <xs:enumeration value="MSQI"/>
              <xs:enumeration value="MSTA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupPEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="P[A-Z]*"/>
              <xs:enumeration value="PDIF"/>
              <xs:enumeration value="PDIS"/>
              <xs:enumeration value="PDIR"/>
              <xs:enumeration value="PDOP"/>
              <xs:enumeration value="PDUP"/>
              <xs:enumeration value="PFRC"/>
              <xs:enumeration value="PHAR"/>
              <xs:enumeration value="PHIZ"/>
              <xs:enumeration value="PIOC"/>
              <xs:enumeration value="PMRI"/>
              <xs:enumeration value="PMSS"/>
              <xs:enumeration value="POPF"/>
              <xs:enumeration value="PPAM"/>
              <xs:enumeration value="PSCH"/>
              <xs:enumeration value="PSDE"/>
              <xs:enumeration value="PTEF"/>
              <xs:enumeration value="PTOC"/>
              <xs:enumeration value="PTOF"/>
              <xs:enumeration value="PTOV"/>
              <xs:enumeration value="PTRC"/>
              <xs:enumeration value="PTTR"/>
              <xs:enumeration value="PTUC"/>
              <xs:enumeration value="PTUV"/>
              <xs:enumeration value="PUPF"/>
              <xs:enumeration value="PTUF"/>
              <xs:enumeration value="PVOC"/>
              <xs:enumeration value="PVPH"/>
              <xs:enumeration value="PZSU"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupREnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="R[A-Z]*"/>
              <xs:enumeration value="RSYN"/>
              <xs:enumeration value="RDRE"/>
              <xs:enumeration value="RADR"/>
              <xs:enumeration value="RBDR"/>
              <xs:enumeration value="RDRS"/>
              <xs:enumeration value="RBRF"/>
              <xs:enumeration value="RDIR"/>
              <xs:enumeration value="RFLO"/>
              <xs:enumeration value="RPSB"/>
              <xs:enumeration value="RREC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupSEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="S[A-Z]*"/>
              <xs:enumeration value="SARC"/>
              <xs:enumeration value="SIMG"/>
              <xs:enumeration value="SIML"/>
              <xs:enumeration value="SPDC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupTEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="T[A-Z]*"/>
              <xs:enumeration value="TCTR"/>
              <xs:enumeration value="TVTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupXEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="X[A-Z]*"/>
              <xs:enumeration value="XCBR"/>
              <xs:enumeration value="XSWI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupYEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="Y[A-Z]*"/>
              <xs:enumeration value="YPTR"/>
              <xs:enumeration value="YEFN"/>
              <xs:enumeration value="YLTC"/>
              <xs:enumeration value="YPSH"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupZEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="Z[A-Z]*"/>
              <xs:enumeration value="ZAXN"/>
              <xs:enumeration value="ZBAT"/>
              <xs:enumeration value="ZBSH"/>
              <xs:enumeration value="ZCAB"/>
              <xs:enumeration value="ZCAP"/>
              <xs:enumeration value="ZCON"/>
              <xs:enumeration value="ZGEN"/>
              <xs:enumeration value="ZGIL"/>
              <xs:enumeration value="ZLIN"/>
              <xs:enumeration value="ZMOT"/>
              <xs:enumeration value="ZREA"/>
              <xs:enumeration value="ZRRC"/>
              <xs:enumeration value="ZSAR"/>
              <xs:enumeration value="ZTCF"/>
              <xs:enumeration value="ZTCR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNEnum">
          <xs:union
              memberTypes="tDomainLNGroupAEnum tDomainLNGroupCEnum tDomainLNGroupGEnum tDomainLNGroupIEnum tDomainLNGroupMEnum tDomainLNGroupPEnum tDomainLNGroupREnum tDomainLNGroupSEnum tDomainLNGroupTEnum tDomainLNGroupXEnum tDomainLNGroupYEnum tDomainLNGroupZEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tPredefinedLNClassEnum">
          <xs:union memberTypes="tLPHDEnum tLLN0Enum tDomainLNEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tExtensionLNClassEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:pattern value="\\p{Lu}+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNClassEnum">
          <xs:union memberTypes="tPredefinedLNClassEnum tExtensionLNClassEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="SPS"/>
              <xs:enumeration value="DPS"/>
              <xs:enumeration value="INS"/>
              <xs:enumeration value="ACT"/>
              <xs:enumeration value="ACD"/>
              <xs:enumeration value="SEC"/>
              <xs:enumeration value="BCR"/>
              <xs:enumeration value="MV"/>
              <xs:enumeration value="CMV"/>
              <xs:enumeration value="SAV"/>
              <xs:enumeration value="WYE"/>
              <xs:enumeration value="DEL"/>
              <xs:enumeration value="SEQ"/>
              <xs:enumeration value="HMV"/>
              <xs:enumeration value="HWYE"/>
              <xs:enumeration value="HDEL"/>
              <xs:enumeration value="SPC"/>
              <xs:enumeration value="DPC"/>
              <xs:enumeration value="INC"/>
              <xs:enumeration value="BSC"/>
              <xs:enumeration value="ISC"/>
              <xs:enumeration value="APC"/>
              <xs:enumeration value="SPG"/>
              <xs:enumeration value="ING"/>
              <xs:enumeration value="ASG"/>
              <xs:enumeration value="CURVE"/>
              <xs:enumeration value="DPL"/>
              <xs:enumeration value="LPL"/>
              <xs:enumeration value="CSD"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:pattern value="\\p{Lu}+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCDCEnum">
          <xs:union memberTypes="tPredefinedCDCEnum tExtensionCDCEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tTrgOptEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="dchg"/>
              <xs:enumeration value="qchg"/>
              <xs:enumeration value="dupd"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tTrgOptControlEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="dchg"/>
              <xs:enumeration value="qchg"/>
              <xs:enumeration value="dupd"/>
              <xs:enumeration value="period"/>
              <xs:enumeration value="none"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFCEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="ST"/>
              <xs:enumeration value="MX"/>
              <xs:enumeration value="CO"/>
              <xs:enumeration value="SP"/>
              <xs:enumeration value="SG"/>
              <xs:enumeration value="SE"/>
              <xs:enumeration value="SV"/>
              <xs:enumeration value="CF"/>
              <xs:enumeration value="DC"/>
              <xs:enumeration value="EX"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="BOOLEAN"/>
              <xs:enumeration value="INT8"/>
              <xs:enumeration value="INT16"/>
              <xs:enumeration value="INT24"/>
              <xs:enumeration value="INT32"/>
              <xs:enumeration value="INT128"/>
              <xs:enumeration value="INT8U"/>
              <xs:enumeration value="INT16U"/>
              <xs:enumeration value="INT24U"/>
              <xs:enumeration value="INT32U"/>
              <xs:enumeration value="FLOAT32"/>
              <xs:enumeration value="FLOAT64"/>
              <xs:enumeration value="Enum"/>
              <xs:enumeration value="Dbpos"/>
              <xs:enumeration value="Tcmd"/>
              <xs:enumeration value="Quality"/>
              <xs:enumeration value="Timestamp"/>
              <xs:enumeration value="VisString32"/>
              <xs:enumeration value="VisString64"/>
              <xs:enumeration value="VisString129"/>
              <xs:enumeration value="VisString255"/>
              <xs:enumeration value="Octet64"/>
              <xs:enumeration value="Struct"/>
              <xs:enumeration value="EntryTime"/>
              <xs:enumeration value="Unicode255"/>
              <xs:enumeration value="Check"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:pattern value="\\p{Lu}[\\p{L},\\d]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tBasicTypeEnum">
          <xs:union memberTypes="tPredefinedBasicTypeEnum tExtensionBasicTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tValKindEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Spec"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="RO"/>
              <xs:enumeration value="Set"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGSEControlTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="GSSE"/>
              <xs:enumeration value="GOOSE"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSIUnitEnum">
          <xs:restriction base="xs:token">
              <xs:enumeration value="none"/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="kg"/>
              <xs:enumeration value="s"/>
              <xs:enumeration value="A"/>
              <xs:enumeration value="K"/>
              <xs:enumeration value="mol"/>
              <xs:enumeration value="cd"/>
              <xs:enumeration value="deg"/>
              <xs:enumeration value="rad"/>
              <xs:enumeration value="sr"/>
              <xs:enumeration value="Gy"/>
              <xs:enumeration value="q"/>
              <xs:enumeration value="°C"/>
              <xs:enumeration value="Sv"/>
              <xs:enumeration value="F"/>
              <xs:enumeration value="C"/>
              <xs:enumeration value="S"/>
              <xs:enumeration value="H"/>
              <xs:enumeration value="V"/>
              <xs:enumeration value="ohm"/>
              <xs:enumeration value="J"/>
              <xs:enumeration value="N"/>
              <xs:enumeration value="Hz"/>
              <xs:enumeration value="lx"/>
              <xs:enumeration value="Lm"/>
              <xs:enumeration value="Wb"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="W"/>
              <xs:enumeration value="Pa"/>
              <xs:enumeration value="m^2"/>
              <xs:enumeration value="m^3"/>
              <xs:enumeration value="m/s"/>
              <xs:enumeration value="m/s^2"/>
              <xs:enumeration value="m^3/s"/>
              <xs:enumeration value="m/m^3"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="kg/m^3"/>
              <xs:enumeration value="m^2/s"/>
              <xs:enumeration value="W/m K"/>
              <xs:enumeration value="J/K"/>
              <xs:enumeration value="ppm"/>
              <xs:enumeration value="s^-1"/>
              <xs:enumeration value="rad/s"/>
              <xs:enumeration value="VA"/>
              <xs:enumeration value="Watts"/>
              <xs:enumeration value="VAr"/>
              <xs:enumeration value="phi"/>
              <xs:enumeration value="cos_phi"/>
              <xs:enumeration value="Vs"/>
              <xs:enumeration value="V^2"/>
              <xs:enumeration value="As"/>
              <xs:enumeration value="A^2"/>
              <xs:enumeration value="A^2 s"/>
              <xs:enumeration value="VAh"/>
              <xs:enumeration value="Wh"/>
              <xs:enumeration value="VArh"/>
              <xs:enumeration value="V/Hz"/>
              <xs:enumeration value="b/s"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tUnitMultiplierEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value=""/>
              <xs:enumeration value="m"/>
              <xs:enumeration value="k"/>
              <xs:enumeration value="M"/>
              <xs:enumeration value="mu"/>
              <xs:enumeration value="y"/>
              <xs:enumeration value="z"/>
              <xs:enumeration value="a"/>
              <xs:enumeration value="f"/>
              <xs:enumeration value="p"/>
              <xs:enumeration value="n"/>
              <xs:enumeration value="c"/>
              <xs:enumeration value="d"/>
              <xs:enumeration value="da"/>
              <xs:enumeration value="h"/>
              <xs:enumeration value="G"/>
              <xs:enumeration value="T"/>
              <xs:enumeration value="P"/>
              <xs:enumeration value="E"/>
              <xs:enumeration value="Z"/>
              <xs:enumeration value="Y"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:attributeGroup name="agDesc">
          <xs:attribute form="unqualified" name="desc" type="xs:normalizedString" use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tBaseElement">
          <xs:sequence>
              <xs:any maxOccurs="unbounded" minOccurs="0" namespace="##other" processContents="lax"/>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Private"
                  type="tPrivate"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tUnNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="name" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tIDNaming">
          <xs:complexContent>
              <xs:extension base="tBaseElement">
                  <xs:attribute form="unqualified" name="id" type="tName" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" mixed="true" name="tAnyContentFromOtherNamespace">
          <xs:sequence maxOccurs="unbounded" minOccurs="0">
              <xs:any namespace="##other" processContents="lax"/>
          </xs:sequence>
          <xs:anyAttribute namespace="##other" processContents="lax"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tText">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tPrivate">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="source" type="xs:anyURI" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tHeader">
          <xs:sequence>
              <xs:element form="qualified" minOccurs="0" name="Text" type="tText"/>
              <xs:element form="qualified" minOccurs="0" name="History">
                  <xs:complexType>
                      <xs:sequence>
                          <xs:element form="qualified" maxOccurs="unbounded" name="Hitem"
                              type="tHitem"/>
                      </xs:sequence>
                  </xs:complexType>
              </xs:element>
          </xs:sequence>
          <xs:attribute form="unqualified" name="id" type="xs:normalizedString" use="required"/>
          <xs:attribute form="unqualified" name="version" type="xs:normalizedString"/>
          <xs:attribute default="" form="unqualified" name="revision" type="xs:normalizedString"/>
          <xs:attribute form="unqualified" name="toolID" type="xs:normalizedString"/>
          <xs:attribute default="IEDName" form="unqualified" name="nameStructure" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:Name">
                      <xs:enumeration value="IEDName"/>
                      <!-- xs:enumeration value="FuncName"/ -->
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType mixed="true" name="tHitem">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace">
                  <xs:attribute form="unqualified" name="version" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="revision" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="when" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute form="unqualified" name="who" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="what" type="xs:normalizedString"/>
                  <xs:attribute form="unqualified" name="why" type="xs:normalizedString"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="sGroup" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tValueWithUnit">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute form="unqualified" name="unit" type="tSIUnitEnum" use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tVoltage">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="V" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tBitRateInMbPerSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="b/s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute fixed="M" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInMilliSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="tSIUnitEnum"
                      use="required"/>
                  <xs:attribute fixed="m" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:attributeGroup name="agVirtual">
          <xs:attribute default="false" form="unqualified" name="virtual" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tLNodeContainer">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="LNode"
                          type="tLNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tPowerSystemResource">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipmentContainer">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="PowerTransformer" type="tPowerTransformer">
                          <xs:unique name="uniqueWindingInPowerTransformer">
                              <xs:selector xpath="./scl:TransformerWinding"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tAbstractConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="2" minOccurs="0" name="Terminal"
                          type="tTerminal"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="tSubEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:attribute form="unqualified" name="type" type="tCommonConductingEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attribute default="none" form="unqualified" name="phase" type="tPhaseEnum"
                      use="optional"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPowerTransformer">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="TransformerWinding"
                          type="tTransformerWinding"/>
                  </xs:sequence>
                  <xs:attribute fixed="PTR" form="unqualified" name="type"
                      type="tPowerTransformerEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTransformerWinding">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TapChanger" type="tTapChanger"
                      />
                  </xs:sequence>
                  <xs:attribute fixed="PTW" form="unqualified" name="type"
                      type="tTransformerWindingEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTapChanger">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:attribute fixed="LTC" form="unqualified" name="type" type="xs:Name"
                      use="required"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGeneralEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:attribute form="unqualified" name="type" type="tGeneralEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubstation">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="VoltageLevel"
                          type="tVoltageLevel">
                          <xs:unique name="uniqueBayInVoltageLevel">
                              <xs:selector xpath="./scl:Bay"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniquePowerTransformerInVoltageLevel">
                              <xs:selector xpath="./scl:PowerTransformer"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInVoltageLevel">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInVoltageLevel">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueSubFunctionInFunction">
                              <xs:selector xpath="./scl:SubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInFunction">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tVoltageLevel">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Voltage" type="tVoltage"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="Bay" type="tBay">
                          <xs:unique name="uniquePowerTransformerInBay">
                              <xs:selector xpath="./scl:PowerTransformer"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueConductingEquipmentInBay">
                              <xs:selector xpath="./scl:ConductingEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueGeneralEquipmentInBay">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInBay">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBay">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="tConnectivityNode"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNode">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="lnInst" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute default="None" form="unqualified" name="iedName" type="tName"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="ldInst" type="tAnyName"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubFunction" type="tSubFunction">
                          <xs:unique name="uniqueGeneralEquipmentInSubFunction">
                              <xs:selector xpath="./scl:GeneralEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectivityNode">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer">
                  <xs:attribute form="unqualified" name="pathName" type="tRef" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTerminal">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="name" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="connectivityNode" type="tRef" use="required"/>
                  <xs:attribute form="unqualified" name="substationName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="voltageLevelName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="bayName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="cNodeName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:element name="Substation" type="tSubstation">
          <xs:unique name="uniqueVoltageLevelInSubstation">
              <xs:selector xpath="./scl:VoltageLevel"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniquePowerTranformerInSubstation">
              <xs:selector xpath="./scl:PowerTransformer"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGeneralEquipmentInSubstation">
              <xs:selector xpath="./scl:GeneralEquipment"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueFunctionInSubstation">
              <xs:selector xpath="./scl:Function"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="ConnectivityNodeKey">
              <xs:selector xpath=".//scl:ConnectivityNode"/>
              <xs:field xpath="@pathName"/>
          </xs:key>
          <!-- This identity constraint must be removed, as there is a problem with the (according to part 6 text)
    predefined connectivity node grounded resp GROUNDED. If a terminal references this node, which
    is naturally NOT defined explicitely in the SCL file, verification fails. As far as I know, there is no way
    to restrict the constraint in this respect, so that for value grounded it is allowed to have no explicit definition.
    <xs:keyref name="ref2ConnectivityNode" refer="ConnectivityNodeKey">
        <xs:selector xpath=".//scl:Terminal"/>
        <xs:field xpath="@connectivityNode"/>
    </xs:keyref>
    -->
          <xs:unique name="uniqueLNode">
              <xs:selector xpath=".//scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
          <xs:unique name="uniqueChildNameInSubstation">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agAuthentication">
          <xs:attribute default="true" form="unqualified" name="none" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="password" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="weak" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="strong" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="certificate" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agSmvOpts">
          <xs:attribute default="false" form="unqualified" name="refreshTime" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleSynchronized" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleRate" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="security" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agOptFields">
          <xs:attribute default="false" form="unqualified" name="seqNum" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="timeStamp" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataSet" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="reasonCode" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataRef" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="entryID" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="configRef" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLDRef">
          <xs:attribute form="unqualified" name="iedName" type="tName" use="required"/>
          <xs:attribute form="unqualified" name="ldInst" type="tName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLNRef">
          <xs:attributeGroup ref="agLDRef"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
          <xs:attribute form="unqualified" name="lnInst" type="tAnyName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agDORef">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="doName" type="tName" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agDARef">
          <xs:attributeGroup ref="agDORef"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="optional"/>
      </xs:attributeGroup>
      <xs:complexType name="tIED">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Services" type="tServices"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="AccessPoint"
                          type="tAccessPoint">
                          <xs:unique name="uniqueLNInAccessPoint">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="manufacturer" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="configVersion" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServices">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="DynAssociation" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SettingGroups">
                  <xs:complexType>
                      <xs:all>
                          <xs:element form="qualified" minOccurs="0" name="SGEdit"
                              type="tServiceYesNo"/>
                          <xs:element form="qualified" minOccurs="0" name="ConfSG"
                              type="tServiceYesNo"/>
                      </xs:all>
                  </xs:complexType>
              </xs:element>
              <xs:element form="qualified" minOccurs="0" name="GetDirectory" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataObjectDefinition"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataObjectDirectory"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataSetValue" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SetDataSetValue" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataSetDirectory" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfDataSet"
                  type="tServiceWithMaxAndMaxAttributesAndModify"/>
              <xs:element form="qualified" minOccurs="0" name="DynDataSet"
                  type="tServiceWithMaxAndMaxAttributes"/>
              <xs:element form="qualified" minOccurs="0" name="ReadWrite" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="TimerActivatedControl"
                  type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfReportControl"
                  type="tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="GetCBValues" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLogControl" type="tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="ReportSettings" type="tReportSettings"/>
              <xs:element form="qualified" minOccurs="0" name="LogSettings" type="tLogSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSESettings" type="tGSESettings"/>
              <xs:element form="qualified" minOccurs="0" name="SMVSettings" type="tSMVSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSEDir" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GOOSE" type="tServiceWithMaxAndClient"/>
              <xs:element form="qualified" minOccurs="0" name="GSSE" type="tServiceWithMaxAndClient"/>
              <xs:element form="qualified" minOccurs="0" name="FileHandling" type="tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLNs" type="tConfLNs"/>
          </xs:all>
      </xs:complexType>
      <xs:complexType name="tAccessPoint">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:choice minOccurs="0">
                      <xs:element form="qualified" name="Server" type="tServer">
                          <xs:unique name="uniqueAssociationInServer">
                              <xs:selector xpath="./scl:Association"/>
                              <xs:field xpath="@associationID"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element maxOccurs="unbounded" ref="LN"/>
                  </xs:choice>
                  <xs:attribute default="false" form="unqualified" name="router" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="clock" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServer">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" name="Authentication">
                          <xs:complexType>
                              <xs:attributeGroup ref="agAuthentication"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" name="LDevice"
                          type="tLDevice">
                          <xs:unique name="uniqueLNInLDevice">
                              <xs:selector xpath="./scl:LN"/>
                              <xs:field xpath="@inst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="Association" type="tAssociation"/>
                  </xs:sequence>
                  <xs:attribute default="30" form="unqualified" name="timeout" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLDevice">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element ref="LN0"/>
                      <xs:element maxOccurs="unbounded" minOccurs="0" ref="LN"/>
                      <xs:element form="qualified" minOccurs="0" name="AccessControl"
                          type="tAccessControl"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="inst" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="ldName" type="tRestrLdName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tAccessControl">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAssociation">
          <xs:attribute form="unqualified" name="kind" type="tAssociationKindEnum" use="required"/>
          <xs:attribute form="unqualified" name="associationID" type="tName" use="optional"/>
          <xs:attributeGroup ref="agLNRef"/>
      </xs:complexType>
      <xs:element name="LN0">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tLN0"/>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueReportControlInLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueGSEControlInLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueSampledValueControlInLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyLN0">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReportLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLogLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetGSELN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:GSEControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetSVLN0" refer="DataSetKeyLN0">
              <xs:selector xpath="./scl:SampledValueControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
      </xs:element>
      <xs:element name="LN" type="tLN">
          <xs:unique name="uniqueReportControlInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogControlInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="DataSetKeyInLN">
              <xs:selector xpath="./scl:DataSet"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ref2DataSetReport" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:ReportControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
          <xs:keyref name="ref2DataSetLog" refer="DataSetKeyInLN">
              <xs:selector xpath="./scl:LogControl"/>
              <xs:field xpath="@datSet"/>
          </xs:keyref>
      </xs:element>
      <xs:complexType abstract="true" name="tAnyLN">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DataSet"
                          type="tDataSet"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ReportControl" type="tReportControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="LogControl" type="tLogControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DOI"
                          type="tDOI"/>
                      <xs:element form="qualified" minOccurs="0" name="Inputs" type="tInputs"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN0">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GSEControl" type="tGSEControl"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SampledValueControl" type="tSampledValueControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SettingControl"
                          type="tSettingControl"/>
                      <xs:element form="qualified" minOccurs="0" name="SCLControl" type="tSCLControl"/>
                      <xs:element form="qualified" minOccurs="0" name="Log" type="tLog"/>
                  </xs:sequence>
                  <xs:attribute fixed="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDataSet">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="FCDA" type="tFCDA"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFCDA">
          <xs:attribute form="unqualified" name="ldInst" type="tName" use="optional"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tAnyName" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControl">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:attribute form="unqualified" name="datSet" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControlWithTriggerOpt">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="TrgOps" type="tTrgOps"/>
                  </xs:sequence>
                  <xs:attribute default="0" form="unqualified" name="intgPd" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTrgOps">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="period" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:sequence>
                      <xs:element form="qualified" name="OptFields">
                          <xs:complexType>
                              <xs:attributeGroup ref="agOptFields"/>
                          </xs:complexType>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="RptEnabled" type="tRptEnabled"
                      />
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="rptID" type="tName" use="optional">
                      <xs:annotation>
                          <xs:documentation xml:lang="en">Even if rptID is optional, it is
                              recommended, for backward compatibility reason, that tools that
                              instantiate ReportControl element, set the attribute rptID to the
                              default system value defined by 8-1: the reference to the Report Control
                              Block.</xs:documentation>
                      </xs:annotation>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="buffered" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tRptEnabled">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ClientLN"
                          type="tClientLN"/>
                  </xs:sequence>
                  <xs:attribute default="1" form="unqualified" name="max" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientLN">
          <xs:attributeGroup ref="agLNRef"/>
      </xs:complexType>
      <xs:complexType name="tLogControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:attribute form="unqualified" name="logName" type="tName" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="logEna" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="reasonCode" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tInputs">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ExtRef" type="tExtRef"
                      />
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tExtRef">
          <xs:attributeGroup ref="agDORef"/>
          <xs:attribute form="unqualified" name="daName" type="tName" use="optional"/>
          <xs:attribute form="unqualified" name="intAddr" type="xs:normalizedString" use="optional"/>
      </xs:complexType>
      <xs:complexType mixed="true" name="tLog">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tControlWithIEDName">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="IEDName"
                          type="tName"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSEControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:attribute default="GOOSE" form="unqualified" name="type"
                      type="tGSEControlTypeEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="appID" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSampledValueControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:sequence>
                      <xs:element form="qualified" name="SmvOpts">
                          <xs:complexType>
                              <xs:attributeGroup ref="agSmvOpts"/>
                          </xs:complexType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="smvID" type="xs:normalizedString"
                      use="required"/>
                  <xs:attribute default="true" form="unqualified" name="multicast" type="xs:boolean"/>
                  <xs:attribute form="unqualified" name="smpRate" type="xs:unsignedInt" use="required"/>
                  <xs:attribute form="unqualified" name="nofASDU" type="xs:unsignedInt" use="required"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSettingControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="numOfSGs" type="xs:unsignedInt"
                      use="required"/>
                  <xs:attribute default="1" form="unqualified" name="actSG" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSCLControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tRestrName1stU" use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI"/>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceYesNo"/>
      <xs:complexType name="tServiceWithMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributes">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute form="unqualified" name="maxAttributes" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributesAndModify">
          <xs:complexContent>
              <xs:extension base="tServiceWithMaxAndMaxAttributes">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndClient">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="true" form="unqualified" name="client" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tServiceSettings">
          <xs:attribute default="Fix" form="unqualified" name="cbName" type="tServiceSettingsEnum"
              use="optional"/>
          <xs:attribute default="Fix" form="unqualified" name="datSet" type="tServiceSettingsEnum"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tReportSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="rptID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="bufTime"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLogSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="logEna"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="trgOps"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="intgPd"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGSESettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:attribute default="Fix" form="unqualified" name="appID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="dataLabel"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SmpRate">
                          <xs:simpleType>
                              <xs:restriction base="xs:decimal">
                                  <xs:minInclusive value="0"/>
                              </xs:restriction>
                          </xs:simpleType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="svID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="smpRate"
                      type="tServiceSettingsEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConfLNs">
          <xs:attribute default="false" form="unqualified" name="fixPrefix" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="fixLnInst" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:element name="IED" type="tIED">
          <xs:unique name="uniqueAccessPointInIED">
              <xs:selector xpath="./scl:AccessPoint"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice"/>
              <xs:field xpath="@inst"/>
          </xs:key>
          <xs:keyref name="ref2LDeviceInIED" refer="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0/scl:LogControl"/>
              <xs:field xpath="@logName"/>
          </xs:keyref>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:complexType abstract="true" name="tControlBlock">
          <xs:annotation>
              <xs:documentation xml:lang="en">A control block within a Logical Device (in
                  LLN0).</xs:documentation>
          </xs:annotation>
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="ldInst" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="cbName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCommunication">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="SubNetwork"
                          type="tSubNetwork">
                          <xs:unique name="uniqueConnectedAP">
                              <xs:selector xpath="./scl:ConnectedAP"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@apName"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubNetwork">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="BitRate"
                          type="tBitRateInMbPerSec"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ConnectedAP"
                          type="tConnectedAP">
                          <xs:unique name="uniqueGSEinConnectedAP">
                              <xs:selector xpath="./scl:GSE"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                          <xs:unique name="uniqueSMVinConnectedAP">
                              <xs:selector xpath="./scl:SMV"/>
                              <xs:field xpath="@cbName"/>
                              <xs:field xpath="@ldInst"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional">
                      <xs:annotation>
                          <xs:documentation xml:lang="en">The bus protocol types are defined in IEC
                              61850 Part 8 and 9</xs:documentation>
                      </xs:annotation>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectedAP">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="GSE"
                          type="tGSE"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="SMV"
                          type="tSMV"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="PhysConn"
                          type="tPhysConn"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="iedName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="apName" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAddress">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="P" type="tP"/>
          </xs:sequence>
      </xs:complexType>
      <xs:complexType name="tGSE">
          <xs:complexContent>
              <xs:extension base="tControlBlock">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="MinTime"
                          type="tDurationInMilliSec"/>
                      <xs:element form="qualified" minOccurs="0" name="MaxTime"
                          type="tDurationInMilliSec"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMV">
          <xs:complexContent>
              <xs:extension base="tControlBlock"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tPhysConn">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="P" type="tP"/>
          </xs:sequence>
          <xs:attribute form="unqualified" name="type" type="xs:normalizedString" use="required"/>
      </xs:complexType>
      <xs:complexType name="tP">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypeEnum" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP">
          <xs:annotation>
              <xs:documentation xml:lang="en">A TCP/IP address</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-SUBNET">
          <xs:annotation>
              <xs:documentation xml:lang="en">A subnet Mask for TCP/IP profiles</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-GATEWAY">
          <xs:annotation>
              <xs:documentation xml:lang="en">A First Hop IP gateway address for TCP/IP
                  profiles</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}\\.[0-2]?\\d{1,2}"/>
                  <xs:attribute fixed="IP-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-NSAP">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Network Address</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="40"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-NSAP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-TSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Transport Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="8"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-TSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-SSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Session Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-SSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-PSEL">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI Presentation Selector</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="OSI-PSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Title">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AP Title value</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9,]+"/>
                  <xs:attribute fixed="OSI-AP-Title" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
              <!--<xs:pattern value="&#34;[\\d,&#44;]+&#34;"/>-->
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Invoke">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AP Invoke ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AP-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Qualifier">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AE Qualifier</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AE-Qualifier" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Invoke">
          <xs:annotation>
              <xs:documentation xml:lang="en">An OSI ACSE AE Invoke ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="\\d+"/>
                  <xs:attribute fixed="OSI-AE-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MAC-Address">
          <xs:annotation>
              <xs:documentation xml:lang="en">A Media Access Address value</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="17"/>
                  <xs:maxLength value="17"/>
                  <xs:pattern
                      value="[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}\\-[\\d,A-F]{2}"/>
                  <xs:attribute fixed="MAC-Address" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_APPID">
          <xs:annotation>
              <xs:documentation xml:lang="en">An Application Identifier</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="4"/>
                  <xs:maxLength value="4"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="APPID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-PRIORITY">
          <xs:annotation>
              <xs:documentation xml:lang="en">A VLAN User Priority</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-7]"/>
                  <xs:attribute fixed="VLAN-PRIORITY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-ID">
          <xs:annotation>
              <xs:documentation xml:lang="en">A VLAN ID</xs:documentation>
          </xs:annotation>
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:minLength value="3"/>
                  <xs:maxLength value="3"/>
                  <xs:pattern value="[\\d,A-F]+"/>
                  <xs:attribute fixed="VLAN-ID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:element name="Communication" type="tCommunication">
          <xs:unique name="uniqueSubNetwork">
              <xs:selector xpath="./scl:SubNetwork"/>
              <xs:field xpath="@name"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    Copyright (c) 2013 IEC. All rights reserved.    Version
              1.7. Release 2014/03/11.   </xs:documentation>
      </xs:annotation>
      <xs:attributeGroup name="agDATrgOp">
          <xs:attribute default="false" form="unqualified" name="dchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="qchg" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dupd" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:complexType abstract="true" name="tAbstractDataAttribute">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Val"
                          type="tVal"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAttributeNameEnum"
                      use="required"/>
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="bType" type="tBasicTypeEnum" use="required"/>
                  <xs:attribute default="Set" form="unqualified" name="valKind" type="tValKindEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="type" type="tAnyName" use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="count" type="xs:unsignedInt"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNodeType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="DO" type="tDO"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDO">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tRestrName1stU" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="accessControl" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="transient" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDO" type="tSDO"/>
                      <xs:element form="qualified" name="DA" type="tDA"/>
                  </xs:choice>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="cdc" type="tCDCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDO">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute">
                  <xs:attributeGroup ref="agDATrgOp"/>
                  <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDAType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="BDA" type="tBDA"/>
                  </xs:sequence>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumType">
          <xs:complexContent>
              <xs:extension base="tIDNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" name="EnumVal"
                          type="tEnumVal"/>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEnumVal">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute form="unqualified" name="ord" type="xs:integer" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDataTypeTemplates">
          <xs:sequence>
              <xs:element form="qualified" maxOccurs="unbounded" name="LNodeType" type="tLNodeType">
                  <xs:unique name="uniqueDOInLNodeType">
                      <xs:selector xpath="scl:DO"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" name="DOType" type="tDOType">
                  <xs:unique name="uniqueDAorSDOInDOType">
                      <xs:selector xpath="./*"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="DAType"
                  type="tDAType">
                  <xs:unique name="uniqueBDAInDAType">
                      <xs:selector xpath="scl:BDA"/>
                      <xs:field xpath="@name"/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="EnumType"
                  type="tEnumType">
                  <xs:unique name="uniqueOrdInEnumType">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="@ord"/>
                  </xs:unique>
              </xs:element>
          </xs:sequence>
      </xs:complexType>
      <xs:element name="DataTypeTemplates" type="tDataTypeTemplates">
          <xs:unique name="uniqueLNodeType">
              <xs:selector xpath="scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@iedType"/>
          </xs:unique>
          <xs:key name="DOTypeKey">
              <xs:selector xpath="scl:DOType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:keyref name="ref2DOType" refer="DOTypeKey">
              <xs:selector xpath="scl:LNodeType/scl:DO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:keyref name="ref2DOTypeForSDO" refer="DOTypeKey">
              <xs:selector xpath="scl:DOType/scl:SDO"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
          <xs:key name="DATypeKey">
              <xs:selector xpath="scl:DAType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:key name="EnumTypeKey">
              <xs:selector xpath="scl:EnumType"/>
              <xs:field xpath="@id"/>
          </xs:key>
      </xs:element>
      <xs:element name="SCL">
          <xs:complexType>
              <xs:complexContent>
                  <xs:extension base="tBaseElement">
                      <xs:sequence>
                          <xs:element name="Header" type="tHeader">
                              <xs:unique name="uniqueHitem">
                                  <xs:selector xpath="./scl:History/scl:Hitem"/>
                                  <xs:field xpath="@version"/>
                                  <xs:field xpath="@revision"/>
                              </xs:unique>
                          </xs:element>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Substation"/>
                          <xs:element minOccurs="0" ref="Communication"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="IED"/>
                          <xs:element minOccurs="0" ref="DataTypeTemplates"/>
                      </xs:sequence>
                  </xs:extension>
              </xs:complexContent>
          </xs:complexType>
          <xs:unique name="uniqueSubstation">
              <xs:selector xpath="./scl:Substation"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:key name="IEDKey">
              <xs:selector xpath="./scl:IED"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:key name="LNodeTypeKey">
              <xs:selector xpath="./scl:DataTypeTemplates/scl:LNodeType"/>
              <xs:field xpath="@id"/>
              <xs:field xpath="@lnClass"/>
          </xs:key>
          <xs:keyref name="ref2LNodeTypeDomain1" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeDomain2" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
          <xs:keyref name="ref2LNodeTypeLLN0" refer="LNodeTypeKey">
              <xs:selector xpath="./scl:IED/scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0"/>
              <xs:field xpath="@lnType"/>
              <xs:field xpath="@lnClass"/>
          </xs:keyref>
      </xs:element>
  </xs:schema>
  `