export declare type StringEndsWith<TString extends string, TEnd extends string> = TString extends `${string}${TEnd}` ? true : false;
/**
 * Removes the last parameter of a tuple type
 *
 * See https://stackoverflow.com/questions/72299206/typescript-how-to-remove-the-last-parameter-of-a-function-type
 */
export declare type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;
/**
 * Removes the first parameter of a tuple type
 *
 * Made based on pop
 */
export declare type Shift<T extends any[]> = T extends [any, ...infer U] ? U : never;
/**
 * Removes promise from a type
 *
 * Examples:
 *
 * ```ts
type X = WithoutPromise<Promise<string>> //X is string
type Y = WithoutPromise<string> // Y is string
```
 */
export declare type WithoutPromise<T> = T extends Promise<infer U> ? U : T;
//# sourceMappingURL=util.d.ts.map