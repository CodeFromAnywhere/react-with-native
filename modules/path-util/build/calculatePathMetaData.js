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
exports.calculatePathMetaData = exports.getPathMainComment = void 0;
var markdown_parse_js_1 = require("markdown-parse-js");
var fs_util_1 = require("fs-util");
var index_typescript_1 = require("index-typescript");
var get_path_1 = require("get-path");
var k_explore_1 = require("k-explore");
var categorizeFiles_1 = require("./categorizeFiles");
var getFolderSummary_1 = require("./getFolderSummary");
/**
export const sumFolderSummary = (
  firstFolderSummary: FolderSummary,
  secondFolderSummary: FolderSummary
): FolderSummary => {
  const folderSummaryKeys = Object.keys(
    firstFolderSummary
  ) as (keyof FolderSummary)[];
  const sum = mergeObjectsArray(
    folderSummaryKeys.map((keyName) => {
      return {
        [keyName]: sumAllKeys([
          firstFolderSummary[keyName],
          secondFolderSummary[keyName],
        ],["bytes","characters","lines","numberOfFiles"]),
      };
    })
  ) as FolderSummary;

  return sum;
};


takes all PathMetaData of an array that contains all child files, and merges them, taking the newest update date, the earliest created-date, and summing size

export const sumFileGeneralMetaData = async (
  childrenMetaDataArray: PathGeneralMetaData[]
): Promise<PathGeneralMetaData | null> => {
  const sum = childrenMetaDataArray.reduce(
    (sumMetaData, pathMetaData: PathGeneralMetaData) => {
      const newPathMetaData: PathGeneralMetaData = {
        createdAt:
          !sumMetaData || pathMetaData.createdAt < sumMetaData.createdAt
            ? pathMetaData.createdAt
            : sumMetaData.createdAt,
        updatedAt:
          !sumMetaData || pathMetaData.updatedAt > sumMetaData.updatedAt
            ? pathMetaData.updatedAt
            : sumMetaData.updatedAt,
        sizes: !sumMetaData
          ? pathMetaData.sizes
          : sumFolderSummary(sumMetaData.sizes, pathMetaData.sizes),
      };

      return newPathMetaData;
    },
    null as PathGeneralMetaData | null
  );

  return sum;
};
*/
var getPathMainComment = function (absolutePath) { return __awaiter(void 0, void 0, void 0, function () {
    var indexId, folderPath, folderFiles, foundReadmePath, readmeExists, markdown, _a, _b, comment, parameters, types, mainComment;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, index_typescript_1.getIndexId)(absolutePath, (0, fs_util_1.getLastFolder)(absolutePath))];
            case 1:
                indexId = _c.sent();
                if (!indexId)
                    return [2 /*return*/];
                folderPath = (0, fs_util_1.getFolder)(absolutePath);
                return [4 /*yield*/, fs_util_1.fs.readdir(folderPath, "utf8")];
            case 2:
                folderFiles = _c.sent();
                foundReadmePath = folderFiles.find(function (x) { return fs_util_1.path.parse(x).name.toLowerCase() === "readme"; });
                readmeExists = !!foundReadmePath;
                if (!readmeExists) return [3 /*break*/, 4];
                return [4 /*yield*/, fs_util_1.fs.readFile(foundReadmePath, "utf8")];
            case 3:
                _a = _c.sent();
                return [3 /*break*/, 5];
            case 4:
                _a = "";
                _c.label = 5;
            case 5:
                markdown = _a;
                _b = (0, markdown_parse_js_1.parseFrontmatterMarkdownString)(markdown), comment = _b.raw, parameters = _b.parameters;
                types = (0, index_typescript_1.findCommentTypes)(comment);
                mainComment = __assign(__assign({ rawStatement: undefined, statementName: undefined }, indexId), { comment: comment, parameters: parameters, types: types, firstLine: 0, lastLine: (0, index_typescript_1.getNumberOfLines)(markdown) });
                return [2 /*return*/, mainComment];
        }
    });
}); };
exports.getPathMainComment = getPathMainComment;
/**
 * for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
 * for files: just calculates the path metadata
 */
var calculatePathMetaData = function (absolutePath) { return __awaiter(void 0, void 0, void 0, function () {
    var exists, pathParse, stats, isFolder, fullFileName, fileType, categorizedFiles, _a, folderSummary, mainComment, pathMetaData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                exists = fs_util_1.fs.existsSync(absolutePath);
                if (!exists)
                    return [2 /*return*/];
                pathParse = (0, get_path_1.getPathParse)(absolutePath);
                if (!pathParse)
                    return [2 /*return*/];
                return [4 /*yield*/, fs_util_1.fs.stat(absolutePath)];
            case 1:
                stats = _b.sent();
                isFolder = stats.isDirectory();
                fullFileName = isFolder ? undefined : fs_util_1.path.parse(absolutePath).base;
                fileType = isFolder ? null : (0, k_explore_1.determineFileType)(absolutePath);
                if (!isFolder) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, categorizeFiles_1.categorizeFiles)({ basePath: absolutePath })];
            case 2:
                _a = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                _a = {
                    code: fileType === "code" ? [absolutePath] : [],
                    data: fileType === "data" ? [absolutePath] : [],
                    text: fileType === "text" ? [absolutePath] : [],
                };
                _b.label = 4;
            case 4:
                categorizedFiles = _a;
                return [4 /*yield*/, (0, getFolderSummary_1.getFolderSummary)(categorizedFiles)];
            case 5:
                folderSummary = _b.sent();
                return [4 /*yield*/, (0, exports.getPathMainComment)(absolutePath)];
            case 6:
                mainComment = _b.sent();
                pathMetaData = __assign(__assign({ mainComment: mainComment, fullFileName: fullFileName, createdAt: stats.ctimeMs, updatedAt: stats.mtimeMs }, pathParse), { sizes: folderSummary });
                return [2 /*return*/, pathMetaData];
        }
    });
}); };
exports.calculatePathMetaData = calculatePathMetaData;
//# sourceMappingURL=calculatePathMetaData.js.map