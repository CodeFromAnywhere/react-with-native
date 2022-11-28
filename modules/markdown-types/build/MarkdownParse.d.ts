import { CategoryStack } from "model-types";
import { Frontmatter } from "matter-types";
import { AssetType } from "asset-type";
/**
 * Anything in the format `[alt](href)`
 *
 * It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here
 */
export declare type MarkdownLink = {
    alt: string;
    href: string;
    /**
     * Can be inferred from href
     */
    type: AssetType;
};
/**
 * Anything in the format `![alt](src)`
 *
 * NB: I need to be very clear how this one works
 */
export declare type MarkdownEmbed = {
    alt: string;
    src: string;
    type: AssetType;
};
/**
 * 0 is a paragraph
 * 1-6 is h1 until h6
 */
export declare type MarkdownContentLevel = number;
export declare type MarkdownParagraph = {
    /** the raw text of this paragraph */
    paragraph: string;
    /**
     * the parent stack
     */
    categoryStackCalculated: CategoryStack;
    /**
     * if the paragraph is
     * NB: not always used!
     */
    level?: MarkdownContentLevel;
};
export declare type MarkdownChunk = {
    level: MarkdownContentLevel;
    content?: string;
    markdownEmbed?: MarkdownEmbed;
    markdownLink?: MarkdownLink;
    /**
     * NB: title can also be an empty string ("")
     */
    title?: string;
    /**
     * all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs
     */
    children?: MarkdownChunk[];
};
export declare type MarkdownParse = {
    /**
     * if available, this can be the filename of the markdown in this markdown-parse. Can be used for things like merging
     */
    fileName?: string;
    createdAt?: number;
    openedAt?: number;
    updatedAt?: number;
    deletedAt?: number;
    createdFirstAt?: number;
    /**
     * parameters found in frontmatter
     */
    parameters: Frontmatter;
    /**
     * downmatter is the same as frontmatter, but it is to be found at the end of the file. It is supposed to be containing things that are not important for the user to know, yet it is important metadata that is connected to this file. This can be indexed things, for example.
     *
     downmatterParameters?: Downmatter;
     */
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