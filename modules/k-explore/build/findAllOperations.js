"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllOperations = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var explore_1 = require("./explore");
/**
 * Finds all package.json's everywhere. also in /tools, but this is to be expected.
 */
var findAllOperations = function (config) {
    return (0, explore_1.explore)({
        includeFoldersWithResults: config === null || config === void 0 ? void 0 : config.includeFoldersWithResults,
        basePath: (config === null || config === void 0 ? void 0 : config.basePath) || (0, get_path_1.getPathsWithOperations)(),
        searchLevel: "folder",
        cancelRecursionOn: function (pathArray) {
            var folderIsOperation = pathArray.map(fs_util_1.getFileName).includes("package.json") &&
                pathArray.map(fs_util_1.getFileName).includes("tsconfig.json");
            return folderIsOperation;
        },
        ignore: explore_1.generatedFolders.concat(["src", "assets", "data"]),
    });
    /*
      .map((textJson) => ({
        path: textJson.path,
        isOperation: !!textJson.isCancelRecursionResult,
      }));*/
};
exports.findAllOperations = findAllOperations;
//# sourceMappingURL=findAllOperations.js.map