import { FileContentInfo, PathStats } from "./PathMetaData";
import { MarkdownParse } from "./MarkdownParse";
/**
 * TODO: Rename
 */
export interface TextJson {
    /**
     * only available if it's a json file
     */
    json?: any;
    /**
     * only available if it's a typescript file
     */
    typescriptJson?: unknown;
    /**
     * only available if it's a markdown file
     */
    markdownJson?: MarkdownParse;
    /**
     * full absolute path to the file or folder
     */
    path: string;
    isFolder: boolean;
    /**
     * only returned if `includeStats` is true
     */
    stats?: PathStats;
    /**
     * only returned if `includeMetaData` is set to true
     */
    metaData?: FileContentInfo;
    /** if true, this means this path is given back because it was the last opened base path that searching was canceled on because of the cancelRecursionOn prop */
    isCancelRecursionResult?: boolean;
}
//# sourceMappingURL=TextJson.d.ts.map