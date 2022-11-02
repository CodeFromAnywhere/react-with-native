"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findFilesRecursively=exports.mergeObjectsArray=exports.findAllMd=exports.isArrayGuard=exports.findFiles=exports.findSensibleFiles=exports.importFromFiles=void 0;
// node packages
var path_1=__importDefault(require("path")),graceful_fs_1=require("graceful-fs"),js_util_1=require("js-util"),parseMd_1=require("./parseMd"),fs_util_js_1=require("fs-util-js"),importFromFiles=function(e){var r=e.files,t=e.importStrategy,i=void 0===t?"default":t,s=e.list,n=e.guard;return r.map((function(e){var r=require(e);if("default"===i)return r.default||r;if("fileName"===i){var t=(0,fs_util_js_1.withoutExtension)(e.split("/").pop());return r[t]}return"list"===i?s?(0,exports.mergeObjectsArray)(s.map((function(e){var t;return(t={})[e]=r[e],t}))):{}:void 0})).filter((function(e){return n?n(e)&&e:e}))};
// external packages
exports.importFromFiles=importFromFiles;
/**
 * DEPRECATED:
 *
 * this is sensible-specific
 */
var findSensibleFiles=function(e,r){return(0,exports.findFilesRecursively)({basePath:r,match:function(r){return r===e||r===e+"s"||r.endsWith(".".concat(e))||r.endsWith(".".concat(e,"s"))}})};exports.findSensibleFiles=findSensibleFiles,
/**
 * DEPRECATED:
 *
 * SHOULD BE REPLACED
 *
 * this is sensible-specific
 */
exports.findFiles=exports.findSensibleFiles;
/**
 * DEPRECATED
 */
var isArrayGuard=function(e){return"object"==typeof e&&Array.isArray(e)};exports.isArrayGuard=isArrayGuard;
/**
 * DEPRECATED: `k-explore` can be used
 */
var findAllMd=function(e,r){return(0,exports.findFilesRecursively)({basePath:e,match:function(e,r){return"md"===r},onlyInCurrentFolder:r}).map((function(e){return e.path})).map(parseMd_1.parseMd)};exports.findAllMd=findAllMd,
/**
 * DEPRECATED: in favor of mergeObjectsArray from "js-util"
 */
exports.mergeObjectsArray=js_util_1.mergeObjectsArray;
/**
 * DEPRECATED: in favour of `explore` from "k-explore"
 */
var findFilesRecursively=function(e){var r=e.match,t=e.basePath,i=e.relativePath,s=e.onlyInSubFolders,n=e.onlyInCurrentFolder,a=i?path_1.default.join(t,i):t;return(0,graceful_fs_1.readdirSync)(a,{withFileTypes:!0}).reduce((function(e,l){if(l.isDirectory()&&!n){var u=l,o=(0,exports.findFilesRecursively)({basePath:t,relativePath:i?"".concat(i,"/").concat(u.name):u.name,match:r,onlyInSubFolders:!1});return e.concat(o)}if(!s){var f=l,d=path_1.default.join(a,f.name);return r((0,fs_util_js_1.withoutExtension)(f.name),path_1.default.parse(f.name).ext)?e.concat([{relativeFolder:i,path:d}]):e}return e}),[])};exports.findFilesRecursively=findFilesRecursively;
//# sourceMappingURL=deprecated.js.map