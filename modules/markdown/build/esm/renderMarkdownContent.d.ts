/// <reference types="react" />
import { Components } from "react-markdown";
import { MarkdownParseRenderConfig } from "./types.js";
export declare const HtmlHeader: Components["h1"] | Components["h2"] | Components["h3"] | Components["h4"] | Components["h5"] | Components["h6"];
/**
 * renders a markdown striing (without frontmatter)
 */
export declare const renderMarkdownContent: (content: string, config: MarkdownParseRenderConfig) => JSX.Element | "[No content]";
export declare const getYoutubeId: (url: string | undefined) => string | undefined;
