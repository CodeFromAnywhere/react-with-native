import { Creation, DbFileLocation, Storing } from "model-types";
import { MergedQueryConfig } from "../types";
export declare type ItemPerFileObject<T extends {
    [key: string]: any;
}> = {
    [absolutePath: string]: {
        dbFileLocation: DbFileLocation;
        items: Storing<T>[];
    };
};
/**
 * Used for `set` and `upsert`. Groups creation items into an object where keys are file paths and values are items that need to be stored
 */
export declare const groupByFile: <T extends {
    [key: string]: any;
}>(creationItems: Creation<T>[], mergedConfig: MergedQueryConfig, modelName: string) => Promise<ItemPerFileObject<T>>;
//# sourceMappingURL=groupByFile.d.ts.map