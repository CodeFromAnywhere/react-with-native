"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,s=1,t=arguments.length;s<t;s++)for(var n in r=arguments[s])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.reduceQueryPathsRecursively=void 0;var reduceQueryPathsRecursively=function(e,r){return e.reduce((function(r,s){var t,n,u=s.split("/"),i=u[0];
// Base case 1: if we already have it, skip it
if(Object.keys(r).includes(i))return r;var a=e.filter((function(e){return e.startsWith("".concat(i,"/"))})).map((function(e){return e.substring(i.length+1)}));
// Base case 2: if it's a leaf (last item), and it has NO children, return it with value null
return 1===u.length&&0===a.length?__assign(__assign({},r),((t={})[i]=null,t)):__assign(__assign({},r),((n={})[i]=(0,exports.reduceQueryPathsRecursively)(a,{}),n));
// Recursion case: find all queryPaths starting with the same branch
}),r)};exports.reduceQueryPathsRecursively=reduceQueryPathsRecursively;
//# sourceMappingURL=reduceQueryPathsRecursively.js.map