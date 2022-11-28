/**
 * Creates a typescript file index in 3 steps
 * 1) Introspects the file
 * 2) Calculates all needed information about it
 * 3) Saves the result to /db/******.json in the operation root

 NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

 NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?
 
 TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.

 */
export declare const indexTypescript: (props: {
    showLogging?: boolean | undefined;
    /**
     * filepaths of files to index. must be files from the same operation.
     */
    filePaths: string[];
    manualProjectRoot: string | null;
}) => Promise<void>;
//# sourceMappingURL=indexTypescript.d.ts.map