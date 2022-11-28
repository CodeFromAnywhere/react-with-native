/**
Gets the contents of a file in the project
 */
export declare const getFileContents: (projectRelativeFilePath: string) => Promise<{
    isSuccessful: boolean;
    message?: string | undefined;
    fileContents?: string | undefined;
}>;
//# sourceMappingURL=getFileContents.d.ts.map