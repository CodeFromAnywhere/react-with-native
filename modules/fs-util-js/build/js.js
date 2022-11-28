"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtension=exports.withoutExtension=exports.getSubExtension=exports.removeTrailingSlash=exports.isPathRelative=exports.getFileOrFolderName=exports.getFolderJs=void 0;var getFolderJs=function(e){if(void 0!==e){var t=e.split("/");return t.pop(),t.join("/")}};exports.getFolderJs=getFolderJs;var getFileOrFolderName=function(e){if(e)return e.split("/").pop()};exports.getFileOrFolderName=getFileOrFolderName;var isPathRelative=function(e){return e.startsWith("./")||e.startsWith("../")};exports.isPathRelative=isPathRelative;var removeTrailingSlash=function(e){return"/"===e.charAt(0)?e.slice(1):e};exports.removeTrailingSlash=removeTrailingSlash;
/**
 * Provide a filename including its extension, to get the subextension.
 */
var getSubExtension=function(e){var t=e.split(".");
//removes extension
return t.pop(),t.pop()};exports.getSubExtension=getSubExtension;
/**
 * removes extension from the filename
 *
 */
var withoutExtension=function(e){var t=e.split(".");return t.pop(),t.join(".")};exports.withoutExtension=withoutExtension;
/**
 * returns the extension of the filename or path WITHOUT dot
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
var getExtension=function(e){return e.split(".").pop()};exports.getExtension=getExtension;
//# sourceMappingURL=js.js.map