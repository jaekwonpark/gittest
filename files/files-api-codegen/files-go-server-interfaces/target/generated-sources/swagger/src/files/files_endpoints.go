/*
 * Generated file files_endpoints.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package files

import (
  "net/http"
)

type FilesApi interface {

    // Endpoint path: /files/v4.r0.a1/file_servers/file_servers
    // Description: Create file servers
    // HttpMethod: Post
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    CreateFileServers(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/{uuid}/mount_targets
    // Description: Create mount targets
    // HttpMethod: Post
    // Parameters
    //    Name: uuid, Type: string, Description: The uuid of the File Server
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    CreateMountTargets(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}
    // Description: Delete file server entity.
    // HttpMethod: Delete
    // Parameters
    //    Name: file_server_uuid, Type: string, Description: The uuid of the File server uuid
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    DeleteFileServer(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}
    // Description: Delete mount_target entity.
    // HttpMethod: Delete
    // Parameters
    //    Name: uuid, Type: string, Description: The uuid of the File Server
    //    Name: mount_target_uuid, Type: string, Description: The uuid of the Mount Target
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    DeleteMountTarget(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/file_servers
    // Description: Returns a list of all file servers 
    // HttpMethod: Get
    // Parameters
    //    Name: uuid, Type: string, Description: The uuid of the File Server
    //    Name: $sort, Type: array, Description: The sort criteria used to order the results.  Multiple values can be specified as a pipe-separated list. Must map to a list of field names defined in the DTO.  Unknown fields are ignored.  Defaults to sort by name if this query parameter is not specified. 
    //    Name: $page, Type: int64, Description: The start index of the records to return.  Defaults to 0 
    //    Name: $limit, Type: int64, Description: The number of records to return.  Defaults to 100, max of 500 
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    GetAllFileServers(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/{uuid}/mount_targets
    // Description: Returns a list of all mount targets 
    // HttpMethod: Get
    // Parameters
    //    Name: uuid, Type: string, Description: The uuid of the File Server
    //    Name: $sort, Type: array, Description: The sort criteria used to order the results.  Multiple values can be specified as a pipe-separated list. Must map to a list of field names defined in the DTO.  Unknown fields are ignored.  Defaults to sort by name if this query parameter is not specified. 
    //    Name: $page, Type: int64, Description: The start index of the records to return.  Defaults to 0 
    //    Name: $limit, Type: int64, Description: The number of records to return.  Defaults to 100, max of 500 
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    GetAllMountTargets(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}
    // Description: Returns details for a single file server identified by {id}
    // HttpMethod: Get
    // Parameters
    //    Name: file_server_uuid, Type: string, Description: The uuid of the file server
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    GetFileServerByUuid(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}
    // Description: Returns details for a single mount_target identified by {id}
    // HttpMethod: Get
    // Parameters
    //    Name: uuid, Type: string, Description: The uuid of the File Server
    //    Name: mount_target_uuid, Type: string, Description: The uuid of the Mount Target
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    GetMountTargetByUuid(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/file_servers
    // Description: Update file servers
    // HttpMethod: Put
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    UpdateFileServers(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /files/v4.r0.a1/file_servers/{uuid}/mount_targets
    // Description: Update mount targets
    // HttpMethod: Put
    // Parameters
    //    Name: uuid, Type: string, Description: The uuid of the File Server
    //
    //
    // RETURN TYPE:   - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    UpdateMountTargets(w http.ResponseWriter, r *http.Request)


}

type FilesApiImplWrapper struct {
  // create a binding to the actual interface implementation in the Init method
  // where this is used.
  svcImpl FilesApi
}

// CREATE IMPLEMENTATION BINDINGS TO ALL THE METHODS IN THE INTERFACE

func (serviceWrapper FilesApiImplWrapper) CreateFileServers(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.CreateFileServers(w, r)
}


func (serviceWrapper FilesApiImplWrapper) CreateMountTargets(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.CreateMountTargets(w, r)
}


func (serviceWrapper FilesApiImplWrapper) DeleteFileServer(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.DeleteFileServer(w, r)
}


func (serviceWrapper FilesApiImplWrapper) DeleteMountTarget(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.DeleteMountTarget(w, r)
}


func (serviceWrapper FilesApiImplWrapper) GetAllFileServers(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.GetAllFileServers(w, r)
}


func (serviceWrapper FilesApiImplWrapper) GetAllMountTargets(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.GetAllMountTargets(w, r)
}


func (serviceWrapper FilesApiImplWrapper) GetFileServerByUuid(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.GetFileServerByUuid(w, r)
}


func (serviceWrapper FilesApiImplWrapper) GetMountTargetByUuid(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.GetMountTargetByUuid(w, r)
}


func (serviceWrapper FilesApiImplWrapper) UpdateFileServers(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.UpdateFileServers(w, r)
}


func (serviceWrapper FilesApiImplWrapper) UpdateMountTargets(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.UpdateMountTargets(w, r)
}


func (serviceWrapper *FilesApiImplWrapper) SetServiceImplementation(apiImplementation interface{}) {
  val := apiImplementation.(FilesApi)
  serviceWrapper.svcImpl = val
}

func (serviceWrapper FilesApiImplWrapper) GetServiceImplementation() interface{} {
   return serviceWrapper.svcImpl
}


