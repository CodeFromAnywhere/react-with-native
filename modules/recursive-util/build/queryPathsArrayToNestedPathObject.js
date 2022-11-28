"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.queryPathsArrayToNestedPathObject=void 0;var reduceQueryPathsRecursively_1=require("./reduceQueryPathsRecursively"),queryPathsArrayToNestedPathObject=function(e){return(0,reduceQueryPathsRecursively_1.reduceQueryPathsRecursively)(e,{})};
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

 */exports.queryPathsArrayToNestedPathObject=queryPathsArrayToNestedPathObject;
//# sourceMappingURL=queryPathsArrayToNestedPathObject.js.map