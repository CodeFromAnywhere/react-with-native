"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeNestedObject=void 0;var getObjectKeysArray_1=require("./getObjectKeysArray"),mergeObjectsArray_1=require("./mergeObjectsArray"),mergeNestedObject=function(e,r){if(void 0===e&&void 0!==r)
// basecase that is used if the original object has some optional value undefined. in that case, the otherObject is used to set that key
return r;if(void 0===r)return e;
// put `otherObject` on object, make sure
// const withoutUndefinedOtherObject = omitUndefinedValues(otherObject);
var t=(0,mergeObjectsArray_1.mergeObjectsArray)(
// go over all keys in otherObject...
(0,getObjectKeysArray_1.getObjectKeysArray)(r).map((function(t){var s,a,i=r[t];
// get the value for it
//   if it's defined, but not an object.. the value is definite.
// NB: arrays are also objects, but in this case they should also return
if("object"!=typeof i||Array.isArray(i))return(s={})[t]=r[t],s;
//   if it's defined and its type is an object, that object needs to be merged with the full object
var n=(0,exports.mergeNestedObject)(e[t],r[t]);return(a={})[t]=n,a})));
//   ensure to merge the result with the original object to also do the first level
return __assign(__assign({},e),t)};exports.mergeNestedObject=mergeNestedObject;
//# sourceMappingURL=mergeNestedObject.js.map