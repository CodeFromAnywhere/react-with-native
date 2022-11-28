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