"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRoot = void 0;
var fs_util_1 = require("fs-util");
var findFolderWhereMatch_1 = require("./findFolderWhereMatch");
/**
 * returns project root folder path
 *
 * recursive. goes up until it finds a folder that's the project root
 *
 * if no source path is given, uses the directory name where the function is executed from as a starting point
 */
var getProjectRoot = function (fullSourcePath) {
    var matchFolder = (0, findFolderWhereMatch_1.findFolderWhereMatch)(fullSourcePath || __dirname, hasProjectRootFile);
    if (!matchFolder)
        return;
    return matchFolder.folderPath;
};
exports.getProjectRoot = getProjectRoot;
var hasProjectRootFile = function (absolutePath) {
    var osRootFilePath = fs_util_1.path.join(absolutePath, ".project-root");
    var osRootFileExists = fs_util_1.fs.existsSync(osRootFilePath);
    return osRootFileExists;
};
//# sourceMappingURL=getProjectRoot.js.map