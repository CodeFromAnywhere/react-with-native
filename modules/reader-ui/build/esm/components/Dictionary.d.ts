/// <reference types="react" />
import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
export declare const AugmentedWordComponent: (props: {
    augmentedWord: AugmentedWord;
    augmentedWordObject: MappedObject<AugmentedWord>;
}) => JSX.Element;
export declare const Dictionary: (props: {
    augmentedWordObject: MappedObject<AugmentedWord>;
    word?: string | undefined;
}) => JSX.Element;
