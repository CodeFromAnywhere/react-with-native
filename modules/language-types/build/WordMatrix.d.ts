import { BackendAsset } from "asset-type";
import { MappedObject } from "js-util";
import { DefaultModelType, Language, Markdown, Slug, SlugModelType } from "model-types";
declare type LanguageAudio = BackendAsset;
declare type LanguageExample = {
    text: string;
    audio: BackendAsset;
};
declare type LanguageLatin = string;
declare type LanguageAlternative = string;
declare type LanguagePhonetic = string;
/**
 * Language specific word information
 */
export declare type WordLanguageInfo = {
    /**
     * TITLE: Latin writing (if common)
     * DESCRIPTION: the latin standard written representation for this word
     */
    latin?: LanguageLatin;
    /**
     * TITLE: Alternative writing (if common)
     *
     * DESCRIPTION: the alternative written representation for this word, if any (if the language commonly uses a different script, this can be noted here)
     */
    alternative?: LanguageAlternative;
    /**
     * TITLE: Phonetic writing
     *
     * DESCRIPTION: Phonetic writing is used to describe how the word is pronounced
     */
    phonetic?: LanguagePhonetic;
    /**
     * TITLE: Spoken word
     *
     * DESCRIPTION: Audio fragment containing the spoken word.
     */
    audio?: LanguageAudio;
    /**
     * DESCRIPTION: A list of examples of usage of this word (can contain both a text and audio)
     */
    examples?: LanguageExample[];
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
export declare type WordLanguageInfoObject = {
    [languageKey in Language]?: WordLanguageInfo;
};
export declare type WordInfo = {
    /**
     * Unique name of the word in English. Can usually be the word itself...
     */
    name: string;
    slug: Slug;
    /**
     * Definition of the word (in english)
     */
    description: Markdown;
    descriptionAudio: BackendAsset;
    image?: BackendAsset;
    wordCategorySlugs: Slug[];
    wordCategorys: WordCategory[];
    type?: WordType;
};
export declare type CoreWordMatrixWord = {
    /**
     * Priority level is how important this word is to communicate...
     *
     *
     * TITLE: Priority level (defaults to low)
     *
     * critical: toki pona word (top 150)
     * high: top 500
     * medium: top 2500
     * low (default): less occurence
     */
    priorityLevel?: WordPriority;
    /**
     * TITLE: Rank (How common this word is in the english language?)
     */
    rank?: number;
    /**
     * amount used across the whole monorepo
     */
    usageCountCalculated?: number;
    /**
     * All ways the word is conjucated from the root word
     */
    conjucations?: WordConjucation[];
    /**
     * SECTION: Relations to other words...
     *
     * TITLE: Root word
     *
     * DESCRIPTION: If the word is a certain conjugation of a root word, this should be a reference to the root word
     */
    root_wordMatrixSlug?: Slug;
    root_word?: WordMatrix;
    /**
     * TITLE: Opposite word
     *
     * DESCRIPTION: If there's another word that's the complete opposite of this one, you can declare it here
     */
    opposite_wordMatrixSlug?: Slug;
    opposite_wordMatrix?: WordMatrix;
    /**
     * TITLE: Common Synonym
     *
     * DESCRIPTION: f the word is a synonym to a more common word, this should be a reference to the more common synonym. This is a 1:1 synonym only
     */
    common_wordMatrixSlug?: Slug;
    common_wordMatrix?: WordMatrix;
    /**
     * TITLE: Toki-Pona words
     *
     * DESCRIPTION: The closest way to express this word in toki pona terms.
     *
     * NB: should be an array (order is important here) of slugs of words containing the "tk" property. This needs to be a reference so we can also give information about the individual toki pona words
     */
    tokiPona_wordMatrixSlugs?: Slug[];
    tokiPona_wordMatrixs?: WordMatrix[];
    /**
     * TITLE: Emoji Words
     *
     * The closest way to express this word in emoji terms should be an array (order is important here) of slugs of words containing "emoji" property
     *
     * This needs to be a reference so we can also give information about the individual emojis
     */
    emoji_wordMatrixSlugs?: Slug[];
    emoji_wordMatrixs?: WordMatrix[];
    /**
     * SECTION: Translations
     *
     * DESCRIPTION: Single emoji describing this word 1:1 (if it are more emojis of multiple words, please use the reference instead)
     */
    emoji?: string;
};
/**
 * ---
 * dbStorageMethod: jsonMultiple
 * ---
 *
 * WordMatrix is a matrix that contains as much information about a word as possible in as many languages as possible. Easy to use for 1:1 translation
 *
 * @see Language
 */
export declare type WordMatrix = WordLanguageInfoObject & WordInfo & CoreWordMatrixWord & SlugModelType;
/**
 * DEPRECATED: to be migrated to `WordMatrix`
 */
export interface TokiPonaMatrix extends DefaultModelType {
    category: string;
    type: string;
    tok?: string;
    nl?: string;
    en?: string;
    np?: string;
    "pt-br"?: string;
    em: string;
}
/**
 * Best way to combine words if you don't want to specify all language specific info for a new word. You can refer to words from the WordMatrix instead!
 */
export interface WordCombination extends SlugModelType, WordInfo {
    /**
     * Should be autofilled based on the combination of the base words
     */
    name: string;
    /**
     * Should be auto filled in based on the combination of the base words
     */
    slug: string;
    /**
     * Which words is this a combination of?
     */
    wordMatrixSlugs?: Slug[];
}
export {};
//# sourceMappingURL=WordMatrix.d.ts.map