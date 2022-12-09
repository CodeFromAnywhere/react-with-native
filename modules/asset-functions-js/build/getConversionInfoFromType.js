"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversionInfoFromType = void 0;
/**
 * Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...
 *
 * Here the extension is decided.
 *
 * NB: we also need to convert the file itself in case of mp3
 */
var getConversionInfoFromType = function (uploadMimeType) {
    var parts = (uploadMimeType === null || uploadMimeType === void 0 ? void 0 : uploadMimeType.split("/")) || [];
    var firstPart = parts.length > 0 ? parts[0] : undefined;
    var lastPart = parts.length > 0 ? parts[parts.length - 1] : undefined;
    console.log({ uploadMimeType: uploadMimeType, lastPart: lastPart });
    if (uploadMimeType === "audio/mp4") {
        return { uploadMimeType: uploadMimeType, targetFormat: "mp3" };
    }
    if (lastPart === "wav") {
        return { uploadMimeType: uploadMimeType, targetFormat: "mp3" };
    }
    if (lastPart === "x-m4a") {
        return { uploadMimeType: uploadMimeType, targetFormat: "mp3" };
    }
    if (firstPart === "audio") {
        return { uploadMimeType: uploadMimeType, targetFormat: "mp3" };
    }
    if (lastPart === "quicktime") {
        return { uploadMimeType: uploadMimeType, targetFormat: "mp4" };
    }
    if (firstPart === "video") {
        return { uploadMimeType: uploadMimeType, targetFormat: "mp4" };
    }
    if (firstPart === "image") {
        return { uploadMimeType: uploadMimeType, targetFormat: "jpg" };
    }
    return { uploadMimeType: uploadMimeType, targetFormat: lastPart, isUnchecked: true };
};
exports.getConversionInfoFromType = getConversionInfoFromType;
//# sourceMappingURL=getConversionInfoFromType.js.map