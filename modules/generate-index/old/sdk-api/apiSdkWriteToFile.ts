import { db } from "database";
import { fs, path } from "fs-util";
import { getOperationPath } from "get-path";
import { apiSdkGetString } from "./apiSdkGetString";

export type Success = boolean;
/**
 * - finds all functions
 * - makes an api sdk string for them
 * - writes that to a file
 */
export const apiSdkWriteToFile = async (config?: {
  outputPath?: string;
  manualProjectRoot?: string;
}): Promise<Success> => {
  // TODO: filter this to only the stuff needed
  const tsFunctions = await db.get("TsFunction");
  const apiSdkString = apiSdkGetString(tsFunctions);
  const manualProjectRoot = config?.manualProjectRoot;

  const apiSdkOperationPath = await getOperationPath("sdk-api", {
    manualProjectRoot,
  });
  const realOutputPath = config?.outputPath
    ? config?.outputPath
    : apiSdkOperationPath
    ? path.join(apiSdkOperationPath, "src", "sdk-api.ts")
    : undefined;
  if (!realOutputPath) return false;

  await fs.writeFile(realOutputPath, apiSdkString, { encoding: "utf8" });

  return true;
};
