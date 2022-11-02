import { KeyValueMarkdownModelType, Storing } from "model-types";
/**
 * get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)
 *
 * can be undefined if the item has no parent
 */
export declare const getParentSlug: (item: Storing<KeyValueMarkdownModelType>) => string | undefined;
//# sourceMappingURL=getParentSlug.d.ts.map