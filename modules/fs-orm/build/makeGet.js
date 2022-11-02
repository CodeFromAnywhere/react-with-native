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
exports.makeGet = void 0;
var js_util_1 = require("js-util");
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var read_csv_file_1 = require("read-csv-file");
var read_markdown_file_1 = require("read-markdown-file");
var key_value_markdown_js_1 = require("key-value-markdown-js");
var getDatabaseFiles_1 = require("./convention/getDatabaseFiles");
var mergeConfigs_1 = require("./convention/mergeConfigs");
var makeGet = function (dbConfig) {
    var get = function (modelName, config) { return __awaiter(void 0, void 0, void 0, function () {
        var mergedQueryConfig, dbFiles, dbContentPromises, dbContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedQueryConfig = (0, mergeConfigs_1.mergeConfigs)(modelName, dbConfig, config);
                    return [4 /*yield*/, (0, getDatabaseFiles_1.getDatabaseFiles)(modelName, mergedQueryConfig)];
                case 1:
                    dbFiles = _a.sent();
                    dbContentPromises = dbFiles.map(function (dbFileLocation) { return __awaiter(void 0, void 0, void 0, function () {
                        var absolutePath, modelName, modelLocation, ext, jsonContent, jsonContentArray, augmented, csvContent, augmented, mdParse, frontmatter, markdownContent, keyValueMarkdownParse, keyValueMarkdown;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    absolutePath = dbFileLocation.absolutePath, modelName = dbFileLocation.modelName, modelLocation = __rest(dbFileLocation, ["absolutePath", "modelName"]);
                                    ext = fs_util_1.path.parse(absolutePath).ext;
                                    if (!(ext === ".json")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(absolutePath)];
                                case 1:
                                    jsonContent = _a.sent();
                                    jsonContentArray = jsonContent ? (0, js_util_1.makeArray)(jsonContent) : null;
                                    augmented = jsonContentArray
                                        ? jsonContentArray.map(function (x) { return (__assign(__assign({}, x), modelLocation)); })
                                        : null;
                                    return [2 /*return*/, augmented];
                                case 2:
                                    if (!(ext === ".csv")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, (0, read_csv_file_1.readCsvFile)(absolutePath)];
                                case 3:
                                    csvContent = _a.sent();
                                    if (!csvContent)
                                        return [2 /*return*/];
                                    augmented = csvContent.map(function (x) { return (__assign(__assign({}, x), modelLocation)); });
                                    return [2 /*return*/, augmented];
                                case 4:
                                    if (!(ext === ".md")) return [3 /*break*/, 6];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(absolutePath)];
                                case 5:
                                    mdParse = _a.sent();
                                    if (!mdParse)
                                        return [2 /*return*/, null];
                                    frontmatter = mdParse === null || mdParse === void 0 ? void 0 : mdParse.parameters;
                                    if (mergedQueryConfig.dbStorageMethod === "markdown") {
                                        markdownContent = __assign(__assign(__assign({}, frontmatter), { markdown: mdParse.raw }), modelLocation);
                                        return [2 /*return*/, markdownContent];
                                    }
                                    keyValueMarkdownParse = (0, key_value_markdown_js_1.markdownStringToKvmdParse)(mdParse.raw, dbFileLocation);
                                    keyValueMarkdown = keyValueMarkdownParse.data;
                                    return [2 /*return*/, keyValueMarkdown];
                                case 6: 
                                // NB: should never happen
                                return [2 /*return*/, null];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(dbContentPromises)];
                case 2:
                    dbContent = (_a.sent())
                        .filter(js_util_1.notEmpty)
                        .map(function (x) { return (0, js_util_1.makeArray)(x); })
                        .flat();
                    return [2 /*return*/, dbContent];
            }
        });
    }); };
    return get;
};
exports.makeGet = makeGet;
//# sourceMappingURL=makeGet.js.map