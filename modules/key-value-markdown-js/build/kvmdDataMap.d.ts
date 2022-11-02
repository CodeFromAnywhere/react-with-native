import { KeyValueMarkdownModelType } from "model-types";
/**
 * DEPRECATED: probably never needed, unless I make it useful
 *
 * mapper function to give a kvmd data object other parameters.
 *
 * NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.
 */
export declare const kvmdDataMap: <T extends {
    [key: string]: string | string[] | undefined;
}>(data: KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
    /**
     * key by default
     */
    keyName?: string | undefined;
    /**
     * value by default
     */
    valueName?: string | undefined;
    /**
     * comment by default
     */
    commentName?: string | undefined;
    /**
     * categoryStackCalculated by default
     */
    categoryStackCalculatedName?: string | undefined;
}) => T[];
//# sourceMappingURL=kvmdDataMap.d.ts.map