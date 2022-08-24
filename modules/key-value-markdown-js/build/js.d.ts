import { MarkdownChunk, MarkdownParagraph } from "code-types";
import { KeyValueMarkdownData } from "common-types";
export declare const flattenMarkdownChunks: (markdownChunks: MarkdownChunk[]) => MarkdownParagraph[];
/**
 * recursively dives into the Chunk to get all paragraphs inside
 */
export declare const getParagraphsRecursively: (chunk: MarkdownChunk, categoryStackUntilNow?: KeyValueMarkdownData["categoryStack"]) => MarkdownParagraph[];
/**
 * mapper function to give a kvmd data object other parameters.
 *
 * NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.
 */
export declare const kvmdDataMap: <T extends {
    [key: string]: string | string[] | undefined;
}>(data: KeyValueMarkdownData[], { keyName, valueName, categoryStackName, commentName, }: {
    /**
     * key by default
     */
    keyName?: string | undefined;
    /**
     * value by default
     */
    valueName?: string | undefined;
    /**
     * comment by default
     */
    commentName?: string | undefined;
    /**
     * categoryStack by default
     */
    categoryStackName?: string | undefined;
}) => T[];
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 */
export declare const parseLine: (string: string) => Omit<KeyValueMarkdownData, "categoryStack">;
//# sourceMappingURL=js.d.ts.map