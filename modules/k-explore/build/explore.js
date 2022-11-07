"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exploreMultiple = exports.explorePreset = exports.exploreGitRepoFolders = exports.findAllDotGitFolders = exports.findFilesRecursively = exports.explore = exports.determineFileType = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var fs_util_js_1 = require("fs-util-js");
var js_util_1 = require("js-util");
var markdown_parse_js_1 = require("markdown-parse-js");
var filename_conventions_1 = require("filename-conventions");
var get_path_1 = require("get-path");
var filename_conventions_2 = require("filename-conventions");
/**
 * type checker for a string to be an extension that can be searched for
 */
var isSearchContentExtension = function (extension) {
    return filename_conventions_2.allowedSearchContentExtensions
        .map(function (x) { return x; })
        .includes(extension);
};
/**
 * returns the file type or null if it's unknown
 */
var determineFileType = function (filePath) {
    var extension = fs_util_1.path.parse(filePath).ext.substring(1);
    if (!isSearchContentExtension(extension))
        return null;
    var index = filename_conventions_2.fileTypes.findIndex(function (fileType) {
        return filename_conventions_2.extensions[fileType].includes(extension);
    });
    var fileType = filename_conventions_2.fileTypes[index];
    return fileType;
};
exports.determineFileType = determineFileType;
/**
 *
 */
var getOutline = function (filePath) {
    console.log("outline is currently just filename");
    return filePath.split("/").pop();
};
var isMatch = function (_a) {
    var exact = _a.exact, searchContender = _a.searchContender, searches = _a.searches;
    return searches.length === 0
        ? true
        : exact
            ? searches.includes(searchContender)
            : searches.find(function (s) { return searchContender.includes(s); });
};
/**
 * gets needed contents of file path, based on the extension
 *
 * returns a markdownparse if it's markdown, a json parse for json, or a file content string for anything else
 */
var getContents = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var extension, contents, markdownParse, fileString;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                extension = (0, fs_util_js_1.getExtension)(filePath);
                if (!isSearchContentExtension(extension)) {
                    return [2 /*return*/];
                }
                if (!(extension === "json")) return [3 /*break*/, 1];
                return [2 /*return*/, (0, read_json_file_1.readJsonFile)(filePath)];
            case 1:
                if (!filename_conventions_2.markdownExtensions.includes(extension)) return [3 /*break*/, 3];
                return [4 /*yield*/, fs_util_1.fs.readFile(filePath, "utf8")];
            case 2:
                contents = _a.sent();
                markdownParse = (0, markdown_parse_js_1.mdToJsonParse)(contents);
                return [2 /*return*/, markdownParse];
            case 3:
                fileString = fs_util_1.fs.readFile(filePath, "utf8");
                return [2 /*return*/, fileString];
        }
    });
}); };
/**
 * This is the safe and friendly version of `findFilesRecursively`
 */
