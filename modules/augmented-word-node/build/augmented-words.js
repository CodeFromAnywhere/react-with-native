"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAugmentedWordObject = exports.getAugmentedWords = exports.getBundleAugmentedWords = void 0;
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var database_1 = require("database");
var js_util_2 = require("js-util");
/**
 * NB: should only be executed if this is not a sensible-project, as it might not have `BundleConfig` otherwise
 */
var getBundleAugmentedWords = function () { return __awaiter(void 0, void 0, void 0, function () {
    var bundles, bundleAugmentedWords;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("BundleConfig")];
            case 1:
                bundles = _a.sent();
                bundleAugmentedWords = bundles.map(function (bundle) {
                    var augmentedWord = {
                        queryPath: bundle.docsRelativeFolderPath,
                        spoiler: bundle.name,
                        type: "bundle",
                        word: bundle.slug,
                    };
                    return augmentedWord;
                });
                return [2 /*return*/, bundleAugmentedWords];
        }
    });
}); };
exports.getBundleAugmentedWords = getBundleAugmentedWords;
/**

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)

 */
var getAugmentedWords = function (projectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var persons, personAugmentedWords, operationIndexes, operationConfigs, operationAugmentedWords, tsVariables, tsFunctions, tsInterfaces, interfaceAugmentedWords, functionAugmentedWords, variableAugmentedWords, wordInclude, words, markdownWords, kvmdWords, kvmdAugmentedWords, markdownAugmentedWords, wordAugmentedWords, bundleAugmentedWords, _a, allAugmentedWords;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, database_1.db.get("Person")];
            case 1:
                persons = _b.sent();
                personAugmentedWords = persons.map(function (person) {
                    var _a;
                    var augmentedWord = {
                        queryPath: "person/".concat(person.id),
                        spoiler: "# ".concat(person.name, "\n\n## Interests\n\n").concat((_a = person.interests) === null || _a === void 0 ? void 0 : _a.join("\n")),
                        type: "person",
                        word: person.slug,
                        isCaseInsensitive: true,
                    };
                    return augmentedWord;
                });
                return [4 /*yield*/, database_1.db.get("OperationIndex")];
            case 2:
                operationIndexes = _b.sent();
                return [4 /*yield*/, database_1.db.get("OperationConfig")];
            case 3:
                operationConfigs = _b.sent();
                operationAugmentedWords = operationIndexes
                    .map(function (item) {
                    var _a;
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var description = (_a = operationConfigs.find(function (x) { return x.operationName === item.operationName; })) === null || _a === void 0 ? void 0 : _a.markdown;
                    var augmentedWord = {
                        queryPath: (0, get_path_1.makeRelative)(operationPath, projectRoot),
                        spoiler: description,
                        type: "operation",
                        word: item.name,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_2.notEmpty);
                return [4 /*yield*/, database_1.db.get("TsVariable", {
                        manualProjectRoot: projectRoot,
                    })];
            case 4:
                tsVariables = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsFunction", {
                        manualProjectRoot: projectRoot,
                    })];
            case 5:
                tsFunctions = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsInterface", {
                        manualProjectRoot: projectRoot,
                    })];
            case 6:
                tsInterfaces = _b.sent();
                interfaceAugmentedWords = tsInterfaces
                    .map(function (item) {
                    var _a;
                    // NB: TODO: figure out of this is always correct, this path must exist!
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, get_path_1.makeRelative)(operationPath, projectRoot);
                    var augmentedWord = {
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat(item.name),
                        spoiler: (_a = item.type.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.description,
                        type: "type",
                        word: item.name,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_2.notEmpty);
                functionAugmentedWords = tsFunctions
                    .map(function (item) {
                    // NB: TODO: figure out of this is always correct, this path must exist!
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, get_path_1.makeRelative)(operationPath, projectRoot);
                    var augmentedWord = {
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat(item.name),
                        spoiler: item.description,
                        type: "function",
                        word: item.name,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_2.notEmpty);
                variableAugmentedWords = tsVariables
                    .map(function (item) {
                    var _a;
                    // NB: TODO: figure out of this is always correct, this path must exist!
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, get_path_1.makeRelative)(operationPath, projectRoot);
                    var augmentedWord = {
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat(item.name),
                        spoiler: (_a = item.type.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.description,
                        type: "variable",
                        word: item.name,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_2.notEmpty);
                wordInclude = [
                    { referenceKey: "english_wordSlug" },
                    { referenceKey: "root_wordSlug" },
                    { referenceKey: "common_wordSlug" },
                    { referenceKey: "definition_statementId" },
                ];
                return [4 /*yield*/, database_1.db.get("Word", {
                        manualProjectRoot: projectRoot,
                        include: wordInclude,
                    })];
            case 7:
                words = _b.sent();
                return [4 /*yield*/, database_1.db.get("MarkdownWord")];
            case 8:
                markdownWords = _b.sent();
                return [4 /*yield*/, database_1.db.get("KvmdWord")];
            case 9:
                kvmdWords = _b.sent();
                kvmdAugmentedWords = kvmdWords.map(function (item) {
                    var augmentedWord = {
                        queryPath: "dictionary?word=".concat(item.name),
                        type: "word",
                        spoiler: item.value ? String(item.value) : undefined,
                        word: item.name,
                        isCaseInsensitive: true,
                    };
                    return augmentedWord;
                });
                markdownAugmentedWords = markdownWords.map(function (item) {
                    var augmentedWord = {
                        queryPath: "dictionary?word=".concat(item.name),
                        type: "word",
                        spoiler: item.markdown,
                        word: item.name,
                        isCaseInsensitive: true,
                    };
                    return augmentedWord;
                });
                wordAugmentedWords = words.map(function (item) {
                    var _a;
                    var augmentedWord = {
                        queryPath: "dictionary?word=".concat(item.slug),
                        type: "word",
                        spoiler: (_a = item.definition_statement) === null || _a === void 0 ? void 0 : _a.name,
                        word: item.name,
                        isCaseInsensitive: true,
                    };
                    return augmentedWord;
                });
                if (!(0, get_path_1.isSensibleProject)(projectRoot)) return [3 /*break*/, 10];
                _a = undefined;
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, (0, exports.getBundleAugmentedWords)()];
            case 11:
                _a = _b.sent();
                _b.label = 12;
            case 12:
                bundleAugmentedWords = _a;
                allAugmentedWords = [
                    bundleAugmentedWords,
                    operationAugmentedWords,
                    variableAugmentedWords,
                    functionAugmentedWords,
                    interfaceAugmentedWords,
                    //words
                    wordAugmentedWords,
                    kvmdAugmentedWords,
                    markdownAugmentedWords,
                    personAugmentedWords,
                ]
                    .filter(js_util_2.notEmpty)
                    .flat();
                return [2 /*return*/, allAugmentedWords];
        }
    });
}); };
exports.getAugmentedWords = getAugmentedWords;
var cache = undefined;
var getAugmentedWordObject = function (projectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var augmentedWordsSerializable, mappedObject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (cache)
                    return [2 /*return*/, cache];
                return [4 /*yield*/, (0, exports.getAugmentedWords)(projectRoot)];
            case 1:
                augmentedWordsSerializable = (_a.sent()).map(function (item) { return (0, js_util_1.omitUndefinedValues)(item); });
                mappedObject = (0, js_util_1.createMappedObject)(augmentedWordsSerializable, "word");
                cache = mappedObject;
                return [2 /*return*/, mappedObject];
        }
    });
}); };
exports.getAugmentedWordObject = getAugmentedWordObject;
//# sourceMappingURL=augmented-words.js.map