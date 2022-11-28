"use strict";
/**
 * Takes a folder path and returns a path that is one folder up
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneFolderUpPath = void 0;
var getOneFolderUpPath = function (folderPath) {
    var pathParts = folderPath.split("/");
    pathParts.pop();
    return pathParts.join("/");
};
exports.getOneFolderUpPath = getOneFolderUpPath;
//# sourceMappingURL=getOneFolderUpPath.js.map