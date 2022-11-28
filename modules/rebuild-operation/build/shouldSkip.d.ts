/**
if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped

 **/
export declare const shouldSkip: (config: {
    operationBasePath: string;
    debug?: boolean | undefined;
    force?: boolean | undefined;
    operationManualProjectRoot?: string | undefined;
    rebuildUpdatedAt?: number | undefined;
}) => Promise<boolean>;
//# sourceMappingURL=shouldSkip.d.ts.map