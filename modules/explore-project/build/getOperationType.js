"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExplorationType=void 0;var fs_util_1=require("fs-util"),getExplorationType=function(e,t){var r=fs_util_1.path.parse(e);return[".ts",".tsx"].includes(r.ext)?"typescript":[".md",".mdx"].includes(r.ext)?"markdown":r.ext.length>0?void 0:t.includes(e)?"operation":t.find((function(t){return e.startsWith(t)}))?"operationFolder":"folder"};
/**
 * gets the exploration type from an absolute type
 */exports.getExplorationType=getExplorationType;
//# sourceMappingURL=getOperationType.js.map