
/*
 * Generated file data.types-clientsdk-1.0.0-SNAPSHOT.js.  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c)  Nutanix Inc.  All rights reserved
 *
 */

"use strict";


  

  export class AbstractModel  {


    constructor() {
      

          this.getObjectType = function() {
            return this.objectType;
          };

          this.getTenantId = function() {
            return this.tenantId;
          };

    }

    static from(json) {
      let ret = new AbstractModel();
      

      ret.objectType = json["objectType"];
      ret.tenantId = json["tenantId"];

      return ret;
    }
  };
    
    export const BaseEnum = Object.freeze({
        $UNKNOWN : Symbol("$UNKNOWN")
  });
  

  export class MetadataAbstractModel extends AbstractModel {


    constructor() {
      super();

          this.getLinks = function() {
            return this.links;
          };

          this.setLinks = function(prop) {
            this.links = prop;
          };
    }

    static from(json) {
      let ret = new MetadataAbstractModel();
      ret.apply(ret, super.from(json));

      ret.links = json["links"];

      return ret;
    }
  };
  

  export class ExternalizableAbstractModel extends MetadataAbstractModel {


    constructor() {
      super();

          this.getExtId = function() {
            return this.extId;
          };

          this.setExtId = function(prop) {
            this.extId = prop;
          };
          this.getName = function() {
            return this.name;
          };

          this.setName = function(prop) {
            this.name = prop;
          };
          this.getDescription = function() {
            return this.description;
          };

          this.setDescription = function(prop) {
            this.description = prop;
          };
          this.getDisplayName = function() {
            return this.displayName;
          };

          this.setDisplayName = function(prop) {
            this.displayName = prop;
          };
    }

    static from(json) {
      let ret = new ExternalizableAbstractModel();
      ret.apply(ret, super.from(json));

      ret.extId = json["extId"];
      ret.name = json["name"];
      ret.description = json["description"];
      ret.displayName = json["displayName"];

      return ret;
    }
  };
  

  export class Category extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getName = function() {
            return this.name;
          };

          this.setName = function(prop) {
            this.name = prop;
          };
    }

    static from(json) {
      let ret = new Category();
      ret.apply(ret, super.from(json));

      ret.name = json["name"];

      return ret;
    }
  };
  

  export class CategoryAwareModel extends ExternalizableAbstractModel {


    constructor() {
      super();

          this.getCategories = function() {
            return this.categories;
          };

          this.setCategories = function(prop) {
            this.categories = prop;
          };
    }

    static from(json) {
      let ret = new CategoryAwareModel();
      ret.apply(ret, super.from(json));

      ret.categories = json["categories"];

      return ret;
    }
  };
