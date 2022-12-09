"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionFromAsset = void 0;
var fs_util_js_1 = require("fs-util-js");
/**
 * Returns a preliminary filename, based on the `Asset`
 */
var getExtensionFromAsset = function (asset) {
    var extensionFromType = asset.type === "audio"
        ? "mp3"
        : asset.type === "image"
            ? "jpeg"
            : asset.type === "video"
                ? "mp4"
                : undefined;
    var extension = extensionFromType
        ? extensionFromType
        : asset.originalFilename
            ? (0, fs_util_js_1.getExtension)(asset.originalFilename)
            : asset.relativePath
                ? (0, fs_util_js_1.getExtension)(asset.relativePath)
                : undefined;
    return extension;
};
exports.getExtensionFromAsset = getExtensionFromAsset;
//# sourceMappingURL=getExtensionFromAsset.js.map