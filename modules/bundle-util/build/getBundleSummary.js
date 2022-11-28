"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBundleSummary = void 0;
var convert_case_1 = require("convert-case");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var fs_util_1 = require("fs-util");
/**
 * Summarizes a bundle config so it can be used easily in things like explore project
 */
var getBundleSummary = function (bundleConfig) {
    var _a, _b, _c;
    var operationsPath = (0, get_path_1.getRootPath)("operations");
    var bundlesPath = operationsPath
        ? fs_util_1.path.join(operationsPath, "niches")
        : undefined;
    var foldersFromRepo = bundlesPath
        ? (_a = bundleConfig.createBundleConfig.foldersFromRepo) === null || _a === void 0 ? void 0 : _a.map(function (x) {
            return fs_util_1.path.join(bundlesPath, (0, convert_case_1.kebabCase)(bundleConfig.name), x);
        })
        : undefined;
    // const filesAndFoldersToInclude = [
    //   // ...(foldersFromRepo || []),
    //   bundleConfig.readmeRelativeFilePath,
    //   bundleConfig.docsRelativeFolderPath,
    // ].filter(notEmpty);
    var appNames = bundleConfig.createBundleConfig.bundles
        .map(function (x) {
        var frontendOperationNames = (0, js_util_1.makeArray)(x.appShellOperationNames, x.serverOperationName);
        return frontendOperationNames;
    })
        .flat()
        .filter((0, js_util_1.onlyUnique2)());
    var uiOperationNames = (0, js_util_1.makeArray)(bundleConfig.createBundleConfig.bundles
        .map(function (x) { return x.uiOperationName; })
        .filter(js_util_1.notEmpty));
    var bundlePublicOperationNames = bundleConfig.createBundleConfig.bundles
        .map(function (x) {
        var _a;
        return ((_a = x.operations) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return x.privacy === "public"; }).map(function (x) { return x.operationName; })) || [];
    })
        .flat();
    var bundlePrivateOperationNames = bundleConfig.createBundleConfig.bundles
        .map(function (x) {
        var _a;
        return ((_a = x.operations) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return x.privacy === "private"; }).map(function (x) { return x.operationName; })) || [];
    })
        .flat();
    var packageNames = ((_b = bundleConfig.createBundleConfig.dependencies) === null || _b === void 0 ? void 0 : _b.filter(function (x) { return x.privacy === "public"; }).map(function (x) { return x.operationName; }).concat(uiOperationNames).concat(bundlePublicOperationNames).filter((0, js_util_1.onlyUnique2)())) || [];
    var moduleNames = ((_c = bundleConfig.createBundleConfig.dependencies) === null || _c === void 0 ? void 0 : _c.filter(function (x) { return x.privacy === "private"; }).map(function (x) { return x.operationName; }).concat(bundlePrivateOperationNames).filter((0, js_util_1.onlyUnique2)())) || [];
    var summary = {
        // filesAndFoldersToInclude,
        slug: bundleConfig.slug,
        packageNames: packageNames,
        moduleNames: moduleNames,
        appNames: appNames,
    };
    // console.dir({ summary, bundleConfig }, { depth: 999 });
    return summary;
};
exports.getBundleSummary = getBundleSummary;
//# sourceMappingURL=getBundleSummary.js.map