import { ContentEditableRenderComponentType } from "./types";
import { marked } from "marked";
/**
 * Creates an element from the markdown input, and then uses the `toMarkdownString` function to make it markdown again.
 *
 * TODO: use <template>, might be more accurate. See https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
 */
export declare const testContentEditableRenderComponent: <TToken extends marked.Token>(ContentEditableRenderComponent: ContentEditableRenderComponentType<TToken>, markedToken?: TToken | undefined) => boolean;
