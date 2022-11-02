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
exports.getDocsMarkdownReaderPages = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var database_1 = require("database");
var js_util_1 = require("js-util");
var k_explore_1 = require("k-explore");
var getPublicMarkdownFilePaths_1 = require("./getPublicMarkdownFilePaths");
var removeExtensionsFromPath_1 = require("./removeExtensionsFromPath");
/**
 - Gets all pages of a bundle based on the fs
 - README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include individual functions, interfaces, statements, word-definitions pages
 */
var getDocsMarkdownReaderPages = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, docsPath, relativeDocsPages, hasDocs, hasRootReadme, operationBasePaths, operationPagesPerType, _a, operationPages, tsVariables, tsFunctions, tsInterfaces, typescriptPages, words, statements, statementPages, wordPages, allPages;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                docsPath = fs_util_1.path.join(projectRoot, "docs");
                return [4 /*yield*/, (0, getPublicMarkdownFilePaths_1.getPublicMarkdownFilePaths)(docsPath, false)];
            case 1:
                relativeDocsPages = (_b.sent()).map(function (x) {
                    var filePath = (0, get_path_1.makeRelative)(x.path, projectRoot);
                    var queryPath = (0, removeExtensionsFromPath_1.removeExtensionsFromPath)(filePath);
                    // NB: folders are no menu items because menu is built from paths recursively
                    return { queryPath: queryPath, filePath: filePath, isMenuItem: !x.isFolder };
                });
                console.log({ relativeDocsPages: relativeDocsPages });
                hasDocs = !!relativeDocsPages.find(function (x) { return x.queryPath.toLowerCase() === "docs/readme"; });
                if (!hasDocs) {
                    hasRootReadme = fs_util_1.fs.existsSync(fs_util_1.path.join(projectRoot, "README.md"));
                    if (hasRootReadme) {
                        relativeDocsPages.unshift({
                            queryPath: "docs/readme",
                            filePath: "README.md",
                            isMenuItem: true,
                        });
                    }
                }
                operationBasePaths = (0, get_path_1.getPathsWithOperations)({
                    manualProjectRoot: projectRoot,
                });
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(operationBasePaths.map(function (basePath) { return __awaiter(void 0, void 0, void 0, function () {
                        var folders, pages, projectRelativeBasePath;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({ basePath: basePath })];
                                case 1:
                                    folders = (_b.sent()).map(function (result) { return ({
                                        projectRelativePath: (0, get_path_1.makeRelative)(result, projectRoot),
                                    }); });
                                    pages = folders.map(function (folder) {
                                        var folderName = (0, fs_util_1.getLastFolder)(folder.projectRelativePath);
                                        return {
                                            queryPath: folder.projectRelativePath,
                                            // operation filePath is README.md
                                            filePath: fs_util_1.path.join(folder.projectRelativePath, "README.md"),
                                            internalLinkWord: folderName,
                                            isMenuItem: true,
                                        };
                                    });
                                    projectRelativeBasePath = (0, get_path_1.makeRelative)(basePath, projectRoot);
                                    return [2 /*return*/, (_a = {}, _a[projectRelativeBasePath] = pages, _a)];
                            }
                        });
                    }); }))];
            case 2:
                operationPagesPerType = _a.apply(void 0, [_b.sent()]);
                operationPages = (0, get_path_1.isSensibleProject)(projectRoot)
                    ? __spreadArray(__spreadArray(__spreadArray([], operationPagesPerType.packages, true), operationPagesPerType.apps, true), operationPagesPerType.modules, true) : __spreadArray(__spreadArray([], operationPagesPerType["operations/tools"], true), operationPagesPerType["operations/niches"], true);
                return [4 /*yield*/, database_1.db.get("TsVariable", {
                        manualProjectRoot: projectRoot,
                    })];
            case 3:
                tsVariables = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsFunction", {
                        manualProjectRoot: projectRoot,
                    })];
            case 4:
                tsFunctions = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsInterface", {
                        manualProjectRoot: projectRoot,
                    })];
            case 5:
                tsInterfaces = _b.sent();
                typescriptPages = __spreadArray(__spreadArray(__spreadArray([], tsVariables, true), tsFunctions, true), tsInterfaces, true).map(function (item) {
                    var operationPath = (0, get_path_1.findOperationBasePath)(fs_util_1.path.join(projectRoot, item.projectRelativePath));
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, get_path_1.makeRelative)(operationPath, projectRoot);
                    var page = {
                        internalLinkWord: item.name,
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat(item.name),
                        filePath: fs_util_1.path.join(projectRelativeOperationPath, "README.md"),
                        isMenuItem: false,
                    };
                    return page;
                })
                    .filter(js_util_1.notEmpty);
                return [4 /*yield*/, database_1.db.get("Word", {
                        manualProjectRoot: projectRoot,
                        // include: wordInclude,
                    })];
            case 6:
                words = _b.sent();
                return [4 /*yield*/, database_1.db.get("Statement", {
                        manualProjectRoot: projectRoot,
                        // include: { referenceKey: "wordSlugs", items: words, include: wordInclude },
                    })];
            case 7:
                statements = _b.sent();
                statementPages = statements.map(function (item) {
                    var page = {
                        queryPath: "statement/".concat(item.slug),
                        statementId: item.id,
                    };
                    return page;
                });
                wordPages = words.map(function (item) {
                    var page = {
                        queryPath: "word/".concat(item.slug),
                        wordSlug: item.slug,
                        internalLinkWord: item.name,
                        isMenuItem: false,
                    };
                    return page;
                });
                allPages = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
                    { queryPath: "", filePath: "README.md", isMenuItem: true }
                ], relativeDocsPages, true), operationPages, true), typescriptPages, true), statementPages, true), wordPages, true).filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.queryPath === b.queryPath; }));
                return [2 /*return*/, allPages];
        }
    });
}); };
exports.getDocsMarkdownReaderPages = getDocsMarkdownReaderPages;
//# sourceMappingURL=getDocsMarkdownReaderPages.js.map