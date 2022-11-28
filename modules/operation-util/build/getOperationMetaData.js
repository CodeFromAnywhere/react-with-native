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
exports.getOperationMetaData = void 0;
var get_path_1 = require("get-path");
var get_package_json_1 = require("get-package-json");
var js_util_1 = require("js-util");
var fs_util_1 = require("fs-util");
var database_1 = require("database");
/**
 * gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file
 */
var getOperationMetaData = function (
/**
 * any path in an operation
 */
operationBasePath) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, packageJson, operationName, srcPath, operationFolderName, operations, operation, relativeOperationLocationPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!operationBasePath)
                    return [2 /*return*/];
                projectRoot = (0, get_path_1.getProjectRoot)(operationBasePath);
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, get_package_json_1.getPackageJson)({
                        operationFolderPath: operationBasePath,
                    })];
            case 1:
                packageJson = _a.sent();
                operationName = packageJson === null || packageJson === void 0 ? void 0 : packageJson.name;
                if (!operationName) {
                    return [2 /*return*/];
                }
                srcPath = fs_util_1.path.join(operationBasePath, "src");
                operationFolderName = (0, fs_util_1.getLastFolder)(operationBasePath);
                return [4 /*yield*/, database_1.db.get("Operation", { operationName: operationName })];
            case 2:
                operations = _a.sent();
                operation = (0, js_util_1.takeFirst)(operations);
                relativeOperationLocationPath = (0, get_path_1.makeRelative)(fs_util_1.path.join(operationBasePath, ".."), projectRoot);
                if (!relativeOperationLocationPath)
                    return [2 /*return*/];
                return [2 /*return*/, {
                        operationBasePath: operationBasePath,
                        operation: operation,
                        operationName: operationName,
                        srcPath: srcPath,
                        operationFolderName: operationFolderName,
                        /**
                         * where the operation is located relative to the project root
                         */
                        relativeOperationLocationPath: relativeOperationLocationPath,
                    }];
        }
    });
}); };
exports.getOperationMetaData = getOperationMetaData;
//# sourceMappingURL=getOperationMetaData.js.map