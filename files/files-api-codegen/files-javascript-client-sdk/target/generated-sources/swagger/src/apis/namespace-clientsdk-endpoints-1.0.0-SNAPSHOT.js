/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

"use strict";


import { NamespaceListApiResponse, NamespaceApiResponse  }from "../models/common/v5.r0.a1/response/response-clientsdk-1.0.0-SNAPSHOT";

/**
 * The API endpoints only return promises that are a url to give consumers
 * the flexibility to use their own libraries.  In addition it will also
 * do validations (@todo)
 */
export class Api {

  static getUrl(uri) {
    return window.location.origin + "/" + uri;
  }


  static getAllNamespaces() {
    const path = "/common/unversioned.a1/api.info/namespaces";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static getNamespaceById(parameters) {
    const path = "/common/unversioned.a1/api.info/namespaces/{id}";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }

}
