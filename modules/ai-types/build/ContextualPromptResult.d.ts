import { DefaultModelType } from "model-types";
import { BackendAsset } from "asset-type";
/**
 * A result from a contextual prompt. Doesn't include the full context, for that you can find all results for a certain thread
 */
export interface ContextualPromptResult extends DefaultModelType {
    /**
     * When was the result created
     *
     */
    createdAt: number;
    /**
     * It's a crucial question whether prompt results are still valid once the actual file has been altered. If we have prompts in a chain, it may be so that all of them become invalid
     *
     * For example, if a very fundamental belief changes, I need to alter all generated inferences for that belief.
     *
     * I think it might be better to add indexation on the validity maybe, if beliefs change, and mark the file as "old" if I want to write a new version. The frontmatter may change, but we should probably keep the content immutable because it has too many implications if we don't
     *
     * It is the same as the O in the SOLID principle!
     */
    isValidCalculated?: boolean;
    /**
     * Contextual prompt this prompt was based on. We don't have the acutal prompt here since we use an extended convention from `fs-orm`
     */
    contextualPromptSlug: string;
    /**
     * Path the result is about, if any. Can also be a folder!
     */
    prompt_projectRelativePath?: string;
    /**
     * Prompt string of the prompt, but only of this very question, not all previous things if this is a later item in a thread, that can be stored in another result.
     */
    prompt?: string;
    /**
     * In case the prompt had `.useSelection: true`, this should be the selected string, so the location can be found in the markdown, so the markdown can be augmented with a link to the result.
     */
    selectionString?: string;
    /**
     * If true, will get priority in where it's shown
     */
    isFavorite?: boolean;
    resultText?: string;
    resultAssets: BackendAsset[];
    /**
     * Unique ID for this thread, generated if not given to the prompt
     */
    thread?: string;
}
//# sourceMappingURL=ContextualPromptResult.d.ts.map