"use strict";var __spreadArray=this&&this.__spreadArray||function(e,r,a){if(a||2===arguments.length)for(var t,i=0,s=r.length;i<s;i++)!t&&i in r||(t||(t=Array.prototype.slice.call(r,0,i)),t[i]=r[i]);return e.concat(t||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.queries=void 0;var convert_case_1=require("convert-case"),react_query_1=require("react-query"),js_util_1=require("js-util"),sdk_api_keys_1=require("sdk-api-keys"),api_1=require("./api");
/**

This object contains a react-query `useQuery` hook for every api function

 */
exports.queries=(0,js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map((function(e){return e})).map((function(e){var r,a=api_1.api[e],t=((r={})[(0,convert_case_1.camelCase)("use-".concat(e))]=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=(0,react_query_1.useQuery)(__spreadArray([e],r,!0),(
// @ts-ignore
function(){return a.apply(void 0,r)}),{enabled:!0,refetchOnWindowFocus:"always"});return i},r);return t})));
//# sourceMappingURL=queries.js.map