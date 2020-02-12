
/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package common.unversioned.a1.api.info;

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
public class Namespace extends common.unversioned.a1.data.types.CategoryAwareModel{


    
    protected String name;
    
    protected String version;
    
    protected List<String> endpoints;
    
    protected List<String> models;
    
    protected List<String> modelDependencies;
    
    protected common.unversioned.a1.api.info.VersionType versionType;

}
