#!/usr/bin/env node
/**
Returns an array of absolute file paths of (typescript) files in the src of your operation
 
  TODO: we need a way to explore these glob patterns inside of tsConfig.include.
  until then, just assume we use "src" as the only folder
 */
export declare const getPackageSourcePaths: ({ operationBasePath, ignoreIndexFiles, allTypes, }: {
    operationBasePath: string;
    ignoreIndexFiles?: boolean | undefined;
    /**
     * by default, only searches for ts and tsx files, if this is true, it will search for any type
     */
    allTypes?: boolean | undefined;
}) => Promise<string[]>;
//# sourceMappingURL=getPackageSourcePaths.d.ts.map