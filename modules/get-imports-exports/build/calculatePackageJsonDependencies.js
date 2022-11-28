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
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePackageJsonDependencies = exports.isImportFromOptionalFile = exports.isAbsoluteImportBuiltin = exports.getPackageNameFromAbsoluteImport = void 0;
var js_util_1 = require("js-util");
var module_1 = require("module");
var get_path_1 = require("get-path");
var filename_conventions_1 = require("filename-conventions");
/**
 * parses the absolute import name into the actual package name
 *
 * - removes internal navigation in the package (everything after the package name)
 * - assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
 * - removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`
 */
var getPackageNameFromAbsoluteImport = function (absoluteImportName) {
    var slashParts = absoluteImportName.split("/");
    var beforeSlash = slashParts[0];
    if (!beforeSlash || beforeSlash.length === 0)
        return;
    // NB: scoped packages look like `@company/package` and should be parsed correctly as well
    var withoutInternalNavigation = beforeSlash.startsWith("@")
        ? slashParts.slice(0, 2).join("/")
        : beforeSlash;
    var columnParts = withoutInternalNavigation.split(":");
    var partAfterColumns = columnParts.pop();
    return partAfterColumns;
};
exports.getPackageNameFromAbsoluteImport = getPackageNameFromAbsoluteImport;
/**
 * returns true if the absolute import is built in into node
 */
var isAbsoluteImportBuiltin = function (absoluteImportName) {
    var realModuleName = (0, exports.getPackageNameFromAbsoluteImport)(absoluteImportName);
    return realModuleName ? module_1.builtinModules.includes(realModuleName) : false;
};
exports.isAbsoluteImportBuiltin = isAbsoluteImportBuiltin;
/**
 * returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency
 */
var isImportFromOptionalFile = function (tsImport) {
    var srcRelativeFileId = (0, get_path_1.getSrcRelativeFileId)(tsImport.operationRelativeTypescriptFilePath);
    return (0, filename_conventions_1.hasSubExtension)(srcRelativeFileId, filename_conventions_1.frontendOptionalFileSubExtensions);
};
exports.isImportFromOptionalFile = isImportFromOptionalFile;
var isImportGenerated = function (x) {
    return x.isModuleFromMonorepo && (0, filename_conventions_1.isGeneratedOperationName)(x.module);
};
/**
 * Calculates new packageJson dependencies object based on imports found in the whole operation.
 *
 * For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)
 *
 * Generated packages are not added to dependencies. Instead a config is added saying this operation only works within a monorepo since it has generated operation deps that are not on the npm registry
 *
 * For external modules, uses the version that was already present in dependencies, or uses "*"
 *
 * Also keeps the dependencies that were already there, nothing is removed.
 *
 *
 */
var calculatePackageJsonDependencies = function (
/**
 * Current dependencies object in your operation
 */
dependencies, 
/**
 * All imports found in your operation
 */
imports, 
/**
 * All package-json's in your monorepo
 */
operations, operationName) {
    var dependencyImports = imports
        .filter(function (x) { return x.isAbsolute; })
        .filter(function (x) { return !(0, exports.isAbsoluteImportBuiltin)(x.module); })
        .filter(function (x) { return !(0, exports.isImportFromOptionalFile)(x); })
        .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.module === b.module; }));
    /**
     *  NB: imports of types are removed and need not to be installed for running this package
     */
    var valueDependencyImports = dependencyImports.filter(function (x) { return x.type === "value"; });
    var monorepoImports = dependencyImports.filter(function (x) {
        return operationName &&
            x.isModuleFromMonorepo &&
            !(0, filename_conventions_1.isGeneratedOperationName)(x.module);
    });
    var hasGeneratedDependenciesIndexed = valueDependencyImports.filter(isImportGenerated).length > 0;
    // console.log({ valueDependencyImports, hasGeneratedDependenciesIndexed });
    // const hasGeneratedImportsIndexed =
    //   dependencyImports.filter(isImportGenerated).length > 0;
    var externalImports = dependencyImports.filter(function (x) { return !x.isModuleFromMonorepo; });
    var externalDependencyObject = (0, js_util_1.mergeObjectsArray)(externalImports
        .map(function (x) {
        var _a;
        var moduleName = (0, exports.getPackageNameFromAbsoluteImport)(x.module);
        if (!moduleName)
            return;
        var already = dependencies === null || dependencies === void 0 ? void 0 : dependencies[moduleName];
        /**
         * TODO: fetch this from monorepo
         */
        var calculatedVersion = "*";
        /**
         * NB: Minimize the use of "*"
         */
        var version = already !== "*" && already !== undefined
            ? already
            : calculatedVersion;
        return _a = {}, _a[moduleName] = version, _a;
    })
        .filter(js_util_1.notEmpty));
    var monorepoDependencyObject = (0, js_util_1.mergeObjectsArray)(monorepoImports
        .map(function (x) {
        var _a;
        var moduleName = (0, exports.getPackageNameFromAbsoluteImport)(x.module);
        if (!moduleName)
            return;
        var operation = operations.find(function (x) { return x.name === moduleName; });
        if (!operation)
            return;
        var version = operation.version;
        if (!version)
            return;
        return _a = {}, _a[moduleName] = version, _a;
    })
        .filter(js_util_1.notEmpty));
    // console.log({
    //   imports: imports.length,
    //   dependencyImports: dependencyImports,
    //   dependencies,
    //   monorepoImports,
    //   monorepoDependencyObject,
    //   externalDependencyObject,
    // });
    var newDependencies = __assign(__assign(__assign({}, dependencies), monorepoDependencyObject), externalDependencyObject);
    return {
        newDependencies: newDependencies,
        hasGeneratedDependenciesIndexed: hasGeneratedDependenciesIndexed,
        // hasGeneratedImportsIndexed,
    };
};
exports.calculatePackageJsonDependencies = calculatePackageJsonDependencies;
//# sourceMappingURL=calculatePackageJsonDependencies.js.map