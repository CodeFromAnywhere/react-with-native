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
exports.makeSdkEnvPublicOperation = void 0;
var get_path_1 = require("get-path");
var new_operation_1 = require("new-operation");
var db_1 = require("db");
var js_util_1 = require("js-util");
/**
 *
 */
var makeSdkEnvPublicOperation = function (
/**
 * NB: if this is not a bundle, a more general purpose bundle config should be used
 */
bundleConfig, config) { return __awaiter(void 0, void 0, void 0, function () {
    var operationName, description, projectRoot, publicEnvironmentVariables, realEnv, publicTypescriptFileString, publicLocalComment, publicLocalTypescriptFileString, srcFileContentObject, operationConfig, _a, newOperationConfig, success;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                operationName = "sdk-env-public";
                description = "Any public environment variables of your full-stack app go here.";
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                publicEnvironmentVariables = bundleConfig.publicEnvironmentVariables;
                realEnv = (publicEnvironmentVariables &&
                    typeof publicEnvironmentVariables === "object") ||
                    {};
                publicTypescriptFileString = "export const publicEnvironmentVariables = ".concat(JSON.stringify(realEnv, null, 2), ";");
                publicLocalComment = "Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!";
                publicLocalTypescriptFileString = "import { publicEnvironmentVariables } from \"./public\";\n// ".concat(publicLocalComment, "\nexport const publicLocalEnvironmentVariables: Partial<typeof publicEnvironmentVariables> = {};");
                srcFileContentObject = {
                    "public-local.ts": publicLocalTypescriptFileString,
                    "public.ts": publicTypescriptFileString,
                };
                _a = js_util_1.takeFirst;
                return [4 /*yield*/, db_1.db.get("OperationConfig", { operation: operationName })];
            case 1:
                operationConfig = _a.apply(void 0, [_b.sent()]);
                newOperationConfig = __assign(__assign({}, operationConfig), { name: operationName, markdown: description });
                return [4 /*yield*/, (0, new_operation_1.newOperationWithFiles)(newOperationConfig, srcFileContentObject, { manualProjectRoot: projectRoot })];
            case 2:
                success = _b.sent();
                return [2 /*return*/, success];
        }
    });
}); };
exports.makeSdkEnvPublicOperation = makeSdkEnvPublicOperation;
//# sourceMappingURL=makeSdkEnvPublicOperation.js.map