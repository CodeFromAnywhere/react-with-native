import { DbFileLocation } from "model-types";
import { DbStorageMethod } from "code-types";
/**
 * Gets the stored data from any file with any storage method, and augments the modelLocation onto it...
 *
 * Also augments the `name`, `slug` and `categoryStackCalculated` onto this if the `dbStorageMethod` is `markdown` or `jsonSingle` and if `operationRelativePath` is not set
 */
export declare const getAugmentedData: <T>(dbFileLocation: DbFileLocation, dbStorageMethod: DbStorageMethod) => Promise<T[] | null>;
//# sourceMappingURL=getAugmentedData.d.ts.map