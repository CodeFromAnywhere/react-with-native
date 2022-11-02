import { MergedQueryConfig } from "../types";
import { Storing, DbFileLocation, AugmentedAnyModelType } from "model-types";
/**
 * Used by `groupByFile`, which is used for `set` (and thus, also `update`) and `upsert`: determines the new file location.
 *
 * Applies the convention to get the db-file-location of an item
 *
 * Based on the merged config:
 *
 * - if `operationRelativePath` is specified, gets a filePath in the operation
 * - if `projectRelativePath` is specified, gets a filepath in the project
 * - otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)
 *
 * Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.
 *
 * NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...
 */
export declare const getDbFileLocation: (storedItem: Storing<AugmentedAnyModelType>, operationName: null | string, mergedConfig: MergedQueryConfig, modelName: string) => Promise<DbFileLocation | undefined>;
//# sourceMappingURL=getDbFileLocation.d.ts.map