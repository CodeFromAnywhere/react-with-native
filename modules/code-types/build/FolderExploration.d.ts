import { MarkdownParse } from "./MarkdownParse";
import { OperationIndex } from "./OperationIndex";
import { TsInterface } from "./TsInterface";
import { TypescriptIndex } from "./TypescriptIndex";
import { PathMetaData } from "./PathMetaData";
/**
 * suggested type for menu is FolderExploration[]
 *
 * NB: recursive!
 */
export declare type FolderExploration = {
    type: "folder" | "operation" | "operationFolder" | "markdown" | "typescript" | "function" | "interface" | "variable";
    name: string;
    /** path to the folder, operation, operationFolder, or file. functions, interfaces or variables direct to the file they are defined in */
    relativeProjectPath: string;
    /**
     * Every FolderExploration has children, which are simply the files/folders that can be found in there. The children of files are functions, interfaces and variables for typescript files. Markdownfiles don't get any children (although we could childify the outline of the file, maybe, later...)
     */
    children?: FolderExploration[];
};
export declare type ExplorationDetails = {
    success?: boolean;
    response?: string;
    markdown?: MarkdownParse;
    pathMetaData?: PathMetaData;
    operationIndexes?: OperationIndex[];
    index: TsInterface[];
} & Partial<TypescriptIndex>;
//# sourceMappingURL=FolderExploration.d.ts.map