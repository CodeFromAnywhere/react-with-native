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
exports.getOperationPages = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var sdk_operations_1 = require("sdk-operations");
var js_util_1 = require("js-util");
var k_explore_1 = require("k-explore");
var getOperationPages = function (projectRoot, bundleMarkdownReaderConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var isSensible, operationBasePaths, operationPagesPerType, _a, operationsPages, operationPages;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                isSensible = (0, get_path_1.isSensibleProject)(projectRoot);
                operationBasePaths = (0, get_path_1.getPathsWithOperations)({
                    manualProjectRoot: projectRoot,
                });
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(operationBasePaths.map(function (absoluteBasePath) { return __awaiter(void 0, void 0, void 0, function () {
                        var folders, projectRelativeBasePath, pages;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({ basePath: absoluteBasePath })];
                                case 1:
                                    folders = (_b.sent()).map(function (result) { return ({
                                        projectRelativePath: (0, get_path_1.makeRelative)(result, projectRoot),
                                    }); });
                                    projectRelativeBasePath = (0, get_path_1.makeRelative)(absoluteBasePath, projectRoot);
                                    pages = folders.map(function (folder) {
                                        var folderName = (0, fs_util_1.getLastFolder)(folder.projectRelativePath);
                                        /**
                                         * Sometimes the bundle states the menu items should not be shown. The pages still remain available though, otherwise it would cause lots of dead links!
                                         */
                                        var isMenuItem = projectRelativeBasePath === "apps" &&
                                            (bundleMarkdownReaderConfig === null || bundleMarkdownReaderConfig === void 0 ? void 0 : bundleMarkdownReaderConfig.omitAppsMenu)
                                            ? false
                                            : projectRelativeBasePath === "packages" &&
                                                (bundleMarkdownReaderConfig === null || bundleMarkdownReaderConfig === void 0 ? void 0 : bundleMarkdownReaderConfig.omitPackagesMenu)
                                                ? false
                                                : projectRelativeBasePath === "modules" &&
                                                    (bundleMarkdownReaderConfig === null || bundleMarkdownReaderConfig === void 0 ? void 0 : bundleMarkdownReaderConfig.omitModulesMenu)
                                                    ? false
                                                    : true;
                                        console.log({ isMenuItem: isMenuItem, projectRelativeBasePath: projectRelativeBasePath, folderName: folderName });
                                        return {
                                            queryPath: folder.projectRelativePath,
                                            // operation filePath is README.md
                                            filePath: fs_util_1.path.join(folder.projectRelativePath, "README.md"),
                                            internalLinkWord: folderName,
                                            isMenuItem: isMenuItem,
                                        };
                                    });
                                    return [2 /*return*/, (_a = {}, _a[projectRelativeBasePath] = pages, _a)];
                            }
                        });
                    }); }))];
            case 1:
                operationPagesPerType = _a.apply(void 0, [_c.sent()]);
                operationsPages = ((_b = bundleMarkdownReaderConfig === null || bundleMarkdownReaderConfig === void 0 ? void 0 : bundleMarkdownReaderConfig.customOperationNames) === null || _b === void 0 ? void 0 : _b.map(function (operationName) {
                    var projectRelativeOperationPath = sdk_operations_1.operations[operationName];
                    if (!projectRelativeOperationPath)
                        return;
                    var markdownReaderPage = {
                        filePath: fs_util_1.path.join(projectRelativeOperationPath, "README.md"),
                        queryPath: projectRelativeOperationPath,
                        isMenuItem: true,
                    };
                    return markdownReaderPage;
                }).filter(js_util_1.notEmpty)) || [];
                operationPages = isSensible
                    ? __spreadArray(__spreadArray(__spreadArray(__spreadArray([], operationsPages, true), operationPagesPerType.packages, true), operationPagesPerType.apps, true), operationPagesPerType.modules, true) : __spreadArray(__spreadArray(__spreadArray([], operationsPages, true), operationPagesPerType["operations/tools"], true), operationPagesPerType["operations/niches"], true);
                return [2 /*return*/, operationPages];
        }
    });
}); };
exports.getOperationPages = getOperationPages;
//# sourceMappingURL=getOperationPages.js.map