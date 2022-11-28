import { MarkdownModelType } from "model-types";
import { ExtendedMarkdownProperties } from "./ExtendedMarkdownProperties";
import { PostableProperties } from "./PostableProperties";
import { WebMarkdownProperties } from "./WebMarkdownProperties";
/**
 * Every markdown file meant for the web, should have these optional parameters that can be declared as its frontmatter
 *
 * NB: This is not part of MarkdownModelType, because MarkdownModelType is very barebones general purpose, not only for the web!
 */
export interface WebMarkdownFile extends MarkdownModelType, ExtendedMarkdownProperties, WebMarkdownProperties, PostableProperties {
}
//# sourceMappingURL=WebMarkdownFile.d.ts.map