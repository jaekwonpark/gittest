
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
public class VirusScanPolicyConfig extends common.unversioned.a1.data.types.ExternalizableAbstractModel{


    
    protected Integer scanTimeoutIntervalInSecs;
    
    protected Boolean enableScanOnWrite;
    
    protected Boolean enableScanOnRead;
    
    protected Integer fileSizeExclusion;
    
    protected Boolean enableBlockAccessFile;
    
    protected Boolean enableAntivirus;
    
    protected List<String> fileTypeExclusionList;

}
