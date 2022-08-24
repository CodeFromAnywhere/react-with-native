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
exports.getBundleQueryPaths = exports.getRealPathFromQueryPath = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var k_explore_1 = require("k-explore");
var getRealPathFromQueryPath = function (queryPath, config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, isSensible, readmePath, readmePath, docsReadmePath, realPath, realPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                isSensible = (0, get_path_1.isSensibleProject)(projectRoot);
                if (!(!isSensible && queryPath === "")) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, fs_util_1.findFileNameCaseInsensitive)(fs_util_1.path.join(projectRoot, "text"), "README.md")];
            case 1:
                readmePath = _a.sent();
                return [2 /*return*/, readmePath];
            case 2:
                if (!(queryPath === "")) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, fs_util_1.findFileNameCaseInsensitive)(projectRoot, "README.md")];
            case 3:
                readmePath = _a.sent();
                if (readmePath)
                    return [2 /*return*/, readmePath];
                return [4 /*yield*/, (0, fs_util_1.findFileNameCaseInsensitive)(fs_util_1.path.join(projectRoot, "docs"), "README.md")];
            case 4:
                docsReadmePath = _a.sent();
                return [2 /*return*/, docsReadmePath];
            case 5:
                if (!queryPath.startsWith("docs/")) return [3 /*break*/, 6];
                realPath = fs_util_1.path.join(projectRoot, "".concat(queryPath, ".md"));
                if (fs_util_1.fs.existsSync(realPath))
                    return [2 /*return*/, realPath];
                return [2 /*return*/];
            case 6: return [4 /*yield*/, (0, fs_util_1.findFileNameCaseInsensitive)(fs_util_1.path.join(projectRoot, queryPath), "README.md")];
            case 7:
                realPath = _a.sent();
                return [2 /*return*/, realPath];
        }
    });
}); };
exports.getRealPathFromQueryPath = getRealPathFromQueryPath;
var getBundleQueryPaths = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, docsPath, relativeDocsPaths, relativeOperationPaths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                docsPath = fs_util_1.path.join(projectRoot, "docs");
                return [4 /*yield*/, (0, k_explore_1.explore)({ basePath: docsPath, extension: "md" })];
            case 1:
                relativeDocsPaths = (_a.sent()).map(function (x) {
                    var pathParse = fs_util_1.path.parse(x.path);
                    var mdPath = fs_util_1.path.join(pathParse.dir, pathParse.name);
                    var relativeMdPath = mdPath.substring(projectRoot.length + 1);
                    return relativeMdPath;
                });
                return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({
                        basePath: (0, get_path_1.getPathsWithOperations)({ manualProjectRoot: projectRoot }),
                    })];
            case 2:
                relativeOperationPaths = (_a.sent()).map(function (x) { return x.substring(projectRoot.length + 1); });
                return [2 /*return*/, __spreadArray(__spreadArray([], relativeDocsPaths, true), relativeOperationPaths, true)];
        }
    });
}); };
exports.getBundleQueryPaths = getBundleQueryPaths;
//# sourceMappingURL=getBundlePaths.js.map