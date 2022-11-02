"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtension=exports.withoutExtension=exports.getSubExtension=exports.removeTrailingSlash=exports.isPathRelative=exports.getFolderJs=void 0;var getFolderJs=function(t){if(void 0!==t){var e=t.split("/");return e.pop(),e.join("/")}};exports.getFolderJs=getFolderJs;var isPathRelative=function(t){return t.startsWith("./")||t.startsWith("../")};exports.isPathRelative=isPathRelative;var removeTrailingSlash=function(t){return"/"===t.charAt(0)?t.slice(1):t};exports.removeTrailingSlash=removeTrailingSlash;var getSubExtension=function(t){var e=t.split(".");
//removes extension
return e.pop(),e.pop()};exports.getSubExtension=getSubExtension;
/**
 * removes extension from the filename
 *
 */
var withoutExtension=function(t){var e=t.split(".");return e.pop(),e.join(".")};exports.withoutExtension=withoutExtension;
/**
 * returns the extension of the filename or path WITHOUT dot
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
var getExtension=function(t){return t.split(".").pop()};exports.getExtension=getExtension;
//# sourceMappingURL=js.js.map