/**
 * Trims a character from a word at the left until that character is not found anymore (recursive)
 */
export var trimLeft = function (word, character) {
    if (word.startsWith(character))
        return trimLeft(word.slice(character.length), character);
    return word;
};
/**
 * Removes x amount of characters from both sides of a word
 */
export var trimAround = function (word, trimLength) {
    return word.slice(trimLength, word.length - trimLength);
};
