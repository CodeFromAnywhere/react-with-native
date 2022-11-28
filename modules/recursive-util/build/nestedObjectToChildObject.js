"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.nestedObjectToChildObject=void 0;
/**
 * if T is an object, provide __check as one of its properties, to make it possible to check that it's a leaf. This property will be omitted in the ChildObject array
 */
var nestedObjectToChildObject=function(
/**
 * if T is an object, provide __check to check that it's a leaf
 */
e,
/**
 * Map the folder to T. You can omit queryPath, it will be overwritten
 */
t,r){return void 0===r&&(r=[]),Object.keys(e).map((function(n){var o=t(e,n),s=e[n];if("object"!=typeof s||!!s.__check){s.__check;return __rest(s,["__check"])}var c=r.concat(n),i=c.join("/");return __assign(__assign({},o),{queryPath:i,children:(0,exports.nestedObjectToChildObject)(s,t,c)})}))};exports.nestedObjectToChildObject=nestedObjectToChildObject;
//# sourceMappingURL=nestedObjectToChildObject.js.map