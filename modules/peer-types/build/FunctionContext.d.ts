import { Authorization } from "auth-types";
import { TsFunction } from "code-types";
import { Group } from "./Group";
import { Device } from "./Device";
import { Context } from "server/typings/common";
/**
 * Should be attached if the name of the function is in the format of:
 *
 * - `xyzWithContext`: attaches all context
 * - `xyzWithContextRaw`: attaches all context, api returns just the result of the function without wrapping it in the `RealApiReturnType`. Needed in case you have a different server.js `server.reply`
 *
 */
export declare type FunctionContext = {
    tsFunction?: TsFunction;
    authorizations?: Authorization[];
    /**
     * Device from authToken
     */
    device?: Device;
    groups?: Group[];
    hasAuthorization?: boolean;
    /**
     *
     */
    authToken?: string;
    serverContext?: Context;
};
//# sourceMappingURL=FunctionContext.d.ts.map