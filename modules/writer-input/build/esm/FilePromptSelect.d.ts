/// <reference types="react" />
import { ContextualPrompt } from "ai-types";
export declare const FilePromptSelect: (props: {
    items: ContextualPrompt[] | undefined;
    contextContent: string;
    projectRelativeFilePath?: string | undefined;
}) => JSX.Element;
