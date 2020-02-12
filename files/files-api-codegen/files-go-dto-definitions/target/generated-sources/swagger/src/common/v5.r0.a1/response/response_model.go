/*
 * Generated file common/v5.r0.a1/response/response_model.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package response

import (
    import4 "common/unversioned.a1/api"
    import3 "files/v4.r0.a1/file_servers"
)




type FileServerApiResponse struct {

    data import3.FileServer

    metadata ApiResponseMetadata


}



type FileServerListApiResponse struct {

    data [] import3.FileServer

    metadata ApiResponseMetadata


}



type MountTargetApiResponse struct {

    data import3.MountTarget

    metadata ApiResponseMetadata


}



type MountTargetListApiResponse struct {

    data [] import3.MountTarget

    metadata ApiResponseMetadata


}



type NamespaceApiResponse struct {

    data import4.Namespace

    metadata ApiResponseMetadata


}



type NamespaceListApiResponse struct {

    data [] import4.Namespace

    metadata ApiResponseMetadata


}


