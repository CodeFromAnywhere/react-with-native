export declare type RelativePathType = "todo";
/**
 * get file paths within your project
 */
export declare const getProjectRelativePaths: (config?: {
    /**
     * Optionally filter the results to only:
     *
     * - todo: all todos in your project operations
     * - postable: all your postables in your database
     *
     * by default, scans all relevant files...
     */
    type?: "todo" | undefined;
    earliestUpdatedAt?: number | undefined;
    /**
     * Not implemented
     */
    filterDraft?: boolean | undefined;
    /**
     * Not implemented
     */
    filterPrivate?: boolean | undefined;
    filterGenerated?: boolean | undefined;
    sort?: "recent" | undefined;
} | undefined) => Promise<string[] | undefined>;
//# sourceMappingURL=getProjectRelativePaths.d.ts.map