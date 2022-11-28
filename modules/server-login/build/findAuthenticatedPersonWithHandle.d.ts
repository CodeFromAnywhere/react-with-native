import { AuthenticationMethodMethod } from "peer-types";
/**
 * Check if the handle is already taken by some person in the system
 */
export declare const findAuthenticatedPersonWithHandle: (method: AuthenticationMethodMethod, handle: string) => Promise<import("peer-types").Person | undefined>;
//# sourceMappingURL=findAuthenticatedPersonWithHandle.d.ts.map