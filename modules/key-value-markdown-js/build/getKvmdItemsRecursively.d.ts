import { MarkdownChunk } from "markdown-types";
import { CategoryStack, KeyValueMarkdownModelType, Storing } from "model-types";
/**
 * recursively dives into the Chunk to get all kvmd items
 *
 * NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name
 */
export declare const getKvmdItemsRecursively: (chunk: MarkdownChunk, categoryStackCalculatedUntilNow?: CategoryStack) => Storing<KeyValueMarkdownModelType>[];
//# sourceMappingURL=getKvmdItemsRecursively.d.ts.map