import { KeyValueMarkdownModelType, Storing } from "model-types";
import { DbQueryResult } from "../types";
/**
 * Takes stored data and a slug to remove
 */
export declare const removeKeyValueMarkdown: (storedData: Storing<KeyValueMarkdownModelType>[], slug: string) => DbQueryResult & {
    newStoredData: Storing<KeyValueMarkdownModelType>[];
};
//# sourceMappingURL=removeKeyValueMarkdown.d.ts.map