var explore = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
    var canAccess, accessibleBasePaths, textJsonPromises, textJsons;
    var basePath = _a.basePath, _b = _a.searchLevel, searchLevel = _b === void 0 ? "fileName" : _b, debug = _a.debug, other = __rest(_a, ["basePath", "searchLevel", "debug"]);
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                canAccess = function (p) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (searchLevel === "outline" || searchLevel === "full"
                                    ? fs_util_1.canRead
                                    : fs_util_1.canSee)(p)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); };
                accessibleBasePaths = (0, js_util_1.makeArray)(basePath || (0, get_path_1.getProjectRoot)())
                    .filter(fs_util_1.fs.existsSync)
                    .filter(canAccess);
                if (debug)
                    console.log("finding files in ".concat(accessibleBasePaths.join(",")));
                textJsonPromises = accessibleBasePaths.map(function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.findFilesRecursively)(__assign({ basePath: p, searchLevel: searchLevel, debug: debug }, other))];
                }); }); });
                return [4 /*yield*/, Promise.all(textJsonPromises)];
            case 1:
                textJsons = (_c.sent()).flat();
                return [2 /*return*/, textJsons];
        }
    });
}); };
exports.explore = explore;
/**
Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...
*/
var findFilesRecursively = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var basePath, ignore, searchLevel, extension, subExtension, search, 
    //booleans:
    includeFoldersWithResults, doNotExploreMatch, doNotExploreChildFolders, debug, exact, readmeOnTop, includeStats, includeMetaData, cancelRecursionOn, subExtensions, extensions, searches, ignores, contents, readmeIndex, sortedContents, pathArray, textJsonPromises, allMatches;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                basePath = config.basePath, ignore = config.ignore, searchLevel = config.searchLevel, extension = config.extension, subExtension = config.subExtension, search = config.search, includeFoldersWithResults = config.includeFoldersWithResults, doNotExploreMatch = config.doNotExploreMatch, doNotExploreChildFolders = config.doNotExploreChildFolders, debug = config.debug, exact = config.exact, readmeOnTop = config.readmeOnTop, includeStats = config.includeStats, includeMetaData = config.includeMetaData, cancelRecursionOn = config.cancelRecursionOn;
                subExtensions = (0, js_util_1.makeArray)(subExtension);
                extensions = (0, js_util_1.makeArray)(extension);
                searches = (0, js_util_1.makeArray)(search);
                ignores = (0, js_util_1.makeArray)(ignore);
                return [4 /*yield*/, fs_util_1.fs.readdir(basePath, {
                        withFileTypes: true,
                        encoding: "utf8",
                    })];
            case 1:
                contents = _a.sent();
                readmeIndex = readmeOnTop
                    ? contents.findIndex(function (x) { return x.name.toLowerCase() === "readme.md"; })
                    : -1;
                sortedContents = readmeIndex !== -1
                    ? __spreadArray([contents[readmeIndex]], (0, js_util_1.removeIndexFromArray)(contents, readmeIndex), true) : contents;
                pathArray = sortedContents.map(function (x) { return fs_util_1.path.join(basePath, x.name); });
                // if contents should not be explored, return an empty array
                if (cancelRecursionOn === null || cancelRecursionOn === void 0 ? void 0 : cancelRecursionOn(pathArray)) {
                    return [2 /*return*/, includeFoldersWithResults
                            ? [{ path: basePath, isCancelRecursionResult: true, isFolder: false }]
                            : []];
                }
                if (debug)
                    console.log("contents contains ".concat(sortedContents.length, " files/folders"));
                textJsonPromises = sortedContents.map(function (dirent) { return __awaiter(void 0, void 0, void 0, function () {
                    var filePath, ext, isJson, isTypescript, isMarkdown, searchContender, _a, _b, _c, _d, _e, match, json, markdownJson, _f, typescriptJson, stats, _g, matchOrNot, results, shouldRecurse, searchContender, match, thisFolderPath, thisFolderResults, metaData, folderResult;
                    return __generator(this, function (_h) {
                        switch (_h.label) {
                            case 0:
                                // don't check files if search level is folder
                                if (searchLevel === "folder" && dirent.isFile()) {
                                    return [2 /*return*/, null];
                                }
                                //if dir/file name should be ignored, skip it
                                if (ignores.includes(dirent.name)) {
                                    if (debug)
                                        console.log("Ignoring", dirent.name);
                                    return [2 /*return*/, null];
                                }
                                // if we want specific sub-extensions and this file isn't one of them, return
                                if (dirent.isFile() &&
                                    subExtensions &&
                                    subExtensions.length > 0 &&
                                    !subExtensions.find(function (ext) { return (0, fs_util_js_1.getSubExtension)(dirent.name) === ext; })) {
                                    if (debug)
                                        console.log("ignoring ".concat(dirent.name, " because of subextension mismatch"));
                                    return [2 /*return*/, null];
                                }
                                // if we want specific extensions and this file isn't one of them, return
                                if (dirent.isFile() &&
                                    extensions &&
                                    extensions.length > 0 &&
                                    !extensions.find(function (ext) { return (0, fs_util_js_1.getExtension)(dirent.name) === ext; })) {
                                    if (debug)
                                        console.log("ignoring ".concat(dirent.name, " because of extension mismatch"));
                                    return [2 /*return*/, null];
                                }
                                filePath = fs_util_1.path.join(basePath, dirent.name);
                                if (!dirent.isFile()) return [3 /*break*/, 18];
                                ext = (0, fs_util_js_1.getExtension)(dirent.name) || "";
                                isJson = filename_conventions_2.jsonExtensions.includes(ext);
                                isTypescript = filename_conventions_2.typescriptExtensions.includes(ext);
                                isMarkdown = filename_conventions_2.markdownExtensions.includes(ext);
                                if (!(searchLevel === "folder")) return [3 /*break*/, 1];
                                _a = dirent.name;
                                return [3 /*break*/, 11];
                            case 1:
                                if (!(searchLevel === "fileName")) return [3 /*break*/, 2];
                                _b = dirent.name;
                                return [3 /*break*/, 10];
                            case 2:
                                if (!(searchLevel === "filePath" || !isSearchContentExtension(ext))) return [3 /*break*/, 3];
                                _c = filePath; //withoutExtension? dirent.name or filePath??? we also want to match folder names before it, right?
                                return [3 /*break*/, 9];
                            case 3:
                                if (!(searchLevel === "outline")) return [3 /*break*/, 4];
                                _d = getOutline(filePath);
                                return [3 /*break*/, 8];
                            case 4:
                                if (!(searchLevel === "full")) return [3 /*break*/, 6];
                                return [4 /*yield*/, getContents(filePath)];
                            case 5:
                                _e = _h.sent();
                                return [3 /*break*/, 7];
                            case 6:
                                _e = "SHOULD_NEVER_HAPPEN";
                                _h.label = 7;
                            case 7:
                                _d = _e;
                                _h.label = 8;
                            case 8:
                                _c = _d;
                                _h.label = 9;
                            case 9:
                                _b = _c;
                                _h.label = 10;
                            case 10:
                                _a = _b;
                                _h.label = 11;
                            case 11:
                                searchContender = _a;
                                if (debug)
                                    console.log("searchContender: ".concat(searchContender));
                                match = isMatch({ exact: exact, searchContender: searchContender, searches: searches });
                                json = isJson && searchLevel === "full" ? getContents(filePath) : undefined;
                                if (!(isMarkdown && searchLevel === "full")) return [3 /*break*/, 13];
                                return [4 /*yield*/, getContents(filePath)];
                            case 12:
                                _f = _h.sent();
                                return [3 /*break*/, 14];
                            case 13:
                                _f = undefined;
                                _h.label = 14;
                            case 14:
                                markdownJson = _f;
                                typescriptJson = isTypescript ? undefined : undefined;
                                if (!includeStats) return [3 /*break*/, 16];
                                return [4 /*yield*/, fs_util_1.fs.stat(filePath)];
                            case 15:
                                _g = _h.sent();
                                return [3 /*break*/, 17];
                            case 16:
                                _g = undefined;
                                _h.label = 17;
                            case 17:
                                stats = _g;
                                if (debug)
                                    console.log("".concat(dirent.name, "? match ").concat(match));
                                matchOrNot = match
                                    ? [
                                        {
                                            path: filePath,
                                            json: json,
                                            isFolder: false,
                                            markdownJson: markdownJson,
                                            typescriptJson: typescriptJson,
                                            stats: stats,
                                        },
                                    ]
                                    : null;
                                return [2 /*return*/, matchOrNot];
                            case 18:
                                if (!(dirent.isDirectory() && !doNotExploreChildFolders)) return [3 /*break*/, 21];
                                results = [];
                                shouldRecurse = true;
                                if (searchLevel === "folder") {
                                    searchContender = dirent.name;
                                    match = isMatch({ searchContender: searchContender, exact: exact, searches: searches });
                                    if (match) {
                                        results.push({
                                            path: filePath,
                                            isFolder: true,
                                        });
                                        shouldRecurse = !doNotExploreMatch;
                                    }
                                }
                                if (!shouldRecurse) return [3 /*break*/, 20];
                                thisFolderPath = fs_util_1.path.join(basePath, dirent.name);
                                return [4 /*yield*/, (0, exports.findFilesRecursively)({
                                        basePath: thisFolderPath,
                                        extension: extension,
                                        search: search,
                                        searchLevel: searchLevel,
                                        subExtension: subExtension,
                                        ignore: ignore,
                                        debug: debug,
                                        exact: exact,
                                        // NB: I think we just need to fill in everything in the recursion, right?
                                        cancelRecursionOn: cancelRecursionOn,
                                        includeFoldersWithResults: includeFoldersWithResults,
                                        includeMetaData: includeMetaData,
                                        includeStats: includeStats,
                                        doNotExploreChildFolders: doNotExploreChildFolders,
                                        doNotExploreMatch: doNotExploreMatch,
                                    })];
                            case 19:
                                thisFolderResults = _h.sent();
                                if (thisFolderResults.length > 0) {
                                    results = results.concat(thisFolderResults);
                                    if (includeFoldersWithResults) {
                                        metaData = undefined;
                                        folderResult = {
                                            path: thisFolderPath,
                                            metaData: metaData,
                                            isFolder: true,
                                        };
                                        results.push(folderResult);
                                    }
                                }
                                _h.label = 20;
                            case 20: return [2 /*return*/, results];
                            case 21: return [2 /*return*/, null];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(textJsonPromises)];
            case 2:
                allMatches = (_a.sent())
                    .filter(js_util_1.notEmpty)
                    .flat();
                return [2 /*return*/, allMatches];
        }
    });
}); };
exports.findFilesRecursively = findFilesRecursively;
var findAllDotGitFolders = function (config) {
    return (0, exports.explore)({
        basePath: config === null || config === void 0 ? void 0 : config.basePath,
        search: ".git",
        exact: true,
        searchLevel: "folder",
        doNotExploreMatch: true,
        // I guess we can assume there will never be git folders inside an operation on a deeper level, that would be strange... Therefore, these can be ignored
        ignore: ["node_modules", "build", ".next", "src", "assets", "data"],
    });
};
exports.findAllDotGitFolders = findAllDotGitFolders;
/**
 find all active git folders (folders having `.git`)
 */
