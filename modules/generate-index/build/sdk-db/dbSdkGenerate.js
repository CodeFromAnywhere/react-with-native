#!/usr/bin/env node
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
exports.dbSdkGenerate = void 0;
var db_1 = require("db");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var log_1 = require("log");
var one_by_one_1 = require("one-by-one");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var types_1 = require("../types");
var dbSdkWriteToFile_1 = require("./dbSdkWriteToFile");
var dbSdkGenerate = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var saveInAssets, manualProjectRoot, outputPath, sdkPath, allDbModels, allDbModelNames, allIndexExports, sdkDependants, allDbModelExports, allResolvableExports;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                saveInAssets = config === null || config === void 0 ? void 0 : config.saveInAssets;
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                outputPath = null;
                if (!saveInAssets) return [3 /*break*/, 1];
                outputPath = fs_util_1.path.join(__dirname, "..", "assets", "db-sdk.ts");
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, (0, get_path_1.getOperationPath)("sdk-db", { manualProjectRoot: manualProjectRoot })];
            case 2:
                sdkPath = _a.sent();
                if (!sdkPath) {
                    return [2 /*return*/, (0, log_1.log)("No sdk path found", { type: "error" })];
                }
                outputPath = fs_util_1.path.join(sdkPath, "src", "db-sdk.ts");
                _a.label = 3;
            case 3:
                if (!outputPath) {
                    return [2 /*return*/, (0, log_1.log)("Outputpath not found", { type: "error" })];
                }
                return [4 /*yield*/, (0, db_1.get)("TsInterface", { manualProjectRoot: manualProjectRoot })];
            case 4:
                allDbModels = (_a.sent())
                    .filter(function (x) { return x.isDbModel; })
                    .map(function (x) {
                    return { name: x.name, defaultDbStorageMethod: x.defaultDbStorageMethod };
                })
                    .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }));
                allDbModelNames = allDbModels.map(function (x) { return x.name; });
                return [4 /*yield*/, (0, db_1.get)("TsExport", {
                        operationIndexFiles: "index.json",
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 5:
                allIndexExports = _a.sent();
                return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependantsRecursively)("sdk")];
            case 6:
                sdkDependants = _a.sent();
                allDbModelExports = allIndexExports
                    // only exports from index files that have the name of the interface
                    .filter(function (x) { return x.type === "type" && allDbModelNames.includes(x.name); })
                    // don't do default exports, because they are discouraged and should also be named
                    .filter(function (x) { return !["default", "sdk"].includes(x.name); })
                    // don't add the exports from the sdk and packages dependent on sdk, because that would create circular dependencies
                    .filter(function (x) {
                    return x.operationName
                        ? !__spreadArray([types_1.sdkOperationName], sdkDependants, true).includes(x.operationName)
                        : true;
                });
                return [4 /*yield*/, (0, one_by_one_1.oneByOne)(allDbModelExports, function (x) { return __awaiter(void 0, void 0, void 0, function () {
                        var operationPath, buildFolder, indexFile;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!x.operationName)
                                        return [2 /*return*/, null];
                                    return [4 /*yield*/, (0, get_path_1.getOperationPath)(x.operationName, {
                                            manualProjectRoot: manualProjectRoot,
                                        })];
                                case 1:
                                    operationPath = _a.sent();
                                    if (!operationPath)
                                        return [2 /*return*/, null];
                                    buildFolder = fs_util_1.path.join(operationPath, "build");
                                    indexFile = fs_util_1.path.join(operationPath, "build", "index.js");
                                    if (!fs_util_1.fs.existsSync(buildFolder) || !fs_util_1.fs.existsSync(indexFile)) {
                                        return [2 /*return*/, null];
                                    }
                                    return [2 /*return*/, x];
                            }
                        });
                    }); })];
            case 7:
                allResolvableExports = (_a.sent()).filter(js_util_1.notEmpty);
                console.log("are they all resolveable?", {
                    // allIndexExports,
                    allDbModels: allDbModels,
                    allDbModelExports: allDbModelExports.length,
                    allResolvableExports: allResolvableExports.length,
                });
                return [4 /*yield*/, (0, dbSdkWriteToFile_1.dbSdkWriteToFile)({
                        allDbModels: allDbModels,
                        exportArray: allResolvableExports,
                        operationName: types_1.sdkDbOperationName,
                        outputPath: outputPath,
                        exportSeparate: false,
                    })];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.dbSdkGenerate = dbSdkGenerate;
//# sourceMappingURL=dbSdkGenerate.js.map