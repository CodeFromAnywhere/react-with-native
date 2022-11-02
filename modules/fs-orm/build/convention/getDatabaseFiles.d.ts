import { DbFileLocation } from "model-types";
import { MergedQueryConfig, RootDbFolder } from "../types";
/**
 * Needed in case of manual project root, otherwise use SDK!
 *
 * Returns project relative operation base paths
 */
export declare const calculateOperationsObject: (manualProjectRoot: string) => Promise<{
    [x: string]: string;
}>;
export declare const getMergedConfigOperationPath: (mergedConfig: MergedQueryConfig, manualProjectRoot?: string) => Promise<false | string | undefined>;
export declare const getRootFolders: (config: {
    manualProjectRoot?: string | undefined;
    projectRoot: string;
    mergedConfig: MergedQueryConfig;
    operationPath: string | false;
}) => Promise<RootDbFolder[]>;
/**
This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)

 */
export declare const getDatabaseFiles: (modelName: string, mergedConfig: MergedQueryConfig) => Promise<DbFileLocation[]>;
//# sourceMappingURL=getDatabaseFiles.d.ts.map