import { MarkdownParse, SimplifiedSchemaProperty } from "code-types";
import { Json } from "json-util";
export declare type JsonPart = {
    identifier?: string;
    json: Json;
};
export declare const propertyToTableRow: (property: SimplifiedSchemaProperty) => string;
/**
 * finds all md files in a folder and creates a single MarkdownParse
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
export declare const bundleFolderWithMarkdown: (absoluteFolderPath: string, fileName?: string) => Promise<{
    markdownParse: MarkdownParse;
    outline: string;
}>;
/**
 *
 * creates a summary for a whole bundle
 *
 * NB: Related to `bundleToBookMd`
 */
export declare const bundleToMarkdown: ({ bundleConfigId, includeModules, }: {
    bundleConfigId: string;
    /** if true, also includes the private modules */
    includeModules?: boolean | undefined;
}) => string;
/**
 * summarizes the whole OS project into a markdown string
 */
export declare const projectToMarkdown: ({ includeTodo, }: {
    includeTodo?: boolean | undefined;
    includeOperationDetails?: boolean | undefined;
}) => string;
//# sourceMappingURL=bundlings.d.ts.map