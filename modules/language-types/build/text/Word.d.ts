import { ParameterName } from "code-types";
import { Id, KeyValueMarkdownModelType, MarkdownModelType, Slug, SlugModelType } from "model-types";
import { Statement } from "./Statement";
/**
 * Should later be migrated to `Word`
 */
export interface KvmdWord extends KeyValueMarkdownModelType {
}
/**
 * Should later be migrated to `Word`
 */
export interface MarkdownWord extends MarkdownModelType {
}
/**
 * The goal of the words model is to provide a definition for every word we use, in any language.
 */
export interface Word extends SlugModelType {
    /**
     * The word
     */
    name: string;
    /**
     * How common this word is in the english language
     */
    rank?: number;
    /**
     * amount used across the whole monorepo
     */
    usageCountCalculated?: number;
    /**
     * if the word isn't in english already, this can be a reference to the english word that represents this word the most
     */
    english_wordSlug?: Slug;
    english_word?: Word;
    /**
     * if the word is a certain conjugation of a root word, this should be a reference to the root word
     */
    root_wordSlug?: Slug;
    root_word?: Word;
    /**
     * if the word is a synonym to a more common word, this should be a reference to the more common synonym. This is a 1:1 synonym only
     */
    common_wordSlug?: Slug;
    common_word?: Word;
    /**
     * The closest way to express this word in toki pona terms should be an array (order is important here) of slugs of toki pona words
     */
    tokiPona_wordSlugs?: Slug[];
    tokiPona_words?: Word[];
    /**
     * If the word is defined, this reference should lead to its definition statement
     *
     * unlike the word, definition statements are always in english.
     *
     * The definitions should only be made of the words that are
     * - english
     * - most common
     * - root
     */
    definition_statementId?: Id;
    definition_statement?: Statement;
    /**
     * if the word is also used as a ParameterName, this will refer to the ParameterName.
     */
    parameterNameSlug?: Slug;
    parameterName?: ParameterName;
}
//# sourceMappingURL=Word.d.ts.map