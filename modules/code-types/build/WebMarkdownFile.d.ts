import { Id, Language, MarkdownModelType, Price, Slug } from "model-types";
import { WebsiteCallToAction } from "./WebsiteCallToAction";
import { WebsiteHeader } from "./WebsiteHeader";
/**
 * Every markdown file meant for the web, should have these optional parameters that can be declared as its frontmatter
 *
 * NB: This is not part of MarkdownModelType, because MarkdownModelType is very barebones general purpose, not only for the web!
 */
export interface WebMarkdownFile extends MarkdownModelType, 
/**
 * NB: it extends WebsiteHeader here because the MarkdownModelType needs to be flat, and cannot have objects
 */
WebsiteHeader {
    /**
     * If true, will not show up in markdownReader ui's
     */
    isDraft?: boolean;
    /**
     * Should be stored as textual date like `YYYY-MM-DD`
     */
    updatedAt: number;
    /**
     * Should be stored as textual date like `YYYY-MM-DD`
     */
    createdAt: number;
    /**
     * TODO: implement auth layers, then look at this again
     */
    privacy: "private" | "request" | "public";
    /**
     * Either filled in or detected
     */
    language: Language;
    /**
     * If true, will not auto-detect the language
     */
    isLanguageCustom?: boolean;
    websiteCallToActionSlugs?: Slug[];
    websiteCallToActions?: WebsiteCallToAction[];
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
/**
 * A call to action suffix is a handy model that can be used to place under a postable. this way we are getting much more conversions from the traffic received on media
 */
export interface SocialMediaCallToAction extends MarkdownModelType {
}
//# sourceMappingURL=WebMarkdownFile.d.ts.map