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
exports.fileTypes = exports.allowedSearchContentExtensions = exports.extensions = exports.getWriterType = exports.jsonExtensions = exports.markdownExtensions = exports.typescriptExtensions = exports.jsonExtensionsConst = exports.markdownExtensionsConst = exports.typescriptExtensionsConst = void 0;
exports.typescriptExtensionsConst = ["ts", "tsx"];
exports.markdownExtensionsConst = ["md", "mdx"];
exports.jsonExtensionsConst = ["json"];
exports.typescriptExtensions = __spreadArray([], exports.typescriptExtensionsConst, true);
exports.markdownExtensions = __spreadArray([], exports.markdownExtensionsConst, true);
exports.jsonExtensions = __spreadArray([], exports.jsonExtensionsConst, true);
/**
 * Gets the writer type based on the extension
 */
var getWriterType = function (extension) {
    if (!extension)
        return "other";
    if (exports.typescriptExtensions.includes(extension))
        return "typescript";
    if (exports.markdownExtensions.includes(extension))
        return "markdown";
    return "other";
};
exports.getWriterType = getWriterType;
exports.extensions = {
    code: exports.typescriptExtensions,
    data: exports.jsonExtensions,
    text: exports.markdownExtensions,
};
exports.allowedSearchContentExtensions = __spreadArray(__spreadArray(__spreadArray([], exports.typescriptExtensions, true), exports.markdownExtensions, true), exports.jsonExtensions, true);
exports.fileTypes = Object.keys(exports.extensions);
//# sourceMappingURL=extensions.js.map