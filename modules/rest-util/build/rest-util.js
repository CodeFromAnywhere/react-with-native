"use strict";
/**
 *
 *
 */var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i]);return r},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return r.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFirstQueryStrings=exports.toQueryString=exports.bodyFromQueryString=void 0;var js_util_1=require("js-util"),bodyFromQueryString=function(
/**
 * NB: everything AFTER The "?", so this should be the format: x=x&y=y&z=z&z=z2
 */
r){var t;if(r){var e=null===(t=r.split("&"))||void 0===t?void 0:t.map((function(r){var t=r.split("=");return{key:t[0],value:t[1]}})),n=null==e?void 0:e.reduce((function(r,t){var e;
// NB: if that key already exists, let's make it an array and add this new value
return r[t.key]?(r[t.key]=__spreadArray(__spreadArray([],(0,js_util_1.makeArray)(r[t.key]),!0),[t.value],!1),r):__assign(__assign({},r),((e={})[t.key]=t.value,e));
// Otherwise, just add the new key/value to the object.
}),{});return n}};
/**
 * converts a query string into an object that can be used as a body
 */exports.bodyFromQueryString=bodyFromQueryString;var isValidEntry=function(r){r[0];var t=r[1];return void 0!==t&&""!==t&&null!==t},toQueryString=function(r){var t;return r&&(null===(t=Object.entries(r))||void 0===t?void 0:t.filter(isValidEntry).length)>0?"?"+Object.entries(r).filter(isValidEntry).map((function(r){var t=r[0],e=r[1],n=encodeURIComponent(String(e));return"".concat(t,"=").concat(n)})).join("&"):""};
/**
 * returns something like `?x=a&y=b&z=c`
 */exports.toQueryString=toQueryString;
//NB: doesn't work in node.
/**
 * Query keys can be string or string[] or undefined.
 *
 * This function takes only the first string if it's an array...
 */
var getFirstQueryStrings=function(r){return Object.keys(r).map((function(t){var e=r[t];return Array.isArray(e)?e[0]:e}))};exports.getFirstQueryStrings=getFirstQueryStrings;
//# sourceMappingURL=rest-util.js.map