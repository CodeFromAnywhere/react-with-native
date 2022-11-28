import { MarkdownParse } from "markdown-types";
/**
 This function takes a markdown parse and gets the first paragraph and a title from it, if available.

 Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.
 */
export declare const getMarkdownIntro: (markdownParse: MarkdownParse | null) => {
    title: string | undefined;
    firstParagraph: string | null;
};
//# sourceMappingURL=getMarkdownIntro.d.ts.map