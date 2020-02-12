/*
 * Generated file common/unversioned.a1/api/info_model.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package api

import (
    import1 "common/unversioned.a1/data"
    import2 "common/v5.r0.a1/response"
)




type Namespace struct {

    categories [] import1.Category

    description string

    displayName string

    endpoints [] string

    extId string

    links [] import2.ApiLink

    modelDependencies [] string

    models [] string

    name string

    objectType string

    tenantId string

    version string

    versionType VersionType


}


type VersionType int

const(
    ALPHA VersionType = 0
    BETA VersionType = 1
    RELEASED VersionType = 2
    VERSIONTYPE_UNKNOWN VersionType = 3
)

// returns the name of the enum given an ordinal number
func (e VersionType) name(index int) string {
    names := [...]string {
        "ALPHA",
        "BETA",
        "RELEASED",
        "VERSIONTYPE_UNKNOWN",
    }
    if index < 0 || index > len(names) {
       return "_UNKNOWN"
    }
    return names[index]
}

// returns the enum type given a string value
func (e VersionType) index(name string) VersionType {
   names := [...]string {
    "ALPHA",
    "BETA",
    "RELEASED",
    "VERSIONTYPE_UNKNOWN",
   }
   for idx := range names {
     if names[idx] == name {
        return VersionType(idx)
     }
   }

   return VERSIONTYPE_UNKNOWN
}



