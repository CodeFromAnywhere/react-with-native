"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootPath = exports.osRootFolders = exports.projectRootFolders = exports.projectRootFoldersConst = exports.osRootFoldersConst = void 0;
var fs_util_1 = require("fs-util");
var getProjectRoot_1 = require("./getProjectRoot");
var isSensibleProject_1 = require("./isSensibleProject");
/**
 * can only be accessed in the OS
 */
exports.osRootFoldersConst = [
    "assets",
    "backups",
    "bundled",
    "bundles",
    "distributions",
];
/**
 * can be accessed in projects as well as in the OS
 */
exports.projectRootFoldersConst = [
    "text",
    "tools",
    "information",
];
exports.projectRootFolders = __spreadArray([], exports.projectRootFoldersConst, true);
exports.osRootFolders = __spreadArray([], exports.osRootFoldersConst, true);
/*
Gets project path, or a folder in the root that is convention
*/
var getRootPath = function (
/**
 * if not specified, will return project root path
 */
name, config) {
    var projectRootDir = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, getProjectRoot_1.getProjectRoot)();
    if (!projectRootDir)
        return;
    if (!name) {
        return projectRootDir;
    }
    if ((0, isSensibleProject_1.isSensibleProject)(projectRootDir)) {
        if (exports.projectRootFolders.includes(name)) {
            var projectFolder = name === "text"
                ? "docs"
                : name === "tools"
                    ? "packages"
                    : name === "information"
                        ? "information"
                        : null;
            if (!projectFolder) {
                console.log("get root path: This should never happen");
                return;
            }
            var folderPath = fs_util_1.path.resolve(projectRootDir, projectFolder);
            return folderPath;
        }
        else {
            console.log("This can't be done in a sensible project");
            return;
        }
    }
    // non-sensible projects
    if (exports.projectRootFolders.concat(exports.osRootFolders).includes(name)) {
        var folderPath = fs_util_1.path.resolve(projectRootDir, name);
        return folderPath;
    }
    console.log("getRootPath: Should never happen, probably a wrong input was provided:", { name: name });
    return;
};
exports.getRootPath = getRootPath;
//# sourceMappingURL=getRootPath.js.map