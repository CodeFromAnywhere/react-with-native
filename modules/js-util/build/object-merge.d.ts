/**
 * merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.
 *
 * In short: merges two objects, for every parameter, use the default as a fallback
 *
 * DEPRECATED: in favor of mergeObjects
 */
export declare const mergeObjectParameters: <T>(config: T | undefined, defaults: T | undefined) => Partial<T>;
/**
 * merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.
 *
 * Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely
 *
 * Please note that you can provide partial objects as well, as long as you are sure that the final object is full, the type interface is correct.
 *
 * Please note that if a latter object has a key which holds "undefined", it will NOT overwrite it. Anything else WILL
 */
export declare const mergeObjects: <T extends {
    [key: string]: any;
}>(...objects: (Partial<T> | undefined)[]) => T | undefined;
//# sourceMappingURL=object-merge.d.ts.map