import { isPathRelative } from "fs-util-js";
import { getUrlFromRelativeUrl } from "../getUrlFromRelativeUrl";
import { MarkdownParseRenderConfig } from "../types";

/**
 * Based on markdown info, gest the real source for an image
 */
export const getRealSrc = (
  src: string | undefined,
  config: MarkdownParseRenderConfig
) => {
  // src from static folder of next.js
  const relativeUrlStrategy =
    config.isDev || !config.isStatic ? "api" : "static";

  const realSrc = src
    ? isPathRelative(src)
      ? getUrlFromRelativeUrl(
          src,
          relativeUrlStrategy,
          config.projectRelativeBaseFolderPath,
          config.projectRelativeMarkdownFilePath
        )
      : src
    : undefined;

  return realSrc;
};
