#!/usr/bin/env node
import { MarkdownParse, KeyValueMarkdownData, MarkdownChunk, MarkdownParagraph } from "k-types";
export declare const flattenMarkdownChunks: (markdownChunks: MarkdownChunk[]) => MarkdownParagraph[];
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 */
export declare const parseLine: (string: string) => Omit<KeyValueMarkdownData, "categoryStack">;
/**
 * parses a key value md string (with support for headings and frontmatter)
 */
export declare const kvMdStringToJson: (kvMdString: string) => {
    parameters: MarkdownParse["parameters"];
    data: KeyValueMarkdownData[];
};
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
export declare const test: (() => Promise<boolean>)[];
//# sourceMappingURL=general.d.ts.map