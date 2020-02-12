/*
 * Generated file common/unversioned.a1/data/types_model.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package data

import (
    import2 "common/v5.r0.a1/response"
)




type AbstractModel struct {

    objectType string

    tenantId string


}


type BaseEnum int

const(
    BASEENUM_UNKNOWN BaseEnum = 0
)

// returns the name of the enum given an ordinal number
func (e BaseEnum) name(index int) string {
    names := [...]string {
        "BASEENUM_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e BaseEnum) index(name string) BaseEnum {
   names := [...]string {
    "BASEENUM_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return BaseEnum(idx)
     }
   }

   return BASEENUM_UNKNOWN
}




type Category struct {

    description string

    displayName string

    extId string

    links [] import2.ApiLink

    name string

    objectType string

    tenantId string


}



type CategoryAwareModel struct {

    categories [] Category

    description string

    displayName string

    extId string

    links [] import2.ApiLink

    name string

    objectType string

    tenantId string


}



type ExternalizableAbstractModel struct {

    description string

    displayName string

    extId string

    links [] import2.ApiLink

    name string

    objectType string

    tenantId string


}



type MetadataAbstractModel struct {

    links [] import2.ApiLink

    objectType string

    tenantId string


}


