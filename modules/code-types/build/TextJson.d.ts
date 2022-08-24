/// <reference types="node" />
import { Stats } from "fs-util";
import { PathMetaData } from "./PathMetaData";
import { MarkdownParse } from "./MarkdownParse";
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
     * full path to the file or folder
     */
    path: string;
    /**
     * DEPRECATED: to be replaced with metaData
     *
     * only returned if this is requested
     */
    stats?: Stats;
    /**
     * replaces stats. only returned if `includeMetaData` is set to true
     */
    metaData?: PathMetaData;
    /** if true, this means this path is given back because it was the last opened base path that searching was canceled on because of the cancelRecursionOn prop */
    isCancelRecursionResult?: boolean;
}
//# sourceMappingURL=TextJson.d.ts.map