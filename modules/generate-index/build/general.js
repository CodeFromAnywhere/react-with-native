#!/usr/bin/env node
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
exports.getExportDetails = exports.renameExportUnique = void 0;
var fs_util_1 = require("fs-util");
var convert_case_1 = require("convert-case");
var get_path_1 = require("get-path");
var firstLetterIsUppercase = function (string) {
    return string.charAt(0) === string.charAt(0).toUpperCase();
};
/**
 * map function that adds an alias parameter to exports that have duplication in their name
 */
function renameExportUnique(_a) {
    var index = _a.index, self = _a.self, value = _a.value, isSdk = _a.isSdk, requireAlias = _a.requireAlias;
    var correctCase = firstLetterIsUppercase(value.name)
        ? convert_case_1.pascalCase
        : convert_case_1.camelCase;
    // amount of stuff with the same name
    var exportsThatNeedAlias = self
        .map(function (x, index) { return (__assign(__assign({}, x), { aliasNeeded: x.name === value.name, index: index })); })
        .filter(function (x) { return x.aliasNeeded; });
    // if it's more than one, let's count
    var aliasNumber = exportsThatNeedAlias.findIndex(function (x) { return x.index === index; }) + 1;
    var addOperationName = isSdk && exportsThatNeedAlias.length > 1;
    var alias = correctCase("".concat(addOperationName ? "".concat(value.operationName, "-") : "").concat(value.name).concat(aliasNumber));
    return exportsThatNeedAlias.length === 1 && !requireAlias
        ? value
        : __assign(__assign({}, value), { alias: alias });
}
exports.renameExportUnique = renameExportUnique;
/**
 * provides details needed to create an import
 */
var getExportDetails = function (exp, thisOperationName) {
    var nameOrAlias = exp.alias ? "".concat(exp.name, " as ").concat(exp.alias) : exp.name;
    var projectRoot = (0, get_path_1.getProjectRoot)();
    if (!projectRoot)
        return;
    if (!exp.operationRelativeTypescriptFilePath)
        return;
    /**
     * something like './filename'
     */
    var relativeImportPath = ".".concat((0, fs_util_1.withoutExtension)(exp.operationRelativeTypescriptFilePath));
    var sameOperation = exp.operationName === thisOperationName;
    var fileOrOperation = sameOperation
        ? relativeImportPath
        : exp.operationName;
    return { nameOrAlias: nameOrAlias, fileOrOperation: fileOrOperation };
};
exports.getExportDetails = getExportDetails;
//# sourceMappingURL=general.js.map