import { MarkdownModelType, Slug, SlugModelType } from "model-types";
import { MarkdownIndex } from "matter-types";
export interface MarkdownFile extends MarkdownIndex, MarkdownFileConfig {
}
/**
 * every markdown file should have these optional parameters that can be declared as its frontmatter
 *
 * NB: can't this just be part of MarkdownModelType? no, I think it's better if MarkdownModelType is very barebones, this would make it too connected
 */
export interface MarkdownFileConfig extends MarkdownModelType {
    isDraft?: boolean;
    privacy: "private" | "request" | "public";
    itemId?: Slug;
    /** `[button text](url)` */
    cta?: string;
    /** `![alt](url)` */
    headerImage?: string;
    headerTitle?: string;
    headerSubTitle?: string;
}
/**
 * A call to action suffix is a handy model that can be used to place under a postable. this way we are getting much more conversions from the traffic received on media
 */
export interface SocialMediaCallToAction extends MarkdownModelType {
}
export interface WebsiteCallToAction extends SlugModelType {
    url: string;
    title: string;
    description: string;
    banner?: string;
}
//# sourceMappingURL=MarkdownFile.d.ts.map