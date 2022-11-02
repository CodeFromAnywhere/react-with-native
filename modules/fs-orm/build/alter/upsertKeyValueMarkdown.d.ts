import { CategoryStack, KeyValueMarkdownModelType, Storing } from "model-types";
import { DbQueryResult } from "../types";
/**
this location matches any category that equals the categorystack
*/
export declare const findParent: (arrayItem: Storing<KeyValueMarkdownModelType>, newCategoryStack: CategoryStack) => boolean;
/**
 *
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function
 *
 * - otherwise inserts, at the right category, in the right place in the array
 *
 * BEWARE:
 *
 * - the categoryStackCalculated must be existing in the markdownfile.
 * - you cannot insert a header, always insert an item with `isHeaderCalculated:false`
 */
export declare const upsertKeyValueMarkdown: (storedData: Storing<KeyValueMarkdownModelType>[], storingItem: Storing<KeyValueMarkdownModelType>) => DbQueryResult & {
    newStoredData: Storing<KeyValueMarkdownModelType>[];
};
//# sourceMappingURL=upsertKeyValueMarkdown.d.ts.map