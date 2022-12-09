import { WordPriority } from "language-types";
import { Language } from "model-types";
export declare type WriterViewEnum = "config" | "view" | "edit" | "presentation" | "frontmatter" | "todoOffers" | "postable" | "shortStudio" | "prompts" | "prompt-results";
export declare type SubtextRelatedThing = {
    type: "image" | "asset" | "pages" | "data" | "code";
    quantity: "single" | "short" | "all";
};
/**
 * Configuration of what should be shown in the subtext
 */
export declare type SubtextConfig = {
    /**
     * TITLE: Enable
     */
    isEnabled?: boolean;
    /**
     * You can show multiple translations in the subtext
     */
    translations?: {
        language: Language;
        showAlternative?: boolean;
        showPhonetic?: boolean;
        showLatin?: boolean;
        showTokiPona?: boolean;
        showCommon?: boolean;
    }[];
    showEmojiTranslation?: boolean;
    /**
     * show definitions of words occuring in this paragraph
     */
    showDefinitionsWithPriority?: WordPriority[];
    /**
     * Related stuff related to this paragraph, e.g. other articles/markdown
     */
    showRelated?: SubtextRelatedThing[];
};
export declare type SubwordViewMode = "disabled" | "tooltip" | "context" | "subword";
/**
 * Configurate what should be shown about words
 */
export declare type SubwordConfig = {
    /**
     * TITLE: Enable
     */
    isEnabled?: boolean;
    /**
     * Optionally, make the subwords smaller for a better overview
     */
    subwordSize?: "normal" | "mini" | "micro";
    /**
     * show subwords for one or multiple languages
     */
    translations?: Language[];
    translationsViewMode?: SubwordViewMode;
    /**
     * Show definition (always in tooltip)
     */
    showDefinition?: boolean;
    /**
     * Show occurrence amount
     */
    occurenceAmountViewMode?: SubwordViewMode;
    /**
     * Blur the word unless it's special for one reason or another. Might be useful for skimming (or maybe more)
     */
    blurMode?: "disabled" | "special";
    /**
     * Audio for `WordMatrix` word can be played
     */
    audioMode?: SubwordViewMode;
    /**
     * if "translate" is selected, first language from `translations` will be used
     *
     * `alternative` picks the alternative writing using the `WordMatrix` if available
     *
     * `phonetic` picks the phonetic writing using the `WordMatrix` if available
     */
    replaceWordMode?: "disabled" | "translate" | "alternative" | "phonetic" | "tokiPona" | "emoji";
    /**
     * colour words with heat having different meanings
     */
    heatmapMode?: "disabled" | "projectFrequency" | "englishFrequency";
};
//# sourceMappingURL=types.d.ts.map