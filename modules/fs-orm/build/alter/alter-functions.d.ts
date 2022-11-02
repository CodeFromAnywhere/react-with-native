import { DbStorageMethod } from "code-types";
import { AugmentedAnyModelType, Storing, DbFileLocation } from "model-types";
import { AnyModelObject, DbQueryResult } from "../types";
/**
 * upsert an item into storage in any storage method
 */
export declare const upsertItems: <TModels extends AnyModelObject = any, TModelName extends string = any>(dbStorageMethod: DbStorageMethod, dbFileLocation: DbFileLocation, storingItems: Storing<TModels[TModelName]> | Storing<TModels[TModelName]>[], onlyInsert?: boolean) => Promise<DbQueryResult>;
/**
 * Function that lets you remove items from one specific file, for any storage method
 */
export declare const removeMultiple: (dbStorageMethod: DbStorageMethod, dbFileLocation: DbFileLocation, removeWhere: (content: AugmentedAnyModelType) => boolean) => Promise<DbQueryResult>;
/**
 * Alters a csv
 */
export declare const alterCsv: AlterFunction;
/**
 * Alters a json single file
 */
export declare const alterJsonSingle: AlterFunction;
/**
 * Safely gets the length of something
 */
export declare const getLength: (array: any[]) => number;
/**
 * Alters a json single file
 */
export declare const alterJsonMultiple: AlterFunction;
declare type AlterFunction = (...parameters: AlterParameters) => Promise<DbQueryResult>;
declare type AlterParameters = [
    dbFileLocation: DbFileLocation,
    alterFn: (storedData: Storing<AugmentedAnyModelType>[]) => {
        newStoredData: Storing<AugmentedAnyModelType>[];
    } & DbQueryResult
];
export declare const alterKeyValueMarkdown: AlterFunction;
/**
 * Alters a markdown file
 */
export declare const alterMarkdown: AlterFunction;
/**
 * low level function that alters data from any storage method at a certain location
 *
 * comprises all dbStorageMethods
 */
export declare const alterAny: (dbStorageMethod: DbStorageMethod, dbFileLocation: DbFileLocation, alterFn: (storedData: Storing<AugmentedAnyModelType>[]) => {
    newStoredData: Storing<AugmentedAnyModelType>[];
} & DbQueryResult) => Promise<DbQueryResult>;
export {};
//# sourceMappingURL=alter-functions.d.ts.map