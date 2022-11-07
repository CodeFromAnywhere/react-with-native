"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathArrayIsOperation = void 0;
var fs_util_1 = require("fs-util");
/**
 * Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation
 *
 * Handy for `cancelRecursionOn` in `explore`
 */
var pathArrayIsOperation = function (pathArray) {
    var hasPackageJson = !!pathArray.find(function (x) { return fs_util_1.path.parse(x).base === "package.json"; });
    var hasTsConfig = !!pathArray.find(function (x) { return fs_util_1.path.parse(x).base === "tsconfig.json"; });
    var isOperation = hasPackageJson && hasTsConfig;
    return isOperation;
};
exports.pathArrayIsOperation = pathArrayIsOperation;
//# sourceMappingURL=util.js.map