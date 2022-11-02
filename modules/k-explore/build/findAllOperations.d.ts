/**
 * Finds all package.json's everywhere. also in /tools, but this is to be expected.
 */
export declare const findAllOperations: (config?: {
    basePath: string | string[] | undefined;
    includeFoldersWithResults?: boolean;
}) => Promise<import("code-types").TextJson[]>;
//# sourceMappingURL=findAllOperations.d.ts.map