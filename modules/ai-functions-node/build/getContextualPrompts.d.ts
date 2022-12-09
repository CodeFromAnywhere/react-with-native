import { FileType } from "filename-conventions";
import { ContextualPromptsObject } from "./types";
import { ContextualPrompt } from "ai-types";
/**
 * Function to centralise the convention of the db file location of a scoped prompt
 */
export declare const getFolderRelativeScopeDbFilePath: (filename?: string) => string;
/**
 * Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.
 */
export declare const getContextualPromptsArray: (scopeProjectRelativePath?: string) => Promise<{
    databaseResult: ContextualPrompt[];
    scopeResult?: ContextualPrompt[] | undefined;
}>;
/**
 * Returns all contextual prompts for the selection and for the page with the right context type
 */
export declare const getContextualPrompts: (contextType?: FileType, scopeProjectRelativePath?: string) => Promise<ContextualPromptsObject>;
//# sourceMappingURL=getContextualPrompts.d.ts.map