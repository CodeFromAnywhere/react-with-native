import { Id, Slug, MarkdownModelType } from "model-types";
import { BackendAsset } from "asset-type";
import { Operation, TsFunction, TsInterface } from "code-types";
import { BundleConfig } from "bundle-types";
/**
 */
export interface Postable extends MarkdownModelType {
    title?: string;
    markdown: string;
    /**
     * A way to store messagepresets in markdown. the headers are the different categories. If the first alinea is bolded, it will be parsed to be the title, and will be removed from the message.
     */
    isPreset?: boolean;
    isPlanned?: boolean;
    isDraft?: boolean;
    tsInterfaceIds?: Id[];
    tsInterfaces?: TsInterface[];
    tsFunctionIds?: Id[];
    tsFunctions?: TsFunction[];
    bundleConfigSlugs?: Slug[];
    bundleConfigs?: BundleConfig[];
    operationIds?: Id[];
    opeations?: Operation[];
    reference_assets: BackendAsset[];
}
/**
 * This function finds a postable from the database and posts it on multiple channels
 *
 * This can be executed with a CRON
 *
 * 1. finds a postable that has no posted paired
 * 2. chooses the channels where this thing can be posted on
 * 3. for every channel, formats the post correctly
 * 4. for every channel, places the post
 */
export declare const findPostableToPost: () => void;
/**
 * This function keeps the `Posted` statistics up-to-date
 *
 * Can be executed with a cron for all recent posts
 */
export declare const updatePostedStatistics: () => void;
//# sourceMappingURL=Postable.d.ts.map