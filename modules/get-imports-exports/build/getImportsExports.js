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
exports.getImportsExports = void 0;
var convert_case_1 = require("convert-case");
var k_explore_1 = require("k-explore");
var log_1 = require("log");
var read_json_file_1 = require("read-json-file");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var util_1 = require("./util");
/**
 * Uses ts-morph to get all exports inside all files in a project or an array of source files.
 * Doesn't use index, it actually looks in all files except index,
 * so some of them may not be exported from the package itself depending on your indexing strategy!
 **/
var getImportsExports = function (_a) {
    var sourceFiles = _a.sourceFiles, debug = _a.debug, manualProjectRoot = _a.manualProjectRoot;
    return __awaiter(void 0, void 0, void 0, function () {
        var allOperationsPaths, allOperations, firstFilePath, operationBasePath, packageJson, allTsExports, allTsImports;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (sourceFiles.length === 0) {
                        (0, log_1.log)("No source files provided", { type: "warning" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({
                            basePath: manualProjectRoot,
                        })];
                case 1:
                    allOperationsPaths = _b.sent();
                    allOperations = allOperationsPaths.map(fs_util_1.getLastFolder);
                    firstFilePath = sourceFiles[0].getFilePath();
                    if (!firstFilePath)
                        return [2 /*return*/];
                    operationBasePath = (0, get_path_1.findOperationBasePath)(firstFilePath);
                    if (!operationBasePath)
                        return [2 /*return*/];
                    return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(fs_util_1.path.join(operationBasePath, "package.json"))];
                case 2:
                    packageJson = _b.sent();
                    if (!packageJson) {
                        (0, log_1.log)("PackageJson could not be found", { type: "error" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, js_util_1.mapMany)(sourceFiles, function (sourceFile) { return __awaiter(void 0, void 0, void 0, function () {
                            var absoluteFilePath, operationRelativeTypescriptFilePath, exportSymbols, tsExports;
                            return __generator(this, function (_a) {
                                absoluteFilePath = sourceFile.getFilePath();
                                if (!absoluteFilePath)
                                    return [2 /*return*/];
                                operationRelativeTypescriptFilePath = (0, get_path_1.makeRelative)(absoluteFilePath, operationBasePath);
                                exportSymbols = sourceFile.getExportSymbols();
                                tsExports = exportSymbols.map(function (symbol) {
                                    var name = symbol.getName();
                                    var typeSpecifier = (0, util_1.getExportSymbolTypeRecursive)(symbol, sourceFile, debug);
                                    var exportObject = {
                                        name: name,
                                        slug: (0, convert_case_1.kebabCase)(name),
                                        operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
                                        // TODO:
                                        comments: [],
                                        type: typeSpecifier === null || typeSpecifier === void 0 ? void 0 : typeSpecifier.type,
                                        hasGeneric: typeSpecifier === null || typeSpecifier === void 0 ? void 0 : typeSpecifier.hasGeneric,
                                    };
                                    return exportObject;
                                });
                                return [2 /*return*/, tsExports];
                            });
                        }); }, 10)];
                case 3:
                    allTsExports = (_b.sent())
                        .filter(js_util_1.notEmpty)
                        .flat();
                    return [4 /*yield*/, (0, js_util_1.mapMany)(sourceFiles, function (sourceFile) { return __awaiter(void 0, void 0, void 0, function () {
                            var absoluteFilePath, operationRelativeTypescriptFilePath, importDeclarations, importInfos, tsImports;
                            return __generator(this, function (_a) {
                                absoluteFilePath = sourceFile.getFilePath();
                                if (!absoluteFilePath)
                                    return [2 /*return*/];
                                operationRelativeTypescriptFilePath = (0, get_path_1.makeRelative)(absoluteFilePath, operationBasePath);
                                try {
                                    importDeclarations = sourceFile.getImportDeclarations();
                                    importInfos = importDeclarations
                                        .map(function (importDeclaration) {
                                        try {
                                            var module_1 = String(importDeclaration.getModuleSpecifier().getLiteralText());
                                            var namedImports = importDeclaration
                                                .getNamedImports()
                                                .map(function (x) {
                                                var name = x.getName();
                                                var isOperation = allOperations.includes(module_1);
                                                var typeSpecifier = isOperation
                                                    ? (0, util_1.getTypeFromImportSpecifierRecursive)(x, debug)
                                                    : undefined;
                                                var namedImport = {
                                                    name: name,
                                                    slug: (0, convert_case_1.kebabCase)(name),
                                                    type: typeSpecifier === null || typeSpecifier === void 0 ? void 0 : typeSpecifier.type,
                                                    hasGeneric: typeSpecifier === null || typeSpecifier === void 0 ? void 0 : typeSpecifier.hasGeneric,
                                                };
                                                return namedImport;
                                            });
                                            var isModuleResolved = !!importDeclaration.getModuleSpecifierSourceFile();
                                            return { namedImports: namedImports, module: module_1, isModuleResolved: isModuleResolved };
                                        }
                                        catch (e) {
                                            console.log("catched generating import-info for import-declaration");
                                        }
                                    })
                                        .filter(js_util_1.notEmpty);
                                    tsImports = importInfos
                                        .map(function (importInfo) {
                                        var module = importInfo.module, namedImports = importInfo.namedImports, isModuleResolved = importInfo.isModuleResolved;
                                        var nodeModules = ["fs", "path"];
                                        var reactModules = [
                                            "react",
                                            "react-dom",
                                            "react-native",
                                            "expo",
                                        ];
                                        var classification = nodeModules.includes(module)
                                            ? "node"
                                            : reactModules.includes(module)
                                                ? "react"
                                                : allOperations.includes(module)
                                                    ? "operation"
                                                    : !(0, util_1.isAbsoluteImport)(module)
                                                        ? "internal"
                                                        : "package";
                                        var importObjects = namedImports.map(function (namedImport) { return (__assign(__assign({}, namedImport), { module: module, isModuleResolved: isModuleResolved, 
                                            // TODO
                                            comments: [], operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath, classification: classification, isAbsolute: (0, util_1.isAbsoluteImport)(module), isModuleFromMonorepo: allOperations.includes(module) })); });
                                        return importObjects;
                                    })
                                        .filter(js_util_1.notEmpty)
                                        .flat();
                                    return [2 /*return*/, tsImports];
                                }
                                catch (e) {
                                    return [2 /*return*/];
                                }
                                return [2 /*return*/];
                            });
                        }); }, 10)];
                case 4:
                    allTsImports = (_b.sent())
                        .filter(js_util_1.notEmpty)
                        .flat();
                    return [2 /*return*/, { imports: allTsImports, exports: allTsExports }];
            }
        });
    });
};
exports.getImportsExports = getImportsExports;
//# sourceMappingURL=getImportsExports.js.map