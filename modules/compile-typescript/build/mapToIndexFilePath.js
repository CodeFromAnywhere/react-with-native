"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToIndexFilePath = void 0;
var fs_util_1 = require("fs-util");
var filename_conventions_1 = require("filename-conventions");
var get_path_1 = require("get-path");
/** map a relative file path from the project root to an absolute filepath in a specific index */
var mapToIndexFilePath = function (projectRoot, indexFolder) {
    return function (relativePathFromProjectRoot) {
        var absoluteFilePath = fs_util_1.path.join(projectRoot, relativePathFromProjectRoot);
        var operationPaths = (0, get_path_1.getOperationPathParse)(absoluteFilePath);
        if (!operationPaths)
            return;
        var indexPath = fs_util_1.path.join(projectRoot, operationPaths.relativeOperationBasePathFromProjectRoot, filename_conventions_1.databaseFolderName, indexFolder, "".concat(operationPaths.srcFileId, ".json"));
        return indexPath;
    };
};
exports.mapToIndexFilePath = mapToIndexFilePath;
//# sourceMappingURL=mapToIndexFilePath.js.map