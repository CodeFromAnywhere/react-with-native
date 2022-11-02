import { ParsedPath } from "fs-util";
import { DbFileLocation } from "model-types";
import { RootDbFolder } from "../types";
/**
 If it all seems good, I can delete this. This is the old method of looking just in the folder itself, it's replaced by looking in all subfolders as well, recursively.
 */
export declare const getWildcardDbFileLocations__OLD: (options: {
    modelName: string;
    parsedPath: ParsedPath;
    operationName: string | null;
    projectRoot: string;
    rootFolder: RootDbFolder;
}) => Promise<DbFileLocation[]>;
export declare const getWildcardDbFileLocations: (options: {
    modelName: string;
    parsedPath: ParsedPath;
    operationName: string | null;
    projectRoot: string;
    rootFolder: RootDbFolder;
}) => Promise<DbFileLocation[]>;
//# sourceMappingURL=getWildcardDbFileLocations.d.ts.map