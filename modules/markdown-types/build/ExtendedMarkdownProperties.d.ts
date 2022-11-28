import { Language } from "model-types";
/**
 * Some properties for on any `MarkdownModelType` model that are quite general purpose and yet aren't included into the `MarkdownModel` because we may not always want them.
 */
export interface ExtendedMarkdownProperties {
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
    privacy: "public" | "private" | "request";
    /**
     * Either filled in or detected
     */
    language: Language;
    /**
     * If true, will not auto-detect the language
     */
    isLanguageCustom?: boolean;
}
//# sourceMappingURL=ExtendedMarkdownProperties.d.ts.map