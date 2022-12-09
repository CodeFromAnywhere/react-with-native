import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
import { ContextualPrompt, ContextualPromptResult } from "ai-types";
export declare type MarkdownParseRenderConfig = {
    disableSelectionContextMenu?: boolean;
    /**
     * Folder path where the markdown is supposed to be located.
     *
     * This is used for knowing where relative links or assets can be found
     *
     * If you don't provide this, assets can't be shown, because we wouldn't know where to get them from.
     */
    projectRelativeBaseFolderPath?: string;
    /**
     * project relative path of the markdown file.
     *
     * This is used for knowing where relative links or assets can be found
     *
     * If you don't provide this, assets can't be shown, because we wouldn't know where to get them from.
     */
    projectRelativeMarkdownFilePath?: string;
    /**
     * Mapped object of `AugmentedWord`s. Used to augment the rendered markdown with tooltips and links showing more information about the augmented words.
     *
     * TODO: this value should probably be precalculated and indexed, because the dev experience becomes very slow with this
     */
    augmentedWordObject?: MappedObject<AugmentedWord>;
    /**
     * Used to render a context menu
     */
    selectionPrompts?: ContextualPrompt[];
    /**
     * Used to render in between the lines in different ways
     */
    selectionContextualPromptResults?: ContextualPromptResult[];
    /**
     * Used to render on the file in different ways
     */
    fileContextualPromptResults?: ContextualPromptResult[];
    /**
     * If true, the files should come from a static folder. This means the relative references should now become projectRelative. Also see `copyAllRelativeFiles`.
     *
     * If not true, we will use the api.
     */
    isStatic?: boolean;
    /**
     * If true, we assume not all files are present in the static folder yet. This means we need to use the api.
     */
    isDev?: boolean;
    /**
     *
     */
    big?: boolean;
};
