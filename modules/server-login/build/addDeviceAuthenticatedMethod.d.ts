import { AuthenticationMethod, AuthenticationMethodMethod } from "peer-types";
/**
 * sends an email or sms, or already confirms in case of emailPassword
 *
 *
 * TODO: ensure this wraps `addAuthenticationMethod` and adds it to `Device` after that.
 */
export declare const addDeviceAuthenticatedMethod: (deviceId: string, method: AuthenticationMethodMethod, handle: AuthenticationMethod["handle"], credential?: string) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=addDeviceAuthenticatedMethod.d.ts.map