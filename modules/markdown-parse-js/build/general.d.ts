#!/usr/bin/env node
import { MarkdownChunk } from "code-types";
/**
 * removes header prefix (##### etc) and trims whats behind that
 */
export declare const removeHeaderPrefix: (string: string) => string;
/**
 * should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.
 */
export declare const parseMdToChunks: (markdownString: string, level: number) => MarkdownChunk[];
/**
 * recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]
 
Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets
 */
export declare const mdContentParseRecursively: (markdownString: string, level: number) => MarkdownChunk[];
/**
 * creates a parsed object notation of any markdown
 */
export declare const test: (() => Promise<boolean>)[];
//# sourceMappingURL=general.d.ts.map