/**
 * takes an object and a subset of its keys and returns a subset of that object
 *
 * input: { x: "a", y: "b", z: "c" } and ["x"]
 *
 * output: { x: "a" }
 */
export declare const getSubsetFromObject: <T, K extends readonly (keyof T)[]>(object: T, keys: K) => Pick<T, K[number]>;
//# sourceMappingURL=getSubsetFromObject.d.ts.map