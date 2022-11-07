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
exports.getMarkdownReaderPages = exports.stripReadmeFromFolder = void 0;
var get_path_1 = require("get-path");
var getPublicMarkdownFilePaths_1 = require("./getPublicMarkdownFilePaths");
var removeExtensionsFromPath_1 = require("./removeExtensionsFromPath");
/**
 * To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md
 */
var stripReadmeFromFolder = function (filePath) {
    var suffix = "/readme.md";
    if (filePath.toLowerCase().endsWith(suffix)) {
        var strippedPath = filePath.slice(0, filePath.length - suffix.length);
        return strippedPath;
    }
    return filePath;
};
exports.stripReadmeFromFolder = stripReadmeFromFolder;
/**
 * Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.
 */
var getMarkdownReaderPages = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var basePaths, projectRoot, mapQueryPath, markdownReaderPages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                basePaths = config.basePaths, projectRoot = config.projectRoot, mapQueryPath = config.mapQueryPath;
                return [4 /*yield*/, Promise.all(basePaths.map(function (basePath) { return __awaiter(void 0, void 0, void 0, function () {
                        var publicMarkdownFileAbsolutePaths, markdownReaderPages;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, getPublicMarkdownFilePaths_1.getPublicMarkdownFilePaths)(basePath, false)];
                                case 1:
                                    publicMarkdownFileAbsolutePaths = _a.sent();
                                    markdownReaderPages = publicMarkdownFileAbsolutePaths.map(function (x) {
                                        var filePath = (0, get_path_1.makeRelative)(x.path, projectRoot);
                                        var pathWithoutReadme = (0, exports.stripReadmeFromFolder)(filePath);
                                        var pathWithoutExtensions = (0, removeExtensionsFromPath_1.removeExtensionsFromPath)(pathWithoutReadme);
                                        var queryPath = mapQueryPath
                                            ? mapQueryPath(pathWithoutExtensions)
                                            : pathWithoutExtensions;
                                        // NB: folders are no menu items because menu is built from queryPaths recursively
                                        var markdownReaderPage = {
                                            queryPath: queryPath,
                                            filePath: filePath,
                                            isMenuItem: !x.isFolder,
                                        };
                                        return markdownReaderPage;
                                    });
                                    return [2 /*return*/, markdownReaderPages];
                            }
                        });
                    }); }))];
            case 1:
                markdownReaderPages = (_a.sent()).flat();
                return [2 /*return*/, markdownReaderPages];
        }
    });
}); };
exports.getMarkdownReaderPages = getMarkdownReaderPages;
//# sourceMappingURL=getMarkdownReaderPages.js.map