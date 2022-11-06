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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMarkdownFileToModel = void 0;
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var readMarkdownFile_1 = require("./readMarkdownFile");
/**
 * Reads a markdown absolute path to a `MarkdownFile` model
 */
var readMarkdownFileToModel = function (absoluteFilePath) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, projectRoot, mdParse, _a, privacy, detectedLanguage, labels, createdAt, createdFirstAt, deletedAt, updatedAt, id, slug, cta, headerImage, headerSubtitle, headerTitle, isDraft, itemId, frontmatter, operationBasePath, modelLocation, markdownFile;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                filename = fs_util_1.path.parse(absoluteFilePath).name;
                projectRoot = (0, get_path_1.getProjectRoot)(absoluteFilePath);
                if (!projectRoot)
                    return [2 /*return*/, null];
                return [4 /*yield*/, (0, readMarkdownFile_1.readMarkdownFile)(absoluteFilePath)];
            case 1:
                mdParse = _b.sent();
                if (!mdParse)
                    return [2 /*return*/, null];
                _a = mdParse.parameters, privacy = _a.privacy, detectedLanguage = _a.detectedLanguage, labels = _a.labels, createdAt = _a.createdAt, createdFirstAt = _a.createdFirstAt, deletedAt = _a.deletedAt, updatedAt = _a.updatedAt, id = _a.id, slug = _a.slug, cta = _a.cta, headerImage = _a.headerImage, headerSubtitle = _a.headerSubtitle, headerTitle = _a.headerTitle, isDraft = _a.isDraft, itemId = _a.itemId, frontmatter = __rest(_a, ["privacy", "detectedLanguage", "labels", "createdAt", "createdFirstAt", "deletedAt", "updatedAt", "id", "slug", "cta", "headerImage", "headerSubtitle", "headerTitle", "isDraft", "itemId"]);
                operationBasePath = (0, get_path_1.findOperationBasePath)(absoluteFilePath);
                modelLocation = {
                    operationName: operationBasePath ? (0, fs_util_1.getLastFolder)(operationBasePath) : null,
                    projectRelativePath: (0, get_path_1.makeRelative)(absoluteFilePath, projectRoot),
                    operationRelativePath: operationBasePath
                        ? (0, get_path_1.makeRelative)(absoluteFilePath, operationBasePath)
                        : undefined,
                };
                markdownFile = __assign(__assign(__assign({}, modelLocation), frontmatter), { markdown: mdParse.raw, categoryStackCalculated: [], language: "english", privacy: privacy, detectedLanguage: detectedLanguage, labels: labels, createdAt: createdAt, createdFirstAt: createdFirstAt, deletedAt: deletedAt, updatedAt: updatedAt, cta: cta, headerImage: headerImage, headerSubTitle: headerSubtitle, headerTitle: headerTitle, isDraft: isDraft, itemId: itemId, name: filename, slug: slug, id: id });
                return [2 /*return*/, (0, js_util_1.omitUndefinedValues)(markdownFile)];
        }
    });
}); };
exports.readMarkdownFileToModel = readMarkdownFileToModel;
//# sourceMappingURL=readMarkdownFileToModel.js.map