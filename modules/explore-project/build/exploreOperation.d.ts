/**
for every package.json it finds, it explores the root, src, and docs.
- in src, index is ignored
- in docs, only md is found
- in the root, only md is found
- for every file in src, it shows and finds all functions, interfaces and variables, through the indexation from it
 */
export declare const exploreOperation: (operationBasePath: string) => Promise<TextJson[]>;
//# sourceMappingURL=exploreOperation.d.ts.map