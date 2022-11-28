import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
import { FunctionContext } from "function-context-type";
export declare const addPersonAuthenticationMethodWithContext: (functionContext: FunctionContext, method: AuthenticationMethodMethod, handle: AuthenticationMethod["handle"], credential?: string) => Promise<{
    isSuccessful: boolean | undefined;
    message: string;
}>;
//# sourceMappingURL=addPersonAuthenticationMethodWithContext.d.ts.map