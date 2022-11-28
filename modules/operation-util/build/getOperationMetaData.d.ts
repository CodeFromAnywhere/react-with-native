import { Operation } from "code-types";
export declare type OperationMetaData = {
    operationBasePath: string;
    operation: Operation | undefined;
    operationName: string;
    srcPath: string;
    operationFolderName: string;
    /**
     * where the operation is located relative to the project root
     */
    relativeOperationLocationPath: string;
};
/**
 * gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file
 */
export declare const getOperationMetaData: (operationBasePath: string) => Promise<undefined | OperationMetaData>;
//# sourceMappingURL=getOperationMetaData.d.ts.map