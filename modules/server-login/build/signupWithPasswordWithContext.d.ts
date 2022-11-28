import { FunctionContext } from "function-context-type";
import { BackendAsset } from "asset-type";
/**
 * ---
 * publicAuthorization: read, search, execute
 * ---
 *
 * For now only username/pass is supported due to direct verification
 *
 * This function makes an authenticationmethod for the device and then signs up by creating a person for it and attaching it to the device.
 */
export declare const signupWithPasswordWithContext: (functionContext: FunctionContext, name: string, handle: string, pictureImage: BackendAsset | undefined, password: string, repeatPassword: string) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=signupWithPasswordWithContext.d.ts.map