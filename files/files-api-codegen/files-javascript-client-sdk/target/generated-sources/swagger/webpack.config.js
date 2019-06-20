const path = require("path");

module.exports = {
  "mode": "development",
  "entry": {
    "Files": "/Users/mausumi.ranasin/workspace/main/.go/src/github.eng.nutanix.com/minerva/files/files-api-codegen/files-javascript-client-sdk/target/generated-sources/swagger/src/apis/files-clientsdk-endpoints-1.0.0-SNAPSHOT",
    "Namespace": "/Users/mausumi.ranasin/workspace/main/.go/src/github.eng.nutanix.com/minerva/files/files-api-codegen/files-javascript-client-sdk/target/generated-sources/swagger/src/apis/namespace-clientsdk-endpoints-1.0.0-SNAPSHOT"
    },
    "output": {
      "path": path.resolve("/Users/mausumi.ranasin/workspace/main/.go/src/github.eng.nutanix.com/minerva/files/files-api-codegen/files-javascript-client-sdk/target/generated-sources/swagger/generated-sources/dist"),
      "libraryTarget": "var",
      "library": ["Ntnx", "[name]"],
      "filename": "Ntnx-[name]-endpoints-1.0.0-SNAPSHOT.js"
  }
};
