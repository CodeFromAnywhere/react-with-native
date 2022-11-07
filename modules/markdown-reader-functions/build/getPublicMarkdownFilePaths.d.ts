import { Frontmatter } from "matter-types";
/**
 * markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.
 */
export declare const shouldExposeMarkdownFile: (parameters: Frontmatter) => boolean;
/**
 Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)

 */
export declare const getPublicMarkdownFilePaths: (baseFolderPath: string, includeFoldersWithResults?: boolean) => Promise<{
    path: string;
    isFolder: boolean;
}[]>;
//# sourceMappingURL=getPublicMarkdownFilePaths.d.ts.map