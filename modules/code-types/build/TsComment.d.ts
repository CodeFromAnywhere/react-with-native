import { Markdown, FrontMatter } from "common-types";
import { IndexId } from "./IndexId";
export declare const commentTypesConst: readonly ["todo", "discussion", "idea", "later", "nb"];
export declare const commentTypes: ("todo" | "discussion" | "idea" | "later" | "nb")[];
export declare type CommentType = typeof commentTypesConst[number];
/**
 * comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.
 *
 * special line prefixes:
 * - TODO:
 * - DISCUSSION:
 * - IDEA:
 * - LATER:
 * - NB:
 *
 * The convention should be that single-line comments should start with that. This then becomes the type of the comment.
 * You can also put multiple prefixes at the start.
 *
 * Example:
 *
 * `// TODO: NB: this is a todo but its also important`
 *
 * Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.
 *
 *
 *
 * There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.
 * - classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...
 * - privacy
 * - ...?
 *
 * NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!
 *
 * NB: comments are part of the code, so they should always be in English!
 */
export interface TsComment extends IndexId {
    /**
     * the content of the comment in markdown, without frontmatter
     */
    comment: Markdown;
    /**
     * parameters destructured from the frontmatter of the parsed markdown (if comment is not a oneliner, otherwise it'll be empty)
     */
    parameters: FrontMatter;
    /**
     * These are the type indicators that were found in this single or multiline comment. Can be multiple.
     */
    types: CommentType[];
    /**
     * first line of the comment
     */
    firstLine: number;
    /**
     * last line of the comment
     */
    lastLine: number;
    /**
     * statement name the comment belongs to
     */
    statementName?: string;
    /**
     * raw statement text the comment belongs to
     */
    rawStatement?: string;
}
//# sourceMappingURL=TsComment.d.ts.map