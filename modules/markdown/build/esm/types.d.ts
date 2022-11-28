import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
export declare type MarkdownParseRenderConfig = {
    /**
     * Folder path where the markdown is supposed to be located.
     *
     * This is used for knowing where relative links or assets can be found
     */
    projectRelativeBaseFolderPath: string;
    /**
     * project relative path of the markdown file.
     *
     * This is used for knowing where relative links or assets can be found
     */
    projectRelativeMarkdownFilePath: string;
    /**
     * Mapped object of `AugmentedWord`s. Used to augment the rendered markdown with tooltips and links showing more information about the augmented words.
     */
    augmentedWordObject?: MappedObject<AugmentedWord>;
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
