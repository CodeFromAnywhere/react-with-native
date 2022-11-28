"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAsset=void 0;var asset_functions_js_1=require("asset-functions-js"),server_api_url_1=require("server-api-url"),path_browserify_1=__importDefault(require("path-browserify")),useAssetInfo_1=require("./useAssetInfo"),useAsset=function(e,t,s){if(e&&t){
// console.log({ apiUrl });
/**
     * NB: `relativePath` is required
     */
var r=function(s){return(0,asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl,t,e.relativePath,s)},a=function(e){return"markdown-assets/".concat(path_browserify_1.default.join(path_browserify_1.default.parse(t).dir,e))},i=e.absoluteUrl?e.absoluteUrl:e.blobPath?e.blobPath:s&&e.relativePath?a(e.relativePath):r(!1),o=!e.blobPath&&!!e.relativePath,u=s&&e.relativePath?a(e.relativePath):o?r(!0):// NB: other type is ugly when downloading. Also doesn't make sense much to want to download an asset after uploading
"other"!==e.type?e.blobPath:void 0,n=(0,asset_functions_js_1.getExtensionFromAsset)(e),l=(0,useAssetInfo_1.useAssetInfo)(i,e.originalFilename);return{rawText:(null==l?void 0:l.rawText)||null,type:e.type||(null==l?void 0:l.type),downloadUrl:u,src:i,extension:n}}};exports.useAsset=useAsset;
//# sourceMappingURL=useAsset.js.map