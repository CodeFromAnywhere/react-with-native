import { MarkdownParse } from "code-types";
import { MappedObject } from "js-util";
import { AugmentedWord } from "markdown-reader-types";
export declare const MarkdownParsePresentation: (props: {
    markdownParse: MarkdownParse;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
    projectRelativeBaseFolderPath: string;
    projectRelativeMarkdownFilePath: string;
}) => JSX.Element | null;
