/**
 * this is taken from King (LinkedIn app) but it might be useful for many more things. the idea was to connect any datapoint to any person. Not sure if this is what I want if I already have a system that is super super flexible in adding new data structures to any model. Still an intersting idea that should be kept in mind, so I'll leave it here as is.
 */
import { Slug } from "model-types";
/**
 * media (mediums) that a person uses, e.g. linkedin, twitter, whatsapp, sms, calling, and irl
 */
export declare type PersonSocialMedia = {
    /** medium where the person is a user */
    platformSlug: Slug;
    /** used to find the user on the platform */
    path: string;
    /** (if available) whether or not the user has a premium account */
    isPremium: boolean;
    /** (if available) a tagline for the user of the platform */
    tagline?: string;
    /** (if available) a bio for the user of the platform */
    bio?: string;
};
//# sourceMappingURL=PersonSocialMedia.d.ts.map