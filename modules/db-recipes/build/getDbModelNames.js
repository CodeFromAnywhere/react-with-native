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
exports.getDbModelNames = void 0;
var bundle_util_1 = require("bundle-util");
var database_1 = require("database");
var db_util_1 = require("db-util");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var k_explore_1 = require("k-explore");
var sdk_db_1 = require("sdk-db");
var getDbModelNames = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var bundleId, dbModels, bundleConfig, projectRoot, operationNames, dbModelNames;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bundleId = config === null || config === void 0 ? void 0 : config.bundleId;
                dbModels = undefined;
                if (!bundleId) return [3 /*break*/, 3];
                return [4 /*yield*/, database_1.db.get("BundleConfig")];
            case 1:
                bundleConfig = (_a.sent()).find(function (x) { return x.id === bundleId; });
                if (!bundleConfig) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, bundle_util_1.getDbModelsForBundle)(bundleConfig)];
            case 2:
                dbModels = _a.sent();
                _a.label = 3;
            case 3:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!((0, get_path_1.isBundle)(projectRoot) && projectRoot)) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({
                        basePath: fs_util_1.path.join(projectRoot, "packages"),
                    })];
            case 4:
                operationNames = (_a.sent()).map(fs_util_1.getLastFolder);
                return [4 /*yield*/, (0, db_util_1.getDbModelsFromOperations)(operationNames)];
            case 5:
                dbModels = _a.sent();
                _a.label = 6;
            case 6:
                dbModelNames = dbModels
                    ? dbModels === null || dbModels === void 0 ? void 0 : dbModels.map(function (x) { return x.name; })
                    : __spreadArray([], sdk_db_1.dbModelKeys, true);
                return [2 /*return*/, dbModelNames];
        }
    });
}); };
exports.getDbModelNames = getDbModelNames;
//# sourceMappingURL=getDbModelNames.js.map