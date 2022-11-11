import { SubtextConfig } from "writer-types";
/**
 * Returns a string with HTML for the subtext container, given you already have
 */
export declare const SubtextContainer: (props: {
    /**
     * raw markdown that should be converted into a subtext
     */
    rawMarkdown: string;
    subtextConfig: SubtextConfig;
}) => JSX.Element | null;
