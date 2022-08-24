"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperationPathParse = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var getProjectRoot_1 = require("./getProjectRoot");
var findOperationBasePath_1 = require("./findOperationBasePath");
var getPathParse_1 = require("./getPathParse");
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
    //something like xxx/xxx/x.ts
    var relativeFilePathFromSrc = absolutePath.slice(operationSrcPath.length);
    var parsedPath = fs_util_1.path.parse(absolutePath);
    var srcFileId = fs_util_1.path
        .join(parsedPath.dir, parsedPath.name)
        .slice(operationSrcPath.length);
    var relativeOperationBasePathFromProjectRoot = operationBasePath.slice(projectRoot.length);
    return {
        relativePathFromProjectRoot: pathParse.relativePathFromProjectRoot,
        srcFileId: srcFileId,
        operationFolderName: operationFolderName,
        relativeFilePathFromSrc: relativeFilePathFromSrc,
        relativeOperationBasePathFromProjectRoot: relativeOperationBasePathFromProjectRoot,
        operationName: operationName,
    };
};
exports.getOperationPathParse = getOperationPathParse;
//# sourceMappingURL=getOperationPathParse.js.map