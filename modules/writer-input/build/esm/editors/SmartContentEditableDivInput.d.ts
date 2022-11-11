import { WriterType } from "filename-conventions";
import { MarkdownParseRenderConfig } from "markdown";
import { SubtextConfig, SubwordConfig } from "writer-types";
export declare type ParseTextContentToHtmlString = (textContent: string, type: "typescript" | "markdown" | "json", subtextConfig: SubtextConfig, subwordConfig: SubwordConfig, markdownParseRenderConfig?: MarkdownParseRenderConfig) => string;
/**
Returns a html string from a text string that can be rendered in the dom

NB: because we're parsing text from div.innerText, sometimes there are two newlines when there should be one break.

Three newlines means there should be two breaks...
 */
export declare const parseTextContentToHtmlString: ParseTextContentToHtmlString;
/**
 * Uses ContentEditableDivInput, and attaches the Completions to it based on the content type. Also all other data required...
 *
 *
 * NB: TODO: once the autocomplete inside the contentEditable is done, these things should move inside of there. I need a component that has lots of UI/UX but isn't very smart. This will be able to be re-used in many usecases...
 */
export declare const SmartContentEditableDivInput: (props: {
    writerType: WriterType;
    value: string;
    onChange: (value: string) => void;
    markdownParseRenderConfig?: MarkdownParseRenderConfig | undefined;
}) => JSX.Element;
