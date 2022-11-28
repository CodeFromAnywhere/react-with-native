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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameAll = void 0;
var fs_util_1 = require("fs-util");
var path_1 = __importDefault(require("path"));
var forAllFiles_1 = require("./forAllFiles");
var log_1 = require("log");
/** renames all files to a new name (optionally a func, based on the old path) */
var renameAll = function (_a) {
    var filePaths = _a.filePaths, newFileName = _a.newFileName, newFilePath = _a.newFilePath;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, (0, forAllFiles_1.forAllFiles)({
                    filePaths: filePaths,
                    callback: function (filePath) {
                        return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                            var newPath;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!fs_util_1.fs.existsSync(filePath)) return [3 /*break*/, 2];
                                        newPath = newFileName
                                            ? path_1.default.join((0, fs_util_1.getFolder)(filePath), newFileName)
                                            : newFilePath === null || newFilePath === void 0 ? void 0 : newFilePath(filePath);
                                        if (!newPath) {
                                            return [2 /*return*/, (0, log_1.log)("couldn't determine new path", { type: "error" })];
                                        }
                                        console.log("renamed ".concat(filePath, " to ").concat(newPath));
                                        return [4 /*yield*/, fs_util_1.fs.rename(filePath, newPath)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    },
                })];
        });
    });
};
exports.renameAll = renameAll;
//# sourceMappingURL=renameAll.js.map