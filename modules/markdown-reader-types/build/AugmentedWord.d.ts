export declare type AugmentedWordTypeEnum = string;
/**
 * AugmentedWords should have a small footprint since there can be many of them
 *
 * Words with a specific affix (backticks, bolded, italic) will match against these.
 *
 * Used to link automatically to functionNames, InterfaceNames, operation-names, words, and more..
 */
export declare type AugmentedWord = {
    type: AugmentedWordTypeEnum;
    /**
     * Word without affixes. The affixes will be decided in the frontend parser based on the type
     */
    word: string;
    queryPath: string | undefined;
    projectRelativeMarkdownSourcePath: string;
    spoiler: string | undefined;
    /**
     * If true, will match on lowercase variant of the word
     */
    isCaseInsensitive?: boolean;
};
/**
 * This datastructure is probably needed to make it more efficient.
 *
 * Should be a lookup table for the querypath for every word
 */
export declare type AugmentedWordObject = {
    [augmentedWord: string]: AugmentedWord;
};
//# sourceMappingURL=AugmentedWord.d.ts.map