/**
 * Tries to get the root folder where the database folder can be found.
 *
 * If an operationName is specified, this will be the operation base path
 * If not, this will be the project root.
 */
export declare const getDatabaseRootFolder: (operationName: string | null | undefined, manualProjectRoot?: string) => Promise<string | undefined>;
//# sourceMappingURL=getDatabaseRootFolder.d.ts.map