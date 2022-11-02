/**
 * returns an array of all (absolute) paths containing operations
 *
 * for a sensible project, that means /apps and /packages
 *
 * for the OS project, that means /operations/tools and /operations/niches
 */
export declare const getPathsWithOperations: (config?: {
    /**
     * if given, this will be taken as the project root instead of the one that can be found automatically (useful for bundling or working with multiple projects that alter each other)
     */
    manualProjectRoot?: string;
}) => string[];
//# sourceMappingURL=getPathsWithOperations.d.ts.map