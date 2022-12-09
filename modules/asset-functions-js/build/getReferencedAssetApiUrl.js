"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferencedAssetApiUrl = void 0;
var api_1 = require("api");
var getReferencedAssetApiUrl = function (apiUrl, projectRelativeReferencingFilePath, referencingFileRelativeAssetPath, 
/**
 * If true, asset will be returned as download
 */
isDownload) {
    if (!apiUrl)
        return undefined;
    return (0, api_1.getGetApiUrl)(apiUrl, "getReferencedAssetGetApi", {
        projectRelativeReferencingFilePath: projectRelativeReferencingFilePath,
        referencingFileRelativeAssetPath: referencingFileRelativeAssetPath,
        isDownload: isDownload ? "1" : undefined,
    });
};
exports.getReferencedAssetApiUrl = getReferencedAssetApiUrl;
//# sourceMappingURL=getReferencedAssetApiUrl.js.map