"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstAvailableFilename = exports.oneUp = void 0;
var fs_1 = require("./fs");
var path_1 = require("./path");
/**
 * Finds the number at the end of a filename and increases it
 * If there is no number yet, concatenates '1' to a string
 *
 * E.g.
 *
 * - `hello-world` becomes `hello-world1`
 * - `hello36` becomes `hello37`
 */
var oneUp = function (filename) {
    var _a;
    var lastNumber = (_a = filename.match(/\d+$/)) === null || _a === void 0 ? void 0 : _a[0];
    var newNumber = lastNumber ? String(Number(lastNumber) + 1) : "1";
    return "".concat(filename).concat(newNumber);
};
exports.oneUp = oneUp;
var getFirstAvailableFilename = function (absoluteFilePath) {
    // If that doesn't exist, use that
    if (!fs_1.fs.existsSync(absoluteFilePath))
        return absoluteFilePath;
    var parsedPath = path_1.path.parse(absoluteFilePath);
    var newFilename = "".concat((0, exports.oneUp)(parsedPath.name)).concat(parsedPath.ext);
    var newProposedPath = path_1.path.join(parsedPath.dir, newFilename);
    return (0, exports.getFirstAvailableFilename)(newProposedPath);
};
exports.getFirstAvailableFilename = getFirstAvailableFilename;
//# sourceMappingURL=getFirstAvailableFilename.js.map