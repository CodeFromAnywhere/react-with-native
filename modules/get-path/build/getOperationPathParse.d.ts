import { OperationPathParse } from "code-types";
/**
 * get all operation-related path information that can be inferred from the path
 *
 * NB: currently it also looks up the operation name from its packagejson
 */
export declare const getOperationPathParse: (absolutePath: string) => OperationPathParse | undefined;
//# sourceMappingURL=getOperationPathParse.d.ts.map