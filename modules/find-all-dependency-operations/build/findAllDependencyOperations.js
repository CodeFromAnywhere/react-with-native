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
exports.findDependantsRecursively = exports.findDependants = exports.getDependencyTree = exports.getDependencyObject = exports.findAllDependencyOperations = exports.findDependenciesRecursively = exports.findMonorepoModules = void 0;
var js_util_1 = require("js-util");
var database_1 = require("database");
var k_explore_1 = require("k-explore");
var fs_util_1 = require("fs-util");
var one_by_one_1 = require("one-by-one");
/**
 * finds all dependencies of an operation name
 */
var findMonorepoModules = function (operationName) { return __awaiter(void 0, void 0, void 0, function () {
    var imports, monorepoModules;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("TsImport", { operationName: operationName })];
            case 1:
                imports = _a.sent();
                monorepoModules = imports
                    .map(function (x) {
                    return x.isModuleFromMonorepo && x.isModuleResolved ? x.module : null;
                })
                    .filter(js_util_1.notEmpty)
                    .filter(js_util_1.onlyUnique);
                return [2 /*return*/, monorepoModules];
        }
    });
}); };
exports.findMonorepoModules = findMonorepoModules;
/**
 * finds all dependencies of an operation name
 */
var findDependenciesRecursively = function (
/**
 * all imports
 */
imports, operations, operationName, 
/**
 * skip recursing on these ones because they are already found
 */
already, ignore, ignoreFilter) { return __awaiter(void 0, void 0, void 0, function () {
    var packageJson, indirectDependencies, onlyIncluded, thisImports, monorepoModules, newAlready, dependencyPromises, dependencies, all;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (ignore === null || ignore === void 0 ? void 0 : ignore.includes(operationName))
                    return [2 /*return*/, []];
                packageJson = operations.find(function (x) { return x.operationName === operationName; });
                if (!packageJson) {
                    console.log("WARN: couldn't find packagejson ".concat(operationName, ". weird..."), operations.slice(0, 5));
                    return [2 /*return*/, []];
                }
                indirectDependencies = ((_a = packageJson.operation) === null || _a === void 0 ? void 0 : _a.indirectDependencies) || [];
                onlyIncluded = function (operationName) {
                    return !(ignore === null || ignore === void 0 ? void 0 : ignore.includes(operationName)) &&
                        (!ignoreFilter || ignoreFilter(operationName));
                };
                thisImports = imports.filter(function (x) { return x.operationName === operationName; });
                monorepoModules = thisImports
                    .map(function (x) {
                    return x.isModuleFromMonorepo && x.isModuleResolved ? x.module : null;
                })
                    .filter(js_util_1.notEmpty)
                    .filter(onlyIncluded)
                    // add the indirect ones
                    .concat(indirectDependencies);
                newAlready = already.concat(monorepoModules).filter(js_util_1.onlyUnique);
                dependencyPromises = monorepoModules
                    .filter(function (x) { return !(already === null || already === void 0 ? void 0 : already.includes(x)); })
                    .map(function (operationName) {
                    return (0, exports.findDependenciesRecursively)(imports, operations, operationName, newAlready, ignore);
                });
                return [4 /*yield*/, Promise.all(dependencyPromises)];
            case 1:
                dependencies = (_b.sent()).flat();
                all = monorepoModules.concat(dependencies);
                return [2 /*return*/, all];
        }
    });
}); };
exports.findDependenciesRecursively = findDependenciesRecursively;
/**
 * to be used when you need to know all dependencies for multiple operation names at once
 *
 * TODO: NB: this breaks with circular dependencies
 */
