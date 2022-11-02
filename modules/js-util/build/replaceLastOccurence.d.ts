export declare const reverseString: (string: string) => string;
/**
 * Replaces the last occerence of something in a string by something else
 *
 * Example:
 *
 * ```ts
 * const result = replaceLastOccurence("theBestSlugSlugSlug", "Slug", "Slack");
 * console.log(result); // returns theBestSlugSlugSlack
 * ```
 *
 * NB: this is not the most efficient method, as it reverses the string by making it an array, twice. It can probably be done more efficiently by using `String.lastIndexOf`
 */
export declare const replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
//# sourceMappingURL=replaceLastOccurence.d.ts.map