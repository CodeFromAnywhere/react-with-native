import { DefaultModelType, Id, Language, Slug } from "model-types";
import { MediaCredential } from "./MediaCredential";
import { Location } from "geo-types";
import { Interest } from "./Interest";
/** channel where messages can be posted to
 *
 * examples:
 * - facebook group
 * - slack channel
 * - whatsapp pm
 * - facebook pm
 */
export interface MediaChannel extends DefaultModelType {
    platformSlug: Slug;
    /** way to identify the channel on the platform
     *
     * e.g. on slack we can say `xyz/meet` for the `#meet` channel on the `xyz` slack
     */
    platformChannelId: string;
    url?: string;
    name: string;
    slug: string;
    description?: string;
    /**
     * Person this channel is connected to
     *
     * Can be indexed once the `MediaChannel` is found, and it seems to be a person. Then the person neds to be created as well and the `.personId` needs to be attached to the `MediaChannel`
     */
    personId?: Id;
    /** if true, this channel is a group */
    isGroup?: boolean;
    /**
     * Ids that each identify a `Person` that is part of this channel. Isn't always available
     */
    member_personIds?: Id[];
    /**
     * The below parameters should ONLY be used if the instance is a channel for a group.
     * if this is a channel for a person, the interests should be stored on the person instead.
     */
    /** group-only: interests this group has */
    interestSlugs?: Slug[];
    interests?: Interest[];
    /** group-only: most specific location of the people in this channel (if any) */
    locationSlug?: Slug;
    location?: Location;
    /** group-only: preferred spoken language in this channel. `Postable` should be translated into this language */
    language: Language;
    /**
     * Which account do you want to use to post something in this channel?
     *
     * TODO: maybe refactor this to use `Persona` and match the persona automatically based on interests, location, and language, then get the mediaCredential for the platform from the `Persona` that matches this channel the most...
     */
    mediaCredentialId?: Id;
    mediaCredential?: MediaCredential;
    /** when did you make your last post? */
    myLastPostAt: number;
}
//# sourceMappingURL=MediaChannel.d.ts.map