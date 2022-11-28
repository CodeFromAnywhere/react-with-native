#!/usr/bin/env node
/**
 * takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes
 *
 * NB: has a side effect: it also updates the package.json to include all needed dependencies.
 */
export declare const findAndWriteImportsExports: (operationBasePath: string, manualProjectRoot?: string) => Promise<void>;
//# sourceMappingURL=findAndWriteImportsExports.d.ts.map