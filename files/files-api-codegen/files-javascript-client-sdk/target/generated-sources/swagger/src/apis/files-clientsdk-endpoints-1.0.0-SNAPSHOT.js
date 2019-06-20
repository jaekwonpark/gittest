/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

"use strict";


import { FileServerListApiResponse, MountTargetListApiResponse, FileServerApiResponse, MountTargetApiResponse  }from "../models/common/v5.r0.a1/response/response-clientsdk-1.0.0-SNAPSHOT";

/**
 * The API endpoints only return promises that are a url to give consumers
 * the flexibility to use their own libraries.  In addition it will also
 * do validations (@todo)
 */
export class Api {

  static getUrl(uri) {
    return window.location.origin + "/" + uri;
  }


  static createFileServers() {
    const path = "/files/v4.r0.a1/file_servers/file_servers";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static createMountTargets(parameters) {
    const path = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static deleteFileServer(parameters) {
    const path = "/files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static deleteMountTarget(parameters) {
    const path = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static getAllFileServers(parameters) {
    const path = "/files/v4.r0.a1/file_servers/file_servers";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static getAllMountTargets(parameters) {
    const path = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static getFileServerByUuid(parameters) {
    const path = "/files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static getMountTargetByUuid(parameters) {
    const path = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static updateFileServers() {
    const path = "/files/v4.r0.a1/file_servers/file_servers";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }


  static updateMountTargets(parameters) {
    const path = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets";
    return new Promise((resolve, reject) => {
      // validate before resolving/rejecting.
      resolve(path);
    });
  }

}
