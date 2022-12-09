/**
Gets all contextualPromptResults, but only if specific things are true

TODO:

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.
 */
export declare const getContextualPromptResults: (config?: {
    prompt_projectRelativePath?: string | undefined;
    promptSlugs?: string[] | undefined;
} | undefined) => Promise<import("ai-types").ContextualPromptResult[]>;
//# sourceMappingURL=getContextualPromptResults.d.ts.map