
/*
 * Generated file api.info-clientsdk-1.0.0-SNAPSHOT.js.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c)  Nutanix Inc.  All rights reserved
 *
 */

"use strict";


  

  export class Namespace extends CategoryAwareModel {


    constructor() {
      super();

          this.getName = function() {
            return this.name;
          };

          this.setName = function(prop) {
            this.name = prop;
          };
          this.getVersion = function() {
            return this.version;
          };

          this.setVersion = function(prop) {
            this.version = prop;
          };
          this.getEndpoints = function() {
            return this.endpoints;
          };

          this.setEndpoints = function(prop) {
            this.endpoints = prop;
          };
          this.getModels = function() {
            return this.models;
          };

          this.setModels = function(prop) {
            this.models = prop;
          };
          this.getModelDependencies = function() {
            return this.modelDependencies;
          };

          this.setModelDependencies = function(prop) {
            this.modelDependencies = prop;
          };
          this.getVersionType = function() {
            return this.versionType;
          };

          this.setVersionType = function(prop) {
            this.versionType = prop;
          };
    }

    static from(json) {
      let ret = new Namespace();
      ret.apply(ret, super.from(json));

      ret.name = json["name"];
      ret.version = json["version"];
      ret.endpoints = json["endpoints"];
      ret.models = json["models"];
      ret.modelDependencies = json["modelDependencies"];
      ret.versionType = json["versionType"];

      return ret;
    }
  };
    
    export const VersionType = Object.freeze({
        ALPHA : Symbol("ALPHA"),
        BETA : Symbol("BETA"),
        RELEASED : Symbol("RELEASED"),
        $UNKNOWN : Symbol("$UNKNOWN")
  });
