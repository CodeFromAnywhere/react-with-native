import { MarkdownParseRenderConfig } from "./types.js";
/**
 * renders a markdown striing (without frontmatter)
 */
export declare const renderMarkdownContent: (content: string, config: MarkdownParseRenderConfig) => JSX.Element;
export declare const getYoutubeId: (url: string | undefined) => string | undefined;
