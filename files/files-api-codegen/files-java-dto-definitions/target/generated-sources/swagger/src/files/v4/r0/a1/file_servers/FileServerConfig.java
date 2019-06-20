
/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package files.v4.r0.a1.file_servers;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.*;

import java.util.ArrayList;
import java.util.List;


@Data
@EqualsAndHashCode(callSuper=true)

/*
 *
 * The member variables of these DTO classes are made protected to allow
 * for subclassing and building utilities on top of the generated code.
 */
public class FileServerConfig extends common.unversioned.a1.data.types.AbstractModel{


    
    protected String uuid;
    
    protected String name;
    
    protected String description;
    
    protected String dnsDomainNme;
    
    protected String continerUuid;
    
    protected List<String> dnsServerIpAddresses;
    
    protected List<String> ntpServers;
    
    protected String internalVirtualNetworkUuid;
    
    protected List<String> externalVirtualNetworkUuids;
    
    protected files.v4.r0.a1.file_servers.Network internalNetwork;
    
    protected List<files.v4.r0.a1.file_servers.Network> externalNetworks;
    
    protected Integer numShares;
    
    protected Integer numHomeShares;
    
    protected Integer numNestedShares;
    
    protected List<String> externalIpAddresses;
    
    protected String version;
    
    protected Boolean upgrdeInProgress;
    
    protected Boolean protectedDomainState;
    
    protected Boolean pdStatus;
    
    protected String protectionDomainName;

}
