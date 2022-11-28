import { TsFunction, TsInterface, TsVariable } from "code-types";
import { ImportStatement } from "./generateIndex";
export declare const mapToImportStatement: (item: TsFunction | TsVariable | TsInterface, type: ImportStatement["type"], operationBasePath: string) => ImportStatement;
/**
 *
 * generates operation index and writes it to index.ts in src of the operation.
 *
 * NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.
 *
 * Should be ran every time an operation changes
 */
export declare const generateOperationIndex: ({ operationName, manualProjectRoot, }: {
    operationName?: string | undefined;
    manualProjectRoot?: string | undefined;
}) => Promise<string | undefined>;
//# sourceMappingURL=generateOperationIndex.d.ts.map