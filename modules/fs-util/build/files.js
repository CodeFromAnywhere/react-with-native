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
exports.writeStringToFile = exports.writeJsonToFile = exports.canExecuteSync = exports.canWriteSync = exports.canReadSync = exports.canSeeSync = exports.canExecute = exports.canWrite = exports.canRead = exports.canSee = exports.canAccessSync = exports.canAccess = exports.writeToFiles = void 0;
var log_1 = require("log");
var fs_1 = require("./fs");
var js_1 = require("./js");
/**
 * writes all values in an object to the file that should be specified as key of that value
 */
var writeToFiles = function (fileObject) { return __awaiter(void 0, void 0, void 0, function () {
    var s, e, writePromises;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                s = 0;
                e = 0;
                writePromises = Object.keys(fileObject).map(function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
                    var value, success;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                value = fileObject[filePath];
                                return [4 /*yield*/, (0, exports.writeJsonToFile)(filePath, value)];
                            case 1:
                                success = _a.sent();
                                if (success)
                                    s++;
                                if (!success)
                                    e++;
                                return [2 /*return*/, success];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(writePromises)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.writeToFiles = writeToFiles;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
var canAccess = function (p, mode) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fs_1.fs.access(p, mode)];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.canAccess = canAccess;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
var canAccessSync = function (p, mode) {
    try {
        fs_1.fs.accessSync(p, mode);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.canAccessSync = canAccessSync;
/**
 * File is visible to the calling process
 */
var canSee = function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, exports.canAccess)(p, fs_1.fs.constants.F_OK)];
}); }); };
exports.canSee = canSee;
/**
 * File is readable to the calling process
 */
var canRead = function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, exports.canAccess)(p, fs_1.fs.constants.R_OK)];
}); }); };
exports.canRead = canRead;
/**
 * File is writable to the calling process
 */
var canWrite = function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, exports.canAccess)(p, fs_1.fs.constants.W_OK)];
}); }); };
exports.canWrite = canWrite;
/**
 * File is executable to the calling process
 */
var canExecute = function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, exports.canAccess)(p, fs_1.fs.constants.X_OK)];
}); }); };
exports.canExecute = canExecute;
/**
 * File is visible to the calling process
 */
var canSeeSync = function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, exports.canAccessSync)(p, fs_1.fs.constants.F_OK)];
}); }); };
exports.canSeeSync = canSeeSync;
/**
 * File is readable to the calling process
 */
var canReadSync = function (p) { return (0, exports.canAccessSync)(p, fs_1.fs.constants.R_OK); };
exports.canReadSync = canReadSync;
/**
 * File is writable to the calling process
 */
var canWriteSync = function (p) {
    return (0, exports.canAccessSync)(p, fs_1.fs.constants.W_OK);
};
exports.canWriteSync = canWriteSync;
/**
 * File is executable to the calling process
 */
var canExecuteSync = function (p) {
    return (0, exports.canAccessSync)(p, fs_1.fs.constants.X_OK);
};
exports.canExecuteSync = canExecuteSync;
/**
 * write json to a file
 *
 * makes the dir and file if they don't exist
 */
var writeJsonToFile = function (p, data) { return __awaiter(void 0, void 0, void 0, function () {
    var stringifiedData, folderToBe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!data) {
                    console.log({ p: p, data: data });
                    return [2 /*return*/, false];
                }
                stringifiedData = JSON.stringify(data, null, 2);
                folderToBe = (0, js_1.getFolder)(p);
                if (!!fs_1.fs.existsSync(folderToBe)) return [3 /*break*/, 2];
                //first, make sure the folder exists
                return [4 /*yield*/, fs_1.fs.mkdir(folderToBe, { recursive: true })];
            case 1:
                //first, make sure the folder exists
                _a.sent();
                _a.label = 2;
            case 2: 
            //then write it
            return [4 /*yield*/, fs_1.fs.writeFile(p, stringifiedData, "utf8")];
            case 3:
                //then write it
                _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
exports.writeJsonToFile = writeJsonToFile;
/**
 * write string to a file
 *
 * makes the dir and file if they don't exist
 */
var writeStringToFile = function (p, data) { return __awaiter(void 0, void 0, void 0, function () {
    var folderToBe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (data === undefined || data === null || typeof data !== "string") {
                    (0, log_1.log)("Incorrect data provided", data);
                    return [2 /*return*/, false];
                }
                folderToBe = (0, js_1.getFolder)(p);
                if (!!fs_1.fs.existsSync(folderToBe)) return [3 /*break*/, 2];
                //first, make sure the folder exists
                return [4 /*yield*/, fs_1.fs.mkdir(folderToBe, { recursive: true })];
            case 1:
                //first, make sure the folder exists
                _a.sent();
                _a.label = 2;
            case 2: 
            //then write it
            return [4 /*yield*/, fs_1.fs.writeFile(p, data, "utf8")];
            case 3:
                //then write it
                _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
exports.writeStringToFile = writeStringToFile;
//# sourceMappingURL=files.js.map