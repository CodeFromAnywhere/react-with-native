/// <reference types="react" />
import { MarkdownParse } from "markdown-types";
import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
export declare const MarkdownParsePresentation: (props: {
    markdownParse: MarkdownParse;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
    projectRelativeBaseFolderPath: string;
    projectRelativeMarkdownFilePath: string;
}) => JSX.Element | null;
