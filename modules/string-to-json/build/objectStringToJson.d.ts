import { JSONValue } from "./types";
/**
 * takes an object string and parses it to JSON
 *
 * Instead of requiring objects to be in JSON format, they can be in the following format:
 *
 * key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }
 *
 * NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`
 */
export declare const objectStringToJson: (string: string) => {
    [key: string]: JSONValue;
};
//# sourceMappingURL=objectStringToJson.d.ts.map