/**
 * Gets the current word you are typing from a text and the cursor position.
 *
 * Takes into account multiple word separators: tabs, newlines, and spaces.
 */
export var getContext = function (editorDetails) {
    var positionIndex = editorDetails.positionIndex, text = editorDetails.text;
    var wordSeparators = [" ", "\n", "\t"];
    // NB: find the first separator after the word that we are typing at the position of the cursor.
    var firstIndexWithSeparatorAfterPosition = Math.min.apply(Math, wordSeparators.map(function (separator) {
        var separatorAfterPositionIndex = text.indexOf(separator, positionIndex);
        if (separatorAfterPositionIndex === -1)
            return Infinity;
        return separatorAfterPositionIndex;
    }));
    var endOfWordIndex = firstIndexWithSeparatorAfterPosition === Infinity
        ? text.length
        : firstIndexWithSeparatorAfterPosition;
    var lastIndexWithSeparatorBeforePosition = Math.max.apply(Math, wordSeparators.map(function (separator) {
        var spaceBeforePositionIndex = text.slice(0, positionIndex).lastIndexOf(separator) + 1;
        return spaceBeforePositionIndex;
    }));
    var beginningOfWordIndex = lastIndexWithSeparatorBeforePosition === -1
        ? 0
        : lastIndexWithSeparatorBeforePosition;
    var wordAtPosition = text.slice(beginningOfWordIndex, endOfWordIndex);
    /*
      console.log({
        beginningOfWordIndex,
        endOfWordIndex,
        wordAtPosition,
      });
      */
    return {
        wordAtPosition: wordAtPosition,
    };
};
