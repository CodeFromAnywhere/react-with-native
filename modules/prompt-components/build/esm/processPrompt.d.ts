import { ContextualContent, ContextualPrompt } from "ai-types";
import { ShowPromptAlertFunction } from "./usePromptResultAlert";
/**
 * Main function to process a prompt. For now it calls `processChatGptPrompt` api and shows an alert afterwards with the result. In some cases we may want to process the prompt differently, e.g. storing it in a queue.
 */
export declare const processPrompt: (config: {
    prompt: ContextualPrompt;
    contextualContent: ContextualContent;
    showPromptAlert: ShowPromptAlertFunction;
}) => Promise<void>;
//# sourceMappingURL=processPrompt.d.ts.map