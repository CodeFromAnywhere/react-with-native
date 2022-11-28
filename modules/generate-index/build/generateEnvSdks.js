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
exports.newEnvSdk = exports.generateEnvSdks = void 0;
var get_path_1 = require("get-path");
var new_operation_1 = require("new-operation");
var getOperationConfig_1 = require("./getOperationConfig");
/**
 * generates sdk-env-public and sdk-env-private
 *
 * returns the paths of the geneated operations
 */
var generateEnvSdks = function (bundleConfig, config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, skipYarnInstall, promises, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                promises = [
                    (0, exports.newEnvSdk)(bundleConfig, "public", { manualProjectRoot: manualProjectRoot, skipYarnInstall: skipYarnInstall }),
                    (0, exports.newEnvSdk)(bundleConfig, "private", { manualProjectRoot: manualProjectRoot, skipYarnInstall: skipYarnInstall }),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, results];
        }
    });
}); };
exports.generateEnvSdks = generateEnvSdks;
/**

# Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig
 */
var newEnvSdk = function (
/**
 * NB: if this is not a bundle, a more general purpose bundle config should be used
 */
bundleConfig, type, config) { return __awaiter(void 0, void 0, void 0, function () {
    var operationName, description, projectRoot, skipYarnInstall, envVariables, realEnv, typescriptFileString, localComment, localTypescriptFileString, srcFileContentObject, operationConfig, operationBasePath;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                operationName = "sdk-env-".concat(type);
                description = "Any ".concat(type, " environment variables of your full-stack app go here.");
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                envVariables = bundleConfig["".concat(type, "EnvironmentVariables")];
                realEnv = (envVariables && typeof envVariables === "object") || {};
                typescriptFileString = "export const ".concat(type, "EnvironmentVariables = ").concat(JSON.stringify(realEnv, null, 2), ";");
                localComment = "Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!";
                localTypescriptFileString = "import { ".concat(type, "EnvironmentVariables } from \"./").concat(type, "\";\n// ").concat(localComment, "\nexport const ").concat(type, "LocalEnvironmentVariables: Partial<typeof ").concat(type, "EnvironmentVariables> = {};");
                srcFileContentObject = (_a = {},
                    _a["".concat(type, "-local.ts")] = localTypescriptFileString,
                    _a["".concat(type, ".ts")] = typescriptFileString,
                    _a);
                return [4 /*yield*/, (0, getOperationConfig_1.getOperationConfig)(operationName, description)];
            case 1:
                operationConfig = _b.sent();
                return [4 /*yield*/, (0, new_operation_1.newOperationWithFiles)(operationConfig, srcFileContentObject, { manualProjectRoot: projectRoot, skipYarnInstall: skipYarnInstall })];
            case 2:
                operationBasePath = _b.sent();
                return [2 /*return*/, operationBasePath];
        }
    });
}); };
exports.newEnvSdk = newEnvSdk;
//# sourceMappingURL=generateEnvSdks.js.map