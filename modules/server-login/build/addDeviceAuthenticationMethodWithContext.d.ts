import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
import { FunctionContext } from "function-context-type";
/**
 * returns new function context with added authenticationmethod
 */
export declare const addDeviceAuthenticationMethodWithContext: (functionContext: FunctionContext, method: AuthenticationMethodMethod, handle: string, credential?: string) => Promise<{
    isSuccessful?: boolean | undefined;
    message?: string | undefined;
    functionContext?: FunctionContext | undefined;
    authenticationMethod?: AuthenticationMethod | undefined;
}>;
//# sourceMappingURL=addDeviceAuthenticationMethodWithContext.d.ts.map