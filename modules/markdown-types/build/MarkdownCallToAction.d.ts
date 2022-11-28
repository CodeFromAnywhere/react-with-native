import { BackendAsset } from "asset-type";
import { SlugModelType } from "model-types";
export interface MarkdownCallToAction extends SlugModelType {
    /**
     * DESCRIPTION: Absolute queryPath to the CTA. Leave empty for going to the homepage. Empty paths will be omitted on the domains where you are already on that domain... If there's a path, will be omitted on other domains (`MarkdownCallToAction`s with a different hostname)
     */
    path?: string;
    /**
     * DESCRIPTION: Hostname as described in `https://www.w3schools.com/js/js_window_location.asp`.
     */
    hostname: string;
    title?: string;
    /**
     * Will be shown in markdown
     */
    description?: string;
    /**
     * Can have a default if not provided
     */
    ctaButtonText?: string;
    /**
     * if true, CTA will only be placed in footer
     */
    onlyFooter?: boolean;
    onlyHeader?: boolean;
    /**
     * If true, will be rendered in a <details>, if possible.
     */
    isMinimised?: boolean;
    bannerImage?: BackendAsset;
}
//# sourceMappingURL=MarkdownCallToAction.d.ts.map