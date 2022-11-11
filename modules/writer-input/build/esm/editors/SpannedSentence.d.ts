import { ContentEditableRenderProps } from "./types";
/**
 * Needs to be done for every text that can have potential interactions
 */
export declare const SpannedSentence: (props: Omit<ContentEditableRenderProps<any>, "markedToken"> & {
    sentence: string;
}) => JSX.Element;
