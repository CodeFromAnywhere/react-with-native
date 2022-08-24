"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexFilePath = void 0;
var getProjectRoot_1 = require("./getProjectRoot");
var fs_util_1 = require("fs-util");
var convert_case_1 = require("convert-case");
var getOperationPathParse_1 = require("./getOperationPathParse");
/**
 * calculates a path of a specific index file (doesn't check if it exists)
 */
var getIndexFilePath = function (srcFilePath, indexInstance) {
    var projectRoot = (0, getProjectRoot_1.getProjectRoot)(srcFilePath);
    var parse = (0, getOperationPathParse_1.getOperationPathParse)(srcFilePath);
    if (!projectRoot || !parse)
        return;
    var indexFilePath = fs_util_1.path.join(projectRoot, parse.relativeOperationBasePathFromProjectRoot, "index", (0, convert_case_1.kebabCase)(indexInstance), "".concat(parse.srcFileId, ".json"));
    return indexFilePath;
};
exports.getIndexFilePath = getIndexFilePath;
//# sourceMappingURL=getIndexFilePath.js.map