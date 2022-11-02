import { AnyModelLocation, KeyValueMarkdownModelType } from "common-types";
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 */
export declare const parseLine: (string: string, modelLocation: AnyModelLocation) => Omit<KeyValueMarkdownModelType, "categoryStack" | "index" | "indexRelative" | "id">;
export declare const test: () => Promise<boolean>;
//# sourceMappingURL=parseLine.d.ts.map