/**
 * attaches the `Device` with `authToken` (`id`) to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.
 */
export declare const login: (deviceId: string) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=login.d.ts.map