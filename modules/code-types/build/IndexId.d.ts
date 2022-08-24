import { OperationPathParse } from "./PathMetaData";
/**
 * identifier of any index type interface
 *
 * TODO: should rename to OperationIndexModelType
 */
export declare type IndexId = {
    /**
     * unique id of the model
     */
    id: string;
    /**
     * name (identifier) of the model
     */
    name: string;
    /**
     * kebab-case variant of the name
     */
    slug: string;
} & OperationPathParse;
export declare const dbStorageMethodsConst: readonly ["jsonMultiple", "jsonSingle", "markdown", "keyValueMarkdown", "csv"];
export declare const dbStorageMethods: string[];
export declare type DbStorageMethod = typeof dbStorageMethodsConst[number];
//# sourceMappingURL=IndexId.d.ts.map