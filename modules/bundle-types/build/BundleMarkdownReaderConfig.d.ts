export declare type BundleMarkdownReaderConfig = {
    /**
     * When set to `true`, docs are not shown in docs folder but in the root menu of the site
     */
    docsInRoot?: boolean;
    /**
     * Show todo menu
     */
    showTodos?: boolean;
    /**
     * `modules` will be hidden from markdown reader menu
     */
    omitModulesMenu?: boolean;
    /**
     * `apps` will be hidden from markdown reader menui
     */
    omitAppsMenu?: boolean;
    /**
     * if true, dictionary is omitted from menu
     */
    omitDictionaryMenu?: boolean;
    /**
     * `packages` will be hidden from markdown reader menu
     */
    omitPackagesMenu?: boolean;
    /**
     * if given, the operations menu will show with these operations
     */
    customOperationNames?: string[];
};
//# sourceMappingURL=BundleMarkdownReaderConfig.d.ts.map