"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getFolderSummary = exports.sumSizeSummary = exports.getSizeSummary = exports.byteCount = void 0;
var js_util_1 = require("js-util");
var fs_util_1 = require("fs-util");
/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */
function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}
exports.byteCount = byteCount;
/**
 * gets a size summary for a file path
 *
 * Does not calculate this for files that are too big (bigger than 1MB)
 */
var getSizeSummary = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var stat, bytes, characters, bytesPerCharacter, lines, charactersPerLine, numberOfFiles, linesPerFile, content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_util_1.fs.stat(filePath)];
            case 1:
                stat = _a.sent();
                bytes = stat.size;
                characters = bytes;
                bytesPerCharacter = bytes / characters;
                lines = 1;
                charactersPerLine = characters / lines;
                numberOfFiles = 1;
                linesPerFile = lines;
                if (bytes > 1024 * 1024) {
                    // NB: too big to watch content
                    return [2 /*return*/, {
                            bytes: bytes,
                            lines: 0,
                            characters: characters,
                            bytesPerCharacter: bytesPerCharacter,
                            charactersPerLine: charactersPerLine,
                            linesPerFile: linesPerFile,
                            numberOfFiles: numberOfFiles,
                        }];
                }
                return [4 /*yield*/, fs_util_1.fs.readFile(filePath, "utf8")];
            case 2:
                content = _a.sent();
                lines = content.split("\n").length;
                linesPerFile = lines;
                return [2 /*return*/, {
                        bytes: bytes,
                        lines: lines,
                        characters: characters,
                        bytesPerCharacter: bytesPerCharacter,
                        charactersPerLine: charactersPerLine,
                        linesPerFile: linesPerFile,
                        numberOfFiles: numberOfFiles,
                    }];
        }
    });
}); };
exports.getSizeSummary = getSizeSummary;
var sumSizeSummary = function (filePaths) { return __awaiter(void 0, void 0, void 0, function () {
    var sizeSummaries, summed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(filePaths.map(exports.getSizeSummary))];
            case 1:
                sizeSummaries = _a.sent();
                summed = (0, js_util_1.sumAllKeys)(sizeSummaries, [
                    "numberOfFiles",
                    "lines",
                    "characters",
                    "bytes",
                ]);
                return [2 /*return*/, summed];
        }
    });
}); };
exports.sumSizeSummary = sumSizeSummary;
/**
 * calculates folder summary from a categorized file paths object
 */
var getFolderSummary = function (categorizedFiles) { return __awaiter(void 0, void 0, void 0, function () {
    var categoriesSummary, folderSummary;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = {};
                return [4 /*yield*/, (0, exports.sumSizeSummary)(categorizedFiles.code)];
            case 1:
                _a.codeSize = _b.sent();
                return [4 /*yield*/, (0, exports.sumSizeSummary)(categorizedFiles.data)];
            case 2:
                _a.dataSize = _b.sent();
                return [4 /*yield*/, (0, exports.sumSizeSummary)(categorizedFiles.text)];
            case 3:
                categoriesSummary = (_a.textSize = _b.sent(),
                    _a);
                folderSummary = __assign(__assign({}, categoriesSummary), { size: (0, js_util_1.sumAllKeys)(Object.values(categoriesSummary), [
                        "bytes",
                        "characters",
                        "lines",
                        "numberOfFiles",
                    ]) });
                return [2 /*return*/, folderSummary];
        }
    });
}); };
exports.getFolderSummary = getFolderSummary;
//# sourceMappingURL=getFolderSummary.js.map