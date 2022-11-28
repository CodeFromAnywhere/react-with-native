export declare type MappedObject<T> = {
    [mapKey: string]: T;
};
/**
 * Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.
 *
 * NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!
 */
export declare const createMappedObject: <T extends {
    [key: string]: any;
}, U = T>(array: T[], mapKey: keyof T, mapFn?: ((value: T, array: T[]) => U) | undefined) => MappedObject<U>;
//# sourceMappingURL=createMappedObject.d.ts.map