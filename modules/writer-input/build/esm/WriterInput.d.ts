import { WriterType } from "filename-conventions";
import { MappedObject } from "js-util";
import { AugmentedWord } from "markdown-reader-types";
import { DbModels } from "sdk-db";
import { WriterViewEnum } from "writer-types";
/**
Writer input for any utf8 based text, file or no file
*/
export declare const WriterInput: (props: {
    /**
     * boolean indicating whether or not the file has already been saved
     *
     * If false, save button will be shown
     */
    isSaved?: boolean | undefined;
    /**
     * function to save the file
     *
     * If given, will render a button to save the file
     */
    save?: (() => void) | undefined;
    /**
     * Provide a MappedObject of `AugmentedWord`s here to allow for autocomplete intellisense type stuff
     */
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
    /**
     * The text to edit
     */
    value: string;
    /**
     * can refer to a modelname in case you have frontmatter in that model that needs to be formified
     */
    markdownModelName?: keyof DbModels | undefined;
    /**
     * Callback called when text changes
     */
    onChange: (value: string) => void;
    /**
     * Force the type of content
     */
    type?: WriterType | undefined;
    /**
     * If you provide the path to the edited file here, it will infer the type of data in the file (typescript, markdown, etc) from it
     *
     * Besides this, it is required to show assets, as we need to know where the file is stored so we can know where the relative assets should be resolved.
     */
    projectRelativeFilePath?: string | undefined;
    /**
     * A function to reload the content
     *
     * If given, will show this button to reload the text manually
     */
    reload?: (() => void) | undefined;
    /**
     * Boolean indicating whether or not this thing is loading (content is still not there)
     */
    isLoading?: boolean | undefined;
    /**
     * if true, hides buttons
     */
    hideButtons?: boolean | undefined;
    /**
     * classname for the container
     */
    className?: string | undefined;
    /**
     * If given, forces the writerview to this value instead of using the current writerViewStore value
     */
    initialWriterView?: WriterViewEnum | undefined;
}) => JSX.Element;
