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
exports.generateIndex = exports.isTestFn = void 0;
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var convert_case_1 = require("convert-case");
// import { TsFunction } from "code-types";
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var isTestFn = function (x) {
    var nameEndsWithTest = (0, convert_case_1.lowerCaseArray)(x.name).pop() === "test";
    var typeIsFn = x.type === "function";
    return typeIsFn && nameEndsWithTest;
};
exports.isTestFn = isTestFn;
/**
 * generates index for some exports and writes it to an outputPath
 */
var generateIndex = function (_a) {
    var importStatements = _a.importStatements, outputPath = _a.outputPath, operationBasePath = _a.operationBasePath, operationName = _a.operationName, files = _a.files;
    return __awaiter(void 0, void 0, void 0, function () {
        var srcRelativeFileIds, indexationString_1, testStatements, otherStatements, importStatementsString, exportTestString, exportStatementsString, indexationString;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!files) return [3 /*break*/, 2];
                    srcRelativeFileIds = files === null || files === void 0 ? void 0 : files.map(function (fullPath) {
                        return (0, get_path_1.getSrcRelativeFileId)(fullPath.substring(operationBasePath.length), operationBasePath);
                    });
                    indexationString_1 = srcRelativeFileIds
                        .filter(function (id) { return !["cli", "test"].includes(id.split(".").pop()); })
                        .filter(function (id) { return id !== "index"; })
                        .map(function (id) { return "export * from \"./".concat(id, "\";"); })
                        .join("\n");
                    return [4 /*yield*/, fs_util_1.fs.writeFile(outputPath, indexationString_1, { encoding: "utf8" })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
                case 2:
                    testStatements = importStatements.filter(function (x) { return (0, exports.isTestFn)(x); });
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
                case 3:
                    _b.sent();
                    (0, log_1.log)("Created index for ".concat(operationName), { type: "debug" });
                    return [2 /*return*/];
            }
        });
    });
};
exports.generateIndex = generateIndex;
//# sourceMappingURL=generateIndex.js.map