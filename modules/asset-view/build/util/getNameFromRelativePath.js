"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameFromRelativePath = void 0;
var fs_util_js_1 = require("fs-util-js");
var getNameFromRelativePath = function (relativePath) {
    var filename = relativePath.split("/").pop();
    var filenameWithoutExtension = (0, fs_util_js_1.withoutExtension)(filename);
    return filenameWithoutExtension;
};
exports.getNameFromRelativePath = getNameFromRelativePath;
//# sourceMappingURL=getNameFromRelativePath.js.map