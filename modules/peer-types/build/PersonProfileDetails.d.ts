import { DefaultModelType } from "model-types";
import { Person } from "./Person";
/**
 * Things the user can fill in about themselves on their profile
 */
export declare type PersonProfileDetails = Omit<Person, "authenticationMethods" | "authorizations" | "credit" | keyof DefaultModelType | "dataEntries" | "devicesCalculated" | "groupSlugs" | "groups" | "paymentAuthToken" | "slug">;
//# sourceMappingURL=PersonProfileDetails.d.ts.map