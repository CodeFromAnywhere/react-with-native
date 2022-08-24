"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRoot = void 0;
var findFolderWhereMatch_1 = require("./findFolderWhereMatch");
var isProjectRoot_1 = require("./isProjectRoot");
/**
 * returns project root folder path
 *
 * recursive. goes up until it finds a folder that's the project root
 *
 * if no source path is given, uses the directory name where the function is executed from as a starting point
 */
var getProjectRoot = function (fullSourcePath) { var _a; return (_a = (0, findFolderWhereMatch_1.findFolderWhereMatch)(fullSourcePath || __dirname, isProjectRoot_1.isProjectRoot)) === null || _a === void 0 ? void 0 : _a.folderPath; };
exports.getProjectRoot = getProjectRoot;
//# sourceMappingURL=getProjectRoot.js.map