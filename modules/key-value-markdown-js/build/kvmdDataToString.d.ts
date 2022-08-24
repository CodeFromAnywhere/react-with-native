import { KeyValueMarkdownModelType } from "common-types";
/**
 * parses KeyValueMarkdownModelType into a string which can be part of a new markdown file
 *
 * NB: we need to know the previous line as well because the header we need to print depends on it
 *
 */
export declare const kvmdDataToString: (kvmdData: KeyValueMarkdownModelType, previous: KeyValueMarkdownModelType | undefined) => string;
//# sourceMappingURL=kvmdDataToString.d.ts.map