var exploreGitRepoFolders = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.findAllDotGitFolders)(config)];
            case 1: return [2 /*return*/, (_a.sent())
                    .map(function (textJson) { return textJson.path; })
                    .map(function (p) { return fs_util_1.path.resolve(p, ".."); })];
        }
    });
}); };
exports.exploreGitRepoFolders = exploreGitRepoFolders;
var explorePreset = function (preset, config) {
    var basePath = config === null || config === void 0 ? void 0 : config.basePath;
    var searchConfigs = preset === "packages"
        ? [
            {
                basePath: basePath,
                search: "package.json",
                exact: true,
                extension: "json",
                ignore: filename_conventions_1.generatedFolders,
            },
        ]
        : preset === "markdown"
            ? [
                {
                    basePath: basePath,
                    extension: ["md", "mdx"],
                    ignore: filename_conventions_1.generatedFolders,
                },
            ]
            : preset === "todo"
                ? // finds all `*.todo.md`,` todo/**/*.md` and returns the path + content
                    [
                        {
                            basePath: basePath,
                            extension: ["md", "mdx"],
                            search: "/todo/",
                            searchLevel: "filePath",
                            ignore: filename_conventions_1.generatedFolders,
                        },
                        {
                            basePath: basePath,
                            extension: ["md", "mdx"],
                            search: "todo.md",
                            exact: true,
                            searchLevel: "fileName",
                            ignore: filename_conventions_1.generatedFolders,
                        },
                        {
                            basePath: basePath,
                            extension: ["md", "mdx"],
                            subExtension: "todo",
                            exact: false,
                            searchLevel: "fileName",
                            ignore: filename_conventions_1.generatedFolders,
                        },
                    ]
                : preset === "docs"
                    ? [
                        {
                            basePath: basePath,
                            extension: ["md", "mdx"],
                            search: "/docs/",
                            searchLevel: "filePath",
                            ignore: filename_conventions_1.generatedFolders,
                        },
                        {
                            basePath: basePath,
                            extension: ["md", "mdx"],
                            search: "readme.md",
                            exact: true,
                            searchLevel: "fileName",
                            ignore: filename_conventions_1.generatedFolders,
                        },
                        {
                            basePath: basePath,
                            extension: ["md", "mdx"],
                            subExtension: ["readme"],
                            exact: false,
                            searchLevel: "fileName",
                            ignore: filename_conventions_1.generatedFolders,
                        },
                    ]
                    : preset === "src"
                        ? [
                            {
                                basePath: basePath,
                                searchLevel: "folder",
                                exact: true,
                                search: "src",
                                doNotExploreMatch: true,
                                ignore: filename_conventions_1.generatedFolders,
                            },
                        ]
                        : [];
    var textJsons = (0, exports.exploreMultiple)(searchConfigs);
    return textJsons;
};
exports.explorePreset = explorePreset;
/**
 * DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now
 */
var exploreMultiple = function (searchConfigs) { return __awaiter(void 0, void 0, void 0, function () {
    var textJsonPromises;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                textJsonPromises = searchConfigs.map(function (config) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, (0, exports.explore)(config)];
                    });
                }); });
                return [4 /*yield*/, Promise.all(textJsonPromises)];
            case 1: return [2 /*return*/, (_a.sent()).flat()];
        }
    });
}); };
exports.exploreMultiple = exploreMultiple;
//# sourceMappingURL=explore.js.map