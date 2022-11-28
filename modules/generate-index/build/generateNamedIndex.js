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
exports.generateNamedIndex = void 0;
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var convert_case_1 = require("convert-case");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var database_1 = require("database");
var util_1 = require("./util");
/**
 * Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.
 
NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

 */
var generateNamedIndex = function (_a) {
    var operationName = _a.operationName, manualProjectRoot = _a.manualProjectRoot;
    return __awaiter(void 0, void 0, void 0, function () {
        var operationBasePath, outputPath, functionArray, variableArray, interfacesArray, importStatements, testStatements, otherStatements, importStatementsString, exportTestString, exportStatementsString, indexationString;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!operationName) {
                        (0, log_1.log)("No operation name, can't create index", { type: "error" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationName, {
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 1:
                    operationBasePath = _b.sent();
                    if (!operationBasePath) {
                        (0, log_1.log)("operationPath not found ".concat(operationName), { type: "error" });
                        return [2 /*return*/];
                    }
                    outputPath = fs_util_1.path.join(operationBasePath, "src", "index.ts");
                    return [4 /*yield*/, database_1.db.get("TsFunction", {
                            operationName: operationName,
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 2:
                    functionArray = (_b.sent())
                        .filter(function (x) {
                        return x.isExported && x.operationRelativeTypescriptFilePath !== "src/index.ts";
                    })
                        .map(function (item) { return (0, util_1.mapToImportStatement)(item, "function"); });
                    return [4 /*yield*/, database_1.db.get("TsVariable", {
                            operationName: operationName,
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 3:
                    variableArray = (_b.sent())
                        .filter(function (x) {
                        return x.isExported && x.operationRelativeTypescriptFilePath !== "src/index.ts";
                    })
                        .map(function (item) { return (0, util_1.mapToImportStatement)(item, "variable"); });
                    return [4 /*yield*/, database_1.db.get("TsInterface", {
                            operationName: operationName,
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 4:
                    interfacesArray = (_b.sent())
                        .filter(function (x) {
                        return x.isExported && x.operationRelativeTypescriptFilePath !== "src/index.ts";
                    })
                        .map(function (item) { return (0, util_1.mapToImportStatement)(item, "interface"); });
                    importStatements = __spreadArray(__spreadArray(__spreadArray([], interfacesArray, true), functionArray, true), variableArray, true);
                    testStatements = importStatements.filter(function (x) { return (0, util_1.isTestFn)(x); });
                    otherStatements = importStatements.filter(function (x) { return (0, convert_case_1.lowerCaseArray)(x.name).pop() !== "test"; });
                    importStatementsString = importStatements
                        // import all values (mostly functions, some consts)
                        .map(function (statement) {
                        return "import { ".concat(statement.name, " } from \"./").concat(statement.srcRelativeFileId, "\";");
                    })
                        .filter(js_util_1.notEmpty)
                        .join("\n")
                        .concat("\n");
                    exportTestString = testStatements.length > 0
                        ? "export const test = [".concat(testStatements
                            .map(function (exp) { return exp.name; })
                            .join(", "), "].flat();\n")
                        : "";
                    exportStatementsString = otherStatements.length > 0
                        ? "export { ".concat(otherStatements.map(function (x) { return x.name; }).join(", "), " };\n")
                        : "";
                    indexationString = "// THIS FILE HAS BEEN GENERATED\n"
                        .concat("\n")
                        // all imports
                        .concat(importStatementsString)
                        .concat("\n\n")
                        // all exports
                        .concat(exportTestString)
                        .concat(exportStatementsString)
                        .concat("\n")
                        .concat("// THANK YOU\n");
                    return [4 /*yield*/, fs_util_1.fs.writeFile(outputPath, indexationString, { encoding: "utf8" })];
                case 5:
                    _b.sent();
                    (0, log_1.log)("Created index for ".concat(operationName), { type: "debug" });
                    return [2 /*return*/];
            }
        });
    });
};
exports.generateNamedIndex = generateNamedIndex;
//# sourceMappingURL=generateNamedIndex.js.map