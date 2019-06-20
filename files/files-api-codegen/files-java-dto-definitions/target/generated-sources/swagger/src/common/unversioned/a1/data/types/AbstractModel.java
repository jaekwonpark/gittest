
/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package common.unversioned.a1.data.types;

import lombok.Data;
import lombok.EqualsAndHashCode;

import lombok.Setter;
import lombok.AccessLevel;
import javax.validation.constraints.*;



@Data

/*
 *
 * The member variables of these DTO classes are made protected to allow
 * for subclassing and building utilities on top of the generated code.
 */
public class AbstractModel {

    @Setter(AccessLevel.PROTECTED)
    
    protected String objectType;
    @Setter(AccessLevel.PROTECTED)
    
    protected String tenantId;


}
