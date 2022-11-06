"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommonAncestor = void 0;
/**
 * Finds the common ancestor for two absolute pahts
 */
var getCommonAncestor = function (path1, path2) {
    var chunks = path1.split("/");
    var chunks2 = path2.split("/");
    var firstFolderMismatchIndex = chunks.findIndex(function (chunk, index, array) {
        var isMismatch = chunks2[index] !== chunk;
        return isMismatch;
    });
    var commonAncestor = chunks.slice(0, firstFolderMismatchIndex).join("/");
    return commonAncestor;
};
exports.getCommonAncestor = getCommonAncestor;
//# sourceMappingURL=getCommonAncestor.js.map