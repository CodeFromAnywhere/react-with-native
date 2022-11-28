/**
 * an exported test can be a single callback, or multiple callbacks that promise to tell you whether the test has passed or not
 */
export declare type Test = (() => Promise<boolean>) | (() => Promise<boolean>)[];
//# sourceMappingURL=types.d.ts.map