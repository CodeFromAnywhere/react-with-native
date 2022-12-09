/**
 * Username + password should be the default
 *
 * Email OTP, phone number OTP (sms or call or whatsapp), should be optional 2FA methods
 *
 * All others can also act as authentication methods, but the token shouldn't be stored
 */
export declare type AuthenticationMethodMethod = "usernamePassword" | "phoneNumber" | "email" | "apple" | "google" | "facebook" | "twitter" | "linkedin" | "github";
export declare const englishMethod: {
    [key in AuthenticationMethodMethod]: string;
};
export declare type AuthenticationMethod = {
    /**
     * NB: Not all are supported yet
     */
    method: AuthenticationMethodMethod;
    /**
     * most of the time, this is a username, but can also be phone number or email or so
     */
    handle: string;
    /**
     * This can be a password or token, depending on the method.
     *
     * In case of OTP, this isn't required (e.g. for `phoneNumber`)
     */
    encryptedCredential?: string;
    /**
     * original credential. should only be available on the device, not on the person
     */
    credential?: string;
    /**
     * one time password code, that will be sent to email or sms (or in the future other ways)
     */
    otp?: number;
    /**
     * If OTP is not filled in yet, will be false, otherwise true
     */
    isAuthenticated: boolean;
};
//# sourceMappingURL=AuthenticationMethjod.d.ts.map