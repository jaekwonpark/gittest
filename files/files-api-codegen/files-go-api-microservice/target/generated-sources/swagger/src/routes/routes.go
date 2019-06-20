/*
 * Generated file main.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package routes

import (
  "fmt"
  "net/http"
    "files"
    "namespace"
)

var filesApiImplWrapper = files.FilesApiImplWrapper{}
var namespaceApiImplWrapper = namespace.NamespaceApiImplWrapper{}

type implAccessor interface {
  GetServiceImplementation() interface{}
  SetServiceImplementation(impl interface{})
}

type HandlerImplType int
const (
  FILES_API_IMPL_WRAPPER HandlerImplType = 0
  NAMESPACE_API_IMPL_WRAPPER HandlerImplType = 1
)

var handlerImplName = map[HandlerImplType] string {
  FILES_API_IMPL_WRAPPER : "filesApiImplWrapper",
  NAMESPACE_API_IMPL_WRAPPER : "namespaceApiImplWrapper",
}

var handlerImplMap = map[HandlerImplType] implAccessor {
  FILES_API_IMPL_WRAPPER : &filesApiImplWrapper,
  NAMESPACE_API_IMPL_WRAPPER : &namespaceApiImplWrapper,
}

func HandlerMap() map[string] func(w http.ResponseWriter, r *http.Request) {
  var r = map[string] func(w http.ResponseWriter, r *http.Request) {
    "/api/common/unversioned.a1/api.info/namespaces/{id}" : namespaceApiImplWrapper.GetNamespaceById,
    "/api/common/unversioned.a1/api.info/namespaces" : namespaceApiImplWrapper.GetAllNamespaces,
    "/api/files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}" : filesApiImplWrapper.DeleteFileServer,
    "/api/files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}" : filesApiImplWrapper.GetFileServerByUuid,
    "/api/files/v4.r0.a1/file_servers/file_servers" : filesApiImplWrapper.CreateFileServers,
    "/api/files/v4.r0.a1/file_servers/file_servers" : filesApiImplWrapper.GetAllFileServers,
    "/api/files/v4.r0.a1/file_servers/file_servers" : filesApiImplWrapper.UpdateFileServers,
    "/api/files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}" : filesApiImplWrapper.DeleteMountTarget,
    "/api/files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}" : filesApiImplWrapper.GetMountTargetByUuid,
    "/api/files/v4.r0.a1/file_servers/{uuid}/mount_targets" : filesApiImplWrapper.CreateMountTargets,
    "/api/files/v4.r0.a1/file_servers/{uuid}/mount_targets" : filesApiImplWrapper.GetAllMountTargets,
    "/api/files/v4.r0.a1/file_servers/{uuid}/mount_targets" : filesApiImplWrapper.UpdateMountTargets,
  }
  return r
}

func ValidateReadinessToRun() {
  unimplementedInterfaces := make([] string, 0)

  for k := range handlerImplMap {
    if handlerImplMap[k].GetServiceImplementation() == nil {
      unimplementedInterfaces = append(unimplementedInterfaces, handlerImplName[k])
    }
  }
  if len(unimplementedInterfaces) > 0 {
    errMsg := fmt.Sprintf("The following interfaces have not been implemented:%v", unimplementedInterfaces)
    panic(errMsg)
  }
}

func SetServiceImplementation(implType HandlerImplType, impl interface{}) {
  handlerImplMap[implType].SetServiceImplementation(impl)
}