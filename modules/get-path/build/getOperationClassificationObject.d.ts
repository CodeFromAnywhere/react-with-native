import { OperationClassification } from "code-types";
export type OperationClassificationObject = {
    [operationName: string]: OperationClassification;
};
export declare const getOperationClassificationObject: () => Promise<OperationClassificationObject>;
//# sourceMappingURL=getOperationClassificationObject.d.ts.map