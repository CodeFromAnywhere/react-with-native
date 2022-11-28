/**
 * Gets all children keys of a nested object at a certain (nested) location in the nested object
 *
 * `nestedObject` should extend the `NestedObject`.
 *
 * The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.
 */
export declare const getKeysAtPathFromNestedObject: <T extends {
    [key: string]: any;
}>(nestedObject: T, objectPath: string) => string[];
//# sourceMappingURL=getKeysAtPathFromNestedObject.d.ts.map