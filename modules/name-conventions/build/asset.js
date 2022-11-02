"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetInputType = void 0;
var convert_case_1 = require("convert-case");
var pluralize_1 = require("pluralize");
/*
Convention parameters for assets: [name], [name]s, xyz[Name], xyz[Name]s

Different ways to name assets: `image`, `video`, `audio`, `file` or just `asset`, which is everything together

*/
var getAssetInputType = function (parameterName, valueType) {
    var lastWord = (0, convert_case_1.lowerCaseArray)(parameterName).pop();
    if (!lastWord)
        return;
    var isObjectOrArray = valueType === "array" || valueType === "object";
    if (!isObjectOrArray)
        return;
    if (["image", "video", "audio", "file", "asset"].includes((0, pluralize_1.singularize)(lastWord))) {
        return {
            type: (0, pluralize_1.singularize)(lastWord),
            isMultiple: (0, pluralize_1.isPlural)(lastWord),
        };
    }
    return;
};
exports.getAssetInputType = getAssetInputType;
//# sourceMappingURL=asset.js.map