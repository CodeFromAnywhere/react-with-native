"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferencableModels = void 0;
var getReferenceParameterInfo_1 = require("./getReferenceParameterInfo");
/**
 * based on the object properties in SimplifiedSchema, returns the model names that can be referenced
 */
var getReferencableModels = function (simplifiedSchema) {
    var _a;
    if ((simplifiedSchema === null || simplifiedSchema === void 0 ? void 0 : simplifiedSchema.type) !== "object")
        return undefined;
    var parameterNames = (_a = simplifiedSchema.properties) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.name; });
    var referenceParameterInfo = parameterNames === null || parameterNames === void 0 ? void 0 : parameterNames.map(function (parameterName) {
        var referenceParameterInfo = (0, getReferenceParameterInfo_1.getReferenceParameterInfo)(parameterName);
        return referenceParameterInfo;
    }).filter(function (x) { return x.isReferenceParameter; });
    return referenceParameterInfo;
};
exports.getReferencableModels = getReferencableModels;
//# sourceMappingURL=getRecerencableModels.js.map