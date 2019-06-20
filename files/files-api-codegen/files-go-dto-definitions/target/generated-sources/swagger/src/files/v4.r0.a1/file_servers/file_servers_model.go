/*
 * Generated file files/v4.r0.a1/file_servers/file_servers_model.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package file_servers

import (
  "github.eng.nutanix.com/minerva/files/files-api-codegen/files-go-dto-definitions/target/generated-sources/swagger/src/common/v5.r0.a1/response"
)



type AccessType int

const(
    READ_WRITE AccessType = 0
    READ_ONLY AccessType = 1
    NO_ACCESS AccessType = 2
    ACCESSTYPE_UNKNOWN AccessType = 3
)

// returns the name of the enum given an ordinal number
func (e AccessType) name(index int) string {
    names := [...]string {
        "READ_WRITE",
        "READ_ONLY",
        "NO_ACCESS",
        "ACCESSTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e AccessType) index(name string) AccessType {
   names := [...]string {
    "READ_WRITE",
    "READ_ONLY",
    "NO_ACCESS",
    "ACCESSTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return AccessType(idx)
     }
   }

   return ACCESSTYPE_UNKNOWN
}



type AccountType int

const(
    USER AccountType = 0
    GROUP AccountType = 1
    UNKNOWN AccountType = 2
    ACCOUNTTYPE_UNKNOWN AccountType = 3
)

// returns the name of the enum given an ordinal number
func (e AccountType) name(index int) string {
    names := [...]string {
        "USER",
        "GROUP",
        "UNKNOWN",
        "ACCOUNTTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e AccountType) index(name string) AccountType {
   names := [...]string {
    "USER",
    "GROUP",
    "UNKNOWN",
    "ACCOUNTTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return AccountType(idx)
     }
   }

   return ACCOUNTTYPE_UNKNOWN
}




type AnonymousIdentifier struct {

    gid string

    objectType string

    tenantId string

    uid string


}


type AuthenticationType int

const(
    LOCAL AuthenticationType = 0
    DIRECTORY_SERVICE AuthenticationType = 1
    AUTHENTICATIONTYPE_UNKNOWN AuthenticationType = 2
)

// returns the name of the enum given an ordinal number
func (e AuthenticationType) name(index int) string {
    names := [...]string {
        "LOCAL",
        "DIRECTORY_SERVICE",
        "AUTHENTICATIONTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e AuthenticationType) index(name string) AuthenticationType {
   names := [...]string {
    "LOCAL",
    "DIRECTORY_SERVICE",
    "AUTHENTICATIONTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return AuthenticationType(idx)
     }
   }

   return AUTHENTICATIONTYPE_UNKNOWN
}




type ClientAccessType struct {

    clientExceptionList [] ClientException

    defaultAccessType AccessType

    objectType string

    tenantId string


}



type ClientException struct {

    noAccessList string

    objectType string

    readOnlyAccessList string

    readWriteAccessList string

    tenantId string


}


type EnforcementType int

const(
    HARD EnforcementType = 0
    SOFT EnforcementType = 1
    ENFORCEMENTTYPE_UNKNOWN EnforcementType = 2
)

// returns the name of the enum given an ordinal number
func (e EnforcementType) name(index int) string {
    names := [...]string {
        "HARD",
        "SOFT",
        "ENFORCEMENTTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e EnforcementType) index(name string) EnforcementType {
   names := [...]string {
    "HARD",
    "SOFT",
    "ENFORCEMENTTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return EnforcementType(idx)
     }
   }

   return ENFORCEMENTTYPE_UNKNOWN
}




type FileServer struct {

    config FileServerConfig

    description string

    displayName string

    extId string

    links [] response.ApiLink

    name string

    objectType string

    tenantId string


}



type FileServerConfig struct {

    continerUuid string

    description string

    dnsDomainNme string

    dnsServerIpAddresses [] string

    externalIpAddresses [] string

    externalNetworks [] Network

    externalVirtualNetworkUuids [] string

    internalNetwork Network

    internalVirtualNetworkUuid string

    name string

    ntpServers [] string

    numHomeShares int32

    numNestedShares int32

    numShares int32

    objectType string

    pdStatus bool

    protectedDomainState bool

    protectionDomainName string

    tenantId string

    upgrdeInProgress bool

    uuid string

    version string


}



type MountTarget struct {

    config MountTargetConfig

    description string

    displayName string

    extId string

    links [] response.ApiLink

    name string

    objectType string

    tenantId string


}



type MountTargetConfig struct {

    enableAccessBasedEnumeration bool

    fileServer FileServer

    maxSizeGib int64

    mountTargetType MountTargetType

    nestedPath string

    objectType string

    protocol Protocol

    quotaConfigList [] QuotaConfig

    snapshotConfigList [] SnapshotConfig

    tenantId string

    version string

    virusScanPolicyConfigList [] VirusScanPolicyConfig


}


type MountTargetType int

const(
    HOMES MountTargetType = 0
    GENERAL MountTargetType = 1
    VIRTUAL MountTargetType = 2
    MOUNTTARGETTYPE_UNKNOWN MountTargetType = 3
)

// returns the name of the enum given an ordinal number
func (e MountTargetType) name(index int) string {
    names := [...]string {
        "HOMES",
        "GENERAL",
        "VIRTUAL",
        "MOUNTTARGETTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e MountTargetType) index(name string) MountTargetType {
   names := [...]string {
    "HOMES",
    "GENERAL",
    "VIRTUAL",
    "MOUNTTARGETTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return MountTargetType(idx)
     }
   }

   return MOUNTTARGETTYPE_UNKNOWN
}




type Network struct {

    defaultGateway string

    externalVirtualNetworkUuid string

    internalVirtualNetworkUuid string

    isInternalNetwork bool

    name string

    networkAddress string

    objectType string

    subnetMask string

    tenantId string

    uuid string


}



type NfsProtocolConfig struct {

    anonymousIdentifier AnonymousIdentifier

    authenticationType AuthenticationType

    clientAccessType ClientAccessType

    objectType string

    squashType SquashType

    tenantId string


}



type NonNativeProtocolConfig struct {

    enableCasesensitiveNamespace bool

    enableConcurrentReads bool

    enableSimulteneousAccess bool

    enableSymlinkCreation bool

    objectType string

    tenantId string


}



type Protocol struct {

    objectType string

    tenantId string


}



type ProtocolConfig struct {

    nfsProtocolConfig NfsProtocolConfig

    nonNativeProtocolConfig NonNativeProtocolConfig

    objectType string

    smbProtocolConfig SmbProtocolConfig

    tenantId string


}


type ProtocolType int

const(
    SMB ProtocolType = 0
    NFS ProtocolType = 1
    BOTH ProtocolType = 2
    PROTOCOLTYPE_UNKNOWN ProtocolType = 3
)

// returns the name of the enum given an ordinal number
func (e ProtocolType) name(index int) string {
    names := [...]string {
        "SMB",
        "NFS",
        "BOTH",
        "PROTOCOLTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e ProtocolType) index(name string) ProtocolType {
   names := [...]string {
    "SMB",
    "NFS",
    "BOTH",
    "PROTOCOLTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return ProtocolType(idx)
     }
   }

   return PROTOCOLTYPE_UNKNOWN
}




type QuotaConfig struct {

    description string

    displayName string

    enableNotification bool

    enforcementType EnforcementType

    extId string

    links [] response.ApiLink

    name string

    objectType string

    recipientList [] string

    sizeGib int32

    tenantId string

    userOrGroupAccount UserOrGroupAccount


}



type SmbProtocolConfig struct {

    enablePreviousVersion bool

    objectType string

    tenantId string


}



type SnapshotConfig struct {

    createTime int32

    description string

    displayName string

    extId string

    fileServer FileServer

    id string

    links [] response.ApiLink

    name string

    objectType string

    reclaimableSpaceBytes int32

    snapshotCreator SnapshotCreator

    tenantId string

    totalSpaceBytes int32


}


type SnapshotCreator int

const(
    SSR_SNAPSHOT SnapshotCreator = 0
    BACKUP_SNAPSHOT SnapshotCreator = 1
    SNAPSHOTCREATOR_UNKNOWN SnapshotCreator = 2
)

// returns the name of the enum given an ordinal number
func (e SnapshotCreator) name(index int) string {
    names := [...]string {
        "SSR_SNAPSHOT",
        "BACKUP_SNAPSHOT",
        "SNAPSHOTCREATOR_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e SnapshotCreator) index(name string) SnapshotCreator {
   names := [...]string {
    "SSR_SNAPSHOT",
    "BACKUP_SNAPSHOT",
    "SNAPSHOTCREATOR_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return SnapshotCreator(idx)
     }
   }

   return SNAPSHOTCREATOR_UNKNOWN
}



type SquashType int

const(
    ROOT_SQUASH SquashType = 0
    ALL_SQUASH SquashType = 1
    NONE SquashType = 2
    SQUASHTYPE_UNKNOWN SquashType = 3
)

// returns the name of the enum given an ordinal number
func (e SquashType) name(index int) string {
    names := [...]string {
        "ROOT_SQUASH",
        "ALL_SQUASH",
        "NONE",
        "SQUASHTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e SquashType) index(name string) SquashType {
   names := [...]string {
    "ROOT_SQUASH",
    "ALL_SQUASH",
    "NONE",
    "SQUASHTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return SquashType(idx)
     }
   }

   return SQUASHTYPE_UNKNOWN
}




type UserOrGroupAccount struct {

    accountName string

    accountType AccountType

    objectType string

    tenantId string


}



type VirusScanPolicyConfig struct {

    description string

    displayName string

    enableAntivirus bool

    enableBlockAccessFile bool

    enableScanOnRead bool

    enableScanOnWrite bool

    extId string

    fileSizeExclusion int32

    fileTypeExclusionList [] string

    links [] response.ApiLink

    name string

    objectType string

    scanTimeoutIntervalInSecs int32

    tenantId string


}


