import { FunctionContext } from "function-context-type";
import { AuthenticationMethodMethod } from "peer-types";
/**
 * removes an `authenticationMethod` from `Person` from currentPerson from authenticated device
 */
export declare const removePersonAuthenticationMethodWithContext: (functionContext: FunctionContext, method: AuthenticationMethodMethod) => Promise<{
    isSuccessful: boolean | undefined;
    message: string | undefined;
}>;
//# sourceMappingURL=removePersonAuthenticationMethodWithContext.d.ts.map