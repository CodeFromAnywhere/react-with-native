import { NestedObject } from "recursive-types";
/**
 * Flattens a nested object by returning an object that hasa the nested path as the key and the leaf as the value
 *
 * TODO: Finish, if needed. seems hard!
 */
export declare const flattenNestedObject: <T>(nestedObject: NestedObject<T>, isLeaf?: ((content: T | NestedObject<T> | undefined) => boolean) | undefined) => void;
//# sourceMappingURL=flattenNestedObject.d.ts.map