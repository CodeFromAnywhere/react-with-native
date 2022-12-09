/// <reference types="react" />
import { MarkdownParseRenderConfig } from "./types.js";
/**
Renders a markdown string (without frontmatter)

TODO:

- **Show selection prompt-results** In `renderMarkdownContent`, augment the alineas with the `ContextualPromptResult`. Would be great to see the results when hovering over the selected thing, or maybe showing it with a button, or inline, even.

 */
export declare const renderMarkdownContent: (content: string, config: MarkdownParseRenderConfig) => JSX.Element;
