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
exports.dbSdkWriteToFile = void 0;
var general_1 = require("../general");
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var log_1 = require("log");
/**
 * generates dbSdk.ts script
 */
var dbSdkWriteToFile = function (_a) {
    var exportArray = _a.exportArray, outputPath = _a.outputPath, operationName = _a.operationName, exportSeparate = _a.exportSeparate, allDbModels = _a.allDbModels;
    return __awaiter(void 0, void 0, void 0, function () {
        var uniqueExportArray, typeIndexExports, typeImportsString, exportDbTypesString, exportDbKeysString, exportDbModelEnumString, exportDefaultDbStorageMethodsString, exportTypesString, indexationString;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    uniqueExportArray = exportArray.map(function (value, index, self) {
                        return (0, general_1.renameExportUnique)({
                            value: value,
                            index: index,
                            self: self,
                            isSdk: true,
                        });
                    });
                    typeIndexExports = uniqueExportArray
                        .filter(function (x) { return x.type === "type"; })
                        // generics cannot be applied in db
                        .filter(function (x) { return !x.hasGeneric; });
                    if (typeIndexExports.length === 0) {
                        (0, log_1.log)("Both type imports are nonexistent... error", {
                            type: "error",
                        });
                        return [2 /*return*/];
                    }
                    typeImportsString = typeIndexExports
                        .map(function (exp) {
                        var details = (0, general_1.getExportDetails)(exp, operationName);
                        if (!details)
                            return;
                        var nameOrAlias = details.nameOrAlias, fileOrOperation = details.fileOrOperation;
                        return "import type { ".concat(nameOrAlias, " } from \"").concat(fileOrOperation, "\";");
                    })
                        .filter(js_util_1.notEmpty)
                        .join("\n")
                        .concat("\n");
                    exportDbTypesString = "export type DbModels = { ".concat(typeIndexExports
                        .map(function (x) { return "".concat(x.alias || x.name, ": ").concat(x.alias || x.name); })
                        .join(","), " };\n");
                    exportDbKeysString = "export const dbModelKeys = [ ".concat(typeIndexExports
                        .map(function (x) { return "\"".concat(x.alias || x.name, "\""); })
                        .join(","), " ] as const;\n");
                    exportDbModelEnumString = "export type DbModelEnum = typeof dbModelKeys[number];\n";
                    exportDefaultDbStorageMethodsString = "export const defaultDbStorageMethods = {\n    ".concat(allDbModels === null || allDbModels === void 0 ? void 0 : allDbModels.map(function (model) {
                        if (!model.defaultDbStorageMethod)
                            return;
                        return "".concat(model.name, ": \"").concat(model.defaultDbStorageMethod, "\"");
                    }).filter(js_util_1.notEmpty).join(",\n"), "\n  };");
                    exportTypesString = typeIndexExports.length > 0 && exportSeparate
                        ? "export { ".concat(typeIndexExports
                            .map(function (x) { return "".concat(x.alias || x.name); })
                            .join(","), " };\n")
                        : "";
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
                        .concat(exportTypesString)
                        .concat("\n")
                        .concat("// THANK YOU\n");
                    return [4 /*yield*/, fs_util_1.fs.writeFile(outputPath, indexationString, { encoding: "utf8" })];
                case 1:
                    _b.sent();
                    (0, log_1.log)("Created db-index for ".concat(operationName), { type: "success" });
                    return [2 /*return*/];
            }
        });
    });
};
exports.dbSdkWriteToFile = dbSdkWriteToFile;
//# sourceMappingURL=dbSdkWriteToFile.js.map