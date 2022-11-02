#!/usr/bin/env node
export declare const sum: (items: number[]) => number;
/**
 * function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.
 */
export declare const apply: <T>(functions: ((input: T) => T)[], value: T) => T;
/**
 * creates an enum object from a readonly const array so you don't have to
 * ------
 * const taskNames = ["a","b","c"] as const;
 * type TaskNames = typeof taskNames[number];
 * const enummm = createEnum(taskNames);
 * (value of enummm: { a: "a", b: "b", c: "c" })
 */
export declare const createEnum: <T extends readonly string[]>(array: T) => { [K in T[number]]: K; };
/**
 * key should be of type string!
 *
 * input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
 * groupByKey(input, "path")
 * ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}
 */
export declare const groupByKey: <T extends {
    [key: string]: any;
}>(array: T[], key: keyof T) => {
    [key: string]: T[];
};
/**
 * checks if all items in an array are true
 */
export declare const isAllTrue: (array: boolean[]) => boolean;
/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */
export declare function onlyUnique<T extends unknown>(value: T, index: number, self: T[]): boolean;
/**
 * function that returns a filter function that can be used as a filter for any array. removes duplicates.
 *
 * optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well
 *
 *
 */
export declare const onlyUnique2: <U>(isEqualFn?: ((a: U, b: U) => boolean) | undefined) => <T extends U>(value: T, index: number, self: T[]) => boolean;
/**
 * if something is not an array, returns it as the first element of an array
 *
 * if the input is undefined, an empty array will be returned.
 *
 * NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.
 */
export declare const makeArray: <T>(...arrayOrNotArray: (T | T[] | undefined)[]) => T[];
/**
 * takes any type T or an array of T and returns T or the first of the array (which is T)
 */
export declare const takeFirst: <T>(arrayOrNot: T | T[]) => T;
/**
 * takes an object and a subset of its keys and returns a subset of that object
 *
 * input: { x: "a", y: "b", z: "c" } and ["x"]
 *
 * output: { x: "a" }
 */
export declare const getSubsetFromObject: <T>(object: {
    [key: string]: T;
}, keys: string[]) => {
    [key: string]: T;
};
/**
 * useful for cli's that only take strings. This creates an object from a string
 *
 * input: "x:a, y:b, z:c"
 * output: { x: "a", y: "b", z: "c" }
 *
 * TODO: would be nice if we can validate this string immediately using a JSON SCHEMA
 */
export declare const getObjectFromParamsString: (paramsString: string) => {
    [x: string]: string;
};
/** sums all parameters in two objects together */
export declare const sumObjectParameters: <TObject extends {
    [key: string]: number;
}>(object1: TObject, object2: TObject) => TObject;
/**
 * sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined
 */
export declare const sumAllKeys: <T extends {
    [key: string]: number | undefined;
}>(objectArray: T[], keys: (keyof T)[]) => T;
/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */
export declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
//# sourceMappingURL=general.d.ts.map