import { DbStorageMethod } from "code-types";
import { MergedQueryConfig } from "../types";
/**
 * Returns the pattern or an exact relative path that the file(s) should be stored at.
 *
 * If a pattern contains a star at the place of the filename, it will search the folder recursively for all files with the extension in the pattern.
 *
 * Returning relative path has no preceding slash
 */
export declare const getLocationPattern: (dbStorageMethod: DbStorageMethod, modelName: string, mergedConfig: MergedQueryConfig) => string | undefined;
//# sourceMappingURL=getLocationPattern.d.ts.map