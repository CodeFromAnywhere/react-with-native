"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReferencedModelInfo=void 0;var getReferenceParameterInfo_1=require("./getReferenceParameterInfo"),getReferencedModelInfo=function(e){var r=(0,getReferenceParameterInfo_1.getReferenceParameterInfo)(e),n=r.interfaceName,t=r.isReferenceMultipleParameter,f=r.isReferenceSingleParameter,o=r.keyInModel;return f||t?{interfaceName:n,isMultiple:t,keyInModel:o}:void 0};
/**
 * if the parametername seems to be a reference to one or more models, this function will return the referred type interface name
 */exports.getReferencedModelInfo=getReferencedModelInfo;
//# sourceMappingURL=getReferencedModelInfo.js.map