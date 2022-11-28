import { ReaderWebPage } from "webpage-types";
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
}) => Promise<ReaderWebPage[]>;
//# sourceMappingURL=getMarkdownReaderPages.d.ts.map