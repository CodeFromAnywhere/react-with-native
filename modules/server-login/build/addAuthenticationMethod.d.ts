import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
/**
 * sends an email or sms, or already confirms in case of emailPassword
 *
 * core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`
 */
export declare const addAuthenticationMethod: (method: AuthenticationMethodMethod, handle: string, shouldBeUnique?: boolean, credential?: string) => Promise<{
    isSuccessful: boolean;
    message: string;
    authenticationMethod?: AuthenticationMethod;
}>;
//# sourceMappingURL=addAuthenticationMethod.d.ts.map