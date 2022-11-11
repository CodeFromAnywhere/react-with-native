"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPathParse=void 0;var getProjectRoot_1=require("./getProjectRoot"),getPathParse=function(e){var t=(0,getProjectRoot_1.getProjectRoot)(e);if(t)return{relativePathFromProjectRoot:e.slice(t.length)}};
/**
 * gets all kinds of information that can be inferred from any path (file or folder).
 */exports.getPathParse=getPathParse;
//# sourceMappingURL=getPathParse.js.map