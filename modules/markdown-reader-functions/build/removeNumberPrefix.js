"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNumberPrefix = void 0;
/**
 * removes number prefixes from a file or folder name. Does not remove extension
 *
 * defaults to untitled if the file or folder has no name after removing numbers.
 */
var removeNumberPrefix = function (fileOrFolderName) {
    var parts = fileOrFolderName.split(".");
    var newName = parts.reduce(function (restName, part, currentIndex, array) {
        if (restName)
            return restName;
        var isTextPart = isNaN(Number(part));
        if (isTextPart) {
            // NB: everything after here is supposed to be part of the text
            var restName_1 = array.slice(currentIndex).join(".");
            return restName_1;
        }
    }, undefined);
    return newName || "untitled";
};
exports.removeNumberPrefix = removeNumberPrefix;
//# sourceMappingURL=removeNumberPrefix.js.map