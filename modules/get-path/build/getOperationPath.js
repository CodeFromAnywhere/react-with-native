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
exports.getOperationPath = void 0;
var k_explore_1 = require("k-explore");
var fs_util_1 = require("fs-util");
var sdk_operations_1 = require("sdk-operations");
var getPathsWithOperations_1 = require("./getPathsWithOperations");
var log_1 = require("log");
var getProjectRoot_1 = require("./getProjectRoot");
/*

Gets a path of any operation in the project

TODO: IDEA: maybe auto-generate key-value JSON where keys are the package-names of all operations and values are paths of their locations in the file system. we can easily generate this ourselves, but maybe it's also easy to use the npm yarn workspace for this, although it may not be available in all circumstances, so better not rely on it. The advantage of this would be that this function becomes sync and is much more efficient. The disadvantage is that every time you move something or add something new, this indexation has to happen, otherwise it fails.

*/
var getOperationPath = function (
/**
 * specify the operation folder name
 */
operationName, config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRelativeOperationPath, projectRoot, basePath, operationPaths, operationPathsWithTheirFolder, foundPath;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                // NB: In case of manualProjectRoot, we should not use the SDK! The sdk is from our own project root.
                if (!(config === null || config === void 0 ? void 0 : config.notUseSdk) && !(config === null || config === void 0 ? void 0 : config.manualProjectRoot)) {
                    projectRelativeOperationPath = sdk_operations_1.operations[operationName];
                    projectRoot = (0, getProjectRoot_1.getProjectRoot)();
                    if (projectRelativeOperationPath && projectRoot) {
                        return [2 /*return*/, fs_util_1.path.join(projectRoot, projectRelativeOperationPath)];
                    }
                }
                basePath = (0, getPathsWithOperations_1.getPathsWithOperations)({
                    manualProjectRoot: config === null || config === void 0 ? void 0 : config.manualProjectRoot,
                });
                return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({ basePath: basePath })];
            case 1:
                operationPaths = _b.sent();
                if (operationPaths.length === 0) {
                    (0, log_1.log)("No operations available", { type: "error" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, Promise.all(operationPaths.map(function (p) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, ({
                                    path: p,
                                    folderName: (0, fs_util_1.getLastFolder)(p),
                                })];
                        });
                    }); }))];
            case 2:
                operationPathsWithTheirFolder = _b.sent();
                foundPath = (_a = operationPathsWithTheirFolder.find(function (f) { return f.folderName === operationName; })) === null || _a === void 0 ? void 0 : _a.path;
                return [2 /*return*/, foundPath];
        }
    });
}); };
exports.getOperationPath = getOperationPath;
//# sourceMappingURL=getOperationPath.js.map