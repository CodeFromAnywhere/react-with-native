import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
/**
 * sends an email or sms, or already confirms in case of emailPassword
 */
export declare const addAuthenticatedMethod: (method: AuthenticationMethodMethod, handle: AuthenticationMethod["handle"], shouldBeUnique?: boolean, credential?: string) => Promise<{
    isSuccessful: boolean;
    message: string;
    authenticationMethod?: AuthenticationMethod;
}>;
//# sourceMappingURL=addAuthenticatedMethod.d.ts.map