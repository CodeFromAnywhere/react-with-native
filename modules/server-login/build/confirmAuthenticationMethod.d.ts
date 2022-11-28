import { AuthenticationMethodMethod } from "peer-types";
/** adds an `authenticatedMethod` to `Device` after the OTP is correct
 *
 * For now, only handles methods `phoneNumber` and `email`
 *
 * TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`
 */
export declare const addDeviceAuthenticationMethodConfirm: (deviceId: string, method: AuthenticationMethodMethod, otp: number) => Promise<{
    isSuccessful: boolean;
    message: string;
} | undefined>;
//# sourceMappingURL=confirmAuthenticationMethod.d.ts.map