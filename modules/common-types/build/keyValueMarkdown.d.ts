/**
 * TODO:
 * either make a special category crud for the category model would be nice maybe (especially a backend that makes sure all references stay updated would be epic)

 */
export declare type FrontMatter = {
    [frontMatterKey: string]: string | number | null | boolean | undefined;
};
/**
 *
 * handy model type for storing stuff in a KeyValue Markdown file.
 * empty lines are omitted
 *
 * all you need to specify in the kvmd is the key and the value, separated by ":"
 */
export declare type KeyValueMarkdownModelType = {
    /**
     * Calculated:
     *
     * by taking the relative file path + a stringified version of the index.
     *
     * used for compatibility with some general purpose functions
     */
    id: string;
    /**
     * line where the kv was found (at any given moment this is an unqiue identifier, but it may change without notice, so it's not a good idea to store stuff in kvmd if it has references to the id)
     */
    index: number;
    /**
     * relative index from the category header, starting count with 1. if there is no header, also counts starting with 1
     */
    relativeIndex: number;
    /**
     * key
     *
     * should be english because it's kind of part of the codebase!
     */
    name: string;
    /**
     * calculated: slug for this key (kebab case form of the name)
     */
    slug: string;
    /**
     * value behind the semicolom (:). If not given, will be undefined.
     *
     * If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string
     *
     * can be any language that we can detect
     */
    value: string | number | boolean | null | undefined;
    /** comment in html syntax. if not given, will be null */
    comment: string | null;
    /** preceding categories found in markdown (headers) */
    categoryStack: CategoryStack;
};
/**
 *
 */
export declare type CategoryStack = string[];
export declare type KeyValueMarkdownParse = {
    parameters: FrontMatter;
    data: KeyValueMarkdownModelType[];
};
/**
 * ---
 * isDbModel: false
 * ---
 *
 * Simple recursive data structure for hierarchical categories. Should be used to make any category model
 *
 * Make sure, when extending this, to provide a reference `xxxSlug` and its content `xxx` as optional parameters to its parent categories.
 *
 * E.g. for a `CountryCategory`, you should provide `countryCategorySlug` and `countryCategory`
 */
export interface CategoryModelType extends KeyValueMarkdownModelType {
}
//# sourceMappingURL=keyValueMarkdown.d.ts.map