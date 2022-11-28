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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndWriteImportsExports = void 0;
var log_1 = require("log");
var database_1 = require("database");
var ts_morph_util_1 = require("ts-morph-util");
var fs_util_1 = require("fs-util");
var getImportsExports_1 = require("./getImportsExports");
var calculatePackageJsonDependencies_1 = require("./calculatePackageJsonDependencies");
var writeResult_1 = require("./writeResult");
/**
 * takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes
 *
 * NB: has a side effect: it also updates the package.json to include all needed dependencies.
 */
var findAndWriteImportsExports = function (operationBasePath, 
/**
 * Manual project root of the operation where the imports and exports needs to be detected and written to database
 */
manualProjectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var operationName, sourceFiles, problem, importsAndExports, problem, exports, imports, operations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                operationName = (0, fs_util_1.getLastFolder)(operationBasePath);
                return [4 /*yield*/, (0, ts_morph_util_1.getAllTsMorphSourceFiles)(operationBasePath)];
            case 1:
                sourceFiles = _a.sent();
                if (!(!sourceFiles || sourceFiles.length === 0)) return [3 /*break*/, 3];
                problem = "couldn't load any SourceFiles for ".concat(operationBasePath, " (sourceFiles=").concat(sourceFiles, ")");
                (0, log_1.log)(problem, { type: "error" });
                return [4 /*yield*/, (0, writeResult_1.writeResult)({
                        success: false,
                        message: problem,
                        operationName: operationName,
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
            case 3: return [4 /*yield*/, (0, getImportsExports_1.getImportsExports)({
                    sourceFiles: sourceFiles,
                    manualProjectRoot: manualProjectRoot,
                })];
            case 4:
                importsAndExports = _a.sent();
                if (!!importsAndExports) return [3 /*break*/, 6];
                problem = "Something went wrong creating imports/exports";
                (0, log_1.log)(problem, { type: "error" });
                return [4 /*yield*/, (0, writeResult_1.writeResult)({
                        success: false,
                        message: problem,
                        operationName: operationName,
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 5:
                _a.sent();
                return [2 /*return*/];
            case 6:
                exports = importsAndExports.exports, imports = importsAndExports.imports;
                return [4 /*yield*/, database_1.db.get("Operation", { manualProjectRoot: manualProjectRoot })];
            case 7:
                operations = _a.sent();
                return [4 /*yield*/, database_1.db.update("Operation", 
                    // NB: this should always be true, but this extra check will make sure it doesn't update too much...
                    function (x) { return x.name === operationName; }, function (packageJson) {
                        var _a = (0, calculatePackageJsonDependencies_1.calculatePackageJsonDependencies)(packageJson.dependencies, imports, operations, operationName), newDependencies = _a.newDependencies, hasGeneratedDependenciesIndexed = _a.hasGeneratedDependenciesIndexed;
                        var newOperation = __assign(__assign({}, packageJson), { operation: __assign(__assign({}, packageJson.operation), { hasGeneratedDependenciesIndexed: hasGeneratedDependenciesIndexed }), dependencies: newDependencies });
                        return newOperation;
                    }, { operationName: operationName, manualProjectRoot: manualProjectRoot })];
            case 8:
                _a.sent();
                return [4 /*yield*/, database_1.db.clear("TsImport", { operationName: operationName, manualProjectRoot: manualProjectRoot })];
            case 9:
                _a.sent();
                return [4 /*yield*/, database_1.db.clear("TsExport", { operationName: operationName, manualProjectRoot: manualProjectRoot })];
            case 10:
                _a.sent();
                // @ts-ignore
                return [4 /*yield*/, database_1.db.upsert("TsImport", imports, { operationName: operationName, manualProjectRoot: manualProjectRoot })];
            case 11:
                // @ts-ignore
                _a.sent();
                // @ts-ignore
                return [4 /*yield*/, database_1.db.upsert("TsExport", exports, { operationName: operationName, manualProjectRoot: manualProjectRoot })];
            case 12:
                // @ts-ignore
                _a.sent();
                return [4 /*yield*/, (0, writeResult_1.writeResult)({
                        success: true,
                        message: "Succesfully created imports and exports",
                        operationName: operationName,
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 13:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.findAndWriteImportsExports = findAndWriteImportsExports;
//# sourceMappingURL=findAndWriteImportsExports.js.map