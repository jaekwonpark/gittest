
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



@Data
@EqualsAndHashCode(callSuper=true)

/*
 *
 * The member variables of these DTO classes are made protected to allow
 * for subclassing and building utilities on top of the generated code.
 */
public class ProtocolConfig extends common.unversioned.a1.data.types.AbstractModel{


    
    protected files.v4.r0.a1.file_servers.SmbProtocolConfig smbProtocolConfig;
    
    protected files.v4.r0.a1.file_servers.NfsProtocolConfig nfsProtocolConfig;
    
    protected files.v4.r0.a1.file_servers.NonNativeProtocolConfig nonNativeProtocolConfig;

}
