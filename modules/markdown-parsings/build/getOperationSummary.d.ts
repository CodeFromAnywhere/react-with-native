import { OperationSummary } from "./OperationSummary";
/**
 * Summarises operation into useful information about it. Especially useful for generating docs.
 */
export declare const getOperationSummary: (config: {
    operationName: string;
    manualProjectRoot?: string | undefined;
}) => Promise<undefined | OperationSummary>;
//# sourceMappingURL=getOperationSummary.d.ts.map