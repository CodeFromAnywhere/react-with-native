import { isPathRelative } from "fs-util-js";
import { getUrlFromRelativeUrl } from "../getUrlFromRelativeUrl.js";
/**
 * Based on markdown info, gest the real source for an image
 */
export var getRealSrc = function (src, config) {
    // src from static folder of next.js
    var relativeUrlStrategy = config.isDev || !config.isStatic ? "api" : "static";
    var realSrc = src
        ? isPathRelative(src)
            ? getUrlFromRelativeUrl(src, relativeUrlStrategy, config.projectRelativeBaseFolderPath, config.projectRelativeMarkdownFilePath)
            : src
        : undefined;
    return realSrc;
};
