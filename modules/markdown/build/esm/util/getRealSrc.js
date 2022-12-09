import { isPathRelative } from "fs-util-js";
import { getUrlFromRelativeUrl } from "../getUrlFromRelativeUrl.js";
/**
 * Based on markdown info, gest the real source for an asset
 */
export var getRealSrc = function (src, config) {
    // src from static folder of next.js
    var relativeUrlStrategy = config.isDev || !config.isStatic ? "api" : "static";
    if (!src)
        return undefined;
    if (isPathRelative(src) &&
        config.projectRelativeBaseFolderPath &&
        config.projectRelativeMarkdownFilePath) {
        return getUrlFromRelativeUrl(src, relativeUrlStrategy, config.projectRelativeBaseFolderPath, config.projectRelativeMarkdownFilePath);
    }
    return src;
};
