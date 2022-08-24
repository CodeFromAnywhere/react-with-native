import { FrontMatter, CategoryStack } from "common-types";
export declare type ImageMarkdownJson = {
    alt: string;
    url: string;
};
/**
 * 0 is a paragraph
 * 1-6 is h1 until h6
 */
export declare type MarkdownContentLevel = number;
export declare type MarkdownParagraph = {
    paragraph: string;
    categoryStack: CategoryStack;
};
export declare type MarkdownChunk = {
    level: MarkdownContentLevel;
    content?: string;
    /**
     * NB: title can also be an empty string ("")
     */
    title?: string;
    /**
     * all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs
     */
    children?: MarkdownChunk[];
};
export declare type MarkdownFileParse = MarkdownParse & {
    fileName: string;
    createdAt: number;
    openedAt: number;
    updatedAt: number;
    modifiedAt: number;
};
export declare type MarkdownParse = {
    /**
     * if available, this can be the filename of the markdown in this markdownparse. Can be used for things like merging
     */
    fileName?: string;
    /**
     * parameters found in frontmatter
     */
    parameters: FrontMatter;
    /**
     * structured content based on h1, h2, h3, etc (paragraphs, recursive)
     */
    content?: MarkdownChunk[];
    /**
     * raw markdown without frontmatter
     */
    raw: string;
};
export declare type MarkdownHeader = {
    level: MarkdownContentLevel;
    title: string;
};
//# sourceMappingURL=MarkdownParse.d.ts.map