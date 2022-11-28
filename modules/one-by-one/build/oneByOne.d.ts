#!/usr/bin/env node
/**
 * for every item in an array, executes an async callback, one by one.
 * promises an array of the results of every callback once it's done
 */
export declare const oneByOne: <T, U>(array: T[], callback: (instance: T, index: number) => Promise<U>) => Promise<U[]>;
//# sourceMappingURL=oneByOne.d.ts.map