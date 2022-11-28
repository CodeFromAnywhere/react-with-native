/**
 * this is taken from King (LinkedIn app) but it might be useful for many more things. the idea was to connect any datapoint to any person. Not sure if this is what I want if I already have a system that is super super flexible in adding new data structures to any model. Still an intersting idea that should be kept in mind, so I'll leave it here as is.
 */
import { DefaultModelType, Id, KeyValueMarkdownModelType, Slug, SlugModelType } from "model-types";
import { ProfilePath } from "../old/User";
/** media (mediums) that this person uses, e.g. linkedin, twitter, whatsapp, sms, calling, and irl  */
export declare type PersonSocialMedia = {
    /** medium where the person is a user */
    platformSlug: Slug;
    /** used to find the user on the platform */
    path: ProfilePath;
    /** (if available) whether or not the user has a premium account */
    isPremium: boolean;
    /** (if available) a tagline for the user of the platform */
    tagline?: string;
    /** (if available) a bio for the user of the platform */
    bio?: string;
};
/**
 * categorisation model for informormation about a person
 *
 * - the keys are the things you want to store
 * - the values are the descriptions of the thing to be stored
 * - the categories can organise the things you want to store better
 */
export interface PersonInformation extends KeyValueMarkdownModelType {
}
/** key value data storage model for information about a person
 *
 * - the filename must identify the person this is about (`personSlug`)
 * - the categories are the different people and the person information categories
 * - the keys are the person information datapoints
 * - the values are the values of the datapoints that you stored about this user
 *
 * Example:
 *
 * the file `person-information-values/abraham-lincoln.md` could contain something like this:
 *
 * ```md
 * # life
 * born: 11-01-1777
 * died: 20-12-1812
 *
 * # identification
 * firstName: Abraham
 * lastName: Lincoln
 * ```
 *
 * NB: It's not going to be easy to keep this model in sync with the model it relies on!
 */
export interface PersonInformationValue extends KeyValueMarkdownModelType {
}
/**
 * Model to describe a human person
 *
 * try to make this model unconnected to the user of the OS as possible, so it can be public and people would have the right to own their own person instance
 *
 * we could also add notes a user has of this person, or the details of the connection with the user, but this makes it impossible to publish the Person instances (share, sync or publish publicly)
 */
export interface Person extends DefaultModelType, SlugModelType {
    name: string;
    slug: string;
    picture: string;
    /** slugs of interest categories that this person should be notified about */
    interests: Slug[];
    dataEntries: PersonInformationValue[];
    media: PersonSocialMedia[];
    preferredContactMedium?: Slug;
    address?: string;
    /** url to a personal api for this person :D */
    papiUrl?: string;
}
/**
const sendMessage = async (
  personName: string,
  message: string,
  config?: { platform?: PlatformName }
) => {
  const person = (await db.get("Person")).filter((x) => x.name === personName);

  const medium = person.media[0];

  if (!medium) {
    //error
  }

  const credential = (await db.get("Credential")).find(x=>x.key===medium.name)

  if(!credential){
    //error
  }

  // esxecute your puppeteer function

  if(medium.name === "twitter"){

    puppetteerTwitterSendMessage({...credential, message })
  }

};
*/
/** forgive the long name, but this model connects the user with the people they have a connection with on specific platforms */
export interface UserPersonPlatformConnection extends DefaultModelType {
    /** which person */
    personId: Id;
    person: Person;
    /** is it a follow, or a connection? */
    isFollow: boolean;
    /** when did we last verify and update the connection? */
    scrapSucceededAt: number | null;
    /** when did we last try to scrape but failed? */
    scrapedFailedAt: number | null;
    /** on which platform */
    platformSlug: Slug;
    /** how can the connection be identified on that platform? */
    platformConnectionId: string;
}
//# sourceMappingURL=people-types.d.ts.map