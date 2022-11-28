import { MarkdownParse } from "markdown-types";
import { MarkdownParseConfig } from "./types";
/**
 * makes a markdown parse from a markdown string
 *
 * TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.
 *
 * TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!
 */
export declare const mdToJsonParse: (markdownString: string, fileName?: string, config?: MarkdownParseConfig) => MarkdownParse;
//# sourceMappingURL=mdToJsonParse.d.ts.map