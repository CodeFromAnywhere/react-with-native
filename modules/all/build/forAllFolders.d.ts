import { BaseConfig } from "k-explore";
export declare type DirectoryType = "git" | "operations" | "folder" | "file";
export declare type AllInputType = BaseConfig & {
    onlyRoot?: boolean;
    /**
     * if given, folders are selected for you based on some preset
     */
    type?: DirectoryType;
    /**
     * search for a specific filename, everywhere
     */
    fileName?: string;
    /**
     * search for a specific foldername, everywhere
     */
    folderName?: string;
    /**
     * if given, callback will be executed for every matching folder
     */
    callback?: (folderPath: string, index: number) => void;
    /**
     * if given, command will be executed in every matching folder. the folder where the command is executed is also provided as a variable $LOCATION
     */
    command?: string;
    /**
     * if you run a command, setting this to true, will make sure the results are shown
     */
    shell?: boolean;
    ignore?: string | string[];
};
/**
 * executes a command or callback in every folder of a certain type. Supports git repos and operations now
 */
export declare const forAllFolders: ({ type, callback, basePath, onlyRoot, command, shell, fileName, folderName, ignore, }: AllInputType) => Promise<void>;
//# sourceMappingURL=forAllFolders.d.ts.map