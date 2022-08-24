"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryPath = void 0;
var getQueryPath = function (parsedUrlQuery) {
    var paths = parsedUrlQuery === null || parsedUrlQuery === void 0 ? void 0 : parsedUrlQuery.paths;
    var queryPath = Array.isArray(paths)
        ? paths.join("/")
        : paths === undefined
            ? ""
            : paths;
    return queryPath;
};
exports.getQueryPath = getQueryPath;
//# sourceMappingURL=getQueryPath.js.map