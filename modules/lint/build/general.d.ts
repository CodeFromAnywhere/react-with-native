#!/usr/bin/env node
/**
 * Should be a collection of small functions that check if all conventions are used and if there isn't used anything that should NOT be used. this can later become a linter. make sure to research how eslint works first
 *
 * Plan:

1) just use my own sdk's as much as possible to provide some handy convention checks in a package
2) later integrate this into vscode, i'm sure this is how it's done

 */
/**
 * this lint can be done before indexation
 */
export declare const preIndexLint: ({ operationFolderPath, }: {
    operationFolderPath: string;
}) => Promise<string[]>;
//# sourceMappingURL=general.d.ts.map