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
exports.generateFunctionSdks = exports.newSdkKeysOperation = exports.newSdkOperation = exports.getSdkFunctions = void 0;
var db_1 = require("db");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var code_types_1 = require("code-types");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var new_operation_1 = require("new-operation");
var js_util_1 = require("js-util");
var k_explore_1 = require("k-explore");
// relative
var getOperationConfig_1 = require("./getOperationConfig");
/**
 * returns all sdk functions grouped by operation classification
 */
var getSdkFunctions = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, projectRoot, sdkDependants, exportedFunctions, operationClassificationsObject, _a, sdkFunctionsPerClassification;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependantsRecursively)("sdk")];
            case 1:
                sdkDependants = _b.sent();
                return [4 /*yield*/, db_1.db.get("TsFunction", { manualProjectRoot: manualProjectRoot })];
            case 2:
                exportedFunctions = (_b.sent())
                    .filter(function (x) { return x.isExported; })
                    .filter(function (x) {
                    return x.operationName && !sdkDependants.includes(x.operationName);
                });
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({})];
            case 3:
                operationClassificationsObject = _a.apply(void 0, [(_b.sent())
                        .map(function (operationBasePath) {
                        var _a;
                        var operationClassification = (0, get_path_1.getOperationClassification)(operationBasePath);
                        var operationName = (0, fs_util_1.getLastFolder)(operationBasePath);
                        if (!operationClassification)
                            return;
                        return _a = {}, _a[operationName] = operationClassification, _a;
                    })
                        .filter(js_util_1.notEmpty)]);
                sdkFunctionsPerClassification = (0, js_util_1.mergeObjectsArray)(code_types_1.operationClassificationConst.map(function (operationClassification) {
                    var _a;
                    var sdkFunctions = exportedFunctions
                        .filter(function (x) { return __awaiter(void 0, void 0, void 0, function () {
                        var operationName, functionClassification, isSdkable;
                        return __generator(this, function (_a) {
                            operationName = x.operationName;
                            if (!operationName)
                                return [2 /*return*/, false];
                            functionClassification = operationClassificationsObject[operationName];
                            isSdkable = functionClassification === operationClassification;
                            return [2 /*return*/, isSdkable];
                        });
                    }); })
                        .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }));
                    return _a = {}, _a[operationClassification] = sdkFunctions, _a;
                }));
                return [2 /*return*/, sdkFunctionsPerClassification];
        }
    });
}); };
exports.getSdkFunctions = getSdkFunctions;
/**
 * Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised
 */
var newSdkOperation = function (operationName, tsFunctions, config) { return __awaiter(void 0, void 0, void 0, function () {
    var skipYarnInstall, manualProjectRoot, importsString, sdkConstString, sdkTypeString, sdkTypescriptFileString, operationConfig, result;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                importsString = tsFunctions
                    .map(function (fn) { return "import { ".concat(fn.name, " } from \"").concat(fn.operationName, "\";"); })
                    .join("\n");
                sdkConstString = "export const sdk = { ".concat(tsFunctions
                    .map(function (fn) { return "".concat(fn.name); })
                    .join(",\n"), "};");
                sdkTypeString = "export type SdkType = typeof sdk;";
                sdkTypescriptFileString = "".concat(importsString, "\n\n").concat(sdkConstString, "\n\n").concat(sdkTypeString);
                return [4 /*yield*/, (0, getOperationConfig_1.getOperationConfig)(operationName)];
            case 1:
                operationConfig = _b.sent();
                return [4 /*yield*/, (0, new_operation_1.newOperationWithFiles)(operationConfig, (_a = {}, _a["".concat(operationName, ".ts")] = sdkTypescriptFileString, _a), { overwriteIfExists: true, manualProjectRoot: manualProjectRoot, skipYarnInstall: skipYarnInstall })];
            case 2:
                result = _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.newSdkOperation = newSdkOperation;
var newSdkKeysOperation = function (operationName, tsFunctions, config) { return __awaiter(void 0, void 0, void 0, function () {
    var skipYarnInstall, manualProjectRoot, keysConstString, result, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                keysConstString = "export const keys = [ ".concat(tsFunctions
                    .map(function (fn) { return "\"".concat(fn.name); })
                    .join(",\n"), "];");
                _a = new_operation_1.newOperationWithFiles;
                return [4 /*yield*/, (0, getOperationConfig_1.getOperationConfig)(operationName)];
            case 1: return [4 /*yield*/, _a.apply(void 0, [_c.sent(), (_b = {}, _b["".concat(operationName, ".ts")] = keysConstString, _b), { overwriteIfExists: true, manualProjectRoot: manualProjectRoot, skipYarnInstall: skipYarnInstall }])];
            case 2:
                result = _c.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.newSdkKeysOperation = newSdkKeysOperation;
/**
Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system
*/
var generateFunctionSdks = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, functionsPerClassification, sdkFunctions, promises;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                return [4 /*yield*/, (0, exports.getSdkFunctions)({
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 1:
                functionsPerClassification = _a.sent();
                if (!functionsPerClassification)
                    return [2 /*return*/];
                sdkFunctions = functionsPerClassification.node.concat(functionsPerClassification.js);
                promises = [
                    // sdks
                    (0, exports.newSdkOperation)("sdk", sdkFunctions, config),
                    (0, exports.newSdkOperation)("sdk-api", functionsPerClassification.node, config),
                    (0, exports.newSdkOperation)("sdk-js", functionsPerClassification.js, config),
                    // sdk-keys
                    (0, exports.newSdkKeysOperation)("sdk-keys", sdkFunctions, config),
                    (0, exports.newSdkKeysOperation)("sdk-api-keys", functionsPerClassification.node, config),
                    (0, exports.newSdkKeysOperation)("sdk-js-keys", functionsPerClassification.js, config),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.generateFunctionSdks = generateFunctionSdks;
//# sourceMappingURL=generateFunctionSdks.js.map