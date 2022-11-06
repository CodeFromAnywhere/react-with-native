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
exports.getReferencedModelData = void 0;
var schema_util_1 = require("schema-util");
var getReferencedModelData = function (parameterName, referencedModelData) {
    var interfaceInfo = (0, schema_util_1.getReferenceParameterInfo)(parameterName);
    var referencedData = interfaceInfo &&
        interfaceInfo.interfaceName &&
        referencedModelData[interfaceInfo.interfaceName] &&
        referencedModelData[interfaceInfo.interfaceName].length > 0
        ? referencedModelData[interfaceInfo.interfaceName]
        : undefined;
    return interfaceInfo
        ? __assign({ referencedData: referencedData }, interfaceInfo) : undefined;
};
exports.getReferencedModelData = getReferencedModelData;
//# sourceMappingURL=getReferencedModelData.js.map