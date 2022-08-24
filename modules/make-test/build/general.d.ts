#!/usr/bin/env node
declare type JSONSchema = unknown;
/**
 * TODO: need validate-json-schema. also this can be its own little package, as it can be used in many other places
 *
 * not sure if this should be part of make-test at all, because we want operations to be able to operate independently without the os, right? so then it won't work because you don't always have indexes...
 */
export declare const isResultOfInterface: <TResult>(result: TResult, jsonSchema: JSONSchema) => boolean;
/**
 * create a test that is testable with `runAllTests`...
 */
export declare const makeTest: <TResult>(testFunction: (() => Promise<TResult>) | (() => TResult), isValid?: ((result: TResult) => boolean) | undefined) => () => Promise<boolean>;
export {};
//# sourceMappingURL=general.d.ts.map