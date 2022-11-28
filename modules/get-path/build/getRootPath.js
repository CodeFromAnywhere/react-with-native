"use strict";var __spreadArray=this&&this.__spreadArray||function(o,e,t){if(t||2===arguments.length)for(var r,s=0,n=e.length;s<n;s++)!r&&s in e||(r||(r=Array.prototype.slice.call(e,0,s)),r[s]=e[s]);return o.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRootPath=exports.osRootFolders=exports.projectRootFolders=exports.projectRootFoldersConst=exports.osRootFoldersConst=void 0;var filename_conventions_1=require("filename-conventions"),fs_util_1=require("fs-util"),getProjectRoot_1=require("./getProjectRoot"),isBundle_1=require("./isBundle");
/**
 * can only be accessed in the OS
 */
exports.osRootFoldersConst=["assets","backups","bundled","cloned","distributions","operations"],
/**
 * can be accessed in projects as well as in the OS
 */
exports.projectRootFoldersConst=["text",filename_conventions_1.databaseFolderName],exports.projectRootFolders=__spreadArray([],exports.projectRootFoldersConst,!0),exports.osRootFolders=__spreadArray([],exports.osRootFoldersConst,!0);
/*
Gets project path, or a folder in the root that is convention
*/
var getRootPath=function(
/**
 * if not specified, will return project root path
 */
o,e){var t=(null==e?void 0:e.manualProjectRoot)||(0,getProjectRoot_1.getProjectRoot)();if(t){if(!o)return t;if((0,isBundle_1.isBundle)(t)&&exports.projectRootFolders.concat(exports.osRootFolders).includes(o)){var r="text"===o?"docs":"operations"===o?"packages":o===filename_conventions_1.databaseFolderName?filename_conventions_1.databaseFolderName:null;return r?fs_util_1.path.resolve(t,r):void console.log("get root path: This should never happen",o)}
// non-bundled projects
if(exports.projectRootFolders.concat(exports.osRootFolders).includes(o))return fs_util_1.path.resolve(t,o);console.log("getRootPath: Should never happen, probably a wrong input was provided:",{name:o})}};exports.getRootPath=getRootPath;
//# sourceMappingURL=getRootPath.js.map