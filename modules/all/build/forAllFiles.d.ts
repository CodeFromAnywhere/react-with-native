export declare type ForAllFilesConfig = {
    filePaths: string[];
    /**
     * if given, callback will be executed for every matching file
     */
    callback?: (filePath: string) => void;
    /**
     * if given, command will be executed in every matching file. the folder where the command is executed is also provided as a variable $LOCATION
     */
    command?: string;
};
/**
 * executes a command or callback for every file
 *
 * in commands, $LOCATION is provided as env variable, and command is executed in the dir of the file
 *
 *
 */
export declare const forAllFiles: ({ filePaths, callback, command, }: ForAllFilesConfig) => Promise<void>;
//# sourceMappingURL=forAllFiles.d.ts.map