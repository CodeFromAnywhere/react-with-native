import { BackendAsset } from "asset-type";
import { MappedObject } from "js-util";
import { Language, Markdown, Slug, SlugModelType } from "model-types";
export declare type LanguageAudioObject = {
    [assetKey in `${Language}Audio`]?: BackendAsset;
};
export declare type LanguageExampleObject = {
    [assetKey in `${Language}Examples`]?: {
        text: string;
        audio: BackendAsset;
    }[];
};
export declare type LanguageLatinObject = {
    [languageKey in Language]?: string;
};
export declare type LanguageAlternativeObject = {
    [languageKey in `${Language}Alternative`]?: string;
};
export declare type LanguagePhoneticObject = {
    [languageKey in `${Language}Phonetic`]?: string;
};
/** Mapped Object for performance reasons */
export interface MappedWordMatrix extends MappedObject<WordMatrix> {
    [baseLanguageWord: string]: WordMatrix;
}
/**
 * Different ways to categorise a word semantically
 */
export interface WordCategory extends SlugModelType {
    description: Markdown;
}
/**
 *
 */
export declare type WordPriority = "critical" | "high" | "medium" | "low";
export declare type WordType = "noun" | "adjective" | "verb";
/**
 * In linguistics, conjugation is the creation of derived forms of a verb from its principal parts by inflection
 *
 * Besides this, there are also other ways to alter a word to add/change meaning, this should be summed up using this enum.
 */
export declare type WordConjucation = "plural" | "female" | "male" | "past" | "future";
/**
 * WordMatrix is a matrix that contains as much information about a word as possible in as many languages as possible. Easy to use for 1:1 translation
 *
 * Besides the keys that are language-agnostic, for every language `key` (See `Language`), there are multiple keys that are connected to that specific language
 *
 * - [key]: the latin standard written representation for this word
 * - [key]Alternative: the alternative written representation for this word, if any (if the language commonly uses a different script, this can be noted here)
 * - [key]Audio: a short audio recording for pronunciation of this word
 * - [key]Phonetic: a phonetic representation of pronunciation of this word in this language
 * - [key]Examples: An array of examples of usage of this word (can contain both a text and audio)
 *
 * @see Language
 */
export interface WordMatrix extends SlugModelType, LanguageLatinObject, LanguageAlternativeObject, LanguageAudioObject, LanguagePhoneticObject, LanguageExampleObject {
    /**
     * unique name of the word in english (or another one if `language` is specified). Can usually be the word itself...
     */
    name: string;
    slug: Slug;
    /**
     * Definition of the word (in english)
     */
    description: Markdown;
    descriptionAudio: BackendAsset;
    image?: BackendAsset;
    category_slugs: Slug[];
    categorys: WordCategory[];
    type?: WordType;
    /**
     * critical: toki pona word (top 150)
     * high: top 500
     * medium: top 2500
     * low (default): less occurence
     */
    priorityLevel?: WordPriority;
    /**
     * How common this word is in the english language
     */
    rank?: number;
    /**
     * amount used across the whole monorepo
     */
    usageCountCalculated?: number;
    /**
     * if the word is a certain conjugation of a root word, this should be a reference to the root word
     */
    root_wordMatrixSlug?: Slug;
    root_word?: WordMatrix;
    /**
     * All ways the word is conjucated from the root word
     */
    conjucations?: WordConjucation[];
    /**
     * if the word is a synonym to a more common word, this should be a reference to the more common synonym. This is a 1:1 synonym only
     */
    common_wordMatrixSlug?: Slug;
    common_wordMatrix?: WordMatrix;
    /**
     * The closest way to express this word in toki pona terms should be an array (order is important here) of slugs of words containing the "tk" property
     *
     * This needs to be a reference so we can also give information about the individual toki pona words
     */
    tokiPona_wordMatrixSlugs?: Slug[];
    tokiPona_wordMatrixs?: WordMatrix[];
    /**
     * The closest way to express this word in emoji terms should be an array (order is important here) of slugs of words containing "emoji" property
     *
     * This needs to be a reference so we can also give information about the individual emojis
     */
    emoji_wordMatrixSlugs?: Slug[];
    emoji_wordMatrixs?: WordMatrix[];
}
//# sourceMappingURL=WordMatrix.d.ts.map