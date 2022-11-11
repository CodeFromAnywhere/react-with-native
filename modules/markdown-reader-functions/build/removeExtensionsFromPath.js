"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeExtensionsFromPath=exports.availableExtensions=void 0;var js_util_1=require("js-util"),removeNumberPrefix_1=require("./removeNumberPrefix");exports.availableExtensions=["md"];
/**
 * - Removes numbers from file or foldernames in a path.
 * - Removes extension of files
 * - Returns the new path without numbers and without extension
 *
 * Works for files and folders
 */
var removeExtensionsFromPath=function(
/**
 * should also work for filenames
 */
e){var r=(0,js_util_1.trimSlashes)(e).split("/").map(removeNumberPrefix_1.removeNumberPrefix),o=r.length-1,s=r[o].split("."),t=s[s.length-1];return exports.availableExtensions.includes(t)&&(
// remove extension
s.pop(),r[o]=s.join(".")),r.join("/")};exports.removeExtensionsFromPath=removeExtensionsFromPath;
//# sourceMappingURL=removeExtensionsFromPath.js.map