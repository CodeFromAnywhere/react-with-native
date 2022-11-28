"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSrcRelativeFolderPath=void 0;var fs_util_js_1=require("fs-util-js"),getSrcRelativeFolderPath=function(e){
// 1) remove src/
var t=e.startsWith("src/")?e.slice("src/".length):void 0,r=(0,fs_util_js_1.getFolderJs)(t);if(""!==r)return r};exports.getSrcRelativeFolderPath=getSrcRelativeFolderPath;
//# sourceMappingURL=getSrcRelativeFolderPath.js.map