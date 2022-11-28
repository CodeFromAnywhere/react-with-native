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
exports.sdkWriteToFile = exports.onlyNodeAndJsOperations = exports.noSpecialExports = exports.exportHasNoSdkDependants = exports.getSdkOutputPath = void 0;
var db_1 = require("db");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var log_1 = require("log");
var one_by_one_1 = require("one-by-one");
var generateIndex_1 = require("../generateIndex");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var getSdkOutputPath = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var saveInAssets, manualProjectRoot, sdkOperationPath, outputPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                saveInAssets = config === null || config === void 0 ? void 0 : config.saveInAssets;
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                return [4 /*yield*/, (0, get_path_1.getOperationPath)("sdk", { manualProjectRoot: manualProjectRoot })];
            case 1:
                sdkOperationPath = _a.sent();
                outputPath = saveInAssets
                    ? fs_util_1.path.join(__dirname, "..", "assets", "sdk.ts")
                    : sdkOperationPath && fs_util_1.path.join(sdkOperationPath, "src", "sdk.ts");
                return [2 /*return*/, outputPath];
        }
    });
}); };
exports.getSdkOutputPath = getSdkOutputPath;
/**
 * don't add the exports from the sdk and packages dependent on sdk, because that would create circular dependencies
 *
 * also, sdk-ui seems to give some strange warning (SyntaxError: Cannot use import statement outside a module)... maybe because it points directly to the typescript instead of the build? for now we can hardcode remove it, but it's best to check the package.json: does main lead to src or build? ts or js? */
var exportHasNoSdkDependants = function (x, sdkDependants) {
    return x.operationName ? !sdkDependants.includes(x.operationName) : true;
};
exports.exportHasNoSdkDependants = exportHasNoSdkDependants;
/**
 * 1) don't do default exports, because they are discouraged and should also be named
 * 2) don't do sdk exports because they are a special type that is generated here
 */
var noSpecialExports = function (x) {
    return !["default", "sdk"].includes(x.name);
};
exports.noSpecialExports = noSpecialExports;
/**
 * es-6 ui cannot be in the sdk because it leads directly to typescript files, untranspiled, unbuilt. We can't have that.
 */
var onlyNodeAndJsOperations = function (x, operationClassification) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!x.operationName)
            return [2 /*return*/, false];
        return [2 /*return*/, operationClassification === "js" || operationClassification === "node"];
    });
}); };
exports.onlyNodeAndJsOperations = onlyNodeAndJsOperations;
/**
 * generates sdk for all operations
 *
 * TODO: this should be ran every time a file is saved, but it should be fast enough for that..
 *
 * TODO: BUG: sdk-endpoints zat in sdk weer en ook de ding dependent daarop... hoezo?
 *
remove react stuff

Make this function in a way that it doesn't block anything. It could remove the old sdks after the new ones are created (in different folder name). This way the sdk generation script can run automatically in the background, so you don't need to think about it. Ensure that it doesn't have duplicate names though when installing! `package.json` should be template until finish

Also think about how the performance of this can be improved. There are probably many ways.
 */
var sdkWriteToFile = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, projectRoot, outputPath, sdkDependants, allIndexExportsPromises, allIndexExports, filteredIndexExports, allResolvableExports, allFunctionIndexes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, exports.getSdkOutputPath)(config)];
            case 1:
                outputPath = _a.sent();
                if (!outputPath) {
                    return [2 /*return*/, (0, log_1.log)("Outputpath not found", { type: "error" })];
                }
                return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependantsRecursively)("sdk")];
            case 2:
                sdkDependants = _a.sent();
                return [4 /*yield*/, db_1.db.get("TsExport", {
                        operationIndexFiles: "index.json",
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 3:
                allIndexExportsPromises = (_a.sent()).map(function (tsExport) { return __awaiter(void 0, void 0, void 0, function () {
                    var operationBasePath, operationClassification;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!tsExport.operationName)
                                    return [2 /*return*/];
                                return [4 /*yield*/, (0, get_path_1.getOperationPath)(tsExport.operationName, {
                                        manualProjectRoot: projectRoot,
                                    })];
                            case 1:
                                operationBasePath = _a.sent();
                                if (!operationBasePath)
                                    return [2 /*return*/];
                                operationClassification = (0, get_path_1.getOperationClassification)(operationBasePath);
                                if (!operationClassification)
                                    return [2 /*return*/];
                                return [2 /*return*/, { tsExport: tsExport, operationClassification: operationClassification }];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(allIndexExportsPromises)];
            case 4:
                allIndexExports = (_a.sent()).filter(js_util_1.notEmpty);
                filteredIndexExports = allIndexExports
                    .filter(function (_a) {
                    var tsExport = _a.tsExport, operationClassification = _a.operationClassification;
                    return (0, exports.onlyNodeAndJsOperations)(tsExport, operationClassification);
                })
                    .map(function (x) { return x.tsExport; })
                    .filter(exports.noSpecialExports)
                    .filter(function (x) { return (0, exports.exportHasNoSdkDependants)(x, sdkDependants); });
                return [4 /*yield*/, (0, one_by_one_1.oneByOne)(filteredIndexExports, function (x) { return __awaiter(void 0, void 0, void 0, function () {
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
            case 5:
                allResolvableExports = (_a.sent()).filter(js_util_1.notEmpty);
                return [4 /*yield*/, db_1.db.get("TsFunction", { manualProjectRoot: manualProjectRoot })];
            case 6:
                allFunctionIndexes = _a.sent();
                console.log({
                    allResolvableExports: allResolvableExports.length,
                    allIndexExports: allIndexExports.length,
                });
                return [4 /*yield*/, (0, generateIndex_1.generateIndex)({
                        exportArray: allResolvableExports,
                        functionArray: allFunctionIndexes,
                        operationName: "sdk",
                        isSdk: true,
                        outputPath: outputPath,
                        exportGroupedTypes: true,
                        exportGroupedTypesName: "Sdk",
                        exportSdk: true,
                        exportSeparate: false,
                    })];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.sdkWriteToFile = sdkWriteToFile;
//# sourceMappingURL=sdkWriteToFile.js.map