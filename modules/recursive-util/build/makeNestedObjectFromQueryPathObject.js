"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeNestedObjectFromQueryPathObject=void 0;var makeNestedObjectFromQueryPathObject=function(e,t){
// copy queryPath into chunk
var n=e.map((function(e){return __assign(__assign({},e),{__chunk:e.__chunk||e.queryPath})}));return n.reduce((function(e,t){var r,s,a=t.__chunk.split("/"),_=a[0];
// Base case 1: if we already have it, skip it
if(Object.keys(e).includes(_))return e;var c=n.filter((function(e){return e.__chunk.startsWith("".concat(_,"/"))})).map((function(e){return __assign(__assign({},e),{__chunk:e.__chunk.substring(_.length+1)})}));
// Base case 2: if it's a leaf (last item), and it has NO children, return it with its own value
return 1===a.length&&0===c.length?__assign(__assign({},e),((r={})[_]=t,r)):__assign(__assign({},e),((s={})[_]=(0,exports.makeNestedObjectFromQueryPathObject)(c,{}),s));
// Recursion case: find all queryPaths starting with the same branch
}),t)};exports.makeNestedObjectFromQueryPathObject=makeNestedObjectFromQueryPathObject;
//# sourceMappingURL=makeNestedObjectFromQueryPathObject.js.map