import { Person } from "peer-types";
/**
 * Creates a new `Person` for a `Device`. Adds that person to the `Device`.
 *
 * - Can only be done if authentication is not applied on an existing person already.
 * - Can only be done with at least one authenticationMethod
 * - Function is wrappable
 */
export declare const signup: (deviceId: string, personData: Pick<Person, "authorizations" | "credit" | "dataEntries" | "interestSlugs" | "media" | "name" | "slug" | "pictureImage" | "groupSlugs" | "requiredAuthenticationMethods" | "amountAuthenticationMethodsRequired">) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=signup.d.ts.map