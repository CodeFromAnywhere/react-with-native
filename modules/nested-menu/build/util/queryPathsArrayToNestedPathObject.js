"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPathsArrayToNestedPathObject = void 0;
var reduceQueryPathsRecursively_1 = require("./reduceQueryPathsRecursively");
/**
 Handy function to transform an array of `querypaths` into a nested menu, assuming you want to create a new sub-menu for every path

 May also work for relative filePaths
 
 Input:

 ["hello/world","hello/moon","hello/sun"]

 Output:

 {
  "hello":{
    "moon":null,
    "world":null,
    "sun":null
  }
 }

 */
var queryPathsArrayToNestedPathObject = function (queryPaths) {
    var nestedPathObject = (0, reduceQueryPathsRecursively_1.reduceQueryPathsRecursively)(queryPaths, {});
    return nestedPathObject;
};
exports.queryPathsArrayToNestedPathObject = queryPathsArrayToNestedPathObject;
//# sourceMappingURL=queryPathsArrayToNestedPathObject.js.map