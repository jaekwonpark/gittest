
/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package common.v5.r0.a1.response;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.*;

import java.util.ArrayList;
import java.util.List;


@Data

/*
 *
 * The member variables of these DTO classes are made protected to allow
 * for subclassing and building utilities on top of the generated code.
 */
public class FileServerListApiResponse {


    
    protected List<files.v4.r0.a1.file_servers.FileServer> data;
    
    protected common.v5.r0.a1.response.types.ApiResponseMetadata metadata;

}
