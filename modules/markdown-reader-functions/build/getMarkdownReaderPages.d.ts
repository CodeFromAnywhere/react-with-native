import { MarkdownReaderPage } from "markdown-reader-types";
/**
 * To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md
 */
export declare const stripReadmeFromFolder: (filePath: string) => string;
/**
 * Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.
 */
export declare const getMarkdownReaderPages: (config: {
    projectRoot: string;
    /**
     * basePaths to search for public markdown for
     */
    basePaths: string[];
    /**
     * if set, maps query path further
     */
    mapQueryPath?: ((queryPath: string) => string) | undefined;
}) => Promise<MarkdownReaderPage[]>;
//# sourceMappingURL=getMarkdownReaderPages.d.ts.map