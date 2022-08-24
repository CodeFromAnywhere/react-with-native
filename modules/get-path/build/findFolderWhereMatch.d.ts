#!/usr/bin/env node
/**
 * recursive. goes up a folder until it finds a package.json
 */
export declare const findFolderWhereMatch: <T>(fullSourcePath: string, matchFunction: (folderPath: string) => T) => {
    folderPath: string;
    matchResult: T;
} | undefined;
//# sourceMappingURL=findFolderWhereMatch.d.ts.map