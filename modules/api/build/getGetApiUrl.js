"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getGetApiUrl=void 0;var rest_util_1=require("rest-util"),getGetApiUrl=function(e,t,r){var i=t.slice(0,t.length-"GetApi".length),l=Object.keys(r).length>0?(0,rest_util_1.toQueryString)(r):"";return"".concat(e,"/").concat(i).concat(l)};
/**
 * gets an api url for a context get api
 *
 * returns something like `[apiUrl]/[apiFunctionName][queryString]`
 */exports.getGetApiUrl=getGetApiUrl;
//# sourceMappingURL=getGetApiUrl.js.map