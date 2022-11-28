/// <reference types="react" />
import { MarkdownParseRenderConfig } from "markdown/build/esm";
import { MarkdownParse } from "markdown-types";
export declare const MarkdownView: (props: {
    view: "view" | "presentation";
    markdownParse: MarkdownParse;
    markdownParseRenderConfig: MarkdownParseRenderConfig;
}) => JSX.Element;
