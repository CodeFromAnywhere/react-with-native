"use strict";
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
exports.getOperationClassification = exports.hasDependency = exports.getAllPackageJsonDependencies = void 0;
var fs_util_1 = require("fs-util");
var code_types_1 = require("code-types");
var try_parse_json_1 = require("try-parse-json");
var isOperation_1 = require("./isOperation");
var read_json_file_1 = require("read-json-file");
var getAllPackageJsonDependencies = function (p) {
    var dependencies = p.dependencies ? Object.keys(p.dependencies) : [];
    var devDependencies = p.devDependencies
        ? Object.keys(p.devDependencies)
        : [];
    var peerDependencies = p.peerDependencies
        ? Object.keys(p.peerDependencies)
        : [];
    return __spreadArray(__spreadArray(__spreadArray([], dependencies, true), devDependencies, true), peerDependencies, true);
};
exports.getAllPackageJsonDependencies = getAllPackageJsonDependencies;
var hasDependency = function (packageJson, dependency) {
    return (0, exports.getAllPackageJsonDependencies)(packageJson).includes(dependency);
};
exports.hasDependency = hasDependency;
/**
 * Returns OperationClassification if it's an operation, or undefined if it's not
 *
 * NB: don't confuse this with ProjectType or ImportClassification
 */
var getOperationClassification = function (folderPath) {
    if (folderPath === undefined) {
        console.log("Incorrect type at getOperationClassification"
        // getOperationClassification.caller
        );
        process.exit(1);
    }
    if (!(0, isOperation_1.isOperation)(folderPath)) {
        return;
    }
    var packageJsonPath = fs_util_1.path.join(folderPath, "package.json");
    var packageJson = (0, try_parse_json_1.tryParseJson)(fs_util_1.fs.readFileSync(packageJsonPath, "utf8"));
    var tsconfigPath = fs_util_1.path.join(folderPath, "tsconfig.json");
    var tsconfig = (0, read_json_file_1.readJsonFileSync)(tsconfigPath);
    if (!tsconfig)
        return;
    if (!packageJson || packageJson.workspaces) {
        return;
    }
    var nextConfigPath = fs_util_1.path.join(folderPath, "next.config.js");
    var existsNextConfig = fs_util_1.fs.existsSync(nextConfigPath);
    var isNextApp = existsNextConfig;
    if (isNextApp)
        return "web";
    var appJsonPath = fs_util_1.path.join(folderPath, "app.json");
    var existsAppJson = fs_util_1.fs.existsSync(appJsonPath);
    var isReactNativeApp = existsAppJson;
    if (isReactNativeApp)
        return "app";
    var mainEntryTypescriptSource = !!(packageJson === null || packageJson === void 0 ? void 0 : packageJson.main) &&
        packageJson.main.startsWith("src/") &&
        (packageJson.main.endsWith(".ts") || packageJson.main.endsWith(".tsx"));
    var isReactPackage = !!packageJson &&
        ((0, exports.hasDependency)(packageJson, "react") ||
            (0, exports.hasDependency)(packageJson, "react-native") ||
            (0, exports.hasDependency)(packageJson, "next") ||
            (0, exports.hasDependency)(packageJson, "expo"));
    if (isReactPackage) {
        if (!!tsconfig.compilerOptions.module &&
            !!tsconfig.compilerOptions.moduleResolution &&
            tsconfig.compilerOptions.module !== code_types_1.ModuleKind.CommonJS &&
            tsconfig.compilerOptions.moduleResolution !== code_types_1.ModuleResolutionKind.Classic) {
            return "ui-esm";
        }
        if (mainEntryTypescriptSource) {
            return "ui-es6";
        }
        return "ui-es5";
    }
    var hasExpress = !!packageJson && (0, exports.hasDependency)(packageJson, "express");
    var hasServer = !!packageJson && (0, exports.hasDependency)(packageJson, "server");
    if (hasExpress || hasServer) {
        return "server";
    }
    if (mainEntryTypescriptSource) {
        return "ts";
    }
    var hasTypesNode = (0, exports.hasDependency)(packageJson, "@types/node");
    if (hasTypesNode) {
        return "node";
    }
    return "js";
};
exports.getOperationClassification = getOperationClassification;
//# sourceMappingURL=getOperationClassification.js.map