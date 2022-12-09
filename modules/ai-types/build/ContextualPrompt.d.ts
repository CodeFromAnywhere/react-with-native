import { SlugModelType } from "model-types";
import { FileType } from "filename-conventions";
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * Model for prompting information from third party sources
 */
export interface ContextualPrompt extends SlugModelType {
    /**
     * descriptive name of the prompt
     */
    name: string;
    /**
     * What the question is that this prompt is answering, short version (without context)
     */
    title?: string;
    /**
     * if given, should be a path to a file or folder, so the prompt will never be shown outside of this scope
     *
     * Never stored! Is found based on the location of the file in your file system
     */
    scopeProjectRelativePath?: string;
    /**
     * Only prompt is stored (string)
     */
    promptContent: string;
    /**
     * Variable: ${folder}
     *
     * If set to `flat`, all folder content will be added as context, without sub-folders
     *
     * If set to `recursive`, all folder content will be added as context, including sub-folders
     */
    folderContentContext?: "flat" | "recursive";
    /**
     * Variable: ${context}
     *
     * Whether or not the prompt requires the context
     *
     * Can be a file contents, but can also be the contents of an HTML page
     */
    usesContext?: boolean;
    /**
     * Variable: ${selection}
     *
     * Whether or not the prompt requires the selection
     */
    usesSelection?: boolean;
    /**
     * Variable: ${any}
     *
     * If true, will return this prompt in any context prompt, as selection results because it can use any of them as its variable. It will use the smallest one available.
     */
    usesAnyContext?: boolean;
    /**
     * If given, will be used to filter the selection of prompts to match the context type
     */
    contextType?: FileType;
    instantExecution?: boolean;
    isFavorite?: boolean;
    categoryStackCalculated?: string[];
}
//# sourceMappingURL=ContextualPrompt.d.ts.map