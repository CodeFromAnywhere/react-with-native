import { Authorization } from "auth-types";
import { TsFunction } from "code-types";
import { Group, Device } from "peer-types";
/**
 * Should be attached as first argument of the function, if the name of the function is in the format of:
 *
 * - `xyzWithContext`: attaches all context
 * - `xyzWithContextRaw`: attaches all context, api returns just the result of the function without wrapping it in the `RealApiReturnType`. Needed in case you have a different server.js `server.reply`
 *
 * For more info see `apiConvention`
 */
export declare type FunctionContext = {
    tsFunction?: TsFunction;
    /**
     * Authorizations accumulated of the person(s), the group(s), and public authorizations.
     *
     * NB: This contains all authorisations because there may also be model authorisations and file authorisations that are needed IN the function.
     */
    authorizations?: Authorization[];
    /**
     * Device from authToken
     */
    device: Device;
    /**
     * Groups the person(s) of the device belong to
     */
    groups?: Group[];
    /**
     * Device has authorization to the function
     */
    hasAuthorization: boolean;
    /**
     *
     */
    authToken: string;
    /**
     * Original context coming from server.js
     *
     * NB: due to indexation problems the type has been removed. It can be casted to the `Context` type, which you can import from:
     *
     * `import { Context } from "server/typings/common";`
     *
     */
    serverContext?: any;
};
//# sourceMappingURL=FunctionContext.d.ts.map