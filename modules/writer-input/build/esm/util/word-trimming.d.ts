/**
 * Trims a character from a word at the left until that character is not found anymore (recursive)
 */
export declare const trimLeft: (word: string, character: string) => string;
/**
 * Removes x amount of characters from both sides of a word
 */
export declare const trimAround: (word: string, trimLength: number) => string;
