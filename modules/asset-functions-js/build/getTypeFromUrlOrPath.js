"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeFromUrlOrPath = void 0;
var fs_util_js_1 = require("fs-util-js");
var text_or_binary_1 = require("text-or-binary");
/**
 * We are assuming the asset name and extsion appear at the end of the URL
 */
var getTypeFromUrlOrPath = function (urlOrPath) {
    var extension = (0, fs_util_js_1.getExtension)(urlOrPath);
    if (["mp3", "m4a", "wav"].includes(extension))
        return "audio";
    if (["mp4", "avi", "mov"].includes(extension))
        return "video";
    if (["jpeg", "jpg", "png", "gif", "svg"].includes(extension))
        return "image";
    if ((0, text_or_binary_1.isText)(urlOrPath))
        return "text";
    return "other";
};
exports.getTypeFromUrlOrPath = getTypeFromUrlOrPath;
//# sourceMappingURL=getTypeFromUrlOrPath.js.map