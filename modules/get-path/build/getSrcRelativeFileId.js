"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSrcRelativeFileId = void 0;
/**
 * returns a file id (path without extension) relative to the src folder of an operation
 *
 * e.g. "general" for src/general.ts
 *
 * NB: assumes all src is in the src folder
 *
 * NB: removes "/" in the beginning, if found
 */
var getSrcRelativeFileId = function (operationRelativePath) {
    var srcRelativePath = operationRelativePath.replace("src/", "");
    var parts = srcRelativePath.split(".");
    // remove the last one
    parts.pop();
    var srcRelativeFileId = parts.join(".");
    var finalId = srcRelativeFileId.startsWith("/")
        ? srcRelativeFileId.substring(1)
        : srcRelativeFileId;
    return finalId;
};
exports.getSrcRelativeFileId = getSrcRelativeFileId;
//# sourceMappingURL=getSrcRelativeFileId.js.map