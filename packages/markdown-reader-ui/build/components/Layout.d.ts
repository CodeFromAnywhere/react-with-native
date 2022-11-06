import { AugmentedWord, MarkdownReaderPage, MarkdownReaderPageProps } from "markdown-reader-types";
import { MappedObject } from "js-util";
export declare const Search: (props: {
    results: AugmentedWord[];
}) => JSX.Element;
export declare const Layout: (props: {
    publicBundleConfig: MarkdownReaderPageProps["publicBundleConfig"];
    pages: MarkdownReaderPage[];
    children: any;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
//# sourceMappingURL=Layout.d.ts.map