import { Frontmatter } from "matter-types";
/**
 * markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.
 */
export declare const shouldExposeMarkdownFile: (parameters: Frontmatter) => boolean;
//# sourceMappingURL=shouldExposeMarkdownFile.d.ts.map