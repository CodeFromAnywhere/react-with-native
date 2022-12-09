"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFileTypeFromPath=void 0;var getFileTypeFromPath=function(e){return e?
//code
e.endsWith(".ts")||e.endsWith(".tsx")||e.endsWith(".js")||e.endsWith(".jsx")?"code":
//text
e.endsWith(".md")||e.endsWith(".mdx")||e.endsWith(".txt")?"text":
//data
e.endsWith(".json")?"data":"other":"other"};exports.getFileTypeFromPath=getFileTypeFromPath;
//# sourceMappingURL=getFileTypeFromPath.js.map