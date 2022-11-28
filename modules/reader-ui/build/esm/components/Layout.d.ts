/// <reference types="react" />
import { AugmentedWord } from "augmented-word-types";
import { MappedObject } from "js-util";
import { MarkdownReaderPageProps } from "markdown-reader-types";
import { MenuObjectType, FilePage } from "webpage-types";
export declare const Layout: (props: {
    publicBundleConfig: MarkdownReaderPageProps["publicBundleConfig"];
    children: any;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
    menu: MenuObjectType<FilePage>;
}) => JSX.Element;
