import { NestedPathObject } from "nested-menu";
import { MarkdownReaderPage } from "markdown-reader-types";
import { MarkdownFile } from "code-types";
/**
 * If a markdown page is found, this function fetches all metadata needed to render that markdown page
 */
export declare const getMarkdownPageInfo: (projectRoot: string, nestedPathObject: NestedPathObject, queryPath: string, contentPage: MarkdownReaderPage) => Promise<{
    markdownFile: MarkdownFile | null;
    nextQueryPath: string | null;
    previousQueryPath: string | null;
    projectRelativeMarkdownPath: string | null;
}>;
//# sourceMappingURL=getMarkdownPageInfo.d.ts.map