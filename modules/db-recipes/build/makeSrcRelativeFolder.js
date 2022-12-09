"use strict";
/**
gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSrcRelativeFolder = void 0;
var makeSrcRelativeFolder = function (operationRelativeTypescriptFilePath) {
    var srcPrefix = "src/";
    if (!operationRelativeTypescriptFilePath.startsWith(srcPrefix))
        return;
    var withoutSrc = operationRelativeTypescriptFilePath.substring(srcPrefix.length);
    var parts = withoutSrc.split("/");
    parts.pop();
    var withoutFile = parts.join("/");
    if (withoutFile.length === 0)
        return;
    return withoutFile;
};
exports.makeSrcRelativeFolder = makeSrcRelativeFolder;
//# sourceMappingURL=makeSrcRelativeFolder.js.map