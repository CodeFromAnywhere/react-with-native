import { FunctionContext } from "function-context-type";
/**
 Get all relevant information about yourself, including all persons that are attached to you.

NB: probably need to omit some fields later, but for now it's fine
*/
export declare const getMeWithContext: (functionContext: FunctionContext) => {
    authorizations?: import("auth-types").Authorization[] | undefined;
    device: import("peer-types").Device;
    groups?: import("peer-types").Group[] | undefined;
};
//# sourceMappingURL=getMeWithContext.d.ts.map