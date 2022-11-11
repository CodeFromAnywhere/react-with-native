"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.queryPathsArrayToNestedPathObject=exports.reduceQueryPathsRecursively=void 0;var reduceQueryPathsRecursively=function(e,r){return e.reduce((function(r,t){var s,u,n=t.split("/"),a=n[0];
// Base case 1: if we already have it, skip it
if(Object.keys(r).includes(a))return r;var i=e.filter((function(e){return e.startsWith("".concat(a,"/"))})).map((function(e){return e.substring(a.length+1)}));
// Base case 2: if it's a leaf (last item), and it has NO children, return it with value null
return 1===n.length&&0===i.length?__assign(__assign({},r),((s={})[a]=null,s)):__assign(__assign({},r),((u={})[a]=(0,exports.reduceQueryPathsRecursively)(i,{}),u));
// Recursion case: find all queryPaths starting with the same branch
}),r)};exports.reduceQueryPathsRecursively=reduceQueryPathsRecursively;
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
var queryPathsArrayToNestedPathObject=function(e){return(0,exports.reduceQueryPathsRecursively)(e,{})};exports.queryPathsArrayToNestedPathObject=queryPathsArrayToNestedPathObject;
//# sourceMappingURL=queryPathsArrayToNestedPathObject.js.map