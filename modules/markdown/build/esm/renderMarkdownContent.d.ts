import { Components } from "react-markdown";
import { MarkdownParseRenderConfig } from "./types.js";
export declare const header: Components["h1"];
/**
 * renders a markdown striing (without frontmatter)
 */
export declare const renderMarkdownContent: (content: string, config: MarkdownParseRenderConfig) => JSX.Element;
export declare const getYoutubeId: (url: string | undefined) => string | undefined;
