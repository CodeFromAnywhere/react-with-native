"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProjectRoot = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
/**
 * simple sync function to check if a folder is the root of a project (not operation but a workspace)
 */
var isProjectRoot = function (folderPath) {
    var packageJsonPath = fs_util_1.path.join(folderPath, "package.json");
    var existsPackageJson = fs_util_1.fs.existsSync(packageJsonPath);
    if (!existsPackageJson)
        return false;
    var packageJson = (0, read_json_file_1.tryParseJson)(fs_util_1.fs.readFileSync(packageJsonPath, "utf8"));
    if (!packageJson || !packageJson.workspaces) {
        return false;
    }
    return true;
};
exports.isProjectRoot = isProjectRoot;
//# sourceMappingURL=isProjectRoot.js.map