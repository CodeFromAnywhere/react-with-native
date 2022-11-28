import { MarkdownChunk } from "code-types";
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
//# sourceMappingURL=title-parsings.d.ts.map