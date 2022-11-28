export declare type Json = string | number | boolean | null | {
    [key: string]: Json;
} | Json[];
/**
 * stringifies simple json things if the json is one of them, otherwise returns undefined
 */
export declare const getSimpleJsonString: (json: Json) => string | undefined;
//# sourceMappingURL=util.d.ts.map