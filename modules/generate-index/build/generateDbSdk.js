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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDbSdk = void 0;
var db_1 = require("db");
var js_util_1 = require("js-util");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var new_operation_1 = require("new-operation");
var getOperationConfig_1 = require("./getOperationConfig");
var generateDbSdk = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var dependants, manualProjectRoot, skipYarnInstall, allDbModels, typeImportsString, exportDbTypesString, exportDbKeysString, exportDbModelEnumString, exportDefaultDbStorageMethodsString, indexationString, operationConfig;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependantsRecursively)("sdk-db")];
            case 1:
                dependants = _a.sent();
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                return [4 /*yield*/, (0, db_1.get)("TsInterface", { manualProjectRoot: manualProjectRoot })];
            case 2:
                allDbModels = (_a.sent())
                    .filter(function (x) { return x.isDbModel && x.isExported && !x.hasGeneric; })
                    .filter(function (x) { return x.operationName && !dependants.includes(x.operationName); })
                    .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }));
                typeImportsString = allDbModels
                    .map(function (tsInterface) {
                    return "import type { ".concat(tsInterface.name, " } from \"").concat(tsInterface.operationName, "\";");
                })
                    .filter(js_util_1.notEmpty)
                    .join("\n")
                    .concat("\n");
                exportDbTypesString = "export type DbModels = { ".concat(allDbModels
                    .map(function (x) { return "".concat(x.name, ": ").concat(x.name); })
                    .join(","), " };\n");
                exportDbKeysString = "export const dbModelKeys = [ ".concat(allDbModels
                    .map(function (x) { return "\"".concat(x.name, "\""); })
                    .join(","), " ] as const;\n");
                exportDbModelEnumString = "export type DbModelEnum = typeof dbModelKeys[number];\n";
                exportDefaultDbStorageMethodsString = "export const defaultDbStorageMethods = {\n    ".concat(allDbModels === null || allDbModels === void 0 ? void 0 : allDbModels.map(function (model) {
                    if (!model.defaultDbStorageMethod)
                        return;
                    return "".concat(model.name, ": \"").concat(model.defaultDbStorageMethod, "\"");
                }).filter(js_util_1.notEmpty).join(",\n"), "\n  };");
                indexationString = "// THIS FILE HAS BEEN GENERATED\n"
                    .concat("\n")
                    // all imports
                    .concat(typeImportsString)
                    .concat("\n\n")
                    // all exports
                    .concat(exportDbTypesString)
                    .concat(exportDbKeysString)
                    .concat(exportDbModelEnumString)
                    .concat(exportDefaultDbStorageMethodsString)
                    .concat("\n")
                    .concat("// THANK YOU\n");
                return [4 /*yield*/, (0, getOperationConfig_1.getOperationConfig)("sdk-db", "This is the operation where all Db models are comprised")];
            case 3:
                operationConfig = _a.sent();
                return [4 /*yield*/, (0, new_operation_1.newOperationWithFiles)(operationConfig, { "sdk-db.ts": indexationString }, { overwriteIfExists: true, skipYarnInstall: skipYarnInstall })];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.generateDbSdk = generateDbSdk;
//# sourceMappingURL=generateDbSdk.js.map