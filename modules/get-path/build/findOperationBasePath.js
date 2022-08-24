#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOperationBasePath = exports.findOperationBasePathWithClassification = void 0;
var findFolderWhereMatch_1 = require("./findFolderWhereMatch");
var getOperationClassification_1 = require("./getOperationClassification");
/**
 * recursive. goes up until it finds a folder that's an operation
 *
 * because it had to read the package.json anyway, it's returning the operation classification as well
 */
var findOperationBasePathWithClassification = function (startPath) {
    var result = (0, findFolderWhereMatch_1.findFolderWhereMatch)(startPath, getOperationClassification_1.getOperationClassification);
    return result
        ? { folderPath: result.folderPath, classification: result.matchResult }
        : undefined;
};
exports.findOperationBasePathWithClassification = findOperationBasePathWithClassification;
var findOperationBasePath = function (startPath) {
    var _a;
    return (_a = (0, exports.findOperationBasePathWithClassification)(startPath)) === null || _a === void 0 ? void 0 : _a.folderPath;
};
exports.findOperationBasePath = findOperationBasePath;
//# sourceMappingURL=findOperationBasePath.js.map