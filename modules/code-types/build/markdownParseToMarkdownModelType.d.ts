import { MarkdownParse } from "./MarkdownParse";
import { MarkdownModelType, Storing } from "model-types";
import { Frontmatter } from "matter-types";
/**
 * Tries to parse a date from a string
 * - implements default behavior of `new Date` with a try catch
 * - returns a unix timestamp (ms since 1970 AD)
 *
 * TODO: put in a better location... date-util?
 */
export declare const tryParseDate: (dateString: string) => number | undefined;
/**
 * First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent
 *
 * If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system
 *
 * If that doesn't succeed, sometimes we'll set it to  the current timestamp
 */
export declare const parseMarkdownModelTimestamp: (parameters: Frontmatter, markdownParse: MarkdownParse, parameterName: "createdAt" | "createdFirstAt" | "updatedAt" | "deletedAt" | "openedAt") => number;
/**
 * makes a markdownModelType from a markdownParse.
 */
export declare const markdownParseToMarkdownModelType: (markdownParse: MarkdownParse | null) => Storing<MarkdownModelType> | null;
//# sourceMappingURL=markdownParseToMarkdownModelType.d.ts.map