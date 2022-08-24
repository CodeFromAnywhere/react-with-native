import { MarkdownChunk, MarkdownParagraph } from "code-types";
import { CategoryStack } from "common-types";
/**
 * recursively dives into the Chunk to get all paragraphs inside
 */
export declare const getParagraphsRecursively: (chunk: MarkdownChunk, categoryStackUntilNow?: CategoryStack) => MarkdownParagraph[];
export declare const test: () => Promise<boolean>;
//# sourceMappingURL=getParagraphsRecursively.d.ts.map