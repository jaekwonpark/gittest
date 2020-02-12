
/*
 * Generated file file_servers-clientsdk-1.0.0-SNAPSHOT.js.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c)  Nutanix Inc.  All rights reserved
 *
 */

"use strict";


    
    export const AccessType = Object.freeze({
        READ_WRITE : Symbol("READ_WRITE"),
        READ_ONLY : Symbol("READ_ONLY"),
        NO_ACCESS : Symbol("NO_ACCESS"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
    
    export const AccountType = Object.freeze({
        USER : Symbol("USER"),
        GROUP : Symbol("GROUP"),
        UNKNOWN : Symbol("UNKNOWN"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class AnonymousIdentifier extends AbstractModel {


    constructor() {
      super();

          this.getUid = function() {
            return this.uid;
          };

          this.setUid = function(prop) {
            this.uid = prop;
          };
          this.getGid = function() {
            return this.gid;
          };

          this.setGid = function(prop) {
            this.gid = prop;
          };
    }

    static from(json) {
      let ret = new AnonymousIdentifier();
      ret.apply(ret, super.from(json));

      ret.uid = json["uid"];
      ret.gid = json["gid"];

      return ret;
    }
  };
    
    export const AuthenticationType = Object.freeze({
        LOCAL : Symbol("LOCAL"),
        DIRECTORY_SERVICE : Symbol("DIRECTORY_SERVICE"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class ClientAccessType extends AbstractModel {


    constructor() {
      super();

          this.getDefaultAccessType = function() {
            return this.defaultAccessType;
          };

          this.setDefaultAccessType = function(prop) {
            this.defaultAccessType = prop;
          };
          this.getClientExceptionList = function() {
            return this.clientExceptionList;
          };

          this.setClientExceptionList = function(prop) {
            this.clientExceptionList = prop;
          };
    }

    static from(json) {
      let ret = new ClientAccessType();
      ret.apply(ret, super.from(json));

      ret.defaultAccessType = json["defaultAccessType"];
      ret.clientExceptionList = json["clientExceptionList"];

      return ret;
    }
  };
  

  export class ClientException extends AbstractModel {


    constructor() {
      super();

          this.getReadOnlyAccessList = function() {
            return this.readOnlyAccessList;
          };

          this.setReadOnlyAccessList = function(prop) {
            this.readOnlyAccessList = prop;
          };
          this.getReadWriteAccessList = function() {
            return this.readWriteAccessList;
          };

          this.setReadWriteAccessList = function(prop) {
            this.readWriteAccessList = prop;
          };
          this.getNoAccessList = function() {
            return this.noAccessList;
          };

          this.setNoAccessList = function(prop) {
            this.noAccessList = prop;
          };
    }

    static from(json) {
      let ret = new ClientException();
      ret.apply(ret, super.from(json));

      ret.readOnlyAccessList = json["readOnlyAccessList"];
      ret.readWriteAccessList = json["readWriteAccessList"];
      ret.noAccessList = json["noAccessList"];

      return ret;
    }
  };
    
    export const EnforcementType = Object.freeze({
        HARD : Symbol("HARD"),
        SOFT : Symbol("SOFT"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class FileServer extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getConfig = function() {
            return this.config;
          };

          this.setConfig = function(prop) {
            this.config = prop;
          };
    }

    static from(json) {
      let ret = new FileServer();
      ret.apply(ret, super.from(json));

      ret.config = json["config"];

      return ret;
    }
  };
  

  export class FileServerConfig extends AbstractModel {


    constructor() {
      super();

          this.getUuid = function() {
            return this.uuid;
          };

          this.setUuid = function(prop) {
            this.uuid = prop;
          };
          this.getName = function() {
            return this.name;
          };

          this.setName = function(prop) {
            this.name = prop;
          };
          this.getDescription = function() {
            return this.description;
          };

          this.setDescription = function(prop) {
            this.description = prop;
          };
          this.getDnsDomainNme = function() {
            return this.dnsDomainNme;
          };

          this.setDnsDomainNme = function(prop) {
            this.dnsDomainNme = prop;
          };
          this.getContinerUuid = function() {
            return this.continerUuid;
          };

          this.setContinerUuid = function(prop) {
            this.continerUuid = prop;
          };
          this.getDnsServerIpAddresses = function() {
            return this.dnsServerIpAddresses;
          };

          this.setDnsServerIpAddresses = function(prop) {
            this.dnsServerIpAddresses = prop;
          };
          this.getNtpServers = function() {
            return this.ntpServers;
          };

          this.setNtpServers = function(prop) {
            this.ntpServers = prop;
          };
          this.getInternalVirtualNetworkUuid = function() {
            return this.internalVirtualNetworkUuid;
          };

          this.setInternalVirtualNetworkUuid = function(prop) {
            this.internalVirtualNetworkUuid = prop;
          };
          this.getExternalVirtualNetworkUuids = function() {
            return this.externalVirtualNetworkUuids;
          };

          this.setExternalVirtualNetworkUuids = function(prop) {
            this.externalVirtualNetworkUuids = prop;
          };
          this.getInternalNetwork = function() {
            return this.internalNetwork;
          };

          this.setInternalNetwork = function(prop) {
            this.internalNetwork = prop;
          };
          this.getExternalNetworks = function() {
            return this.externalNetworks;
          };

          this.setExternalNetworks = function(prop) {
            this.externalNetworks = prop;
          };
          this.getNumShares = function() {
            return this.numShares;
          };

          this.setNumShares = function(prop) {
            this.numShares = prop;
          };
          this.getNumHomeShares = function() {
            return this.numHomeShares;
          };

          this.setNumHomeShares = function(prop) {
            this.numHomeShares = prop;
          };
          this.getNumNestedShares = function() {
            return this.numNestedShares;
          };

          this.setNumNestedShares = function(prop) {
            this.numNestedShares = prop;
          };
          this.getExternalIpAddresses = function() {
            return this.externalIpAddresses;
          };

          this.setExternalIpAddresses = function(prop) {
            this.externalIpAddresses = prop;
          };
          this.getVersion = function() {
            return this.version;
          };

          this.setVersion = function(prop) {
            this.version = prop;
          };
          this.getUpgrdeInProgress = function() {
            return this.upgrdeInProgress;
          };

          this.setUpgrdeInProgress = function(prop) {
            this.upgrdeInProgress = prop;
          };
          this.getProtectedDomainState = function() {
            return this.protectedDomainState;
          };

          this.setProtectedDomainState = function(prop) {
            this.protectedDomainState = prop;
          };
          this.getPdStatus = function() {
            return this.pdStatus;
          };

          this.setPdStatus = function(prop) {
            this.pdStatus = prop;
          };
          this.getProtectionDomainName = function() {
            return this.protectionDomainName;
          };

          this.setProtectionDomainName = function(prop) {
            this.protectionDomainName = prop;
          };
    }

    static from(json) {
      let ret = new FileServerConfig();
      ret.apply(ret, super.from(json));

      ret.uuid = json["uuid"];
      ret.name = json["name"];
      ret.description = json["description"];
      ret.dnsDomainNme = json["dnsDomainNme"];
      ret.continerUuid = json["continerUuid"];
      ret.dnsServerIpAddresses = json["dnsServerIpAddresses"];
      ret.ntpServers = json["ntpServers"];
      ret.internalVirtualNetworkUuid = json["internalVirtualNetworkUuid"];
      ret.externalVirtualNetworkUuids = json["externalVirtualNetworkUuids"];
      ret.internalNetwork = json["internalNetwork"];
      ret.externalNetworks = json["externalNetworks"];
      ret.numShares = json["numShares"];
      ret.numHomeShares = json["numHomeShares"];
      ret.numNestedShares = json["numNestedShares"];
      ret.externalIpAddresses = json["externalIpAddresses"];
      ret.version = json["version"];
      ret.upgrdeInProgress = json["upgrdeInProgress"];
      ret.protectedDomainState = json["protectedDomainState"];
      ret.pdStatus = json["pdStatus"];
      ret.protectionDomainName = json["protectionDomainName"];

      return ret;
    }
  };
  

  export class MountTarget extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getConfig = function() {
            return this.config;
          };

          this.setConfig = function(prop) {
            this.config = prop;
          };
    }

    static from(json) {
      let ret = new MountTarget();
      ret.apply(ret, super.from(json));

      ret.config = json["config"];

      return ret;
    }
  };
  

  export class MountTargetConfig extends AbstractModel {


    constructor() {
      super();

          this.getFileServer = function() {
            return this.fileServer;
          };

          this.setFileServer = function(prop) {
            this.fileServer = prop;
          };
          this.getVersion = function() {
            return this.version;
          };

          this.setVersion = function(prop) {
            this.version = prop;
          };
          this.getEnableAccessBasedEnumeration = function() {
            return this.enableAccessBasedEnumeration;
          };

          this.setEnableAccessBasedEnumeration = function(prop) {
            this.enableAccessBasedEnumeration = prop;
          };
          this.getMaxSizeGib = function() {
            return this.maxSizeGib;
          };

          this.setMaxSizeGib = function(prop) {
            this.maxSizeGib = prop;
          };
          this.getMountTargetType = function() {
            return this.mountTargetType;
          };

          this.setMountTargetType = function(prop) {
            this.mountTargetType = prop;
          };
          this.getNestedPath = function() {
            return this.nestedPath;
          };

          this.setNestedPath = function(prop) {
            this.nestedPath = prop;
          };
          this.getProtocol = function() {
            return this.protocol;
          };

          this.setProtocol = function(prop) {
            this.protocol = prop;
          };
          this.getQuotaConfigList = function() {
            return this.quotaConfigList;
          };

          this.setQuotaConfigList = function(prop) {
            this.quotaConfigList = prop;
          };
          this.getVirusScanPolicyConfigList = function() {
            return this.virusScanPolicyConfigList;
          };

          this.setVirusScanPolicyConfigList = function(prop) {
            this.virusScanPolicyConfigList = prop;
          };
          this.getSnapshotConfigList = function() {
            return this.snapshotConfigList;
          };

          this.setSnapshotConfigList = function(prop) {
            this.snapshotConfigList = prop;
          };
    }

    static from(json) {
      let ret = new MountTargetConfig();
      ret.apply(ret, super.from(json));

      ret.fileServer = json["fileServer"];
      ret.version = json["version"];
      ret.enableAccessBasedEnumeration = json["enableAccessBasedEnumeration"];
      ret.maxSizeGib = json["maxSizeGib"];
      ret.mountTargetType = json["mountTargetType"];
      ret.nestedPath = json["nestedPath"];
      ret.protocol = json["protocol"];
      ret.quotaConfigList = json["quotaConfigList"];
      ret.virusScanPolicyConfigList = json["virusScanPolicyConfigList"];
      ret.snapshotConfigList = json["snapshotConfigList"];

      return ret;
    }
  };
    
    export const MountTargetType = Object.freeze({
        HOMES : Symbol("HOMES"),
        GENERAL : Symbol("GENERAL"),
        VIRTUAL : Symbol("VIRTUAL"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class Network extends AbstractModel {


    constructor() {
      super();

          this.getUuid = function() {
            return this.uuid;
          };

          this.setUuid = function(prop) {
            this.uuid = prop;
          };
          this.getName = function() {
            return this.name;
          };

          this.setName = function(prop) {
            this.name = prop;
          };
          this.getNetworkAddress = function() {
            return this.networkAddress;
          };

          this.setNetworkAddress = function(prop) {
            this.networkAddress = prop;
          };
          this.getInternalVirtualNetworkUuid = function() {
            return this.internalVirtualNetworkUuid;
          };

          this.setInternalVirtualNetworkUuid = function(prop) {
            this.internalVirtualNetworkUuid = prop;
          };
          this.getExternalVirtualNetworkUuid = function() {
            return this.externalVirtualNetworkUuid;
          };

          this.setExternalVirtualNetworkUuid = function(prop) {
            this.externalVirtualNetworkUuid = prop;
          };
          this.getIsInternalNetwork = function() {
            return this.isInternalNetwork;
          };

          this.setIsInternalNetwork = function(prop) {
            this.isInternalNetwork = prop;
          };
          this.getSubnetMask = function() {
            return this.subnetMask;
          };

          this.setSubnetMask = function(prop) {
            this.subnetMask = prop;
          };
          this.getDefaultGateway = function() {
            return this.defaultGateway;
          };

          this.setDefaultGateway = function(prop) {
            this.defaultGateway = prop;
          };
    }

    static from(json) {
      let ret = new Network();
      ret.apply(ret, super.from(json));

      ret.uuid = json["uuid"];
      ret.name = json["name"];
      ret.networkAddress = json["networkAddress"];
      ret.internalVirtualNetworkUuid = json["internalVirtualNetworkUuid"];
      ret.externalVirtualNetworkUuid = json["externalVirtualNetworkUuid"];
      ret.isInternalNetwork = json["isInternalNetwork"];
      ret.subnetMask = json["subnetMask"];
      ret.defaultGateway = json["defaultGateway"];

      return ret;
    }
  };
  

  export class NfsProtocolConfig extends AbstractModel {


    constructor() {
      super();

          this.getAuthenticationType = function() {
            return this.authenticationType;
          };

          this.setAuthenticationType = function(prop) {
            this.authenticationType = prop;
          };
          this.getClientAccessType = function() {
            return this.clientAccessType;
          };

          this.setClientAccessType = function(prop) {
            this.clientAccessType = prop;
          };
          this.getSquashType = function() {
            return this.squashType;
          };

          this.setSquashType = function(prop) {
            this.squashType = prop;
          };
          this.getAnonymousIdentifier = function() {
            return this.anonymousIdentifier;
          };

          this.setAnonymousIdentifier = function(prop) {
            this.anonymousIdentifier = prop;
          };
    }

    static from(json) {
      let ret = new NfsProtocolConfig();
      ret.apply(ret, super.from(json));

      ret.authenticationType = json["authenticationType"];
      ret.clientAccessType = json["clientAccessType"];
      ret.squashType = json["squashType"];
      ret.anonymousIdentifier = json["anonymousIdentifier"];

      return ret;
    }
  };
  

  export class NonNativeProtocolConfig extends AbstractModel {


    constructor() {
      super();

          this.getEnableConcurrentReads = function() {
            return this.enableConcurrentReads;
          };

          this.setEnableConcurrentReads = function(prop) {
            this.enableConcurrentReads = prop;
          };
          this.getEnableCasesensitiveNamespace = function() {
            return this.enableCasesensitiveNamespace;
          };

          this.setEnableCasesensitiveNamespace = function(prop) {
            this.enableCasesensitiveNamespace = prop;
          };
          this.getEnableSymlinkCreation = function() {
            return this.enableSymlinkCreation;
          };

          this.setEnableSymlinkCreation = function(prop) {
            this.enableSymlinkCreation = prop;
          };
          this.getEnableSimulteneousAccess = function() {
            return this.enableSimulteneousAccess;
          };

          this.setEnableSimulteneousAccess = function(prop) {
            this.enableSimulteneousAccess = prop;
          };
    }

    static from(json) {
      let ret = new NonNativeProtocolConfig();
      ret.apply(ret, super.from(json));

      ret.enableConcurrentReads = json["enableConcurrentReads"];
      ret.enableCasesensitiveNamespace = json["enableCasesensitiveNamespace"];
      ret.enableSymlinkCreation = json["enableSymlinkCreation"];
      ret.enableSimulteneousAccess = json["enableSimulteneousAccess"];

      return ret;
    }
  };
  

  export class Protocol extends AbstractModel {


    constructor() {
      super();

    }

    static from(json) {
      let ret = new Protocol();
      ret.apply(ret, super.from(json));


      return ret;
    }
  };
  

  export class ProtocolConfig extends AbstractModel {


    constructor() {
      super();

          this.getSmbProtocolConfig = function() {
            return this.smbProtocolConfig;
          };

          this.setSmbProtocolConfig = function(prop) {
            this.smbProtocolConfig = prop;
          };
          this.getNfsProtocolConfig = function() {
            return this.nfsProtocolConfig;
          };

          this.setNfsProtocolConfig = function(prop) {
            this.nfsProtocolConfig = prop;
          };
          this.getNonNativeProtocolConfig = function() {
            return this.nonNativeProtocolConfig;
          };

          this.setNonNativeProtocolConfig = function(prop) {
            this.nonNativeProtocolConfig = prop;
          };
    }

    static from(json) {
      let ret = new ProtocolConfig();
      ret.apply(ret, super.from(json));

      ret.smbProtocolConfig = json["smbProtocolConfig"];
      ret.nfsProtocolConfig = json["nfsProtocolConfig"];
      ret.nonNativeProtocolConfig = json["nonNativeProtocolConfig"];

      return ret;
    }
  };
    
    export const ProtocolType = Object.freeze({
        SMB : Symbol("SMB"),
        NFS : Symbol("NFS"),
        BOTH : Symbol("BOTH"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class QuotaConfig extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getSizeGib = function() {
            return this.sizeGib;
          };

          this.setSizeGib = function(prop) {
            this.sizeGib = prop;
          };
          this.getUserOrGroupAccount = function() {
            return this.userOrGroupAccount;
          };

          this.setUserOrGroupAccount = function(prop) {
            this.userOrGroupAccount = prop;
          };
          this.getEnforcementType = function() {
            return this.enforcementType;
          };

          this.setEnforcementType = function(prop) {
            this.enforcementType = prop;
          };
          this.getEnableNotification = function() {
            return this.enableNotification;
          };

          this.setEnableNotification = function(prop) {
            this.enableNotification = prop;
          };
          this.getRecipientList = function() {
            return this.recipientList;
          };

          this.setRecipientList = function(prop) {
            this.recipientList = prop;
          };
    }

    static from(json) {
      let ret = new QuotaConfig();
      ret.apply(ret, super.from(json));

      ret.sizeGib = json["sizeGib"];
      ret.userOrGroupAccount = json["userOrGroupAccount"];
      ret.enforcementType = json["enforcementType"];
      ret.enableNotification = json["enableNotification"];
      ret.recipientList = json["recipientList"];

      return ret;
    }
  };
  

  export class SmbProtocolConfig extends AbstractModel {


    constructor() {
      super();

          this.getEnablePreviousVersion = function() {
            return this.enablePreviousVersion;
          };

          this.setEnablePreviousVersion = function(prop) {
            this.enablePreviousVersion = prop;
          };
    }

    static from(json) {
      let ret = new SmbProtocolConfig();
      ret.apply(ret, super.from(json));

      ret.enablePreviousVersion = json["enablePreviousVersion"];

      return ret;
    }
  };
  

  export class SnapshotConfig extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getFileServer = function() {
            return this.fileServer;
          };

          this.setFileServer = function(prop) {
            this.fileServer = prop;
          };
          this.getId = function() {
            return this.id;
          };

          this.setId = function(prop) {
            this.id = prop;
          };
          this.getCreateTime = function() {
            return this.createTime;
          };

          this.setCreateTime = function(prop) {
            this.createTime = prop;
          };
          this.getTotalSpaceBytes = function() {
            return this.totalSpaceBytes;
          };

          this.setTotalSpaceBytes = function(prop) {
            this.totalSpaceBytes = prop;
          };
          this.getReclaimableSpaceBytes = function() {
            return this.reclaimableSpaceBytes;
          };

          this.setReclaimableSpaceBytes = function(prop) {
            this.reclaimableSpaceBytes = prop;
          };
          this.getSnapshotCreator = function() {
            return this.snapshotCreator;
          };

          this.setSnapshotCreator = function(prop) {
            this.snapshotCreator = prop;
          };
    }

    static from(json) {
      let ret = new SnapshotConfig();
      ret.apply(ret, super.from(json));

      ret.fileServer = json["fileServer"];
      ret.id = json["id"];
      ret.createTime = json["createTime"];
      ret.totalSpaceBytes = json["totalSpaceBytes"];
      ret.reclaimableSpaceBytes = json["reclaimableSpaceBytes"];
      ret.snapshotCreator = json["snapshotCreator"];

      return ret;
    }
  };
    
    export const SnapshotCreator = Object.freeze({
        SSR_SNAPSHOT : Symbol("SSR_SNAPSHOT"),
        BACKUP_SNAPSHOT : Symbol("BACKUP_SNAPSHOT"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
    
    export const SquashType = Object.freeze({
        ROOT_SQUASH : Symbol("ROOT_SQUASH"),
        ALL_SQUASH : Symbol("ALL_SQUASH"),
        NONE : Symbol("NONE"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class UserOrGroupAccount extends AbstractModel {


    constructor() {
      super();

          this.getAccountType = function() {
            return this.accountType;
          };

          this.setAccountType = function(prop) {
            this.accountType = prop;
          };
          this.getAccountName = function() {
            return this.accountName;
          };

          this.setAccountName = function(prop) {
            this.accountName = prop;
          };
    }

    static from(json) {
      let ret = new UserOrGroupAccount();
      ret.apply(ret, super.from(json));

      ret.accountType = json["accountType"];
      ret.accountName = json["accountName"];

      return ret;
    }
  };
  

  export class VirusScanPolicyConfig extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getScanTimeoutIntervalInSecs = function() {
            return this.scanTimeoutIntervalInSecs;
          };

          this.setScanTimeoutIntervalInSecs = function(prop) {
            this.scanTimeoutIntervalInSecs = prop;
          };
          this.getEnableScanOnWrite = function() {
            return this.enableScanOnWrite;
          };

          this.setEnableScanOnWrite = function(prop) {
            this.enableScanOnWrite = prop;
          };
          this.getEnableScanOnRead = function() {
            return this.enableScanOnRead;
          };

          this.setEnableScanOnRead = function(prop) {
            this.enableScanOnRead = prop;
          };
          this.getFileSizeExclusion = function() {
            return this.fileSizeExclusion;
          };

          this.setFileSizeExclusion = function(prop) {
            this.fileSizeExclusion = prop;
          };
          this.getEnableBlockAccessFile = function() {
            return this.enableBlockAccessFile;
          };

          this.setEnableBlockAccessFile = function(prop) {
            this.enableBlockAccessFile = prop;
          };
          this.getEnableAntivirus = function() {
            return this.enableAntivirus;
          };

          this.setEnableAntivirus = function(prop) {
            this.enableAntivirus = prop;
          };
          this.getFileTypeExclusionList = function() {
            return this.fileTypeExclusionList;
          };

          this.setFileTypeExclusionList = function(prop) {
            this.fileTypeExclusionList = prop;
          };
    }

    static from(json) {
      let ret = new VirusScanPolicyConfig();
      ret.apply(ret, super.from(json));

      ret.scanTimeoutIntervalInSecs = json["scanTimeoutIntervalInSecs"];
      ret.enableScanOnWrite = json["enableScanOnWrite"];
      ret.enableScanOnRead = json["enableScanOnRead"];
      ret.fileSizeExclusion = json["fileSizeExclusion"];
      ret.enableBlockAccessFile = json["enableBlockAccessFile"];
      ret.enableAntivirus = json["enableAntivirus"];
      ret.fileTypeExclusionList = json["fileTypeExclusionList"];

      return ret;
    }
  };
