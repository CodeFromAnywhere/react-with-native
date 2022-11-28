import { marked } from "marked";
/**
 * Recursively flatten a marked token and return something if a find function is met
 */
export declare const flattenMarkedTokenRecursive: (token: marked.Token, findFunction: (token: marked.Token) => boolean) => marked.Token[];
//# sourceMappingURL=flattenMarkedTokenRecursive.d.ts.map