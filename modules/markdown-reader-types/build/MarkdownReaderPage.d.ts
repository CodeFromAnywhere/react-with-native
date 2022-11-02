/**
 * for markdown-reader-ui, the pages can be markdown files, but they can also be connected to models
 */
export declare type MarkdownReaderPage = {
    /**
     * path to be used as the url. no preceding slash
     */
    queryPath: string;
    /**
     * if given, the md-file will be provided to the frontend
     *
     * project relative path
     */
    filePath?: string;
    /**
     * if true, this item will be shown in the menu
     */
    isMenuItem?: boolean;
};
//# sourceMappingURL=MarkdownReaderPage.d.ts.map