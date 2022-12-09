import { BackendAsset } from "asset-type";
export declare const processChatGptPrompt: (config: {
    contextContent: string | null;
    selectionContent: string | null;
    contextualPromptSlug: string | undefined;
    /**
     * DESCRIPTION: These variables can be used: %context will be replaced by your context, %selection will be replaced by your selection. Provide a good prompt that combines that in a specific format
     */
    customPromptContent: string | null;
    saveNewPromptWithName: string | null;
    commentContent: string | null;
    isHeadless?: boolean | undefined;
    prompt_projectRelativePath?: string | undefined;
    thread?: string | undefined;
}) => Promise<{
    isSuccessful: boolean;
    message: string;
    result?: {
        text?: string | undefined;
        assets?: BackendAsset[] | undefined;
        thread: string;
    } | undefined;
}>;
//# sourceMappingURL=processChatGptPrompt.d.ts.map