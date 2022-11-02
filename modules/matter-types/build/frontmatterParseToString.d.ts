import { Frontmatter } from "./Frontmatter";
export declare type FrontmatterValue = string | number | boolean | string[] | null | undefined;
export declare const stringifyNewlines: (string: string) => string;
export declare const getFrontmatterValueString: (value: FrontmatterValue) => string | null;
/**
 * For now, simply quote a string if it contains commas
 *
 * There are probably more edgecases that need to be fixed here
 */
export declare const quotedOrNot: (string: string) => string;
/**
 * Parses frontmatter object into a frontmatter string
 * - includes a newline at the end
 * - string[] becomes a comma separated string
 * TODO: maybe parse xxxAt values into human readable dates
 */
export declare const frontmatterParseToString: (frontmatter: Frontmatter) => string;
export declare const test: (() => Promise<boolean>)[];
//# sourceMappingURL=frontmatterParseToString.d.ts.map