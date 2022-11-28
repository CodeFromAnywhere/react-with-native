#!/usr/bin/env node
/**
 * spawns a child process and returns its output after it's done
 */
export declare const runChildProcess: (config: {
    operationFolderName: string;
    /**
     * the location of the script in the build folder
     * NB: this must be a CLI that that actually executes the function!
     */
    scriptFileName: string;
    /**
     * all arguments you wish to pass to the script. If an argument is undefined, it will not be passed. Arguments to be passed must be strings
     */
    args?: (string | undefined)[] | undefined;
}) => Promise<(string | null)[] | undefined>;
//# sourceMappingURL=runChildProcess.d.ts.map