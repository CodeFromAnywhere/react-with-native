#!/usr/bin/env node
/**
generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

 */
export declare const generateSimpleIndex: ({ operationName, manualProjectRoot, }: {
    /**
     * if given, just exports * from those
     */
    operationName: string;
    manualProjectRoot?: string | undefined;
}) => Promise<string | undefined>;
//# sourceMappingURL=generateSimpleIndex.d.ts.map