"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperationPathParse = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var getProjectRoot_1 = require("./getProjectRoot");
var findOperationBasePath_1 = require("./findOperationBasePath");
var getPathParse_1 = require("./getPathParse");
var getOperationRelativePath_1 = require("./getOperationRelativePath");
var makeRelative_1 = require("./makeRelative");
/**
 * get all operation-related path information that can be inferred from the path
 *
 * NB: currently it also looks up the operation name from its packagejson
 */
var getOperationPathParse = function (absolutePath) {
    var _a;
    if (!absolutePath)
        return;
    var pathParse = (0, getPathParse_1.getPathParse)(absolutePath);
    if (!pathParse)
        return;
    var projectRoot = (0, getProjectRoot_1.getProjectRoot)(absolutePath);
    if (!projectRoot)
        return;
    var operationBasePath = (0, findOperationBasePath_1.findOperationBasePath)(absolutePath);
    if (!operationBasePath)
        return;
    var operationSrcPath = fs_util_1.path.join(operationBasePath, "src");
    var operationFolderName = (0, fs_util_1.getLastFolder)(operationBasePath);
    var operationName = (_a = (0, read_json_file_1.readJsonFileSync)(fs_util_1.path.join(operationBasePath, "package.json"))) === null || _a === void 0 ? void 0 : _a.name;
    var operationRelativeTypescriptFilePath = (0, getOperationRelativePath_1.getOperationRelativePath)(absolutePath, operationBasePath);
    var parsedPath = fs_util_1.path.parse(absolutePath);
    var srcFileId = (0, makeRelative_1.makeRelative)(fs_util_1.path.join(parsedPath.dir, parsedPath.name), operationSrcPath);
    var relativeOperationBasePathFromProjectRoot = operationBasePath.slice(projectRoot.length);
    return {
        relativePathFromProjectRoot: pathParse.relativePathFromProjectRoot,
        srcFileId: srcFileId,
        operationFolderName: operationFolderName,
        operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
        relativeOperationBasePathFromProjectRoot: relativeOperationBasePathFromProjectRoot,
        operationName: operationName,
    };
};
exports.getOperationPathParse = getOperationPathParse;
//# sourceMappingURL=getOperationPathParse.js.map