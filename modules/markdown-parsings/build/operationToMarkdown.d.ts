import { MarkdownParse } from "markdown-types";
import { OperationSummary } from "./OperationSummary";
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
export declare const operationToMarkdown: (config: {
    operationSummary: OperationSummary;
    /**
     * - save: saves the result in the operation `README.md` and `CONTRIBUTING.md` and other default md files
     * - string: returns the full markdown string
     * - parse: returns the `MarkdownParse`
     */
    returnType?: "string" | "parse" | "save" | undefined;
    includeDocs?: boolean | undefined;
    includeInfo?: boolean | undefined;
}) => Promise<string | MarkdownParse | undefined>;
//# sourceMappingURL=operationToMarkdown.d.ts.map