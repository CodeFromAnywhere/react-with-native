import { MarkdownModelType } from "model-types";
/**
 * ---
 * operationRelativePath: OPERATION.md
 * isOperationIndex: true
 * ---
 *
 * anything configurable about the operation.
 *
 * Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.
 *
 * Let's try to use OPERATION.md
 *
 * TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.
 *
 */
export interface OperationConfig extends MarkdownModelType {
    /**
     *
     * Sometimes you are using function in a UI, which cannot be inferred with imports because they are used indirectly via an api. Here you can specify which operations on the backend are needed for an operation (ui mostly)
     *
     * This array is simply a list of operation names needed for this operation that are not imported.
     *
     * NB: no need to specify things here that you also import in this operation, because these are already automatically detected.
     *
     */
    indirectDependencies?: string[];
    /**
     * A list of authors
     *
     * Should be used to create bundle AUTHORS.md
     */
    authors?: string[];
    /**
     * A list of contributors
     *
     * Can be used to create bundle CONTRIBUTORS.md
     */
    contributors?: string[];
    /**
     * one-line explanation of what the operation does (no markdown)
     */
    shortDescriptionText?: string;
    /**
     * Any descriptions in markdown format
     *
     * - Markdown description of what the operation does.
     * - Installation instructions, if it is possible
     * - Usage instructions (with example), if available
     *
     * This is the main content of the markdown file
     */
    markdown: string;
}
//# sourceMappingURL=OperationConfig.d.ts.map