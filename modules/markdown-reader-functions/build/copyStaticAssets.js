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
exports.copyStaticAssets = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var markdown_parse_js_1 = require("markdown-parse-js");
/**
uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.
*/
var copyStaticAssets = function (markdownReaderPages, config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, nextWebFolder, referencePathsPromises, absoluteReferencePaths, projectRelativeReferencePaths, publicAssetsFolder, removed, isSuccessful;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, get_path_1.getOperationPath)((config === null || config === void 0 ? void 0 : config.operationName) || "markdown-reader-web")];
            case 1:
                nextWebFolder = _a.sent();
                if (!nextWebFolder)
                    return [2 /*return*/];
                referencePathsPromises = markdownReaderPages.map(function (page) { return __awaiter(void 0, void 0, void 0, function () {
                    var absoluteMarkdownFilePath, markdownString, referencePaths;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!page.filePath)
                                    return [2 /*return*/];
                                absoluteMarkdownFilePath = fs_util_1.path.join(projectRoot, page.filePath);
                                return [4 /*yield*/, fs_util_1.fs.readFile(absoluteMarkdownFilePath, "utf8")];
                            case 1:
                                markdownString = _a.sent();
                                referencePaths = (0, markdown_parse_js_1.getMarkdownReferencePaths)(markdownString);
                                return [2 /*return*/, referencePaths];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(referencePathsPromises)];
            case 2:
                absoluteReferencePaths = (_a.sent())
                    .filter(js_util_1.notEmpty)
                    .flat()
                    .filter((0, js_util_1.onlyUnique2)());
                projectRelativeReferencePaths = absoluteReferencePaths.map(function (x) {
                    return (0, get_path_1.makeRelative)(x, projectRoot);
                });
                publicAssetsFolder = fs_util_1.path.join(nextWebFolder, "public");
                return [4 /*yield*/, (0, fs_util_1.removeAllExcept)(publicAssetsFolder)];
            case 3:
                removed = _a.sent();
                return [4 /*yield*/, (0, fs_util_1.copyAllRelativeFiles)(projectRelativeReferencePaths, projectRoot, publicAssetsFolder)];
            case 4:
                isSuccessful = _a.sent();
                return [2 /*return*/, isSuccessful];
        }
    });
}); };
exports.copyStaticAssets = copyStaticAssets;
//# sourceMappingURL=copyStaticAssets.js.map