#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.lowerCaseArray = exports.humanCase = exports.capitalCase = exports.kebabCase = exports.snakeCase = exports.pascalCase = exports.camelCase = exports.convertCase = exports.capitaliseFirstLetter = exports.getDelimiter = void 0;
var make_test_1 = require("make-test");
var splitCasingDelimiters = function (word) {
    var letters = word.split("");
    var allWords = letters.reduce(function (words, letter) {
        //get the last word, we know it's always defined because of the initial value of the reduce
        var lastWord = words.pop();
        //let's also get the last letter
        var lastLetter = lastWord.substring(-1);
        var lastLetterIsLowercase = lastLetter.toUpperCase() !== lastLetter;
        var letterIsUppercase = letter.toUpperCase() === letter;
        var createNewWord = lastLetterIsLowercase && letterIsUppercase;
        var newSequence = createNewWord
            ? [lastWord, letter]
            : ["".concat(lastWord).concat(letter)];
        var newWords = words.concat(newSequence);
        return newWords;
    }, [""]);
    return allWords;
    // if it was lowercase but it became upper, it's a new word
};
var nonCasingDelimiters = /[\s,._-]+/; //space, comma, dot, underscore, dash
var getDelimiter = function (target) {
    if (target === "capital")
        return "_";
    if (target === "human")
        return " ";
    if (target === "kebab")
        return "-";
    if (target === "snake")
        return "_";
    return "";
};
exports.getDelimiter = getDelimiter;
var capitaliseFirstLetter = function (word) {
    return word.charAt(0).toUpperCase().concat(word.substring(1));
};
exports.capitaliseFirstLetter = capitaliseFirstLetter;
var convertToTargetCasing = function (word, index, target) {
    if (target === "capital")
        return word.toUpperCase();
    if (target === "kebab" || target === "snake")
        return word.toLowerCase();
    if (target === "pascal")
        return (0, exports.capitaliseFirstLetter)(word);
    if (target === "camel")
        return index === 0 ? word.toLowerCase() : (0, exports.capitaliseFirstLetter)(word);
    //human case
    return index === 0 ? (0, exports.capitaliseFirstLetter)(word) : word.toLowerCase();
};
/**
 *
 */
var convertCase = function (
/**
 * NB: texts of more than a sentence are not supported
 */
text, target) {
    return text
        .split(nonCasingDelimiters)
        .reduce(function (all, word) { return all.concat(splitCasingDelimiters(word)); }, [])
        .map(function (word, index) { return convertToTargetCasing(word, index, target); })
        .join((0, exports.getDelimiter)(target));
};
exports.convertCase = convertCase;
var camelCase = function (text) { return (0, exports.convertCase)(text, "camel"); };
exports.camelCase = camelCase;
var pascalCase = function (text) { return (0, exports.convertCase)(text, "pascal"); };
exports.pascalCase = pascalCase;
var snakeCase = function (text) { return (0, exports.convertCase)(text, "snake"); };
exports.snakeCase = snakeCase;
var kebabCase = function (text) { return (0, exports.convertCase)(text, "kebab"); };
exports.kebabCase = kebabCase;
var capitalCase = function (text) { return (0, exports.convertCase)(text, "capital"); };
exports.capitalCase = capitalCase;
var humanCase = function (text) { return (0, exports.convertCase)(text, "human"); };
exports.humanCase = humanCase;
/**
 * converts any string to an array of lowercase words
 *
 * format ["word1","word2","word3"] from a string of any casing.
 */
var lowerCaseArray = function (text) {
    return (0, exports.kebabCase)(text).split("-");
};
exports.lowerCaseArray = lowerCaseArray;
exports.test = (0, make_test_1.makeTest)(function () {
    var testCases = [
        "Handige harry",
        "handigeHarry",
        "HandigeHarry",
        "handige-harry",
        "handige_harry",
        "HANDIGE_HARRY",
    ];
    var results = testCases.map(function (word) {
        return {
            word: word,
            camel: (0, exports.camelCase)(word),
            snake: (0, exports.snakeCase)(word),
            kebab: (0, exports.kebabCase)(word),
            pascal: (0, exports.pascalCase)(word),
            capital: (0, exports.capitalCase)(word),
            human: (0, exports.humanCase)(word),
        };
    });
    return results;
}, function (result) {
    return JSON.stringify(result) ===
        JSON.stringify([
            {
                word: "Handige harry",
                camel: "handigeHarry",
                snake: "handige_harry",
                kebab: "handige-harry",
                pascal: "HandigeHarry",
                capital: "HANDIGE_HARRY",
                human: "Handige harry",
            },
            {
                word: "handigeHarry",
                camel: "handigeHarry",
                snake: "handige_harry",
                kebab: "handige-harry",
                pascal: "HandigeHarry",
                capital: "HANDIGE_HARRY",
                human: "Handige harry",
            },
            {
                word: "HandigeHarry",
                camel: "handigeHarry",
                snake: "handige_harry",
                kebab: "handige-harry",
                pascal: "HandigeHarry",
                capital: "HANDIGE_HARRY",
                human: "Handige harry",
            },
            {
                word: "handige-harry",
                camel: "handigeHarry",
                snake: "handige_harry",
                kebab: "handige-harry",
                pascal: "HandigeHarry",
                capital: "HANDIGE_HARRY",
                human: "Handige harry",
            },
            {
                word: "handige_harry",
                camel: "handigeHarry",
                snake: "handige_harry",
                kebab: "handige-harry",
                pascal: "HandigeHarry",
                capital: "HANDIGE_HARRY",
                human: "Handige harry",
            },
            {
                word: "HANDIGE_HARRY",
                camel: "handigeHARRY",
                snake: "handige_harry",
                kebab: "handige-harry",
                pascal: "HANDIGEHARRY",
                capital: "HANDIGE_HARRY",
                human: "HANDIGE harry",
            },
        ]);
});
//# sourceMappingURL=general.js.map