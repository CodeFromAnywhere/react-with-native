#!/usr/bin/env node
/**
 * takes an operation name or build folder path, then explores all ts files in src folder, finds the matching js file in the build folder, and executes terser from dependency, not from cli
 */
export declare const minifyBuild: ({ operationName, buildFolderPath, }: {
    operationName?: string | undefined;
    buildFolderPath?: string | undefined;
}) => Promise<true | undefined>;
//# sourceMappingURL=general.d.ts.map