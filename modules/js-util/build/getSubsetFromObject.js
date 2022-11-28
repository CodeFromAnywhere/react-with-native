"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,s=arguments.length;r<s;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSubsetFromObject=void 0;
/**
 * takes an object and a subset of its keys and returns a subset of that object
 *
 * input: { x: "a", y: "b", z: "c" } and ["x"]
 *
 * output: { x: "a" }
 */
var getSubsetFromObject=function(t,e){return e.reduce((function(e,r){var s;return __assign(__assign({},e),((s={})[r]=t[r],s))}),{})};exports.getSubsetFromObject=getSubsetFromObject;
//const result = getSubsetFromObject({a:"hi",b:9,c:true}, ["a"])
//# sourceMappingURL=getSubsetFromObject.js.map