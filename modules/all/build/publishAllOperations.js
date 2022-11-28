"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishAllOperations = void 0;
var forAllFolders_1 = require("./forAllFolders");
/* Script to publish all packages everywhere (that also runs prepublish). Only src in git, only build in npm.*/
var publishAllOperations = function (_a) {
    var basePath = _a.basePath, callback = _a.callback, fileName = _a.fileName, folderName = _a.folderName, _b = _a.shell, shell = _b === void 0 ? true : _b;
    return (0, forAllFolders_1.forAllFolders)({
        type: "operations",
        fileName: fileName,
        folderName: folderName,
        callback: callback,
        basePath: basePath,
        command: "npm run pub --if-present",
        shell: shell,
    });
};
exports.publishAllOperations = publishAllOperations;
//# sourceMappingURL=publishAllOperations.js.map