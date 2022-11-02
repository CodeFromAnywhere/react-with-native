#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findFolderWhereMatch=void 0;var fs_util_1=require("fs-util"),log_1=require("log"),findFolderWhereMatch=function(e,
/**
 * match must be truthy in order to match, and falsy if it's not a match
 *
 * the result of the matchFunction will be returned at the end of the recursion
 */
o){
// Basecase to make sure that the provided sourcepath is valid
if(void 0===e&&(console.log("WTF"),process.exit(1)),fs_util_1.fs.existsSync(e)){
// Basecase to make sure that it doesn't go on infinitely, even if package.json doesn't exist anywhere
if("/"!==e){var t=o(e);return t?{folderPath:e,matchResult:t}:(0,exports.findFolderWhereMatch)(fs_util_1.path.join(e,".."),o)}(0,log_1.log)("folder was not found, went all the way to root '/'",{type:"debug"})}else(0,log_1.log)("full source path invalid ".concat(e),{type:"debug"})};exports.findFolderWhereMatch=findFolderWhereMatch;
//# sourceMappingURL=findFolderWhereMatch.js.map