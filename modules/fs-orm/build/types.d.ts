import { DbStorageMethod } from "code-types";
export declare type Keys<TObject> = Extract<keyof TObject, string>;
/**
 * Remove combines get and set: after getting it filters the results with a where, and then sets the filtered results as the new data
 */
export declare type DbRemove<TModels> = <TModelName extends Keys<TModels>>(model: TModelName, where: (content: TModels[TModelName]) => boolean, config?: GetConfig) => Promise<{
    success: boolean;
    amountRemoved?: number;
    message?: string;
}>;
export declare type DefaultConfig<TModels> = {
    defaultDbStorageMethods: {
        [key in Keys<TModels>]?: DbStorageMethod;
    };
    /**
     * provide which models should have a different storage strategy
     */
    defaults?: {
        [key in Keys<TModels>]?: GetConfig;
    };
};
export declare type DbUpdate<TModels> = <TModelName extends Keys<TModels>>(model: TModelName, where: (content: TModels[TModelName]) => boolean, update: (content: TModels[TModelName]) => TModels[TModelName], config?: GetConfig) => Promise<{
    rowsUpdated?: number;
    data?: TModels[TModelName][];
    success: boolean;
    message?: string;
}>;
export declare type DbUpsert<TModels> = <TModelName extends Keys<TModels>>(model: TModelName, where: (content: TModels[TModelName]) => boolean, update: (content: TModels[TModelName] | undefined) => TModels[TModelName], config?: GetConfig) => Promise<{
    rowsUpdated?: number;
    data?: TModels[TModelName][];
    success: boolean;
    message?: string;
    overwrite?: boolean;
    action?: "insert" | "update";
}>;
/**
 * Finds all files that adhere to the convention and combines them into an array of items of this model
 */
export declare type DbGet<TModels> = <TModelName extends Keys<TModels>>(model: TModelName, config?: GetConfig) => Promise<TModels[TModelName][]>;
/**
 *
 */
export declare type DbSet<TModels> = <TModelName extends Keys<TModels>>(model: TModelName, data: TModels[TModelName][]) => Promise<{
    success: boolean;
    message?: string;
}>;
/**
 * gets the models from anywhere, then pushes, then sets
 */
export declare type DbPush<TModels> = <TModelName extends Keys<TModels>>(model: TModelName, data: TModels[TModelName]) => Promise<{
    success: boolean;
    overwrite?: boolean;
    message?: string;
}>;
export declare type Db<TModels> = {
    get: DbGet<TModels>;
    set: DbSet<TModels>;
    push: DbPush<TModels>;
    remove: DbRemove<TModels>;
    update: DbUpdate<TModels>;
    upsert: DbUpsert<TModels>;
};
export declare type GetConfig = {
    /**
     * if specified, only looks for `{kebabCase(model)}s?.json` in these folders
     * if not specified, looks for `{kebabCase(model)}s?.json` in the root path
     */
    folders?: string[];
    /**
     * if specified, this will be used as the root path to find your data in
     *
     * if not specified, uses getRootPath("information")
     */
    manualProjectRoot?: string;
    /**
     * all files in folders
     */
    all?: boolean;
    /**
     * if specified, searches all in all or specific operation `index/{kebabCase(model)}`
     *
     * if `*` is specified, all operations will be searched
     *
     * if an operation is specified, that operation will be searched.
     * make sure to use the operation folder name
     */
    operation?: "*" | `${string}`;
    /**
     * if specified (in combination with operation), only parses these db files
     */
    operationIndexFiles?: string | string[];
    /**
     * index files to ignore
     */
    ignoreOperationIndexFiles?: string | string[];
};
//# sourceMappingURL=types.d.ts.map