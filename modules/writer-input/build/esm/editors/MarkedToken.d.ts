/// <reference types="react" />
import { MarkdownParseRenderConfig } from "markdown";
import { marked } from "marked";
import { SubtextConfig, SubwordConfig } from "writer-types";
export declare const MAX_COMPLETIONS_AMOUNT = 100;
export declare const depthFontSizes: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
};
export declare const metaClickableClassName = "context-writer-meta-clickable";
/**
 * Function that can be used to iterate over the marked parse and style every token, recursively
 *
 * NB: this returns a regular react component, and should, for setting it as InnerHTML, be parsed with the `ReactDOMServer`
 */
export declare const MarkedToken: (props: {
    item: marked.Token;
    subtextConfig: SubtextConfig;
    subwordConfig: SubwordConfig;
    markdownFileConfig: MarkdownParseRenderConfig;
    /**
     * If enabled, all content will be tested in realtime
     */
    testModeEnabled?: boolean | undefined;
}) => JSX.Element;
