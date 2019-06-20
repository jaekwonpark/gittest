/*
 * Generated file namespace_endpoints.go.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package namespace

import (
  "net/http"
)

type NamespaceApi interface {

    // Endpoint path: /common/unversioned.a1/api.info/namespaces
    // Description: Returns a list of all namespaces in the API platform
    // HttpMethod: Get
    //
    // RETURN TYPE:  import1.NamespaceListApiResponse - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    GetAllNamespaces(w http.ResponseWriter, r *http.Request)

    // Endpoint path: /common/unversioned.a1/api.info/namespaces/{id}
    // Description: Delete a single namespace identified by {id}
    // HttpMethod: Delete
    // Parameters
    //    Name: id, Type: string, Description: The uuid of the namespaces
    //
    //
    // RETURN TYPE:  import1.NamespaceApiResponse - The returned response must be of this type
    // Implementation class must make sure that this is the case.  The prefix of the import is the prefix
    // associated with the import statement.  You will need to replace it with your own prefix.
    GetNamespaceById(w http.ResponseWriter, r *http.Request)


}

type NamespaceApiImplWrapper struct {
  // create a binding to the actual interface implementation in the Init method
  // where this is used.
  svcImpl NamespaceApi
}

// CREATE IMPLEMENTATION BINDINGS TO ALL THE METHODS IN THE INTERFACE

func (serviceWrapper NamespaceApiImplWrapper) GetAllNamespaces(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.GetAllNamespaces(w, r)
}


func (serviceWrapper NamespaceApiImplWrapper) GetNamespaceById(w http.ResponseWriter, r *http.Request) {
  serviceWrapper.svcImpl.GetNamespaceById(w, r)
}


func (serviceWrapper *NamespaceApiImplWrapper) SetServiceImplementation(apiImplementation interface{}) {
  val := apiImplementation.(NamespaceApi)
  serviceWrapper.svcImpl = val
}

func (serviceWrapper NamespaceApiImplWrapper) GetServiceImplementation() interface{} {
   return serviceWrapper.svcImpl
}


