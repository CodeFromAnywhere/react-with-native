"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSensibleProject = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var getProjectRoot_1 = require("./getProjectRoot");
var isSensibleProject = function (folderPath) {
    var realFolderPath = folderPath || (0, getProjectRoot_1.getProjectRoot)();
    if (!realFolderPath)
        return false;
    // get package-json and check sensible config
    var packageJson = (0, read_json_file_1.readJsonFileSync)(fs_util_1.path.join(realFolderPath, "package.json"));
    var sensibleConfig = packageJson === null || packageJson === void 0 ? void 0 : packageJson.sensible;
    var isSensibleProject = (sensibleConfig === null || sensibleConfig === void 0 ? void 0 : sensibleConfig.isSensibleProject) || false;
    return isSensibleProject;
};
exports.isSensibleProject = isSensibleProject;
//# sourceMappingURL=isSensibleProject.js.map