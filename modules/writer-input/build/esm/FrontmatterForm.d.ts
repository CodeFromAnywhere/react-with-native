import { MarkdownParse, SimplifiedSchema } from "code-types";
/**
 * Renders a form for frontmatter without save button
 */
export declare const FrontmatterForm: (props: {
    projectRelativeMarkdownFilePath: string;
    frontmatterSchema: SimplifiedSchema;
    markdownParse: MarkdownParse;
    onChange: (value: string) => void;
}) => JSX.Element;
