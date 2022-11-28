import { ChildObject } from "recursive-types";
export declare type NestedQueryPathObject<T> = ChildObject<T & {
    queryPathChunk: string;
}>;
/**
 * Any object containing the `queryPath` property.
 *
 * DEPRECATED: Very buggy, could never get it to work, probably better th throw it away. Check the code-story of 2022-11-20 for more info
 */
export declare type QueryPathObject = {
    queryPath: string;
    [key: string]: any;
};
export declare const nestifyQueryPathObjectRecursive: <T extends QueryPathObject>(queryPathObjects: T[], level?: number) => NestedQueryPathObject<T>[];
//# sourceMappingURL=nestifyQueryPathObjectRecursive.d.ts.map