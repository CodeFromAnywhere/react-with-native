"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperation = void 0;
var fs_util_1 = require("fs-util");
/**
 * Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json
 */
var isOperation = function (absoluteFolderPath) {
    var packageJsonPath = fs_util_1.path.join(absoluteFolderPath, "package.json");
    var existsPackageJson = fs_util_1.fs.existsSync(packageJsonPath);
    var tsConfigPath = fs_util_1.path.join(absoluteFolderPath, "tsconfig.json");
    var existsTsConfig = fs_util_1.fs.existsSync(tsConfigPath);
    // NB: must have these two in order to be an operation at all
    if (!existsPackageJson || !existsTsConfig) {
        return false;
    }
    return true;
};
exports.isOperation = isOperation;
//# sourceMappingURL=isOperation.js.map