export declare type ShowPromptAlertFunction = (originalPromptName: string, textMarkdown?: string, thread?: string, projectRelativeFilePath?: string) => void;
/**
 * Recursive hook that calls its own function if you click "respond", which creates an additional item in the thread
 */
export declare const usePromptResultAlert: () => ShowPromptAlertFunction;
//# sourceMappingURL=usePromptResultAlert.d.ts.map