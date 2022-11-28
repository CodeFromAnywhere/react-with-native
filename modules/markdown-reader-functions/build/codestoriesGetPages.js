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
exports.codestoriesGetPages = void 0;
var explore_project_1 = require("explore-project");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
// relative
var fs_util_1 = require("fs-util");
var read_markdown_file_1 = require("read-markdown-file");
var markdown_parse_js_1 = require("markdown-parse-js");
var codestoriesGetPages = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, codestoriesPaths, pages, filteredPages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, explore_project_1.getTodoPaths)({
                        categoryStack: ["codestories"],
                        subExtension: "codestory",
                        sort: "recent",
                    })];
            case 1:
                codestoriesPaths = _a.sent();
                return [4 /*yield*/, Promise.all(codestoriesPaths.map(function (projectRelativeFilePath) { return __awaiter(void 0, void 0, void 0, function () {
                        var absolutePath, markdownParse, _a, readmeInfo, readerWebPage;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    absolutePath = fs_util_1.path.join(projectRoot, projectRelativeFilePath);
                                    if (!fs_util_1.fs.existsSync(absolutePath)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(absolutePath)];
                                case 1:
                                    _a = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = null;
                                    _b.label = 3;
                                case 3:
                                    markdownParse = _a;
                                    readmeInfo = (0, markdown_parse_js_1.getMarkdownIntro)(markdownParse);
                                    readerWebPage = {
                                        pageData: {
                                            projectRelativeFilePath: projectRelativeFilePath,
                                            /**
                                            1) scrape images and the first alinea from the `projectRelativeFilePath`
                                  
                                            2) if there's an image in the frontmatter, use that. Otherwise, use the first image. Otherwise, no image.
                                            */
                                            imagePath: null,
                                            shortDescription: readmeInfo.firstParagraph,
                                        },
                                        queryPath: projectRelativeFilePath.replaceAll("/", "-"),
                                        isMenuHidden: false,
                                        menuTitle: readmeInfo.title || fs_util_1.path.parse(projectRelativeFilePath).name,
                                    };
                                    return [2 /*return*/, readerWebPage];
                            }
                        });
                    }); }))];
            case 2:
                pages = _a.sent();
                filteredPages = pages.filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.queryPath === b.queryPath; }));
                return [2 /*return*/, filteredPages];
        }
    });
}); };
exports.codestoriesGetPages = codestoriesGetPages;
//# sourceMappingURL=codestoriesGetPages.js.map