import { MarkdownChunk } from "code-types";
/**
 * should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.
 */
export declare const parseMdToChunks: (markdownString: string, level: number) => MarkdownChunk[];
//# sourceMappingURL=parseMdToChunks.d.ts.map