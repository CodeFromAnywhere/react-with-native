import { MarkdownChunk, MarkdownParse } from "code-types";
export declare type NestedTitle = string | NestedTitle[];
/**
 * helper function to get a nested array of the titles and its subtitles
 */
export declare const getTitlesRecursively: (chunk: MarkdownChunk) => NestedTitle[];
/**
 * helper function (recursive) that prints nested titles with .. as prefix and a newline after every title
 *
 * TODO: allow for numbering titles
 */
export declare const printNestedTitles: (nestedTitles: NestedTitle[] | undefined, depth?: number) => string | undefined;
/**
 * low-level function that gets the outline for MarkdownParse
 *
 * NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.
 */
export declare const getOutline: (markdownParse: MarkdownParse) => string | undefined;
//# sourceMappingURL=outline.d.ts.map