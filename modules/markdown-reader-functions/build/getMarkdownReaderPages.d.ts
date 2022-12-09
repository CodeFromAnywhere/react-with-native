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
     * If given, uses a basePath relative queryPath and prefixes this before it.
     *
     * if there's a prefix, don't use the basePath as prefix, but use that prefix instead.
     *
     * Should end with slash (/) in order for it to be folder
     */
    queryPathCustomPrefix?: ((basePath?: string) => string | undefined) | undefined;
    /**
     * if set, maps query path further
     */
    mapQueryPath?: ((queryPath: string) => string) | undefined;
}) => Promise<ReaderWebPage[]>;
//# sourceMappingURL=getMarkdownReaderPages.d.ts.map