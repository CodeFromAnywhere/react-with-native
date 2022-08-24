"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativePath = void 0;
var get_path_1 = require("get-path"); // import { path } from "./path";
/**
 * gets the relative path from a specified root
 *
 * will start with "/"
 */
var getRelativePath = function (absolutePath, relativeFrom) {
    var rootPath = relativeFrom === "project-root" ? (0, get_path_1.getRootPath)() : (0, get_path_1.getRootPath)();
    var relativePath = absolutePath.replace(rootPath, "");
    return relativePath;
};
exports.getRelativePath = getRelativePath;
//# sourceMappingURL=getRelativePath.js.map