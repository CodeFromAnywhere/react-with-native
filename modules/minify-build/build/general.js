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
exports.minifyBuild = void 0;
var get_path_1 = require("get-path");
var log_1 = require("log");
var fs_util_1 = require("fs-util");
var k_explore_1 = require("k-explore");
var terser_1 = require("terser");
/**
 * takes an operation name or build folder path, then explores all ts files in src folder, finds the matching js file in the build folder, and executes terser from dependency, not from cli
 */
var minifyBuild = function (_a) {
    var operationName = _a.operationName, buildFolderPath = _a.buildFolderPath;
    return __awaiter(void 0, void 0, void 0, function () {
        var operationFolderPath, srcFolderPath, tsFilesExploreResult, absoluteJsPaths, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!operationName) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationName)];
                case 1:
                    operationFolderPath = _b.sent();
                    if (!operationFolderPath) {
                        (0, log_1.log)("Can't find that operation", { type: "error" });
                        return [2 /*return*/];
                    }
                    buildFolderPath = fs_util_1.path.join(operationFolderPath, "build");
                    _b.label = 2;
                case 2:
                    if (!buildFolderPath) {
                        (0, log_1.log)("minifyBuild: Please provide an existing operationName or a buildFolderPath", { type: "error" });
                        return [2 /*return*/];
                    }
                    srcFolderPath = fs_util_1.path.join(buildFolderPath, "..", "src");
                    if (!fs_util_1.fs.existsSync(srcFolderPath)) {
                        (0, log_1.log)("minifyBuild: ".concat(srcFolderPath, " not found, we can't minify"), {
                            type: "error",
                        });
                        return [2 /*return*/];
                    }
                    if (!fs_util_1.fs.existsSync(buildFolderPath)) {
                        (0, log_1.log)("minifyBuild: ".concat(buildFolderPath, " does not exist"), { type: "error" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, k_explore_1.explore)({
                            basePath: srcFolderPath,
                            extension: ["ts", "tsx"],
                        })];
                case 3:
                    tsFilesExploreResult = _b.sent();
                    absoluteJsPaths = tsFilesExploreResult
                        .map(function (x) {
                        // get relative file path without extension
                        var parsedPath = fs_util_1.path.parse(x.path);
                        var pathWithoutExtension = fs_util_1.path.join(parsedPath.dir, parsedPath.name);
                        var relativeFileId = (0, get_path_1.makeRelative)(pathWithoutExtension, srcFolderPath);
                        return relativeFileId;
                    })
                        .map(function (relativeFilePath) {
                        // use that to get js file in the build folder
                        var jsFilePath = fs_util_1.path.join(
                        // NB: it's strange that it thinks that buildFolderPath can still be undefined here.
                        buildFolderPath, relativeFilePath.concat(".js"));
                        return jsFilePath;
                    });
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, Promise.all(absoluteJsPaths.map(function (jsFilePath) { return __awaiter(void 0, void 0, void 0, function () {
                            var fileName, fileContent, output, e_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fileName = fs_util_1.path.parse(jsFilePath).base;
                                        return [4 /*yield*/, fs_util_1.fs.readFile(jsFilePath, { encoding: "utf8" })];
                                    case 1:
                                        fileContent = _a.sent();
                                        if (!fileContent || fileContent.length === 0) {
                                            (0, log_1.log)("Empty file found at ".concat(jsFilePath), { type: "error" });
                                            return [2 /*return*/];
                                        }
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 7, , 8]);
                                        return [4 /*yield*/, (0, terser_1.minify)(fileContent, {
                                                mangle: true,
                                                compress: true,
                                                format: { comments: "all" },
                                            })];
                                    case 3:
                                        output = _a.sent();
                                        if (!!output.code) return [3 /*break*/, 4];
                                        (0, log_1.log)("No code generated for ".concat(jsFilePath), { type: "error" });
                                        return [2 /*return*/];
                                    case 4: return [4 /*yield*/, fs_util_1.fs.writeFile(jsFilePath, output.code, {
                                            encoding: "utf8",
                                        })];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: 
                                    // log("Written dist file", { type: "success" });
                                    return [2 /*return*/, true];
                                    case 7:
                                        e_2 = _a.sent();
                                        console.log("minify failed: catched: ", e_2);
                                        return [2 /*return*/, false];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 5:
                    _b.sent();
                    return [2 /*return*/, true];
                case 6:
                    e_1 = _b.sent();
                    (0, log_1.log)("something went wrong with minification: ".concat(e_1), { type: "error" });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
};
exports.minifyBuild = minifyBuild;
//# sourceMappingURL=general.js.map