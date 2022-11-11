"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReferencableModels=void 0;var getReferenceParameterInfo_1=require("./getReferenceParameterInfo"),getReferencableModels=function(e){var r;if("object"===(null==e?void 0:e.type)){var t=null===(r=e.properties)||void 0===r?void 0:r.map((function(e){return e.name}));return null==t?void 0:t.map((function(e){return(0,getReferenceParameterInfo_1.getReferenceParameterInfo)(e)})).filter((function(e){return e.isReferenceParameter}))}};
/**
 * based on the object properties in SimplifiedSchema, returns the model names that can be referenced
 */exports.getReferencableModels=getReferencableModels;
//# sourceMappingURL=getRecerencableModels.js.map