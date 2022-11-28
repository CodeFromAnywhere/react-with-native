/// <reference types="react" />
import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
import { TextEditingContext } from "../old/getContext";
export declare const Completion: (props: {
    augmentedWord: AugmentedWord;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
export declare const specialCharacters: string[];
export declare const isAugmentedWordMatch: (augmentedWord: AugmentedWord, completableWord: string) => boolean;
/**
 * Omits all special characters from the start of a word for the first special character it finds. The other special characters found after that won't be trimmed.
 */
export declare const omitSpecialCharactersFromStart: (word?: string) => string | undefined;
export declare const MarkdownCompletions: (props: {
    context: TextEditingContext | null;
    augmentedWords?: AugmentedWord[] | undefined;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
/**
 * In `typescript`, every word should be autocompletable with the typescript stuff, without backticks.
 */
export declare const TypescriptCompletions: (props: {
    context: TextEditingContext | null;
    augmentedWords?: AugmentedWord[] | undefined;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
