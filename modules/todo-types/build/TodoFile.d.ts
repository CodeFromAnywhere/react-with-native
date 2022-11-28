import { ExtendedMarkdownProperties, PostableProperties, WebMarkdownProperties } from "markdown-types";
import { MarkdownModelType } from "model-types";
import { TodoFileProperties } from "./TodoFileProperties";
/**
 * Any markdown file in the todo folder should become this model
 */
export interface TodoFile extends MarkdownModelType, ExtendedMarkdownProperties, WebMarkdownProperties, PostableProperties, TodoFileProperties {
}
//# sourceMappingURL=TodoFile.d.ts.map