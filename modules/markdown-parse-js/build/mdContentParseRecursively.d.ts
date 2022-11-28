#!/usr/bin/env node
import { MarkdownChunk } from "markdown-types";
/**
 * recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]
 
Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets
 */
export declare const mdContentParseRecursively: (markdownString: string, level: number) => MarkdownChunk[];
//# sourceMappingURL=mdContentParseRecursively.d.ts.map