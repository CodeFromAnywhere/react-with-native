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
 * returns OperationClassification if it's an operation, or undefined if it's not
 *
 * NB: don't confuse this with ProjectType or ImportClassification
 */
var getOperationClassification = function (folderPath) {
    var packageJsonPath = fs_util_1.path.join(folderPath, "package.json");
    var tsConfigPath = fs_util_1.path.join(folderPath, "tsconfig.json");
    var nextConfigPath = fs_util_1.path.join(folderPath, "next.config.js");
    var appJsonPath = fs_util_1.path.join(folderPath, "app.json");
    var existsPackageJson = fs_util_1.fs.existsSync(packageJsonPath);
    var existsTsConfig = fs_util_1.fs.existsSync(tsConfigPath);
    var existsNextConfig = fs_util_1.fs.existsSync(nextConfigPath);
    var existsAppJson = fs_util_1.fs.existsSync(appJsonPath);
    if (!existsPackageJson || !existsTsConfig)
        return;
    var packageJson = (0, read_json_file_1.tryParseJson)(fs_util_1.fs.readFileSync(packageJsonPath, "utf8"));
    if (!packageJson || packageJson.workspaces) {
        return;
    }
    var isNextApp = existsNextConfig;
    var isReactNativeApp = existsAppJson;
    var isReactPackage = (0, exports.hasDependency)(packageJson, "react") ||
        (0, exports.hasDependency)(packageJson, "react-native") ||
        (0, exports.hasDependency)(packageJson, "next") ||
        (0, exports.hasDependency)(packageJson, "expo");
    var mainEntryTypescriptSource = !!packageJson.main &&
        packageJson.main.startsWith("src/") &&
        (packageJson.main.endsWith(".ts") || packageJson.main.endsWith(".tsx"));
    var hasExpress = (0, exports.hasDependency)(packageJson, "express");
    var hasServer = (0, exports.hasDependency)(packageJson, "server");
    var hasTypesNode = (0, exports.hasDependency)(packageJson, "@types/node");
    var classification = isNextApp
        ? "web"
        : isReactNativeApp
            ? "app"
            : isReactPackage && mainEntryTypescriptSource
                ? "ui-es6"
                : isReactPackage && !mainEntryTypescriptSource
                    ? "ui-es5"
                    : hasExpress || hasServer
                        ? "server"
                        : hasTypesNode
                            ? "node"
                            : "js";
    return classification;
};
exports.getOperationClassification = getOperationClassification;
//# sourceMappingURL=getOperationClassification.js.map