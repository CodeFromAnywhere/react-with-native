#!/usr/bin/env node
/**
 * Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.
 
NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

 */
export declare const generateNamedIndex: ({ operationName, manualProjectRoot, }: {
    manualProjectRoot?: string | undefined;
    operationName: string;
}) => Promise<void>;
//# sourceMappingURL=generateNamedIndex.d.ts.map