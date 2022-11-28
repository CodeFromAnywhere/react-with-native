import { FunctionContext } from "function-context-type";
import { AuthenticationMethodMethod } from "peer-types";
/**
 * removes an `authenticatedMethod` from `Device`
 *
 * Usually the authentication methods are an attempt to login into a new account, so if you remove something it doesnt have impact on the accounts you already logged into, because these authentications are not stored on the device but on the person.
 *
 * We can therefore remove it without much validation
 */
export declare const removeDeviceAuthenticationMethodWithContext: (functionContext: FunctionContext, method: AuthenticationMethodMethod) => Promise<{
    isSuccessful: boolean | undefined;
    message: string | undefined;
}>;
//# sourceMappingURL=removeDeviceAuthenticationMethodWithContext.d.ts.map