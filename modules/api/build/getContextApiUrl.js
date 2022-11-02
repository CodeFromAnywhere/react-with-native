"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getGetApiUrl=exports.getReferencedAssetApiUrl=exports.getAssetDirectlyApiUrl=void 0;var rest_util_1=require("rest-util"),getAssetDirectlyApiUrl=function(e,t){return(0,exports.getGetApiUrl)(e,"getAssetDirectlyGetApi",{projectRelativeAssetPath:t})};exports.getAssetDirectlyApiUrl=getAssetDirectlyApiUrl;var getReferencedAssetApiUrl=function(e,t,r){return(0,exports.getGetApiUrl)(e,"getReferencedAssetGetApi",{projectRelativeReferencingFilePath:t,referencingFileRelativeAssetPath:r})};exports.getReferencedAssetApiUrl=getReferencedAssetApiUrl;
/**
 * gets an api url for a get api
 *
 * returns something like `[apiUrl]/[apiFunctionName][queryString]`
 */
var getGetApiUrl=function(e,t,r){var i=t.slice(0,t.length-"GetApi".length),s=Object.keys(r).length>0?(0,rest_util_1.toQueryString)(r):"";return"".concat(e,"/").concat(i).concat(s)};exports.getGetApiUrl=getGetApiUrl;
//# sourceMappingURL=getContextApiUrl.js.map