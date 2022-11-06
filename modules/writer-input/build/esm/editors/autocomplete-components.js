import * as React from "react";
import { getFolderJs } from "fs-util-js";
import { renderMarkdownContent } from "markdown";
import { Div, P } from "react-with-native";
import { isDev } from "server-api-url";
import { trimLeft } from "../util/word-trimming";
import { MAX_COMPLETIONS_AMOUNT } from "./MarkedToken";
export var Completion = function (props) {
    var augmentedWord = props.augmentedWord, augmentedWordObject = props.augmentedWordObject;
    var projectRelativeMarkdownFilePath = augmentedWord.projectRelativeMarkdownSourcePath;
    var projectRelativeBaseFolderPath = getFolderJs(projectRelativeMarkdownFilePath);
    return (React.createElement(Div, null,
        React.createElement(Div, { className: "flex flex-row justify-between" },
            React.createElement(P, null, augmentedWord.word),
            React.createElement(Div, null, "(?)")),
        React.createElement(P, null, augmentedWord.spoiler
            ? renderMarkdownContent(augmentedWord.spoiler, {
                projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath,
                projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
                augmentedWordObject: augmentedWordObject,
                isDev: isDev,
                isStatic: false,
            })
            : null)));
};
export var specialCharacters = ["#", "_", "*"];
export var isAugmentedWordMatch = function (augmentedWord, completableWord) {
    if (augmentedWord.isCaseInsensitive) {
        var isMatch_1 = augmentedWord.word
            ? augmentedWord.word.toLowerCase().includes(completableWord.toLowerCase())
            : false;
        return isMatch_1;
    }
    var isMatch = augmentedWord.word
        ? augmentedWord.word.includes(completableWord)
        : false;
    return isMatch;
};
/**
 * Omits all special characters from the start of a word for the first special character it finds. The other special characters found after that won't be trimmed.
 */
export var omitSpecialCharactersFromStart = function (word) {
    if (word === undefined)
        return;
    var finalWord = specialCharacters.reduce(function (word, character) {
        // NB: if a word was already trimmed from a special character, the other special characters don't need to be trimmed
        if (word.hasChanged)
            return word;
        var newWord = trimLeft(word.word, character);
        return { word: newWord, hasChanged: word.word !== newWord };
    }, { word: word, hasChanged: false });
    return finalWord.word;
};
export var MarkdownCompletions = function (props) {
    var augmentedWords = props.augmentedWords, context = props.context, augmentedWordObject = props.augmentedWordObject;
    /*
      For `markdown` + `other`:
    
      - `@` = people select tooltip
      - backtick = AugmentedWord from Ts Statements
      - `![` = AssetInput tooltip
      - `_`, `*` or `**` is `AugmentedWord` from Word db
      - `#` should get a list of `Interest`s
    */
    // const isAsset = context?.wordAtPosition.startsWith("![");
    var isTypescriptWord = context === null || context === void 0 ? void 0 : context.wordAtPosition.startsWith("`");
    var isPersonWord = context === null || context === void 0 ? void 0 : context.wordAtPosition.startsWith("@");
    var isSpecialWord = specialCharacters.find(function (startSignal) {
        return context === null || context === void 0 ? void 0 : context.wordAtPosition.startsWith(startSignal);
    });
    var filteredAugmentedWords = augmentedWords
        ? isTypescriptWord
            ? augmentedWords.filter(function (x) {
                return ["operation", "bundle", "type", "function", "variable"].includes(x.type);
            })
            : isPersonWord
                ? augmentedWords.filter(function (x) { return ["person"].includes(x.type); })
                : isSpecialWord
                    ? augmentedWords.filter(function (x) { return ["word"].includes(x.type); })
                    : []
        : [];
    var completableWord = isTypescriptWord || isPersonWord
        ? context === null || context === void 0 ? void 0 : context.wordAtPosition.slice(1)
        : isSpecialWord
            ? omitSpecialCharactersFromStart(context === null || context === void 0 ? void 0 : context.wordAtPosition)
            : undefined;
    var completions = completableWord
        ? filteredAugmentedWords
            .filter(function (augmentedWord) {
            var isMatch = isAugmentedWordMatch(augmentedWord, completableWord);
            return isMatch;
        })
            .slice(0, MAX_COMPLETIONS_AMOUNT)
        : [];
    return (React.createElement(Div, null, completions.map(function (completion, index) {
        return (React.createElement(Completion, { augmentedWordObject: augmentedWordObject, augmentedWord: completion, key: "completion".concat(index) }));
    })));
};
/**
 * In `typescript`, every word should be autocompletable with the typescript stuff, without backticks.
 */
export var TypescriptCompletions = function (props) {
    var augmentedWords = props.augmentedWords, context = props.context, augmentedWordObject = props.augmentedWordObject;
    var filteredAugmentedWords = (augmentedWords === null || augmentedWords === void 0 ? void 0 : augmentedWords.filter(function (x) {
        return ["operation", "bundle", "type", "function", "variable"].includes(x.type);
    })) || [];
    var completableWord = context === null || context === void 0 ? void 0 : context.wordAtPosition;
    var completions = completableWord
        ? filteredAugmentedWords
            .filter(function (augmentedWord) {
            var isMatch = isAugmentedWordMatch(augmentedWord, completableWord);
            return isMatch;
        })
            .slice(0, MAX_COMPLETIONS_AMOUNT)
        : [];
    return (React.createElement(Div, null, completions.map(function (completion, index) {
        return (React.createElement(Completion, { augmentedWordObject: augmentedWordObject, augmentedWord: completion, key: "completion".concat(index) }));
    })));
};
