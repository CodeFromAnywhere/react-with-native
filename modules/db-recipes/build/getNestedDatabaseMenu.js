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
exports.getNestedDatabaseMenu = void 0;
var database_1 = require("database");
var sdk_operations_1 = require("sdk-operations");
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var recursive_util_1 = require("recursive-util");
/**
TODO: support search for bundles (but this can be augmented word based)
*/
var getNestedDatabaseMenu = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, _a, noOperationPath, noOperationName, noSrcRelativeFolder, noPrefix, dbModels, queryPaths, dbPages, upsertPages, flat;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, {}];
                _a = (0, js_util_1.destructureOptionalObject)(config), noOperationPath = _a.noOperationPath, noOperationName = _a.noOperationName, noSrcRelativeFolder = _a.noSrcRelativeFolder, noPrefix = _a.noPrefix;
                return [4 /*yield*/, database_1.db.get("TsInterface")];
            case 1:
                dbModels = (_b.sent()).filter(function (x) { return x.isDbModel; });
                queryPaths = dbModels.map(function (dbModel) {
                    var projectRelativeOperationPath = sdk_operations_1.operations[dbModel.operationName];
                    var slicedProjectRelativeOperationPath = projectRelativeOperationPath
                        .split("/")
                        // in bundles, we still want to make the distinction between modules and packages, so this is great.
                        .slice((0, get_path_1.isBundle)(projectRoot) ? 0 : 2)
                        .join("/");
                    var operationPart = noOperationName
                        ? ""
                        : noOperationPath
                            ? dbModel.operationName + "/"
                            : slicedProjectRelativeOperationPath + "/";
                    var folder = (0, fs_util_1.getFolder)(dbModel.operationRelativeTypescriptFilePath.slice("src/".length));
                    var folderPart = noSrcRelativeFolder
                        ? ""
                        : folder.length === 0
                            ? ""
                            : folder + "/";
                    var prefixPart = noPrefix ? "" : "db/";
                    var url = "".concat(prefixPart).concat(operationPart).concat(folderPart).concat(dbModel.name);
                    return url;
                });
                dbPages = queryPaths.map(function (queryPath) {
                    return { queryPath: queryPath, pageData: null };
                });
                upsertPages = dbModels.map(function (dbModel) { return ({
                    queryPath: "upsert/".concat(dbModel.name),
                    pageData: null,
                    isMenuHidden: true,
                }); });
                flat = dbPages.concat(upsertPages);
                return [2 /*return*/, (0, recursive_util_1.getMenuPagesObject)(flat)];
        }
    });
}); };
exports.getNestedDatabaseMenu = getNestedDatabaseMenu;
//# sourceMappingURL=getNestedDatabaseMenu.js.map