import { marked } from "marked";
/**
 * find all items that match a token, recursively in all nested things
 */
export declare const flattenMarkdownString: (markdownString: string, findFunction: (token: marked.Token) => boolean) => marked.Token[];
//# sourceMappingURL=flattenMarkdownString.d.ts.map