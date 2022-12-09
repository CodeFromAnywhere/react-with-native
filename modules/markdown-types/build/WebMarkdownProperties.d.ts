import { Id, Price, Slug } from "model-types";
import { MarkdownCallToAction } from "./MarkdownCallToAction";
import { WebsiteHeaderProperties } from "./WebsiteHeader";
export interface WebMarkdownProperties
/**
 * NB: it extends WebsiteHeader here because the MarkdownModelType needs to be flat, and cannot have objects
 *
 * We won't make the websiteHeader into an object, although, that would also be a possibility.
 */
 extends WebsiteHeaderProperties {
    /**
     * Domainname for this file (or folder if it's applied on a readme).
     *
     * On top of this, we can build automation that:
     *
     * - Infers social media channel names for the domain and creates them
     * - Buys the domain and sets the DNS if you don't own it yet
     * - Connects the domain to a Vercel project with the right environment variables if it's not already
     *
     * Furthermore we can:
     *
     * - create a feature where domains are suggested for subsets of your content and you can easily choose one of the suggested domains to buy it automatically and set it in the file
     * - cleans up your domains if it seems you don't use them anymore (or at least detects unused domains, so you can also potentially sell them)
     * - show domain authority for your domains and possible ways to improve it (this can, again, have a whole lot of automations built on top of it)
     */
    domain?: string;
    markdownCallToActionSlugs?: Slug[];
    markdownCallToActions?: MarkdownCallToAction[];
    /**
     * Refers to an `Item` from the shop
     */
    shop_itemIds?: Id[];
    /**
     * Author, reference to persons
     */
    author_personSlugs?: Slug[];
    /**
     * Labels referring to interests
     */
    interestSlugs?: Slug[];
    /**
     * Price for this file
     *
     * NB: in case the file is a README file, the price applies to all files in this folder, recursively, PER FILE.
     */
    price?: Price;
}
//# sourceMappingURL=WebMarkdownProperties.d.ts.map