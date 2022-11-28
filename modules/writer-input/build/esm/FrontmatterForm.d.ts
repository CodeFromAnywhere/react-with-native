/// <reference types="react" />
import { SimplifiedSchema } from "code-types";
import { MarkdownParse } from "markdown-types";
/**
 * Renders a form for frontmatter without save button
 */
export declare const FrontmatterForm: (props: {
    modelName?: string | undefined;
    projectRelativeMarkdownFilePath: string;
    frontmatterSchema: SimplifiedSchema;
    markdownParse: MarkdownParse;
    onChange: (value: string) => void;
}) => JSX.Element;
