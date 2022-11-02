import { MarkdownReaderPage } from "markdown-reader-types";
/**
 - Gets all pages of a bundle based on the fs
 - README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include individual functions, interfaces, statements, word-definitions pages
 */
export declare const getDocsMarkdownReaderPages: (config?: {
    manualProjectRoot?: string;
}) => Promise<undefined | MarkdownReaderPage[]>;
//# sourceMappingURL=getDocsMarkdownReaderPages.d.ts.map