"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathParse = void 0;
var getProjectRoot_1 = require("./getProjectRoot");
/**
 * gets all kinds of information that can be inferred from any path (file or folder).
 */
var getPathParse = function (absolutePath) {
    var projectRoot = (0, getProjectRoot_1.getProjectRoot)(absolutePath);
    if (!projectRoot)
        return;
    var relativePathFromProjectRoot = absolutePath.slice(projectRoot.length);
    return { relativePathFromProjectRoot: relativePathFromProjectRoot };
};
exports.getPathParse = getPathParse;
//# sourceMappingURL=getPathParse.js.map