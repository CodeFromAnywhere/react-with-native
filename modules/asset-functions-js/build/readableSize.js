"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readableSize = void 0;
var readableSize = function (sizeBytes) {
    if (sizeBytes < 1024)
        return "".concat(sizeBytes, " bytes");
    if (sizeBytes < 1024 * 1024)
        return "".concat(Math.round(sizeBytes / 1024), " kb");
    if (sizeBytes < 1024 * 1024 * 1024)
        return "".concat(Math.round(sizeBytes / (1024 * 1024)), " mb");
    if (sizeBytes < 1024 * 1024 * 1024 * 1024)
        return "".concat(Math.round(sizeBytes / (1024 * 1024 * 1024)), " gb");
    if (sizeBytes < 1024 * 1024 * 1024 * 1024 * 1024)
        return "".concat(Math.round(sizeBytes / (1024 * 1024 * 1024 * 1024)), " tb");
    return "waaaay to big";
};
exports.readableSize = readableSize;
//# sourceMappingURL=readableSize.js.map