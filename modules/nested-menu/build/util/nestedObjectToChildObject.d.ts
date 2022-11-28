import { ChildObject, NestedObject } from "recursive-types";
/**
 * if T is an object, provide __check as one of its properties, to make it possible to check that it's a leaf. This property will be omitted in the ChildObject array
 */
export declare const nestedObjectToChildObject: <T extends {
    [key: string]: any;
}>(nestedObject: NestedObject<T>, mapFolderToT: (nestedObject: NestedObject<T>, key: string) => T, stack?: string[]) => ChildObject<T>[];
//# sourceMappingURL=nestedObjectToChildObject.d.ts.map