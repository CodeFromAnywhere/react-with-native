export declare type MapFn<T, U> = (currentValue: T, index: number, array: T[]) => U;
/**
 Lets you map over any array with a async function while setting a max. concurrency

 Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70
 */
export declare const mapMany: <T, U>(array: T[], mapFn: (item: T, index: number, array: T[]) => Promise<U>, limit?: number) => Promise<U[]>;
//# sourceMappingURL=mapMany.d.ts.map