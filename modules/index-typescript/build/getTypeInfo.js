"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTypeInfo=void 0;var log_1=require("log"),schema_util_1=require("schema-util"),typeToSchema_1=require("./typeToSchema"),getTypeInfo=function(e,i){var t=e.getApparentType().getText(),r=e.isArray(),o=e.isEnum(),a=e.isEnumLiteral(),s=e.isString()||e.isNumber()||e.isBoolean(),p=e.isObject(),y=void 0;try{y=i||(0,typeToSchema_1.typeToSchema)(e)}catch(e){(0,log_1.log)("Type to schema failed with error: ".concat(e),{type:"debug"})}return{rawType:t,typeDefinition:y,
// TODO:
typeCoverage:0,
// this is easy to infer
isArray:r,isEnum:o,isObject:p,isPrimitive:s,isEnumLiteral:a,simplifiedSchema:y?(0,schema_util_1.simplifySchema)("type",y,[],[]):void 0}};exports.getTypeInfo=getTypeInfo;
//# sourceMappingURL=getTypeInfo.js.map