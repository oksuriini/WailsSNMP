package backend

import "github.com/gosnmp/gosnmp"

type SNMP struct {
	SwitchName      string
	IpAddress       string
	CommunityString string

	snmpObj gosnmp.GoSNMP
}

type Oid struct {
	Name     string
	Oid      string
	Iterable bool
}

func NewSwitchSNMP(name, communityString, ipAddress string) SNMP {
	return SNMP{
		SwitchName:      name,
		IpAddress:       ipAddress,
		CommunityString: communityString,

		snmpObj: createSnmpObj(communityString, ipAddress),
	}
}

func createSnmpObj(communityString, ipAddress string) gosnmp.GoSNMP {
	snmpObj := gosnmp.Default

	snmpObj.Target = ipAddress
	snmpObj.Community = communityString
	snmpObj.Version = gosnmp.Version2c
	snmpObj.Port = 161

	return *snmpObj
}
