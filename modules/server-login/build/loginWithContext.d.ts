import { FunctionContext } from "function-context-type";
/**
 * attaches the `Device` with `authToken` to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.
 */
export declare const loginWithContext: (functionContext: FunctionContext) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=loginWithContext.d.ts.map