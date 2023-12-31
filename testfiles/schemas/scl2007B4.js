export const xsd2007B4 = 
`<?xml version="1.0" encoding="UTF-8"?>
  <xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified"
      targetNamespace="http://www.iec.ch/61850/2003/SCL" version="2007B4"
      xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:scl="http://www.iec.ch/61850/2003/SCL"
      xmlns:xs="http://www.w3.org/2001/XMLSchema">
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".        Implemented Ed. 2 Tissues
              (since "2007B"): 948, 1050, 1175, 1189, 1208, 1328, 1359, 1365, 1397, 1434, 1448, 1450,
              1458, 1472.    Tissues not relevant for the SCL schema (since "2007B"): 706 (Ed.3), 837,
              847, 865, 873, 883, 884, 885, 938, 949, 961, 1048, 1054, 1059, 1118, 1130, 1131, 1147,
              1161, 1168, 1170 (Ed.3), 1173, 1185, 1188, 1195, 1200, 1204, 1207, 1221, 1224, 1241
              (Ed.3), 1255, 1257 (Ed.3), 1280, 1284, 1327, 1337, 1354, 1395, 1398, 1399, 1400, 1401,
              1402, 1415, 1416, 1419, 1421, 1431, 1444, 1445, 1446, 1447, 1451, 1452, 1457, 1461,
              1471.   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:simpleType name="tConnectivityNodeReference">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+/.+(/.+)*"/>
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
      <xs:simpleType name="tID">
          <xs:restriction base="xs:token">
              <xs:minLength value="1"/>
              <xs:maxLength value="255"/>
              <xs:pattern value="\\S+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAcsiName">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stU">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[A-Z][0-9A-Za-z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRestrName1stL">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[a-z][0-9A-Za-z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPAddr">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSclVersion">
          <xs:restriction base="tName">
              <xs:pattern value="2[0-2][0-9]{2}"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSclRevision">
          <xs:restriction base="xs:Name">
              <xs:pattern value="[A-Z]"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSclRelease">
          <xs:restriction base="xs:unsignedByte">
              <xs:minExclusive value="0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tEmpty">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="0"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="64"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]{0,2}"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]{4,63}"/>
              <xs:pattern value="[A-MO-Za-z][0-9A-Za-z_]{3}"/>
              <xs:pattern value="N[0-9A-Za-np-z_][0-9A-Za-z_]{2}"/>
              <xs:pattern value="No[0-9A-Za-mo-z_][0-9A-Za-z_]"/>
              <xs:pattern value="Non[0-9A-Za-df-z_]"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDNameIsNone">
          <xs:restriction base="tAcsiName">
              <xs:pattern value="None"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDNameOrNone">
          <xs:union memberTypes="tIEDName tIEDNameIsNone"/>
      </xs:simpleType>
      <xs:simpleType name="tOnlyRelativeIEDName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="@"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tIEDNameOrRelative">
          <xs:union memberTypes="tIEDName tOnlyRelativeIEDName"/>
      </xs:simpleType>
      <xs:simpleType name="tLDName">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="64"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLDInst">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="64"/>
              <xs:pattern value="[A-Za-z0-9][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLDInstOrEmpty">
          <xs:union memberTypes="tLDInst tEmpty"/>
      </xs:simpleType>
      <xs:simpleType name="tPrefix">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="11"/>
              <xs:pattern value="[A-Za-z][0-9A-Za-z_]*"/>
              <xs:pattern value=""/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNInst">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[0-9]{1,12}"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLNInstOrEmpty">
          <xs:union memberTypes="tLNInst tEmpty"/>
      </xs:simpleType>
      <xs:simpleType name="tDataName">
          <xs:restriction base="tRestrName1stU">
              <xs:maxLength value="12"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDataSetName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="32"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCBName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="32"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLogName">
          <xs:restriction base="tAcsiName">
              <xs:maxLength value="32"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAccessPointName">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="32"/>
              <xs:pattern value="[A-Za-z0-9][0-9A-Za-z_]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAssociationID">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
              <xs:pattern value="[0-9A-Za-z]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tVisibleBasicLatin">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[ -~]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tMessageID">
          <xs:restriction base="tVisibleBasicLatin">
              <xs:minLength value="1"/>
              <xs:maxLength value="129"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFullAttributeName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern
                  value="[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tFullDOName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSubDataName">
          <xs:restriction base="tRestrName1stL">
              <xs:minLength value="1"/>
              <xs:maxLength value="60"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tNamespaceName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[ -~]+:20\\d\\d[A-Z]?"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tLineType">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tProcessType">
          <xs:restriction base="xs:normalizedString">
              <xs:minLength value="1"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tProcessName">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value=".+(/.+)*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tEnumStringValue">
          <xs:restriction base="xs:normalizedString">
              <xs:maxLength value="127"/>
              <xs:pattern value="[\\p{IsBasicLatin}\\p{IsLatin-1Supplement}]*"/>
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
              <xs:enumeration value="SNTP-Port"/>
              <xs:enumeration value="MMS-Port"/>
              <xs:enumeration value="DNSName"/>
              <xs:enumeration value="IPv6FlowLabel"/>
              <xs:enumeration value="IPv6ClassOfTraffic"/>
              <xs:enumeration value="C37-118-IP-Port"/>
              <xs:enumeration value="IP-UDP-PORT"/>
              <xs:enumeration value="IP-TCP-PORT"/>
              <xs:enumeration value="IPv6"/>
              <xs:enumeration value="IPv6-SUBNET"/>
              <xs:enumeration value="IPv6-GATEWAY"/>
              <xs:enumeration value="IPv6-IGMPv3Src"/>
              <xs:enumeration value="IP-IGMPv3Src"/>
              <xs:enumeration value="IP-ClassOfTraffic"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[A-Z][0-9A-Za-z\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypeEnum">
          <xs:union memberTypes="tPredefinedPTypeEnum tExtensionPTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPTypePhysConnEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Type"/>
              <xs:enumeration value="Plug"/>
              <xs:enumeration value="Cable"/>
              <xs:enumeration value="Port"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPTypePhysConnEnum">
          <xs:union memberTypes="tPredefinedPTypePhysConnEnum tExtensionPTypeEnum"/>
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
              <xs:enumeration value="Addr"/>
              <xs:enumeration value="PRIORITY"/>
              <xs:enumeration value="VID"/>
              <xs:enumeration value="APPID"/>
              <xs:enumeration value="TransportInUse"/>
              <xs:enumeration value="IPClassOfTraffic"/>
              <xs:enumeration value="IPv6FlowLabel"/>
              <xs:enumeration value="IPAddressLength"/>
              <xs:enumeration value="IPAddress"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionAttributeNameEnum">
          <xs:restriction base="tRestrName1stL">
              <xs:maxLength value="60"/>
          </xs:restriction>
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
              <xs:enumeration value="RES"/>
              <xs:enumeration value="RRC"/>
              <xs:enumeration value="SAR"/>
              <xs:enumeration value="TCF"/>
              <xs:enumeration value="TCR"/>
              <xs:enumeration value="IFL"/>
              <xs:enumeration value="FAN"/>
              <xs:enumeration value="SCR"/>
              <xs:enumeration value="SMC"/>
              <xs:enumeration value="PMP"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="3"/>
              <xs:pattern value="E[A-Z]*"/>
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
      <xs:simpleType name="tPredefinedGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="AXN"/>
              <xs:enumeration value="BAT"/>
              <xs:enumeration value="MOT"/>
              <xs:enumeration value="FAN"/>
              <xs:enumeration value="FIL"/>
              <xs:enumeration value="PMP"/>
              <xs:enumeration value="TNK"/>
              <xs:enumeration value="VLV"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionGeneralEquipmentEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="3"/>
              <xs:pattern value="E[A-Z]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tGeneralEquipmentEnum">
          <xs:union memberTypes="tPredefinedGeneralEquipmentEnum tExtensionGeneralEquipmentEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsNoDynEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tServiceSettingsEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Dyn"/>
              <xs:enumeration value="Conf"/>
              <xs:enumeration value="Fix"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tRedProtEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="hsr"/>
              <xs:enumeration value="prp"/>
              <xs:enumeration value="rstp"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSMVDeliveryEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="unicast"/>
              <xs:enumeration value="multicast"/>
              <xs:enumeration value="both"/>
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
              <xs:enumeration value="AB"/>
              <xs:enumeration value="BC"/>
              <xs:enumeration value="CA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tAuthenticationEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="none"/>
              <xs:enumeration value="password"/>
              <xs:enumeration value="weak"/>
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
      <xs:simpleType name="tSystemLNGroupEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="L[A-Z]*"/>
              <xs:pattern value="LLN0"/>
              <xs:enumeration value="LLN0"/>
              <xs:enumeration value="LPHD"/>
              <xs:enumeration value="LCCH"/>
              <xs:enumeration value="LGOS"/>
              <xs:enumeration value="LSVS"/>
              <xs:enumeration value="LTIM"/>
              <xs:enumeration value="LTMS"/>
              <xs:enumeration value="LTRK"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupAEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="A[A-Z]*"/>
              <xs:enumeration value="ANCR"/>
              <xs:enumeration value="ARCO"/>
              <xs:enumeration value="ARIS"/>
              <xs:enumeration value="ATCC"/>
              <xs:enumeration value="AVCO"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupCEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="C[A-Z]*"/>
              <xs:enumeration value="CALH"/>
              <xs:enumeration value="CCGR"/>
              <xs:enumeration value="CILO"/>
              <xs:enumeration value="CPOW"/>
              <xs:enumeration value="CSWI"/>
              <xs:enumeration value="CSYN"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupFEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="F[A-Z]*"/>
              <xs:enumeration value="FCNT"/>
              <xs:enumeration value="FCSD"/>
              <xs:enumeration value="FFIL"/>
              <xs:enumeration value="FLIM"/>
              <xs:enumeration value="FPID"/>
              <xs:enumeration value="FRMP"/>
              <xs:enumeration value="FSPT"/>
              <xs:enumeration value="FXOT"/>
              <xs:enumeration value="FXUT"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupGEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="G[A-Z]*"/>
              <xs:enumeration value="GAPC"/>
              <xs:enumeration value="GGIO"/>
              <xs:enumeration value="GLOG"/>
              <xs:enumeration value="GSAL"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupIEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="I[A-Z]*"/>
              <xs:enumeration value="IARC"/>
              <xs:enumeration value="IHMI"/>
              <xs:enumeration value="ISAF"/>
              <xs:enumeration value="ITCI"/>
              <xs:enumeration value="ITMI"/>
              <xs:enumeration value="ITPC"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupKEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="K[A-Z]*"/>
              <xs:enumeration value="KFAN"/>
              <xs:enumeration value="KFIL"/>
              <xs:enumeration value="KPMP"/>
              <xs:enumeration value="KTNK"/>
              <xs:enumeration value="KVLV"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupMEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="M[A-Z]*"/>
              <xs:enumeration value="MDIF"/>
              <xs:enumeration value="MENV"/>
              <xs:enumeration value="MFLK"/>
              <xs:enumeration value="MHAI"/>
              <xs:enumeration value="MHAN"/>
              <xs:enumeration value="MHYD"/>
              <xs:enumeration value="MMDC"/>
              <xs:enumeration value="MMET"/>
              <xs:enumeration value="MMTN"/>
              <xs:enumeration value="MMTR"/>
              <xs:enumeration value="MMXN"/>
              <xs:enumeration value="MMXU"/>
              <xs:enumeration value="MSQI"/>
              <xs:enumeration value="MSTA"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupPEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="P[A-Z]*"/>
              <xs:enumeration value="PDIF"/>
              <xs:enumeration value="PDIR"/>
              <xs:enumeration value="PDIS"/>
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
              <xs:enumeration value="PRTR"/>
              <xs:enumeration value="PSCH"/>
              <xs:enumeration value="PSDE"/>
              <xs:enumeration value="PTEF"/>
              <xs:enumeration value="PTHF"/>
              <xs:enumeration value="PTOC"/>
              <xs:enumeration value="PTOF"/>
              <xs:enumeration value="PTOV"/>
              <xs:enumeration value="PTRC"/>
              <xs:enumeration value="PTTR"/>
              <xs:enumeration value="PTUC"/>
              <xs:enumeration value="PTUF"/>
              <xs:enumeration value="PTUV"/>
              <xs:enumeration value="PUPF"/>
              <xs:enumeration value="PVOC"/>
              <xs:enumeration value="PVPH"/>
              <xs:enumeration value="PZSU"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupQEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="Q[A-Z]*"/>
              <xs:enumeration value="QFVR"/>
              <xs:enumeration value="QITR"/>
              <xs:enumeration value="QIUB"/>
              <xs:enumeration value="QVTR"/>
              <xs:enumeration value="QVUB"/>
              <xs:enumeration value="QVVR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupREnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="R[A-Z]*"/>
              <xs:enumeration value="RADR"/>
              <xs:enumeration value="RBDR"/>
              <xs:enumeration value="RBRF"/>
              <xs:enumeration value="RDIR"/>
              <xs:enumeration value="RDRE"/>
              <xs:enumeration value="RDRS"/>
              <xs:enumeration value="RFLO"/>
              <xs:enumeration value="RMXU"/>
              <xs:enumeration value="RPSB"/>
              <xs:enumeration value="RREC"/>
              <xs:enumeration value="RSYN"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupSEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="S[A-Z]*"/>
              <xs:enumeration value="SARC"/>
              <xs:enumeration value="SCBR"/>
              <xs:enumeration value="SIMG"/>
              <xs:enumeration value="SIML"/>
              <xs:enumeration value="SLTC"/>
              <xs:enumeration value="SOPM"/>
              <xs:enumeration value="SPDC"/>
              <xs:enumeration value="SPTR"/>
              <xs:enumeration value="SSWI"/>
              <xs:enumeration value="STMP"/>
              <xs:enumeration value="SVBR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupTEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="T[A-Z]*"/>
              <xs:enumeration value="TANG"/>
              <xs:enumeration value="TAXD"/>
              <xs:enumeration value="TCTR"/>
              <xs:enumeration value="TDST"/>
              <xs:enumeration value="TFLW"/>
              <xs:enumeration value="TFRQ"/>
              <xs:enumeration value="TGSN"/>
              <xs:enumeration value="THUM"/>
              <xs:enumeration value="TLVL"/>
              <xs:enumeration value="TMGF"/>
              <xs:enumeration value="TMVM"/>
              <xs:enumeration value="TPOS"/>
              <xs:enumeration value="TPRS"/>
              <xs:enumeration value="TRTN"/>
              <xs:enumeration value="TSND"/>
              <xs:enumeration value="TTMP"/>
              <xs:enumeration value="TTNS"/>
              <xs:enumeration value="TVBR"/>
              <xs:enumeration value="TVTR"/>
              <xs:enumeration value="TWPH"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupXEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="X[A-Z]*"/>
              <xs:enumeration value="XCBR"/>
              <xs:enumeration value="XSWI"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupYEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="Y[A-Z]*"/>
              <xs:enumeration value="YEFN"/>
              <xs:enumeration value="YLTC"/>
              <xs:enumeration value="YPSH"/>
              <xs:enumeration value="YPTR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNGroupZEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
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
              <xs:enumeration value="ZRES"/>
              <xs:enumeration value="ZRRC"/>
              <xs:enumeration value="ZSAR"/>
              <xs:enumeration value="ZSCR"/>
              <xs:enumeration value="ZSMC"/>
              <xs:enumeration value="ZTCF"/>
              <xs:enumeration value="ZTCR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tDomainLNEnum">
          <xs:union
              memberTypes="tDomainLNGroupAEnum tDomainLNGroupCEnum tDomainLNGroupFEnum tDomainLNGroupGEnum tDomainLNGroupIEnum tDomainLNGroupKEnum tDomainLNGroupMEnum tDomainLNGroupPEnum tDomainLNGroupQEnum tDomainLNGroupREnum tDomainLNGroupSEnum tDomainLNGroupTEnum tDomainLNGroupXEnum tDomainLNGroupYEnum tDomainLNGroupZEnum"
          />
      </xs:simpleType>
      <xs:simpleType name="tPredefinedLNClassEnum">
          <xs:union memberTypes="tSystemLNGroupEnum tDomainLNEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tExtensionLNClassEnum">
          <xs:restriction base="xs:Name">
              <xs:length value="4"/>
              <xs:pattern value="[A-Z]+"/>
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
              <xs:enumeration value="ENS"/>
              <xs:enumeration value="ACT"/>
              <xs:enumeration value="ACD"/>
              <xs:enumeration value="SEC"/>
              <xs:enumeration value="BCR"/>
              <xs:enumeration value="HST"/>
              <xs:enumeration value="VSS"/>
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
              <xs:enumeration value="ENC"/>
              <xs:enumeration value="BSC"/>
              <xs:enumeration value="ISC"/>
              <xs:enumeration value="APC"/>
              <xs:enumeration value="BAC"/>
              <xs:enumeration value="SPG"/>
              <xs:enumeration value="ING"/>
              <xs:enumeration value="ENG"/>
              <xs:enumeration value="ORG"/>
              <xs:enumeration value="TSG"/>
              <xs:enumeration value="CUG"/>
              <xs:enumeration value="VSG"/>
              <xs:enumeration value="ASG"/>
              <xs:enumeration value="CURVE"/>
              <xs:enumeration value="CSG"/>
              <xs:enumeration value="DPL"/>
              <xs:enumeration value="LPL"/>
              <xs:enumeration value="CSD"/>
              <xs:enumeration value="CST"/>
              <xs:enumeration value="BTS"/>
              <xs:enumeration value="UTS"/>
              <xs:enumeration value="LTS"/>
              <xs:enumeration value="GTS"/>
              <xs:enumeration value="MTS"/>
              <xs:enumeration value="NTS"/>
              <xs:enumeration value="STS"/>
              <xs:enumeration value="CTS"/>
              <xs:enumeration value="OTS"/>
              <xs:enumeration value="VSD"/>
              <xs:enumeration value="ORS"/>
              <xs:enumeration value="TCS"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionCDCEnum">
          <xs:restriction base="xs:Name">
              <xs:minLength value="1"/>
              <xs:maxLength value="5"/>
              <xs:pattern value="[A-Za-z]+"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tCDCEnum">
          <xs:restriction base="tPredefinedCDCEnum"/>
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
              <xs:enumeration value="SR"/>
              <xs:enumeration value="BL"/>
              <xs:enumeration value="OR"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedBasicTypeEnum">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="BOOLEAN"/>
              <xs:enumeration value="INT8"/>
              <xs:enumeration value="INT16"/>
              <xs:enumeration value="INT24"/>
              <xs:enumeration value="INT32"/>
              <xs:enumeration value="INT64"/>
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
              <xs:enumeration value="VisString65"/>
              <xs:enumeration value="VisString129"/>
              <xs:enumeration value="VisString255"/>
              <xs:enumeration value="Octet64"/>
              <xs:enumeration value="Unicode255"/>
              <xs:enumeration value="Struct"/>
              <xs:enumeration value="EntryTime"/>
              <xs:enumeration value="Check"/>
              <xs:enumeration value="ObjRef"/>
              <xs:enumeration value="Currency"/>
              <xs:enumeration value="PhyComAddr"/>
              <xs:enumeration value="TrgOps"/>
              <xs:enumeration value="OptFlds"/>
              <xs:enumeration value="SvOptFlds"/>
              <xs:enumeration value="LogOptFlds"/>
              <xs:enumeration value="EntryID"/>
              <xs:enumeration value="Octet6"/>
              <xs:enumeration value="Octet16"/>
              <!-- for 61850-8-1 Edition 2.1 -->
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tBasicTypeEnum">
          <xs:restriction base="tPredefinedBasicTypeEnum"/>
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
      <xs:simpleType name="tRightEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="full"/>
              <xs:enumeration value="fix"/>
              <xs:enumeration value="dataflow"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tSDOCount">
          <xs:union memberTypes="xs:unsignedInt tRestrName1stL"/>
      </xs:simpleType>
      <xs:simpleType name="tDACount">
          <xs:union memberTypes="xs:unsignedInt tAttributeNameEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tSmpMod">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="SmpPerPeriod"/>
              <xs:enumeration value="SmpPerSec"/>
              <xs:enumeration value="SecPerSmp"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedPhysConnTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="Connection"/>
              <xs:enumeration value="RedConn"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tExtensionPhysConnTypeEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:pattern value="[A-Z][0-9A-Za-z\\-]*"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPhysConnTypeEnum">
          <xs:union memberTypes="tPredefinedPhysConnTypeEnum tExtensionPhysConnTypeEnum"/>
      </xs:simpleType>
      <xs:simpleType name="tServiceType">
          <xs:restriction base="xs:Name">
              <xs:enumeration value="Poll"/>
              <xs:enumeration value="Report"/>
              <xs:enumeration value="GOOSE"/>
              <xs:enumeration value="SMV"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:simpleType name="tPredefinedTypeOfSecurityEnum">
          <xs:restriction base="xs:normalizedString">
              <xs:enumeration value="None"/>
              <xs:enumeration value="Signature"/>
              <xs:enumeration value="SignatureAndEncryption"/>
          </xs:restriction>
      </xs:simpleType>
      <xs:attributeGroup name="agDesc">
          <xs:attribute default="" form="unqualified" name="desc" type="xs:normalizedString"
              use="optional"/>
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
                  <xs:attribute form="unqualified" name="id" type="tID" use="required"/>
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
                  <xs:attribute form="unqualified" name="type" use="required">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
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
          <xs:attribute form="unqualified" name="version" type="xs:normalizedString" use="optional"/>
          <xs:attribute default="" form="unqualified" name="revision" type="xs:normalizedString"
              use="optional"/>
          <xs:attribute form="unqualified" name="toolID" type="xs:normalizedString" use="optional"/>
          <xs:attribute default="IEDName" form="unqualified" name="nameStructure" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:Name">
                      <xs:enumeration value="IEDName"/>
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
                  <xs:attribute form="unqualified" name="unit" type="xs:token" use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tVoltage">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="V" form="unqualified" name="unit" type="xs:token"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInSec">
          <xs:simpleContent>
              <xs:restriction base="tValueWithUnit">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="xs:token"
                      use="required"/>
                  <xs:attribute default="" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tDurationInMilliSec">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute fixed="s" form="unqualified" name="unit" type="xs:token"
                      use="optional"/>
                  <xs:attribute fixed="m" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tBitRateInMbPerSec">
          <xs:simpleContent>
              <xs:extension base="xs:decimal">
                  <xs:attribute fixed="b/s" form="unqualified" name="unit" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute fixed="M" form="unqualified" name="multiplier"
                      type="tUnitMultiplierEnum" use="optional"/>
              </xs:extension>
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
                          <xs:unique name="uniqueLNodeInPowerTransformer">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInPTR">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGE">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
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
                          name="SubEquipment" type="tSubEquipment">
                          <xs:unique name="uniqueLNodeInSubEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInACESubEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConductingEquipment">
          <xs:complexContent>
              <xs:extension base="tAbstractConductingEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForCE">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForCE">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tCommonConductingEquipmentEnum"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubEquipment">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForSubEq">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForSubEq">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
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
                          type="tTransformerWinding">
                          <xs:unique name="uniqueLNodeInTransformerWinding">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInPTW">
                              <xs:selector
                                  xpath="./scl:SubEquipment | ./scl:TapChanger | ./scl:EqFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="scl:tSubEquipment">
                          <xs:unique name="uniqueLNodeInSubEquipmentPTR">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInPTRSubEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForPTR">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForPTR">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
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
                      <xs:element form="qualified" minOccurs="0" name="TapChanger" type="tTapChanger">
                          <xs:unique name="uniqueLNodeInTapChanger">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInLTC">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="NeutralPoint" type="tTerminal"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForPTW">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForPTW">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute fixed="PTW" form="unqualified" name="type"
                      type="tTransformerWindingEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTapChanger">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubEquipment" type="scl:tSubEquipment">
                          <xs:unique name="uniqueLNodeInSubEquipmentLTC">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInLTCSubEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForLTC">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForLTC">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute fixed="LTC" form="unqualified" name="type" type="xs:Name"
                      use="required"/>
                  <xs:attributeGroup ref="agVirtual"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGeneralEquipment">
          <xs:complexContent>
              <xs:extension base="tEquipment">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqFunction" type="scl:tEqFunction">
                          <xs:unique name="uniqueLNodeInFuncForGE">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFuncForGE">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
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
                          <xs:unique name="uniqueChildNameInVoltageLevel">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInVoltageLevel">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueLNodeInFunctionSS">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInSubstationFunc">
                              <xs:selector xpath="./*"/>
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
                          <xs:unique name="uniqueChildNameInBay">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInBay">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="scl:tFunction">
                          <xs:unique name="uniqueLNodeInFunctionVL">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInVoltageLevelFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="nomFreq" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:decimal">
                              <xs:minInclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="numPhases" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedByte">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tBay">
          <xs:complexContent>
              <xs:extension base="tEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment">
                          <xs:unique name="uniqueLNodeInConductingEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInCE">
                              <xs:selector xpath="./scl:SubEquipment | ./scl:EqFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="tConnectivityNode">
                          <xs:unique name="uniqueLNodeInConnectivityNode">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="scl:tFunction">
                          <xs:unique name="uniqueLNodeInFunctionB">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInBayFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLNode">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="None" form="unqualified" name="iedName" type="tIEDNameOrNone"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="ldInst" type="tLDInstOrEmpty"
                      use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute default="" form="unqualified" name="lnInst" type="tLNInstOrEmpty"
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
                          <xs:unique name="uniqueLNodeInSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInSubFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipmentOfFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGEFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="tConductingEquipment">
                          <xs:unique name="uniqueLNodeInConductingEquipmentOfFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInCondEq">
                              <xs:selector xpath="./scl:SubEquipment | ./scl:EqFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSubFunction">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipmentOfSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGESubFunc">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="scl:tConductingEquipment">
                          <xs:unique name="uniqueLNodeInConductingEquipmentOfSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueSubEquipmentSubFunc">
                              <xs:selector xpath="./scl:SubEquipment"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="SubFunction" type="scl:tSubFunction">
                          <xs:unique name="uniqueLNodeInSubSubFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueSubSubFunc">
                              <xs:selector xpath="./scl:SubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tAbstractEqFuncSubFunc">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipmentOfFuncForEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGEFuncForEquipment">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="EqSubFunction" type="scl:tEqSubFunction">
                          <xs:unique name="uniqueLNodeInSubFuncForEquipment">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueSubFuncForEquipment">
                              <xs:selector xpath="./scl:EqSubFunction"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEqFunction">
          <xs:complexContent>
              <xs:extension base="tAbstractEqFuncSubFunc"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tEqSubFunction">
          <xs:complexContent>
              <xs:extension base="tAbstractEqFuncSubFunc"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConnectivityNode">
          <xs:complexContent>
              <xs:extension base="tLNodeContainer">
                  <xs:attribute form="unqualified" name="pathName" type="tConnectivityNodeReference"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tTerminal">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute default="" form="unqualified" name="name" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="connectivityNode"
                      type="tConnectivityNodeReference" use="required"/>
                  <xs:attribute form="unqualified" name="processName" type="tProcessName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="substationName" type="tName" use="optional"/>
                  <xs:attribute form="unqualified" name="voltageLevelName" type="tName" use="optional"/>
                  <xs:attribute form="unqualified" name="bayName" type="tName" use="optional"/>
                  <xs:attribute form="unqualified" name="cNodeName" type="tName" use="required"/>
                  <xs:attribute form="unqualified" name="lineName" type="tName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tGeneralEquipmentContainer">
          <xs:complexContent>
              <xs:extension base="tPowerSystemResource">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="GeneralEquipment" type="tGeneralEquipment">
                          <xs:unique name="uniqueLNodeInGeneralEquipment2">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInGE2">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Function"
                          type="tFunction">
                          <xs:unique name="uniqueLNodeInFunction">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                          <xs:unique name="uniqueChildNameInFunction">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLine">
          <xs:complexContent>
              <xs:extension base="tGeneralEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Voltage" type="tVoltage"/>
                      <xs:element form="qualified" maxOccurs="unbounded" name="ConductingEquipment"
                          type="scl:tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConnectivityNode" type="scl:tConnectivityNode"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tLineType" use="optional"/>
                  <xs:attribute form="unqualified" name="nomFreq" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:decimal">
                              <xs:minInclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="numPhases" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedByte">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tProcess">
          <xs:complexContent>
              <xs:extension base="tGeneralEquipmentContainer">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="ConductingEquipment" type="scl:tConductingEquipment"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0"
                          name="Substation" type="tSubstation">
                          <xs:unique name="uniqueChildNameInProcessSubstation">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInProcessSubstation">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Line"
                          type="tLine"/>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Process"
                          type="tProcess">
                          <xs:unique name="uniqueChildNameInSubProcess">
                              <xs:selector xpath="./*"/>
                              <xs:field xpath="@name"/>
                          </xs:unique>
                          <xs:unique name="uniqueLNodeInSubProcess">
                              <xs:selector xpath="./scl:LNode"/>
                              <xs:field xpath="@lnInst"/>
                              <xs:field xpath="@lnClass"/>
                              <xs:field xpath="@iedName"/>
                              <xs:field xpath="@ldInst"/>
                              <xs:field xpath="@prefix"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tProcessType" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:element name="Substation" type="tSubstation">
          <xs:unique name="uniqueChildNameInSubstation">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLNodeInSubstation">
              <xs:selector xpath="./scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
      </xs:element>
      <xs:element name="Process" type="tProcess">
          <xs:unique name="uniqueChildNameInProcess">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLNodeInProcess">
              <xs:selector xpath="./scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
      </xs:element>
      <xs:element name="Line" type="tLine">
          <xs:unique name="uniqueChildNameInLine">
              <xs:selector xpath="./*"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLNodeInLine">
              <xs:selector xpath="./scl:LNode"/>
              <xs:field xpath="@lnInst"/>
              <xs:field xpath="@lnClass"/>
              <xs:field xpath="@iedName"/>
              <xs:field xpath="@ldInst"/>
              <xs:field xpath="@prefix"/>
          </xs:unique>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
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
          <xs:attribute fixed="true" form="unqualified" name="sampleSynchronized" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sampleRate" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="dataSet" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="security" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="timestamp" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="synchSourceId" type="xs:boolean"
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
          <xs:attribute default="true" form="unqualified" name="bufOvfl" type="xs:boolean"
              use="optional"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLDRef">
          <xs:attributeGroup ref="scl:agDesc"/>
          <xs:attribute form="unqualified" name="iedName" type="tIEDName" use="required"/>
          <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="required"/>
      </xs:attributeGroup>
      <xs:attributeGroup name="agLNRef">
          <xs:attributeGroup ref="agLDRef"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
          <xs:attribute form="unqualified" name="lnInst" type="tLNInstOrEmpty" use="required"/>
      </xs:attributeGroup>
      <xs:complexType name="tIED">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
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
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="KDC"
                          type="tKDC"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tIEDName" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="manufacturer" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="configVersion" type="xs:normalizedString"
                      use="optional"/>
                  <xs:attribute default="2003" form="unqualified" name="originalSclVersion"
                      type="tSclVersion" use="optional"/>
                  <xs:attribute default="A" form="unqualified" name="originalSclRevision"
                      type="tSclRevision" use="optional"/>
                  <xs:attribute default="1" form="unqualified" name="originalSclRelease"
                      type="tSclRelease" use="optional"/>
                  <xs:attribute default="full" form="unqualified" name="engRight" type="tRightEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="owner" type="xs:normalizedString"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServices">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="DynAssociation"
                  type="scl:tServiceWithOptionalMax"/>
              <xs:element form="qualified" minOccurs="0" name="SettingGroups"
                  type="scl:tSettingGroups"/>
              <xs:element form="qualified" minOccurs="0" name="GetDirectory" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataObjectDefinition"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataObjectDirectory"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GetDataSetValue"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SetDataSetValue"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="DataSetDirectory"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfDataSet"
                  type="scl:tServiceForConfDataSet"/>
              <xs:element form="qualified" minOccurs="0" name="DynDataSet"
                  type="scl:tServiceWithMaxAndMaxAttributes"/>
              <xs:element form="qualified" minOccurs="0" name="ReadWrite" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="TimerActivatedControl"
                  type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfReportControl"
                  type="scl:tServiceConfReportControl"/>
              <xs:element form="qualified" minOccurs="0" name="GetCBValues" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLogControl"
                  type="scl:tServiceWithMaxNonZero"/>
              <xs:element form="qualified" minOccurs="0" name="ReportSettings"
                  type="scl:tReportSettings"/>
              <xs:element form="qualified" minOccurs="0" name="LogSettings" type="scl:tLogSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSESettings" type="scl:tGSESettings"/>
              <xs:element form="qualified" minOccurs="0" name="SMVSettings" type="scl:tSMVSettings"/>
              <xs:element form="qualified" minOccurs="0" name="GSEDir" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="GOOSE" type="scl:tGOOSEcapabilities"/>
              <xs:element form="qualified" minOccurs="0" name="GSSE" type="scl:tServiceWithMax"/>
              <xs:element form="qualified" minOccurs="0" name="SMVsc" type="scl:tSMVsc"/>
              <xs:element form="qualified" minOccurs="0" name="FileHandling" type="scl:tFileHandling"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLNs" type="scl:tConfLNs"/>
              <xs:element form="qualified" minOccurs="0" name="ClientServices"
                  type="scl:tClientServices"/>
              <xs:element form="qualified" minOccurs="0" name="ConfLdName" type="scl:tServiceYesNo"/>
              <xs:element form="qualified" minOccurs="0" name="SupSubscription"
                  type="scl:tSupSubscription"/>
              <xs:element form="qualified" minOccurs="0" name="ConfSigRef"
                  type="scl:tServiceWithMaxNonZero"/>
              <xs:element form="qualified" minOccurs="0" name="ValueHandling"
                  type="scl:tValueHandling"/>
              <xs:element form="qualified" minOccurs="0" name="RedProt" type="scl:tRedProt"/>
              <xs:element form="qualified" minOccurs="0" name="TimeSyncProt" type="scl:tTimeSyncProt"/>
              <xs:element form="qualified" minOccurs="0" name="CommProt" type="scl:tCommProt"/>
          </xs:all>
          <xs:attribute default="32" form="unqualified" name="nameLength" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:token">
                      <xs:pattern value="32"/>
                      <xs:pattern value="64"/>
                      <xs:pattern value="6[5-9]"/>
                      <xs:pattern value="[7-9]\\d"/>
                      <xs:pattern value="[1-9]\\d\\d+"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType name="tAccessPoint">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:choice minOccurs="0">
                          <xs:element form="qualified" name="Server" type="scl:tServer">
                              <xs:unique name="uniqueAssociationInServer">
                                  <xs:selector xpath="./scl:Association"/>
                                  <xs:field xpath="@associationID"/>
                              </xs:unique>
                          </xs:element>
                          <xs:element maxOccurs="unbounded" ref="scl:LN"/>
                          <xs:element form="qualified" name="ServerAt" type="tServerAt"/>
                      </xs:choice>
                      <xs:element form="qualified" minOccurs="0" name="Services" type="scl:tServices"/>
                      <xs:element form="qualified" maxOccurs="7" minOccurs="0" name="GOOSESecurity"
                          type="tCertificate"/>
                      <xs:element form="qualified" maxOccurs="7" minOccurs="0" name="SMVSecurity"
                          type="tCertificate"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="name" type="tAccessPointName" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="router" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="clock" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="kdc" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCertificate">
          <xs:complexContent>
              <xs:extension base="tNaming">
                  <xs:sequence>
                      <xs:element form="qualified" name="Subject" type="tCert"/>
                      <xs:element form="qualified" name="IssuerName" type="tCert"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="xferNumber" type="xs:unsignedInt"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="serialNumber" use="required">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                              <xs:pattern value="[0-9]+"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tCert">
          <xs:attribute form="unqualified" name="commonName" use="required">
              <xs:simpleType>
                  <xs:restriction base="xs:normalizedString">
                      <xs:minLength value="4"/>
                      <xs:pattern value="none"/>
                      <xs:pattern value="CN=.+"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="idHierarchy" use="required">
              <xs:simpleType>
                  <xs:restriction base="xs:normalizedString">
                      <xs:minLength value="1"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType name="tServerAt">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="apName" type="tAccessPointName"
                      use="required"/>
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
                  <xs:attribute form="unqualified" name="inst" type="tLDInst" use="required"/>
                  <xs:attribute form="unqualified" name="ldName" type="tLDName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType mixed="true" name="tAccessControl">
          <xs:complexContent>
              <xs:extension base="tAnyContentFromOtherNamespace"/>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tAssociation">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="kind" type="tAssociationKindEnum" use="required"/>
          <xs:attribute form="unqualified" name="associationID" type="tAssociationID" use="optional"/>
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
          <xs:unique name="uniqueDOIinLN0">
              <xs:selector xpath="./scl:DOI"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogInLN0">
              <xs:selector xpath="./scl:Log"/>
              <xs:field xpath="@name"/>
          </xs:unique>
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
          <xs:unique name="uniqueDOIinLN">
              <xs:selector xpath="./scl:DOI"/>
              <xs:field xpath="@name"/>
          </xs:unique>
          <xs:unique name="uniqueLogInLN">
              <xs:selector xpath="./scl:Log"/>
              <xs:field xpath="@name"/>
          </xs:unique>
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
                          type="tDOI">
                          <xs:unique name="uniqueSDI_DAIinDOI">
                              <xs:selector xpath="./scl:DAI | ./scl:SDI"/>
                              <xs:field xpath="@name"/>
                              <xs:field xpath="@ix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" minOccurs="0" name="Inputs" type="tInputs">
                          <!--<xs:unique name="uniqueExtRefInInputs">
                <xs:selector xpath="./scl:ExtRef"/>
                <xs:field xpath="@iedName"/>
                <xs:field xpath="@ldInst"/>
                <xs:field xpath="@prefix"/>
                <xs:field xpath="@lnClass"/>
                <xs:field xpath="@lnInst"/>
                <xs:field xpath="@doName"/>
                <xs:field xpath="@daName"/>
                <xs:field xpath="@intAddr"/>
              </xs:unique>-->
                      </xs:element>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="Log"
                          type="scl:tLog"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="lnType" type="tName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tLN">
          <xs:complexContent>
              <xs:extension base="tAnyLN">
                  <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="required"/>
                  <xs:attribute form="unqualified" name="inst" type="tLNInst" use="required"/>
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
                  </xs:sequence>
                  <xs:attribute fixed="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="required"/>
                  <xs:attribute fixed="" form="unqualified" name="inst" type="xs:normalizedString"
                      use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDataSet">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded">
                      <xs:element form="qualified" name="FCDA" type="tFCDA"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tDataSetName" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tFCDA">
          <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="optional"/>
          <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tLNInst" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tFullDOName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tFullAttributeName" use="optional"/>
          <xs:attribute form="unqualified" name="fc" type="tFCEnum" use="required"/>
          <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tCBName" use="required"/>
                  <xs:attribute form="unqualified" name="datSet" type="tDataSetName" use="optional"/>
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
          <xs:attribute default="true" form="unqualified" name="gi" type="xs:boolean" use="optional"/>
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
                  <xs:attribute form="unqualified" name="rptID" type="tMessageID" use="optional"/>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="buffered" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="indexed" type="xs:boolean"
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
                  <xs:attribute default="1" form="unqualified" name="max" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientLN">
          <xs:attributeGroup ref="agLNRef"/>
          <xs:attribute form="unqualified" name="apRef" type="tAccessPointName" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tLogControl">
          <xs:complexContent>
              <xs:extension base="tControlWithTriggerOpt">
                  <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="optional"/>
                  <xs:attribute default="" form="unqualified" name="prefix" type="tPrefix"
                      use="optional"/>
                  <xs:attribute default="LLN0" form="unqualified" name="lnClass" type="tLNClassEnum"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="lnInst" type="tLNInst" use="optional"/>
                  <xs:attribute form="unqualified" name="logName" type="tLogName" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="logEna" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="reasonCode" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="0" form="unqualified" name="bufTime" type="xs:unsignedInt"
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
          <xs:attributeGroup ref="scl:agDesc"/>
          <xs:attribute form="unqualified" name="iedName" type="tIEDNameOrRelative" use="optional"/>
          <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="optional"/>
          <xs:attribute form="unqualified" name="prefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="lnClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="lnInst" type="tLNInst" use="optional"/>
          <xs:attribute form="unqualified" name="doName" type="tFullDOName" use="optional"/>
          <xs:attribute form="unqualified" name="daName" type="tFullAttributeName" use="optional"/>
          <xs:attribute form="unqualified" name="intAddr" type="xs:normalizedString" use="optional"/>
          <xs:attribute form="unqualified" name="serviceType" type="tServiceType" use="optional"/>
          <xs:attribute form="unqualified" name="srcLDInst" type="tLDInst" use="optional"/>
          <xs:attribute form="unqualified" name="srcPrefix" type="tPrefix" use="optional"/>
          <xs:attribute form="unqualified" name="srcLNClass" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="srcLNInst" type="tLNInst" use="optional"/>
          <xs:attribute form="unqualified" name="srcCBName" type="tCBName" use="optional"/>
          <xs:attribute form="unqualified" name="pServT" type="tServiceType" use="optional"/>
          <xs:attribute form="unqualified" name="pLN" type="tLNClassEnum" use="optional"/>
          <xs:attribute form="unqualified" name="pDO" type="tFullDOName" use="optional"/>
          <xs:attribute form="unqualified" name="pDA" type="tFullAttributeName" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tLog">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tLogName" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tControlWithIEDName">
          <xs:complexContent>
              <xs:extension base="tControl">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="IEDName">
                          <xs:complexType>
                              <xs:simpleContent>
                                  <xs:extension base="tIEDName">
                                      <xs:attribute form="unqualified" name="apRef"
                                          type="tAccessPointName" use="optional"/>
                                      <xs:attribute form="unqualified" name="ldInst" type="tLDInst"
                                          use="optional"/>
                                      <xs:attribute form="unqualified" name="prefix" type="tPrefix"
                                          use="optional"/>
                                      <xs:attribute form="unqualified" name="lnClass"
                                          type="tLNClassEnum" use="optional"/>
                                      <xs:attribute form="unqualified" name="lnInst" type="tLNInst"
                                          use="optional"/>
                                  </xs:extension>
                              </xs:simpleContent>
                          </xs:complexType>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="confRev" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tProtocol">
          <xs:simpleContent>
              <xs:extension base="xs:normalizedString">
                  <xs:attribute fixed="true" form="unqualified" name="mustUnderstand"
                      type="xs:boolean" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tGSEControl">
          <xs:complexContent>
              <xs:extension base="tControlWithIEDName">
                  <xs:sequence>
                      <xs:element fixed="R-GOOSE" form="qualified" minOccurs="0" name="Protocol"
                          type="tProtocol"/>
                  </xs:sequence>
                  <xs:attribute default="GOOSE" form="unqualified" name="type"
                      type="tGSEControlTypeEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="appID" type="tMessageID" use="required"/>
                  <xs:attribute default="false" form="unqualified" name="fixedOffs" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="None" form="unqualified" name="securityEnable"
                      type="scl:tPredefinedTypeOfSecurityEnum" use="optional"/>
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
                      <xs:element fixed="R-SV" form="qualified" minOccurs="0" name="Protocol"
                          type="tProtocol"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="smvID" type="tMessageID" use="required"/>
                  <xs:attribute default="true" form="unqualified" name="multicast" type="xs:boolean"/>
                  <xs:attribute form="unqualified" name="smpRate" type="xs:unsignedInt" use="required"/>
                  <xs:attribute form="unqualified" name="nofASDU" type="xs:unsignedInt" use="required"/>
                  <xs:attribute default="SmpPerPeriod" form="unqualified" name="smpMod" type="tSmpMod"
                      use="optional"/>
                  <xs:attribute default="None" form="unqualified" name="securityEnable"
                      type="tPredefinedTypeOfSecurityEnum" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSettingControl">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="numOfSGs" use="required">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minInclusive value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute default="1" form="unqualified" name="actSG" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minInclusive value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute form="unqualified" name="resvTms" type="xs:unsignedShort"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDOI">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:choice maxOccurs="unbounded" minOccurs="0">
                      <xs:element form="qualified" name="SDI" type="tSDI">
                          <xs:unique name="uniqueSDI_DAIinSDI">
                              <xs:selector xpath="./scl:DAI | ./scl:SDI"/>
                              <xs:field xpath="@name"/>
                              <xs:field xpath="@ix"/>
                          </xs:unique>
                      </xs:element>
                      <xs:element form="qualified" name="DAI" type="tDAI"/>
                  </xs:choice>
                  <xs:attribute form="unqualified" name="name" type="tDataName" use="required"/>
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
                  <xs:attribute form="unqualified" name="sAddr" type="xs:normalizedString"
                      use="optional"/>
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
                  <xs:attribute form="unqualified" name="valKind" type="tValKindEnum" use="optional"/>
                  <xs:attribute form="unqualified" name="ix" type="xs:unsignedInt" use="optional"/>
                  <xs:attribute form="unqualified" name="valImport" type="xs:boolean" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceYesNo"/>
      <xs:complexType name="tServiceWithOptionalMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="optional"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMax">
          <xs:attribute form="unqualified" name="max" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxNonZero">
          <xs:attribute form="unqualified" name="max" use="required">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt">
                      <xs:minExclusive value="0"/>
                  </xs:restriction>
              </xs:simpleType>
          </xs:attribute>
      </xs:complexType>
      <xs:complexType name="tServiceConfReportControl">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="both" form="unqualified" name="bufMode" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:Name">
                              <xs:enumeration value="unbuffered"/>
                              <xs:enumeration value="buffered"/>
                              <xs:enumeration value="both"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
                  <xs:attribute default="false" form="unqualified" name="bufConf" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="maxBuf" type="xs:unsignedInt" use="optional"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tServiceWithMaxAndMaxAttributes">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute form="unqualified" name="maxAttributes" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:unsignedInt">
                              <xs:minExclusive value="0"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
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
      <xs:complexType name="tServiceForConfDataSet">
          <xs:complexContent>
              <xs:extension base="tServiceWithMaxAndMaxAttributes">
                  <xs:attribute default="true" form="unqualified" name="modify" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tClientServices">
          <xs:sequence>
              <xs:element form="qualified" minOccurs="0" name="TimeSyncProt" type="scl:tTimeSyncProt"/>
              <xs:element form="qualified" minOccurs="0" name="McSecurity" type="scl:tMcSecurity"/>
          </xs:sequence>
          <xs:attribute default="false" form="unqualified" name="goose" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="gsse" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="bufReport" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="unbufReport" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="readLog" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="sv" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="supportsLdName" type="xs:boolean"
              use="optional"/>
          <xs:attribute form="unqualified" name="maxAttributes" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="maxReports" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="maxGOOSE" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute form="unqualified" name="maxSMV" use="optional">
              <xs:simpleType>
                  <xs:restriction base="xs:unsignedInt"/>
              </xs:simpleType>
          </xs:attribute>
          <xs:attribute default="false" form="unqualified" name="rGOOSE" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="rSV" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="noIctBinding" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType abstract="true" name="tServiceSettings">
          <xs:attribute default="Fix" form="unqualified" name="cbName"
              type="tServiceSettingsNoDynEnum" use="optional"/>
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
                  <xs:attribute default="false" form="unqualified" name="resvTms" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="owner" type="xs:boolean"
                      use="optional"/>
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
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="McSecurity"
                          type="scl:tMcSecurity"/>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="appID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="dataLabel"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="kdaParticipant"
                      type="xs:boolean" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVSettings">
          <xs:complexContent>
              <xs:extension base="tServiceSettings">
                  <xs:sequence>
                      <xs:choice maxOccurs="unbounded">
                          <xs:element form="qualified" name="SmpRate">
                              <xs:simpleType>
                                  <xs:restriction base="xs:unsignedInt">
                                      <xs:minExclusive value="0"/>
                                  </xs:restriction>
                              </xs:simpleType>
                          </xs:element>
                          <xs:element form="qualified" name="SamplesPerSec">
                              <xs:simpleType>
                                  <xs:restriction base="xs:unsignedInt">
                                      <xs:minExclusive value="0"/>
                                  </xs:restriction>
                              </xs:simpleType>
                          </xs:element>
                          <xs:element form="qualified" name="SecPerSamples">
                              <xs:simpleType>
                                  <xs:restriction base="xs:unsignedInt">
                                      <xs:minExclusive value="0"/>
                                  </xs:restriction>
                              </xs:simpleType>
                          </xs:element>
                      </xs:choice>
                      <xs:element form="qualified" minOccurs="0" name="McSecurity"
                          type="scl:tMcSecurity"/>
                  </xs:sequence>
                  <xs:attribute default="Fix" form="unqualified" name="svID"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="optFields"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="smpRate"
                      type="tServiceSettingsEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="samplesPerSec"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="pdcTimeStamp"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="synchSrcId" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="Fix" form="unqualified" name="nofASDU"
                      type="tServiceSettingsNoDynEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="kdaParticipant"
                      type="xs:boolean" use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tConfLNs">
          <xs:attribute default="false" form="unqualified" name="fixPrefix" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="fixLnInst" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tValueHandling">
          <xs:attribute default="false" form="unqualified" name="setToRO" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tFileHandling">
          <xs:complexContent>
              <xs:extension base="tServiceYesNo">
                  <xs:attribute default="true" form="unqualified" name="mms" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="ftp" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="ftps" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tGOOSEcapabilities">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="false" form="unqualified" name="fixedOffs" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="goose" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="rGOOSE" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tRedProt">
          <xs:attribute default="false" form="unqualified" name="hsr" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="prp" type="xs:boolean" use="optional"/>
          <xs:attribute default="false" form="unqualified" name="rstp" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tTimeSyncProt">
          <xs:complexContent>
              <xs:extension base="tServiceYesNo">
                  <xs:attribute default="true" form="unqualified" name="sntp" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="iec61850_9_3"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="c37_238" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="other" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSMVsc">
          <xs:complexContent>
              <xs:extension base="tServiceWithMax">
                  <xs:attribute default="multicast" form="unqualified" name="delivery"
                      type="tSMVDeliveryEnum" use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="deliveryConf"
                      type="xs:boolean" use="optional"/>
                  <xs:attribute default="true" form="unqualified" name="sv" type="xs:boolean"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="rSV" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSupSubscription">
          <xs:attribute form="unqualified" name="maxGo" type="xs:unsignedInt" use="required"/>
          <xs:attribute form="unqualified" name="maxSv" type="xs:unsignedInt" use="required"/>
      </xs:complexType>
      <xs:complexType name="tCommProt">
          <xs:complexContent>
              <xs:extension base="tServiceYesNo">
                  <xs:attribute default="false" form="unqualified" name="ipv6" type="xs:boolean"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tMcSecurity">
          <xs:attribute default="false" form="unqualified" name="signature" type="xs:boolean"
              use="optional"/>
          <xs:attribute default="false" form="unqualified" name="encryption" type="xs:boolean"
              use="optional"/>
      </xs:complexType>
      <xs:complexType name="tKDC">
          <xs:attribute form="unqualified" name="iedName" type="tIEDName" use="required"/>
          <xs:attribute form="unqualified" name="apName" type="tAccessPointName" use="required"/>
      </xs:complexType>
      <xs:complexType name="tSettingGroups">
          <xs:all>
              <xs:element form="qualified" minOccurs="0" name="SGEdit">
                  <xs:complexType>
                      <xs:complexContent>
                          <xs:extension base="tServiceYesNo">
                              <xs:attribute default="false" form="unqualified" name="resvTms"
                                  type="xs:boolean" use="optional"/>
                          </xs:extension>
                      </xs:complexContent>
                  </xs:complexType>
              </xs:element>
              <xs:element form="qualified" minOccurs="0" name="ConfSG">
                  <xs:complexType>
                      <xs:complexContent>
                          <xs:extension base="tServiceYesNo">
                              <xs:attribute default="false" form="unqualified" name="resvTms"
                                  type="xs:boolean" use="optional"/>
                          </xs:extension>
                      </xs:complexContent>
                  </xs:complexType>
              </xs:element>
          </xs:all>
      </xs:complexType>
      <xs:element name="IED" type="tIED">
          <xs:key name="LDeviceInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:Server/scl:LDevice"/>
              <xs:field xpath="@inst"/>
          </xs:key>
          <xs:keyref name="ref2LDeviceInDataSetForFCDAinLN" refer="LDeviceInIEDKey">
              <xs:selector
                  xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN/scl:DataSet/scl:FCDA"/>
              <xs:field xpath="@ldInst"/>
          </xs:keyref>
          <xs:keyref name="ref2LDeviceInDataSetForFCDAinLN0" refer="LDeviceInIEDKey">
              <xs:selector
                  xpath="./scl:AccessPoint/scl:Server/scl:LDevice/scl:LN0/scl:DataSet/scl:FCDA"/>
              <xs:field xpath="@ldInst"/>
          </xs:keyref>
          <xs:key name="AccessPointInIEDKey">
              <xs:selector xpath="./scl:AccessPoint"/>
              <xs:field xpath="@name"/>
          </xs:key>
          <xs:keyref name="ServerAtRef2AccessPoint" refer="AccessPointInIEDKey">
              <xs:selector xpath="./scl:AccessPoint/scl:ServerAt"/>
              <xs:field xpath="@apName"/>
          </xs:keyref>
      </xs:element>
      <xs:annotation>
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
      </xs:annotation>
      <xs:complexType abstract="true" name="tControlBlock">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" minOccurs="0" name="Address" type="tAddress"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="ldInst" type="tLDInst" use="required"/>
                  <xs:attribute form="unqualified" name="cbName" type="tCBName" use="required"/>
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
                  <xs:attribute form="unqualified" name="type" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
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
                          type="tPhysConn">
                          <xs:unique name="uniquePTypeInPhysConn">
                              <xs:selector xpath="./scl:P"/>
                              <xs:field xpath="@type"/>
                          </xs:unique>
                      </xs:element>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="iedName" type="tIEDName" use="required"/>
                  <xs:attribute form="unqualified" name="apName" type="tAccessPointName"
                      use="required"/>
                  <xs:attribute form="unqualified" name="redProt" type="scl:tRedProtEnum"
                      use="optional"/>
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
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="P"
                          type="tP_PhysConn"/>
                  </xs:sequence>
                  <xs:attribute form="unqualified" name="type" type="tPhysConnTypeEnum" use="required"
                  />
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tP_PhysConn">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypePhysConnEnum"
                      use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP">
          <xs:simpleContent>
              <xs:extension base="tPAddr">
                  <xs:attribute form="unqualified" name="type" type="tPTypeEnum" use="required"/>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tP_IPbase">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="IPv4"
                      value="([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])"
                  />
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-SUBNET">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-GATEWAY">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tP_IPv6base">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="IPv6" value="([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6">
          <xs:simpleContent>
              <xs:restriction base="tP_IPv6base">
                  <xs:attribute fixed="IPv6" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6-SUBNET">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="IPv6_Subnet" value="/[1-9]|/[1-9][0-9]|/1[0-1][0-9]|/12[0-7]"/>
                  <xs:attribute fixed="IPv6-SUBNET" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6-GATEWAY">
          <xs:simpleContent>
              <xs:restriction base="tP_IPv6base">
                  <xs:attribute fixed="IPv6-GATEWAY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_DNSName">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="\\S*"/>
                  <xs:attribute fixed="DNSName" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6FlowLabel">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9a-fA-F]{1,5}"/>
                  <xs:attribute fixed="IPv6FlowLabel" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-NSAP">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="40"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-NSAP" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-TSEL">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="8"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-TSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-SSEL">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-SSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-PSEL">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="16"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="OSI-PSEL" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Title">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9,]+"/>
                  <xs:attribute fixed="OSI-AP-Title" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AP-Invoke">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="[0-9]+"/>
                  <xs:attribute fixed="OSI-AP-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Qualifier">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="[0-9]+"/>
                  <xs:attribute fixed="OSI-AE-Qualifier" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_OSI-AE-Invoke">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="5"/>
                  <xs:pattern value="[0-9]+"/>
                  <xs:attribute fixed="OSI-AE-Invoke" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MAC-Address">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern
                      value="[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}"/>
                  <xs:attribute fixed="MAC-Address" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_APPID">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9A-F]{4}"/>
                  <xs:attribute fixed="APPID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-PRIORITY">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-7]"/>
                  <xs:attribute fixed="VLAN-PRIORITY" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_VLAN-ID">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="[0-9A-F]{3}"/>
                  <xs:attribute fixed="VLAN-ID" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType abstract="true" name="tP_Port">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern value="0"/>
                  <xs:pattern value="[1-9][0-9]{0,3}"/>
                  <xs:pattern value="[1-5][0-9]{4,4}"/>
                  <xs:pattern value="6[0-4][0-9]{3,3}"/>
                  <xs:pattern value="65[0-4][0-9]{2,2}"/>
                  <xs:pattern value="655[0-2][0-9]"/>
                  <xs:pattern value="6553[0-5]"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_SNTP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="SNTP-Port" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_MMS-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="MMS-Port" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_UDP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="IP-UDP-PORT" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_TCP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP_Port">
                  <xs:attribute fixed="IP-TCP-PORT" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6ClassOfTraffic">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="Values0-255" value="[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"/>
                  <xs:attribute fixed="IPv6ClassOfTraffic" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_C37-118-IP-Port">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:pattern id="Values1025-65535"
                      value="102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]"/>
                  <xs:attribute fixed="C37-118-IP-Port" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IPv6-IGMPv3Src">
          <xs:simpleContent>
              <xs:restriction base="tP_IPv6base">
                  <xs:attribute fixed="IPv6-IGMPv3Src" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-IGMPv3Src">
          <xs:simpleContent>
              <xs:restriction base="tP_IPbase">
                  <xs:attribute fixed="IP-IGMPv3Src" form="unqualified" name="type" type="tPTypeEnum"
                      use="required"/>
              </xs:restriction>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tP_IP-ClassOfTraffic">
          <xs:simpleContent>
              <xs:restriction base="tP">
                  <xs:maxLength value="2"/>
                  <xs:pattern value="[0-9A-F]+"/>
                  <xs:attribute fixed="IP-ClassOfTraffic" form="unqualified" name="type"
                      type="tPTypeEnum" use="required"/>
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
          <xs:documentation xml:lang="en">    COPYRIGHT (c) IEC, 2018. This version of this XSD is
              part of IEC 61850-6:2009/AMD1:2018; see the IEC 61850-6:2009/AMD1:2018 for full legal
              notices. In case of any differences between the here-below code and the IEC published
              content, the here-below definition supersedes the IEC publication; it may contain
              updates. See history files. The whole document has to be taken into account to have a
              full description of this code component.    See www.iec.ch/CCv1 for copyright details.   </xs:documentation>
          <xs:documentation xml:lang="en">    SCL schema version "2007" revision "B" release 4,  for
              IEC 61850-6 Ed. 2.1. 2018-01-22    Supersedes "2007B3".   </xs:documentation>
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
                  <xs:attribute default="0" form="unqualified" name="count" type="tDACount"
                      use="optional"/>
                  <xs:attribute default="false" form="unqualified" name="valImport" type="xs:boolean"
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
                  <xs:attribute form="unqualified" name="name" type="tDataName" use="required"/>
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
                      <xs:element form="qualified" name="DA" type="tDA">
                          <xs:unique name="uniqueProtNsInDA">
                              <xs:selector xpath="scl:ProtNs"/>
                              <xs:field xpath="@type"/>
                              <xs:field xpath="."/>
                          </xs:unique>
                      </xs:element>
                  </xs:choice>
                  <xs:attribute default="" form="unqualified" name="iedType" type="tAnyName"
                      use="optional"/>
                  <xs:attribute form="unqualified" name="cdc" type="tCDCEnum" use="required"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tSDO">
          <xs:complexContent>
              <xs:extension base="tUnNaming">
                  <xs:attribute form="unqualified" name="name" type="tSubDataName" use="required"/>
                  <xs:attribute form="unqualified" name="type" type="tName" use="required"/>
                  <xs:attribute default="0" form="unqualified" name="count" type="tSDOCount"
                      use="optional"/>
              </xs:extension>
          </xs:complexContent>
      </xs:complexType>
      <xs:complexType name="tDA">
          <xs:complexContent>
              <xs:extension base="tAbstractDataAttribute">
                  <xs:sequence>
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ProtNs"
                          type="tProtNs"/>
                  </xs:sequence>
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
                      <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="ProtNs"
                          type="tProtNs"/>
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
      <xs:complexType name="tProtNs">
          <xs:simpleContent>
              <xs:extension base="tNamespaceName">
                  <xs:attribute default="8-MMS" form="unqualified" name="type" use="optional">
                      <xs:simpleType>
                          <xs:restriction base="xs:normalizedString">
                              <xs:minLength value="1"/>
                          </xs:restriction>
                      </xs:simpleType>
                  </xs:attribute>
              </xs:extension>
          </xs:simpleContent>
      </xs:complexType>
      <xs:complexType name="tEnumVal">
          <xs:simpleContent>
              <xs:extension base="tEnumStringValue">
                  <xs:attribute form="unqualified" name="ord" type="xs:int" use="required"/>
                  <xs:attributeGroup ref="agDesc"/>
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
                  <xs:unique name="uniqueProtNs">
                      <xs:selector xpath="scl:ProtNs"/>
                      <xs:field xpath="@type"/>
                      <xs:field xpath="."/>
                  </xs:unique>
              </xs:element>
              <xs:element form="qualified" maxOccurs="unbounded" minOccurs="0" name="EnumType"
                  type="tEnumType">
                  <xs:unique name="uniqueOrdInEnumType">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="@ord"/>
                  </xs:unique>
                  <xs:unique name="uniqueEnumValue">
                      <xs:selector xpath="scl:EnumVal"/>
                      <xs:field xpath="."/>
                  </xs:unique>
              </xs:element>
          </xs:sequence>
      </xs:complexType>
      <xs:element name="DataTypeTemplates" type="tDataTypeTemplates">
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
          <xs:unique name="uniqueDTT_ID">
              <xs:selector xpath="*"/>
              <xs:field xpath="@id"/>
          </xs:unique>
          <xs:key name="EnumTypeDATypeKey">
              <xs:selector xpath="scl:DAType | scl:EnumType"/>
              <xs:field xpath="@id"/>
          </xs:key>
          <xs:keyref name="ref2EnumTypeDAType" refer="scl:EnumTypeDATypeKey">
              <xs:selector xpath="scl:DOType/scl:DA | scl:DAType/scl:BDA"/>
              <xs:field xpath="@type"/>
          </xs:keyref>
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
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Line"/>
                          <xs:element maxOccurs="unbounded" minOccurs="0" ref="Process"/>
                      </xs:sequence>
                      <xs:attribute fixed="2007" name="version" type="tSclVersion" use="required"/>
                      <xs:attribute fixed="B" name="revision" type="tSclRevision" use="required"/>
                      <xs:attribute fixed="4" name="release" type="tSclRelease" use="required"/>
                  </xs:extension>
              </xs:complexContent>
          </xs:complexType>
          <xs:key name="SubstationKey">
              <xs:selector xpath="./scl:Substation | ./scl:Process | ./scl:Line"/>
              <xs:field xpath="@name"/>
          </xs:key>
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
          <xs:keyref name="refConnectedAP2IED" refer="IEDKey">
              <xs:selector xpath="./scl:Communication/scl:SubNetwork/scl:ConnectedAP"/>
              <xs:field xpath="@iedName"/>
          </xs:keyref>
          <xs:keyref name="ref2SubstationFromTerminal" refer="scl:SubstationKey">
              <xs:selector xpath=".//scl:Terminal"/>
              <xs:field xpath="@substationName"/>
          </xs:keyref>
          <xs:key name="ConnectivityNodeKey">
              <xs:selector xpath=".//scl:ConnectivityNode"/>
              <xs:field xpath="@pathName"/>
          </xs:key>
      </xs:element>
  </xs:schema>
  `