"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSubExtension = void 0;
var js_util_1 = require("js-util");
/**
 * Returns true if a fileid includes one of the specified subextensions.
 */
var hasSubExtension = function (srcRelativeFileId, subExtensions, 
/**
 * if true, also returns true if the extension is the complete name of the file
 */
includeRootName) {
    var subExtensionsArray = (0, js_util_1.makeArray)(subExtensions);
    var parts = srcRelativeFileId.split(".");
    var isSinglePart = parts.length === 1;
    var subExtension = parts.pop();
    var includesSubExtension = subExtensionsArray.includes(subExtension);
    var isCounting = includeRootName ? true : !isSinglePart;
    var has = isCounting && includesSubExtension;
    return has;
};
exports.hasSubExtension = hasSubExtension;
//# sourceMappingURL=hasSubExtension.js.map