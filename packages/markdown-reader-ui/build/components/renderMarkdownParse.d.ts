/// <reference types="react" />
import { MarkdownParse } from "code-types";
import { FrontMatter } from "common-types";
/**
 * renders a markdown striing (without frontmatter)
 */
export declare const renderMarkdownContent: (content: string, config?: {
    big?: boolean;
}) => JSX.Element;
/**
 * renders the MardkownParse interface (including frontmatter)
 */
export declare const renderMarkdownParse: (markdownParse: MarkdownParse) => JSX.Element;
/**
 * Renders markdown frontmatter parameters (and optionally a spacer)
 */
export declare const renderFrontMatter: (parameters: FrontMatter, config?: {
    renderSpacer?: boolean;
}) => JSX.Element | null;
//# sourceMappingURL=renderMarkdownParse.d.ts.map