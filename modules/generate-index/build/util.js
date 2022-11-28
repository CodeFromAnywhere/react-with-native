"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToImportStatement = exports.isTestFn = void 0;
var convert_case_1 = require("convert-case");
var get_path_1 = require("get-path");
var isTestFn = function (x) {
    var nameEndsWithTest = (0, convert_case_1.lowerCaseArray)(x.name).pop() === "test";
    var typeIsFn = x.type === "function";
    return typeIsFn && nameEndsWithTest;
};
exports.isTestFn = isTestFn;
var mapToImportStatement = function (item, type) {
    var srcRelativeFileId = (0, get_path_1.getSrcRelativeFileId)(item.operationRelativeTypescriptFilePath);
    return { name: item.name, srcRelativeFileId: srcRelativeFileId, type: type };
};
exports.mapToImportStatement = mapToImportStatement;
//# sourceMappingURL=util.js.map