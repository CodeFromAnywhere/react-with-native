import { path } from "fs-util-js";
import { apiUrl } from "server-api-url";
import { getReferencedAssetApiUrl } from "asset-functions-js";

/**
 * gets the renderable asset url from the relative url
 */
export const getUrlFromRelativeUrl = (
  relativeUrl: string,
  relativeUrlStrategy: "api" | "static",
  projectRelativeBaseFolderPath: string,
  projectRelativeMarkdownFilePath: string
) => {
  if (relativeUrlStrategy === "static")
    return path.join(projectRelativeBaseFolderPath, relativeUrl);

  const relativeUrlWithoutStart = relativeUrl.slice(2);

  return getReferencedAssetApiUrl(
    apiUrl,
    projectRelativeMarkdownFilePath,
    relativeUrlWithoutStart
  );
};
