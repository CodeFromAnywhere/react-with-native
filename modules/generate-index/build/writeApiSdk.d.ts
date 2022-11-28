export declare type Success = boolean;
/**
 * - finds all functions
 * - makes an api sdk string for them
 * - writes that to a file
 */
export declare const writeApiSdk: (config?: {
    outputPath?: string | undefined;
    manualProjectRoot?: string | undefined;
} | undefined) => Promise<Success>;
//# sourceMappingURL=writeApiSdk.d.ts.map