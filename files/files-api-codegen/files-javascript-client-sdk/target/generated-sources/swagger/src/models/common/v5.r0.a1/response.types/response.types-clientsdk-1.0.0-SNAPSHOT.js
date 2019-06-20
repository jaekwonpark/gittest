
/*
 * Generated file response.types-clientsdk-1.0.0-SNAPSHOT.js.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c)  Nutanix Inc.  All rights reserved
 *
 */

"use strict";


  

  export class ApiLink extends AbstractModel {


    constructor() {
      super();

          this.getHref = function() {
            return this.href;
          };

          this.setHref = function(prop) {
            this.href = prop;
          };
          this.getRel = function() {
            return this.rel;
          };

          this.setRel = function(prop) {
            this.rel = prop;
          };
    }

    static from(json) {
      let ret = new ApiLink();
      ret.apply(ret, super.from(json));

      ret.href = json["href"];
      ret.rel = json["rel"];

      return ret;
    }
  };
  

  export class ApiResponseMetadata extends MetadataAbstractModel {


    constructor() {
      super();

          this.getTotalCount = function() {
            return this.totalCount;
          };

          this.setTotalCount = function(prop) {
            this.totalCount = prop;
          };
    }

    static from(json) {
      let ret = new ApiResponseMetadata();
      ret.apply(ret, super.from(json));

      ret.totalCount = json["totalCount"];

      return ret;
    }
  };
