import { SubtextConfig } from "writer-types";
/**
 * make a subtext text based on the text of a complete paragraph (may contain single newlines and other markdown stuff, but never double newlines)
 *
 * Returns either the subtext string or a HTML string with a container around the subtext, depending on if you provide `withContainer`
 */
export declare const getSubtext: (markdownString: string, subtextConfig: SubtextConfig) => string | undefined;
