import { RelationType } from "./modelTypes";
import { TimeTypes } from "./time";
/**
 * handy model type for storing stuff in a Markdown file.
 *
 * another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content
 */
export declare type MarkdownModelType = {
    /**
     * should be a stringified version of the index. used for compatibility with some general purpose functions
     */
    id: string;
    /**
     * human readable version of filename
     */
    name: string;
    /**
     * slugified filename
     */
    slug: string;
    /**
     * the content of the markdown
     */
    markdown: string;
    /**
     * will be stored in frontmatter
     *
     * make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array
     */
    [parameter: string]: string | number | boolean | undefined | null | string[];
} & RelationType & TimeTypes;
export declare const markdownModelTypeToMarkdownString: (markdownModelType: MarkdownModelType) => string;
//# sourceMappingURL=markdownModelType.d.ts.map