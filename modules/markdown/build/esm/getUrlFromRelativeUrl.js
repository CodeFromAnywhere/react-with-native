import { path } from "fs-util-js";
import { apiUrl } from "server-api-url";
import { getReferencedAssetApiUrl } from "asset-functions-js";
/**
 * gets the renderable asset url from the relative url
 */
export var getUrlFromRelativeUrl = function (relativeUrl, relativeUrlStrategy, projectRelativeBaseFolderPath, projectRelativeMarkdownFilePath) {
    if (relativeUrlStrategy === "static")
        return path.join(projectRelativeBaseFolderPath, relativeUrl);
    var relativeUrlWithoutStart = relativeUrl.slice(2);
    return getReferencedAssetApiUrl(apiUrl, projectRelativeMarkdownFilePath, relativeUrlWithoutStart);
};
