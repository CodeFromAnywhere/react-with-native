#!/usr/bin/env node
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
exports.getFolderTypescriptIndex = exports.readTypescriptFile = void 0;
var fs_util_1 = require("fs-util");
var database_1 = require("database");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var k_explore_1 = require("k-explore");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var uniqueNames = function (value, index, self) {
    return self.findIndex(function (v) { return v.name === value.name; }) === index;
};
/**
 *
 * Reads and parses a markdown file
 */
var readTypescriptFile = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var operationBasePath, operationName, operationRelativeTypescriptFilePath, getFileIndexes, pathParse, isTypescriptFile, typescriptIndex;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                operationBasePath = (0, get_path_1.findOperationBasePath)(filePath);
                if (!operationBasePath)
                    return [2 /*return*/, null];
                operationName = (0, fs_util_1.getLastFolder)(operationBasePath);
                operationRelativeTypescriptFilePath = (0, get_path_1.getOperationRelativePath)(filePath, operationBasePath);
                getFileIndexes = function (indexModelName) {
                    var result = database_1.db
                        // TODO: make it more efficient by just finding the correct JSON files instead of all files in the operation.
                        .get(indexModelName, { operationName: operationName })
                        .then(function (result) {
                        return result.filter(function (x) {
                            return (x.operationRelativeTypescriptFilePath ===
                                operationRelativeTypescriptFilePath);
                        });
                    });
                    return result;
                };
                pathParse = fs_util_1.path.parse(filePath);
                isTypescriptFile = ["ts", "tsx"].includes(pathParse.ext.slice(1));
                if (!isTypescriptFile)
                    return [2 /*return*/, null];
                if (!fs_util_1.fs.existsSync(filePath))
                    return [2 /*return*/, null];
                _a = {};
                return [4 /*yield*/, getFileIndexes("TsBuildError")];
            case 1:
                _a.tsBuildErrors = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsLintWarning")];
            case 2:
                _a.tsLintWarnings = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsFunction")];
            case 3:
                _a.tsFunctions = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsVariable")];
            case 4:
                _a.tsVariables = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsInterface")];
            case 5:
                _a.tsInterfaces = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsComment")];
            case 6:
                _a.tsComments = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsImport")];
            case 7:
                _a.tsImports = _b.sent();
                return [4 /*yield*/, getFileIndexes("TsExport")];
            case 8:
                typescriptIndex = (_a.tsExports = _b.sent(),
                    _a);
                return [2 /*return*/, typescriptIndex];
        }
    });
}); };
exports.readTypescriptFile = readTypescriptFile;
var getOperationIndexModel = function (indexModelName, operationBasePath, 
/**
 * if provided, db result will be filtered to specific filepaths
 */
filePaths) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, relativeFilePaths, result, filterOnName, filtered;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)(filePaths[0]);
                if (!projectRoot)
                    return [2 /*return*/, []];
                relativeFilePaths = filePaths.map(function (f) {
                    return f.substring(projectRoot.length);
                });
                return [4 /*yield*/, database_1.db
                        // TODO: make it more efficient by just finding the correct JSON files instead of all files in the operation.
                        .get(indexModelName, { operationName: (0, fs_util_1.getLastFolder)(operationBasePath) })];
            case 1:
                result = _a.sent();
                filterOnName = indexModelName === "TsComment" ? function () { return true; } : uniqueNames;
                filtered = result
                    .filter(function (x) {
                    return x.projectRelativePath &&
                        (relativeFilePaths.length === 0 ||
                            relativeFilePaths.includes(x.projectRelativePath));
                })
                    .filter(filterOnName);
                return [2 /*return*/, filtered];
        }
    });
}); };
/**
 * get a Typescript index for all that is found in a folder
 */
