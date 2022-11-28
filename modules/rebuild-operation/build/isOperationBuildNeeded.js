"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isOperationBuildNeeded=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),isOperationBuildNeeded=function(e){var t=(0,get_path_1.getOperationClassification)(e);console.log("".concat((0,fs_util_1.getLastFolder)(e),": ").concat(t));return["cjs",
// "esm",
"node-cjs",
// "node-esm",
"ui-cjs"].includes(t)};exports.isOperationBuildNeeded=isOperationBuildNeeded;
//# sourceMappingURL=isOperationBuildNeeded.js.map