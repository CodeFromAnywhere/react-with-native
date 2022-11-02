/**
 * Handy function to get the keys of an object, but typed.
 *
 * NB: The only difference from Object.keys is that this returns the keys in a typesafe manner
 */
export declare const getObjectKeysArray: <TObject extends {
    [key: string]: any;
}>(object: TObject) => Extract<keyof TObject, string>[];
//# sourceMappingURL=getObjectKeysArray.d.ts.map