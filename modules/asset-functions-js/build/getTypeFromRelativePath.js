"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeFromRelativePath = void 0;
var fs_util_js_1 = require("fs-util-js");
var getTypeFromRelativePath = function (relativePath) {
    var extension = (0, fs_util_js_1.getExtension)(relativePath);
    if (extension === "mp3")
        return "audio";
    if (extension === "mp4")
        return "video";
    if (extension === "jpeg")
        return "image";
    return "other";
};
exports.getTypeFromRelativePath = getTypeFromRelativePath;
//# sourceMappingURL=getTypeFromRelativePath.js.map