import { MarkdownParse } from "code-types";
import { MarkdownParseConfig } from "./types";
/**
 * splits a markdown string into its frontmatter object and the raw content (without frontmatter)
 */
export declare const parseFrontmatterMarkdownString: (markdownWithFrontmatter: string, config?: MarkdownParseConfig) => MarkdownParse;
export declare const test: () => Promise<boolean>;
//# sourceMappingURL=parseFrontmatterMarkdownString.d.ts.map