"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRelativePath=void 0;var getRootPath_1=require("./getRootPath"),getRelativePath=function(t,e){var a=(0,getRootPath_1.getRootPath)();if(a)return t.replace(a,"")};// import { path } from "./path";
/**
 * gets the relative path from a specified root
 *
 * will start with "/"
 */exports.getRelativePath=getRelativePath;
//# sourceMappingURL=getRelativePath.js.map