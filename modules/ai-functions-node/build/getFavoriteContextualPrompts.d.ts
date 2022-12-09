import { FileType } from "filename-conventions";
/**
 * Returns all contextual prompts for the selection and for the page with the right context type
 */
export declare const getContextualPrompts: (contextType?: FileType) => Promise<{
    selectionContextualPrompts: import("ai-types").ContextualPrompt[];
    pageContextualPrompts: import("ai-types").ContextualPrompt[];
}>;
//# sourceMappingURL=getFavoriteContextualPrompts.d.ts.map