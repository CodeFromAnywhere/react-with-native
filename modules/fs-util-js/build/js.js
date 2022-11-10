"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtension = exports.withoutExtension = exports.getSubExtension = exports.removeTrailingSlash = exports.isPathRelative = exports.getFolderJs = void 0;
var getFolderJs = function (filePath) {
    if (filePath === undefined)
        return undefined;
    var chunks = filePath.split("/");
    chunks.pop();
    var allWithoutFile = chunks.join("/");
    return allWithoutFile;
};
exports.getFolderJs = getFolderJs;
var isPathRelative = function (path) {
    return path.startsWith("./") || path.startsWith("../");
};
exports.isPathRelative = isPathRelative;
var removeTrailingSlash = function (p) {
    return p.charAt(0) === "/" ? p.slice(1) : p;
};
exports.removeTrailingSlash = removeTrailingSlash;
var getSubExtension = function (fileName) {
    var parts = fileName.split(".");
    //removes extension
    parts.pop();
    //returns extension that's left (the sub-extension)
    var subExtension = parts.pop();
    return subExtension;
};
exports.getSubExtension = getSubExtension;
/**
 * removes extension from the filename
 *
 */
var withoutExtension = function (fileName) {
    var pieces = fileName.split(".");
    pieces.pop();
    return pieces.join(".");
};
exports.withoutExtension = withoutExtension;
/**
 * returns the extension of the filename or path WITHOUT dot
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
var getExtension = function (fileNameOrPath) {
    var pieces = fileNameOrPath.split(".");
    return pieces.pop();
};
exports.getExtension = getExtension;
//# sourceMappingURL=js.js.map