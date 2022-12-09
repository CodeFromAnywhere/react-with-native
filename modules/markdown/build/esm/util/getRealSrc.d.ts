import { MarkdownParseRenderConfig } from "../types.js";
/**
 * Based on markdown info, gest the real source for an asset
 */
export declare const getRealSrc: (src: string | undefined, config: MarkdownParseRenderConfig) => string | undefined;