var findAllDependencyOperations = function (_a) {
    var imports = _a.imports, operations = _a.operations, operationNames = _a.operationNames, ignoreOperationNames = _a.ignoreOperationNames, ignoreFilter = _a.ignoreFilter;
    return __awaiter(void 0, void 0, void 0, function () {
        var dependencies;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, one_by_one_1.oneByOne)(operationNames, function (operationName) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            process.stdout.write("".concat(operationName, " ... "));
                            return [2 /*return*/, (0, exports.findDependenciesRecursively)(imports, operations, operationName, operationNames, ignoreOperationNames, ignoreFilter)];
                        });
                    }); })];
                case 1:
                    dependencies = (_b.sent()).flat();
                    return [2 /*return*/, dependencies.filter(js_util_1.onlyUnique)];
            }
        });
    });
};
exports.findAllDependencyOperations = findAllDependencyOperations;
// findAllDependencyOperations(["fs-orm"]).then(console.log);
// how do I get a format like this?
// const x = {
//   "fs-orm": ["js-util"],
//   "js-util": [],
// }
var getDependencyObject = function () { return __awaiter(void 0, void 0, void 0, function () {
    var allOperations, dependencyObject, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({})];
            case 1:
                allOperations = _b.sent();
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(allOperations.map(function (operationFolderPath) { return __awaiter(void 0, void 0, void 0, function () {
                        var operationName, monorepoModules;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    operationName = (0, fs_util_1.getLastFolder)(operationFolderPath);
                                    return [4 /*yield*/, (0, exports.findMonorepoModules)(operationName)];
                                case 1:
                                    monorepoModules = _b.sent();
                                    return [2 /*return*/, (_a = {}, _a[operationName] = monorepoModules, _a)];
                            }
                        });
                    }); }))];
            case 2:
                dependencyObject = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, dependencyObject];
        }
    });
}); };
exports.getDependencyObject = getDependencyObject;
var getDependencyTree = function (operationNames, stack) { return __awaiter(void 0, void 0, void 0, function () {
    var dependencyTree, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (operationNames.length === 0)
                    return [2 /*return*/, null];
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(operationNames.map(function (name) { return __awaiter(void 0, void 0, void 0, function () {
                        var deps, newStack, filtered, filteredOut, _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, (0, exports.findMonorepoModules)(name)];
                                case 1:
                                    deps = _c.sent();
                                    newStack = stack.concat(name);
                                    filtered = deps.filter(function (dep) { return !newStack.includes(dep); });
                                    filteredOut = deps.filter(function (dep) { return newStack.includes(dep); });
                                    if (deps.length !== filtered.length) {
                                        console.log("prevented circular dependency at ".concat(name, " (").concat(filteredOut.join(", "), " were removed)"));
                                    }
                                    _b = {};
                                    _a = name;
                                    return [4 /*yield*/, (0, exports.getDependencyTree)(filtered, newStack)];
                                case 2: return [2 /*return*/, (_b[_a] = _c.sent(),
                                        _b)];
                            }
                        });
                    }); }))];
            case 1:
                dependencyTree = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, dependencyTree];
        }
    });
}); };
exports.getDependencyTree = getDependencyTree;
// getDependencyTree(["k-types", "fs-orm"], []).then((res) =>
//   console.dir(res, { depth: 999 })
// );
/**
 * finds all dependants of an operation or a specific import from that operation
 *
 * normally returns the files where the operation or function is used, unless you specify to return the operationNames only.
 */
var findDependants = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var operationName, importName, returnOperationName, imports, onlyExternal, resultValueKey, theImports, _a, monorepoModules;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                operationName = config.operationName, importName = config.importName, returnOperationName = config.returnOperationName, imports = config.imports, onlyExternal = config.onlyExternal;
                resultValueKey = returnOperationName
                    ? "operationName"
                    : "projectRelativePath";
                _a = imports;
                if (_a) return [3 /*break*/, 2];
                return [4 /*yield*/, database_1.db.get("TsImport")];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                theImports = _a;
                monorepoModules = theImports
                    .filter(function (x) { return x.module === operationName; })
                    .filter(function (x) { return (importName ? x.name === importName : true); })
                    .filter(function (x) {
                    return onlyExternal ? x.isAbsolute && x.operationName !== operationName : true;
                })
                    .map(function (x) {
                    return x.isModuleFromMonorepo && x.isModuleResolved ? x[resultValueKey] : null;
                })
                    .filter(js_util_1.notEmpty)
                    .filter(js_util_1.onlyUnique);
                return [2 /*return*/, monorepoModules];
        }
    });
}); };
exports.findDependants = findDependants;
// findDependants({
//   operationName: "js-util",
//   importName: "notEmpty",
//   returnOperationName: false,
// }).then(console.log);
var findDependantsRecursively = function (operationName, already) { return __awaiter(void 0, void 0, void 0, function () {
    var dependantOperationNames, dependantsUntilNow, recursedDependants, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, exports.findDependants)({
                    returnOperationName: true,
                    operationName: operationName,
                })];
            case 1:
                dependantOperationNames = _b.sent();
                dependantsUntilNow = __spreadArray(__spreadArray([
                    operationName
                ], dependantOperationNames, true), (already || []), true);
                if (!(dependantOperationNames.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, Promise.all(dependantOperationNames.map(function (name) {
                        return (0, exports.findDependantsRecursively)(name, dependantsUntilNow);
                    }))];
            case 2:
                _a = (_b.sent()).flat();
                return [3 /*break*/, 4];
            case 3:
                _a = [];
                _b.label = 4;
            case 4:
                recursedDependants = _a;
                return [2 /*return*/, __spreadArray(__spreadArray([], dependantsUntilNow, true), recursedDependants, true).filter((0, js_util_1.onlyUnique2)())];
        }
    });
}); };
exports.findDependantsRecursively = findDependantsRecursively;
//# sourceMappingURL=findAllDependencyOperations.js.map