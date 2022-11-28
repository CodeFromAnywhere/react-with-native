/// <reference types="react" />
import { FinalDivType } from "react-with-native";
import { MarkdownParseRenderConfig } from "markdown";
import { ParseTextContentToHtmlString } from "./SmartContentEditableDivInput";
import { SubtextConfig, SubwordConfig } from "writer-types";
export declare type TextSegment = {
    text: string;
    node: ChildNode;
};
/**
 * Iterates over all child-nodes in the editor, replaces text with a segment, and replaces nodes with a flat list of segments
 *
 * Returns all textSegments in an array
 */
export declare const getTextSegments: (element: ChildNode | null) => TextSegment[];
/**
 * Div that is `contentEditable` by default and has possibilities for color/style highlighting, autocomplete, subtexts and tooltips
 */
export declare const ContentEditableDivInput: <T extends unknown>(props: {
    /**
     * the current raw content of the input
     */
    value: string;
    /**
     * save your state with this function
     */
    onChange: (newValue: string) => void;
    /**
     * NB: not needed for non-markdown stuff
     */
    markdownParseRenderConfig?: MarkdownParseRenderConfig | undefined;
    subwordConfig: SubwordConfig;
    subtextConfig: SubtextConfig;
    /**
     * Your function to parse the raw text into styled text (HTML)
     *
     * NB: you can't use react in here, this function needs to return a string!
     */
    parseTextContentToHtmlString: ParseTextContentToHtmlString;
    /**
     * Extra props you want to pass to the main div
     */
    divProps: Omit<FinalDivType<T>, "value" | "onChange" | "contentEditable" | "onInput">;
}) => JSX.Element;
