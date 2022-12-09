import { ContextualPrompt } from "ai-types";
import { Creation } from "model-types";
export declare const getContextualPrompt: (contextualPromptSlug: string | undefined, customPromptContent: string | null, saveNewPromptWithName: string | null) => Promise<(Creation<ContextualPrompt> & {
    slug: string;
}) | undefined>;
//# sourceMappingURL=getContextualPrompt.d.ts.map