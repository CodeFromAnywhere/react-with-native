import { MarkdownParse, MarkdownFileParse } from "k-types";
/**
 * splits markdown string into its content and its frontmatter parameters
 */
export declare const parseMatterMdString: (markdown: string) => MarkdownParse;
/**
 * DEPRECATED:
 *
 * parse a md file to all the needed info:
 *
 * - a string of the `content`
 * - file metadata
 * - frontmatter parameters
 */
export declare const parseMdFile: (mdFilePath: string) => Promise<MarkdownFileParse>;
//# sourceMappingURL=parseMd.d.ts.map