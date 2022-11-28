"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(r){for(var e,t=1,i=arguments.length;t<i;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var i,a=0,n=e.length;a<n;a++)!i&&a in e||(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return r.concat(i||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.bodyFromQueryString=void 0;var js_util_1=require("js-util"),bodyFromQueryString=function(
/**
 * NB: everything AFTER The "?", so this should be the format: x=x&y=y&z=z&z=z2
 */
r){var e;if(r){var t=null===(e=r.split("&"))||void 0===e?void 0:e.map((function(r){var e=r.split("=");return{key:e[0],value:e[1]}})),i=null==t?void 0:t.reduce((function(r,e){var t;
// NB: if that key already exists, let's make it an array and add this new value
return r[e.key]?(r[e.key]=__spreadArray(__spreadArray([],(0,js_util_1.makeArray)(r[e.key]),!0),[e.value],!1),r):__assign(__assign({},r),((t={})[e.key]=e.value,t));
// Otherwise, just add the new key/value to the object.
}),{});return i}};
/**
 * converts a query string into an object that can be used as a body
 */exports.bodyFromQueryString=bodyFromQueryString;
//# sourceMappingURL=bodyFromQueryString.js.map