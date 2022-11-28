import { MarkdownChunk } from "code-types";
/**
 * Ups the levels of the markdownChunk array, recursively.
 *
 * Can be useful for merging multiple markdown sources
 */
export declare const upMarkdownChunkLevelRecursively: (markdownChunks: MarkdownChunk[] | undefined) => MarkdownChunk[] | undefined;
export declare const markdownChunkToMarkdownStringRecursive: (markdownChunk: MarkdownChunk) => string;
export declare const markdownChunksToMarkdownStringRecursive: (markdownChunks: MarkdownChunk[]) => string;
//# sourceMappingURL=parsing.d.ts.map