import { DefaultModelType, Id, Slug } from "model-types";
import { Person } from "./Person";
/**
 * Forgive the long name, but this model connects the user with the people they have a connection with on specific platforms
 *
 * e.g. John Doe is connected with me on LinkedIn with the handle `johndoe123`
 *
 * Not sure if this is the best way to do this, there may be limitations... For example, both I and the other person can have multiple social media accounts on a single platform
 */
export interface PersonPlatformConnection extends DefaultModelType {
    /** which person */
    personId: Id;
    person: Person;
    /** is it a follow, or a connection? */
    isFollow: boolean;
    /** when did we last verify and update the connection? */
    scrapeSucceededAt: number | null;
    /** when did we last try to scrape but failed? */
    scrapedFailedAt: number | null;
    /** on which platform */
    platformSlug: Slug;
    /** how can the connection be identified on that platform? */
    platformConnectionId: string;
}
//# sourceMappingURL=PersonPlatformConnection.d.ts.map