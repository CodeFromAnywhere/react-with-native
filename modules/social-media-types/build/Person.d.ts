import { DefaultModelType, Slug } from "model-types";
import { PersonInformationValue } from "./PersonInformationValue";
import { PersonSocialMedia } from "./PersonSocialMedia";
/**
 * Model to describe a human person
 *
 * This model is unconnected to the user of the OS as possible, so it can be public and people would have the right to own their own person instance
 *
 * We could also add notes a user has of this person, or the details of the connection with the user, but this makes it impossible to publish the Person instances (share, sync or publish publicly)
 *
 * NB: This is a `DefaultModelType`, which means name and slug need not to be unique, but it is highly preferred.
 */
export interface Person extends DefaultModelType {
    name: string;
    slug: string;
    picture: string;
    /** slugs of interest categories that this person should be notified about */
    interests: Slug[];
    dataEntries: PersonInformationValue[];
    media: PersonSocialMedia[];
    preferredContactMedium?: Slug;
    address?: string;
}
//# sourceMappingURL=Person.d.ts.map