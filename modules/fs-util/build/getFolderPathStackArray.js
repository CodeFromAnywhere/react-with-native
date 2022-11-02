"use strict";
/**
 * NB: I already have this somewhere else but couldn't find it!
 *
 * If the path is /a/random/path
 *
 * The result of this function will be:
 *
 * ['/a', '/a/random', '/a/random/path']
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderPathStackArray = void 0;
var js_util_1 = require("js-util");
var getFolderPathStackArray = function (folderPath) {
    var chunks = (0, js_util_1.trimSlashes)(folderPath).split("/");
    var result = chunks.map(function (_, index, array) {
        return "/" + array.slice(0, index + 1).join("/");
    });
    return result;
};
exports.getFolderPathStackArray = getFolderPathStackArray;
//# sourceMappingURL=getFolderPathStackArray.js.map