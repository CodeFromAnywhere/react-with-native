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
exports.getFolderExplorationInfo = void 0;
var fs_util_1 = require("fs-util");
var markdown_parse_js_1 = require("markdown-parse-js");
var read_markdown_file_1 = require("read-markdown-file");
var nested_menu_1 = require("nested-menu");
/**
    
    Gets exploration information about a folder
  
    - reads README.md in current folder
    - reads OPERATION.md in child folders, or README.md if that doesn't exist
    - gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)
  
   */
var getFolderExplorationInfo = function (nestedPathObject, queryPath, projectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var childrenKeys, potentialReadmePath, readmeMarkdownParse, _a, queryPathTitle, readmeInfo, title, description, children;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                childrenKeys = (0, nested_menu_1.getKeysAtPathFromNestedObject)(nestedPathObject, queryPath);
                potentialReadmePath = fs_util_1.path.join(projectRoot, queryPath, "README.md");
                if (!fs_util_1.fs.existsSync(potentialReadmePath)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(potentialReadmePath)];
            case 1:
                _a = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = null;
                _b.label = 3;
            case 3:
                readmeMarkdownParse = _a;
                queryPathTitle = queryPath.split("/").pop();
                readmeInfo = (0, markdown_parse_js_1.getMarkdownIntro)(readmeMarkdownParse);
                title = readmeInfo.title || queryPathTitle;
                description = readmeInfo.firstParagraph;
                return [4 /*yield*/, Promise.all(childrenKeys.map(function (folderName) { return __awaiter(void 0, void 0, void 0, function () {
                        var potentialReadmePath, potentialOperationPath, pathToRead, markdownParse, _a, _b, title, firstParagraph;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    potentialReadmePath = fs_util_1.path.join(projectRoot, queryPath, folderName, "README.md");
                                    potentialOperationPath = fs_util_1.path.join(projectRoot, queryPath, folderName, "OPERATION.md");
                                    pathToRead = fs_util_1.fs.existsSync(potentialOperationPath)
                                        ? potentialOperationPath
                                        : fs_util_1.fs.existsSync(potentialReadmePath)
                                            ? potentialReadmePath
                                            : undefined;
                                    if (!pathToRead) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(pathToRead)];
                                case 1:
                                    _a = _c.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = null;
                                    _c.label = 3;
                                case 3:
                                    markdownParse = _a;
                                    _b = (0, markdown_parse_js_1.getMarkdownIntro)(markdownParse), title = _b.title, firstParagraph = _b.firstParagraph;
                                    return [2 /*return*/, {
                                            title: title || folderName,
                                            firstParagraph: firstParagraph,
                                            folderName: folderName,
                                            projectRelativeMarkdownPath: pathToRead || null,
                                        }];
                            }
                        });
                    }); }))];
            case 4:
                children = _b.sent();
                return [2 /*return*/, {
                        title: title,
                        description: description,
                        children: children,
                        descriptionProjectRelativeMarkdownPath: readmeMarkdownParse
                            ? potentialReadmePath
                            : null,
                    }];
        }
    });
}); };
exports.getFolderExplorationInfo = getFolderExplorationInfo;
//# sourceMappingURL=getFolderExplorationInfo.js.map