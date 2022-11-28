"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreferredExtensionFromType = void 0;
/**
 * Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...
 *
 * Here the extension is decided.
 *
 * NB: we also need to convert the file itself in case of mp3
 */
var getPreferredExtensionFromType = function (type) {
    if (type === "audio/mp4")
        return "mp3";
    return type === null || type === void 0 ? void 0 : type.split("/").pop();
};
exports.getPreferredExtensionFromType = getPreferredExtensionFromType;
//# sourceMappingURL=getPreferredExtensionFromType.js.map