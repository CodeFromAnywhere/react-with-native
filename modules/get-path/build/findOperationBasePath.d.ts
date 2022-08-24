#!/usr/bin/env node
import { OperationClassification } from "code-types";
/**
 * recursive. goes up until it finds a folder that's an operation
 *
 * because it had to read the package.json anyway, it's returning the operation classification as well
 */
export declare const findOperationBasePathWithClassification: (startPath: string) => {
    folderPath: string;
    classification: OperationClassification;
} | undefined;
export declare const findOperationBasePath: (startPath: string) => string | undefined;
//# sourceMappingURL=findOperationBasePath.d.ts.map