var getFolderTypescriptIndex = function (_a) {
    var basePath = _a.basePath, filter = _a.filter, sort = _a.sort, type = _a.type, filePath = _a.filePath;
    return __awaiter(void 0, void 0, void 0, function () {
        var operationBasePath, groupedFiles, _b, _c, typescriptIndexes, mergedTypescriptIndex;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    operationBasePath = basePath && !Array.isArray(basePath)
                        ? (0, get_path_1.findOperationBasePath)(basePath)
                        : undefined;
                    if (!operationBasePath) return [3 /*break*/, 1];
                    _b = (_d = {}, _d[operationBasePath] = [], _d);
                    return [3 /*break*/, 5];
                case 1:
                    if (!(filePath && filePath.length > 0)) return [3 /*break*/, 2];
                    _c = (0, js_util_1.makeArray)(filePath).reduce(function (groups, filePath) {
                        var operationBasePath = (0, get_path_1.findOperationBasePath)(filePath);
                        if (operationBasePath) {
                            groups[operationBasePath] = groups[operationBasePath]
                                ? groups[operationBasePath].concat(filePath)
                                : [filePath];
                        }
                        return groups;
                    }, {});
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({ basePath: basePath })];
                case 3:
                    _c = (_e.sent()).reduce(function (groups, operationBasePath) {
                        groups[operationBasePath] = [];
                        return groups;
                    }, {});
                    _e.label = 4;
                case 4:
                    _b = _c;
                    _e.label = 5;
                case 5:
                    groupedFiles = _b;
                    return [4 /*yield*/, Promise.all(Object.keys(groupedFiles).map(function (operationBasePath) { return __awaiter(void 0, void 0, void 0, function () {
                            var files, tsBuildErrors, _a, tsLintWarnings, _b, tsFunctions, _c, extendedTsFuntions, tsVariables, _d, tsInterfaces, _e, tsComments, _f, tsImports, _g, tsExports, _h, filteredInterfaces, typescriptIndex;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        files = groupedFiles[operationBasePath];
                                        if (!(type === "TsBuildError" || !type)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, getOperationIndexModel("TsBuildError", operationBasePath, files)];
                                    case 1:
                                        _a = _j.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a = [];
                                        _j.label = 3;
                                    case 3:
                                        tsBuildErrors = _a;
                                        if (!(type === "TsLintWarning" || !type)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, getOperationIndexModel("TsLintWarning", operationBasePath, files)];
                                    case 4:
                                        _b = _j.sent();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        _b = [];
                                        _j.label = 6;
                                    case 6:
                                        tsLintWarnings = _b;
                                        if (!(type === "TsFunction" || !type)) return [3 /*break*/, 8];
                                        return [4 /*yield*/, getOperationIndexModel("TsFunction", operationBasePath, files)];
                                    case 7:
                                        _c = _j.sent();
                                        return [3 /*break*/, 9];
                                    case 8:
                                        _c = [];
                                        _j.label = 9;
                                    case 9:
                                        tsFunctions = _c;
                                        return [4 /*yield*/, Promise.all(tsFunctions.map(function (tsFunction) { return __awaiter(void 0, void 0, void 0, function () {
                                                var _a, _b;
                                                var _c;
                                                return __generator(this, function (_d) {
                                                    switch (_d.label) {
                                                        case 0:
                                                            _a = [__assign({}, tsFunction)];
                                                            _c = {};
                                                            if (!tsFunction.operationName) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependants)({
                                                                    operationName: tsFunction.operationName,
                                                                    importName: tsFunction.name,
                                                                })];
                                                        case 1:
                                                            _b = _d.sent();
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            _b = [];
                                                            _d.label = 3;
                                                        case 3: return [2 /*return*/, (__assign.apply(void 0, _a.concat([(_c.dependantFiles = _b, _c)])))];
                                                    }
                                                });
                                            }); }))];
                                    case 10:
                                        extendedTsFuntions = _j.sent();
                                        if (!(type === "TsVariable" || !type)) return [3 /*break*/, 12];
                                        return [4 /*yield*/, getOperationIndexModel("TsVariable", operationBasePath, files)];
                                    case 11:
                                        _d = _j.sent();
                                        return [3 /*break*/, 13];
                                    case 12:
                                        _d = [];
                                        _j.label = 13;
                                    case 13:
                                        tsVariables = _d;
                                        if (!(type === "TsInterface" || !type)) return [3 /*break*/, 15];
                                        return [4 /*yield*/, getOperationIndexModel("TsInterface", operationBasePath, files)];
                                    case 14:
                                        _e = _j.sent();
                                        return [3 /*break*/, 16];
                                    case 15:
                                        _e = [];
                                        _j.label = 16;
                                    case 16:
                                        tsInterfaces = _e;
                                        if (!(type === "TsComment" || !type)) return [3 /*break*/, 18];
                                        return [4 /*yield*/, getOperationIndexModel("TsComment", operationBasePath, files)];
                                    case 17:
                                        _f = _j.sent();
                                        return [3 /*break*/, 19];
                                    case 18:
                                        _f = [];
                                        _j.label = 19;
                                    case 19:
                                        tsComments = _f;
                                        if (!(type === "TsImport" || !type)) return [3 /*break*/, 21];
                                        return [4 /*yield*/, getOperationIndexModel("TsImport", operationBasePath, files)];
                                    case 20:
                                        _g = _j.sent();
                                        return [3 /*break*/, 22];
                                    case 21:
                                        _g = [];
                                        _j.label = 22;
                                    case 22:
                                        tsImports = _g;
                                        if (!(type === "TsExport" || !type)) return [3 /*break*/, 24];
                                        return [4 /*yield*/, getOperationIndexModel("TsExport", operationBasePath, files)];
                                    case 23:
                                        _h = _j.sent();
                                        return [3 /*break*/, 25];
                                    case 24:
                                        _h = [];
                                        _j.label = 25;
                                    case 25:
                                        tsExports = _h;
                                        filteredInterfaces = tsInterfaces.filter(function (x) {
                                            return (filter === null || filter === void 0 ? void 0 : filter.interfaceIsDbModel) ? x.isDbModel : true;
                                        });
                                        typescriptIndex = {
                                            tsBuildErrors: tsBuildErrors,
                                            tsLintWarnings: tsLintWarnings,
                                            tsFunctions: extendedTsFuntions,
                                            tsVariables: tsVariables,
                                            tsInterfaces: filteredInterfaces,
                                            tsComments: tsComments.filter(function (comment) {
                                                return (filter === null || filter === void 0 ? void 0 : filter.hasCommentTypes)
                                                    ? comment.types.find(function (type) {
                                                        return filter.hasCommentTypes.includes(type);
                                                    })
                                                    : true;
                                            }),
                                            tsImports: tsImports,
                                            tsExports: tsExports,
                                        };
                                        return [2 /*return*/, typescriptIndex];
                                }
                            });
                        }); }))];
                case 6:
                    typescriptIndexes = _e.sent();
                    mergedTypescriptIndex = typescriptIndexes.reduce(function (merged, current) {
                        if (merged) {
                            var indexModels = Object.keys(merged);
                            var together = (0, js_util_1.mergeObjectsArray)(indexModels.map(function (indexModelName) {
                                var _a;
                                var filterOnName = indexModelName === "tsComments" ? function () { return true; } : uniqueNames;
                                return _a = {},
                                    _a[indexModelName] = __spreadArray(__spreadArray([], merged[indexModelName], true), current[indexModelName], true).filter(filterOnName),
                                    _a;
                            }));
                            return together;
                        }
                        return current;
                    }, null);
                    return [2 /*return*/, mergedTypescriptIndex];
            }
        });
    });
};
exports.getFolderTypescriptIndex = getFolderTypescriptIndex;
//# sourceMappingURL=readTypescriptFile.js.map