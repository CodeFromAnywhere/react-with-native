"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSrcRelativeFileId=void 0;
/**
 * returns a file id (path without extension) relative to the src folder of an operation
 *
 * e.g. "general" for src/general.ts
 *
 * NB: assumes all src is in the src folder
 *
 * NB: removes "/" in the beginning, if found
 */
var getSrcRelativeFileId=function(e){var t=e.replace("src/","").split(".");
// remove the last one
t.pop();var r=t.join(".");return r.startsWith("/")?r.substring(1):r};exports.getSrcRelativeFileId=getSrcRelativeFileId;
//# sourceMappingURL=getSrcRelativeFileId.js.map