/*
 * Generated file common/v5.r0.a1/response/types_model.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package response





type ApiLink struct {

    href string

    objectType string

    rel string

    tenantId string


}



type ApiResponseMetadata struct {

    links [] ApiLink

    objectType string

    tenantId string

    totalCount int64


}


