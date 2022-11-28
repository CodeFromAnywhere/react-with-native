import { BackendAsset } from "asset-type";
import { Slug, SlugModelType } from "model-types";
import { MarkdownCallToAction } from "./MarkdownCallToAction";
export interface WebsiteHeader extends SlugModelType, WebsiteHeaderProperties {
}
export declare type WebsiteHeaderProperties = {
    headerImage?: BackendAsset;
    headerTitle?: string;
    headerBig?: boolean;
    headerSubTitle?: string;
    header_markdownCallToActionSlugs?: Slug[];
    header_markdownCallToActions?: MarkdownCallToAction[];
};
//# sourceMappingURL=WebsiteHeader.d.ts.map