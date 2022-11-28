import { FunctionContext } from "function-context-type";
/**
 * ---
 * publicAuthorization: read, search, execute
 * ---
 *
 * Login with username and password
 *
 * 1. Adds an username/password combo as auth-method to the device,
 * 2. Checks the persons to match the auth
 * 3. In case of match, moves the method to the person and connects the device
 *
 */
export declare const loginWithPasswordWithContext: (functionContext: FunctionContext, username: string, password: string) => Promise<{
    isSuccessful: boolean;
    message?: string | undefined;
}>;
//# sourceMappingURL=loginWithPasswordWithContext.d.ts.map