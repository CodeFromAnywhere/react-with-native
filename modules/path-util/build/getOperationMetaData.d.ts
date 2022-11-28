import { OperationIndex } from "k-types";
/**
 * gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file
 */
export declare const getOperationMetaData: (fullPath: string) => Promise<{
    operationBasePath: string;
    operationIndex: OperationIndex | null;
    operationName: string | undefined;
    srcPath: string;
    operationFolderName: string;
    operationIndexPath: string;
    /**
     * where the operation is located relative to the project root
     */
    relativeOperationLocationPath: string;
}>;
//# sourceMappingURL=getOperationMetaData.d.ts.map