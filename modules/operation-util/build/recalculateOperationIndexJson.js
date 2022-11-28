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
exports.recalculateOperationIndexJson = void 0;
var log_1 = require("log");
var get_path_1 = require("get-path");
var path_util_1 = require("path-util");
var database_1 = require("database");
var getOperationMetaData_1 = require("./getOperationMetaData");
var getDependenciesSummary_1 = require("./getDependenciesSummary");
var js_util_1 = require("js-util");
/**
 * Recalculates some operation indexable things and updates that into the database
 */
var recalculateOperationIndexJson = function (operationBasePath, manualProjectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var operationMetaData, operation, operationFolderName, operationName, relativeOperationLocationPath, classificationIndexed, _a, coreDependencies, operationDependencies, packageDependencies, categories, sizeIndexed;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, getOperationMetaData_1.getOperationMetaData)(operationBasePath)];
            case 1:
                operationMetaData = _b.sent();
                if (!operationMetaData) {
                    (0, log_1.log)("Operation on ".concat(operationBasePath, " doesn't have a basepath"), {
                        type: "error",
                    });
                    return [2 /*return*/];
                }
                operation = operationMetaData.operation, operationFolderName = operationMetaData.operationFolderName, operationName = operationMetaData.operationName, relativeOperationLocationPath = operationMetaData.relativeOperationLocationPath;
                if (!operation || !operationName || !relativeOperationLocationPath) {
                    (0, log_1.log)("Operation on ".concat(operationBasePath, " doesn't have a name or relativeOperationLocationPath or package.json"), { type: "error" });
                    return [2 /*return*/];
                }
                classificationIndexed = (0, get_path_1.getOperationClassification)(operationBasePath);
                return [4 /*yield*/, (0, getDependenciesSummary_1.getDependenciesSummary)(operationName)];
            case 2:
                _a = _b.sent(), coreDependencies = _a.coreDependencies, operationDependencies = _a.operationDependencies, packageDependencies = _a.packageDependencies;
                return [4 /*yield*/, (0, path_util_1.categorizeFiles)({
                        basePath: operationBasePath,
                        ignoreIndexFiles: true,
                    })];
            case 3:
                categories = _b.sent();
                return [4 /*yield*/, (0, path_util_1.getFolderSummary)(categories)];
            case 4:
                sizeIndexed = _b.sent();
                // console.log("UPDATE QUERY");
                return [4 /*yield*/, database_1.db.update("Operation", function (item) { return item.name === operation.name; }, function (old) {
                        return (0, js_util_1.mergeNestedObject)(old, {
                            operation: {
                                lastRebuildAt: Date.now(),
                                sizeIndexed: sizeIndexed,
                                folderNameIndexed: operationFolderName,
                                relativeOperationLocationPathIndexed: relativeOperationLocationPath,
                                classificationIndexed: classificationIndexed,
                                coreDependenciesIndexed: coreDependencies,
                                operationDependenciesIndexed: operationDependencies,
                                packageDependenciesIndexed: packageDependencies,
                            },
                        });
                    }, { operationName: operation.name })];
            case 5:
                // console.log("UPDATE QUERY");
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.recalculateOperationIndexJson = recalculateOperationIndexJson;
//# sourceMappingURL=recalculateOperationIndexJson.js.map