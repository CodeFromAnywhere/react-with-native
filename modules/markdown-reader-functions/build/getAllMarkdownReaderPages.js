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
exports.getAllMarkdownReaderPages = void 0;
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var k_explore_1 = require("k-explore");
// relative
var getOperationPages_1 = require("./getOperationPages");
var getMarkdownReaderPages_1 = require("./getMarkdownReaderPages");
var getTodoPages_1 = require("./getTodoPages");
var getMarkdownModelPages_1 = require("./getMarkdownModelPages");
var read_json_file_1 = require("read-json-file");
var fs_util_1 = require("fs-util");
// ....? I should've commented this
// const hasDocs = !!relativeDocsPages.find(
//   (x) => x.queryPath.toLowerCase() === "docs/readme"
// );
// if (!hasDocs) {
//   const hasRootReadme = fs.existsSync(path.join(projectRoot, "README.md"));
//   if (hasRootReadme) {
//     relativeDocsPages.unshift({
//       queryPath: "docs/readme",
//       filePath: "README.md",
//       isMenuItem: true,
//     });
//   }
// }
/**

 
Gets all pages of a bundle based on the fs and database

Pages it finds:

- operation-readmes
- multiple docs basePaths with all folders and markdown pages there in (`/[project-relative-path]`)
- `/dictionary`
- all markdown model types we have in the db-sdk, optionally, depending on config

Requirements:

- README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include AugmentedWord. Just the main pages, not with queries and hashes

Used to generate the menu
 */
var getAllMarkdownReaderPages = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, publicBundleConfig, bundleMarkdownReaderConfig, docsPaths, relativeDocsPages, operationPages, markdownModelTypePages, todoPages, allPages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(fs_util_1.path.join(projectRoot, "public-bundle-config.json"))];
            case 1:
                publicBundleConfig = _a.sent();
                bundleMarkdownReaderConfig = publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.bundleMarkdownReaderConfig;
                return [4 /*yield*/, (0, k_explore_1.findAllDocsFolderPaths)(true)];
            case 2:
                docsPaths = _a.sent();
                return [4 /*yield*/, (0, getMarkdownReaderPages_1.getMarkdownReaderPages)({
                        projectRoot: projectRoot,
                        basePaths: docsPaths,
                    })];
            case 3:
                relativeDocsPages = _a.sent();
                return [4 /*yield*/, (0, getOperationPages_1.getOperationPages)(projectRoot, bundleMarkdownReaderConfig)];
            case 4:
                operationPages = _a.sent();
                return [4 /*yield*/, (0, getMarkdownModelPages_1.getMarkdownModelPages)(projectRoot)];
            case 5:
                markdownModelTypePages = _a.sent();
                return [4 /*yield*/, (0, getTodoPages_1.getTodoPages)(projectRoot)];
            case 6:
                todoPages = _a.sent();
                allPages = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
                    { queryPath: "", filePath: "README.md", isMenuItem: true }
                ], relativeDocsPages, true), operationPages, true), [
                    // `/dictionary` page with all words/definitions, categorised
                    { queryPath: "dictionary", isMenuItem: true }
                ], false), markdownModelTypePages, true), todoPages, true).filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.queryPath === b.queryPath; }));
                return [2 /*return*/, allPages];
        }
    });
}); };
exports.getAllMarkdownReaderPages = getAllMarkdownReaderPages;
//# sourceMappingURL=getAllMarkdownReaderPages.js.map