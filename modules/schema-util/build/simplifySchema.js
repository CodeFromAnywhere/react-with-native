"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,i=1,t=arguments.length;i<t;i++)for(var n in r=arguments[i])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifySchema=void 0;var log_1=require("log"),schema_util_1=require("./schema-util"),js_util_1=require("js-util"),getReferenceParameterInfo_1=require("./getReferenceParameterInfo"),findFirstCommentTypes_1=require("./findFirstCommentTypes"),simplifySchema=function(
/** The name of the type interface, (this could be used as $ref). */
e,
/** The schema that needs to be simplified */
r,
/** The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file */
i,
/**
 * This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema.
 */
t){Array.isArray(r.type)&&
// let's do this one later
(0,log_1.log)("I don't support this usecase (type is an array of multiple types)... ".concat(r.type.join(",")),{type:"debug"});var n=Array.isArray(r.type)?r.type[0]:r.type,s=e?t.concat(e):t,a=(0,schema_util_1.getRefLink)(r.$ref),o=!!a&&t.includes(a);if(a&&!o){var m=i.find((function(e){return e.name===a}));m||(0,log_1.log)("Strange, ref was not present in the possible refs",{type:"debug"},{possibleRefNames:i.map((function(e){return e.name})),refName:a});var _=r.description?"".concat(r.description,"\n\n"):"",c=(null==m?void 0:m.schema)?__assign(__assign({},m.schema),{description:"".concat(_).concat(m.schema.description||"")}):void 0;return c?(0,exports.simplifySchema)(a,c,i,s):void 0}var u=r.description,p=(0,findFirstCommentTypes_1.findFirstCommentTypes)(u),f=__assign({enum:r.enum,circularRefName:a,fullComment:u},p);if("boolean"===n)return __assign(__assign({},f),{type:"boolean"});if("integer"===n||"number"===n)
// NB: integers are also numbers
return __assign(__assign({},f),{type:"number"});if("null"===n)return __assign(__assign({},f),{type:"null"});if("string"===n)return __assign(__assign({},f),{type:"string"});if("array"===n){var l=(0,schema_util_1.getSchemaItems)(r).map((function(r){var n=(0,schema_util_1.getRefLink)(r.$ref)||null,s=(0,exports.simplifySchema)(n,r,i,e?t.concat(e):t);if(s)return{schema:s,name:n}})).filter(js_util_1.notEmpty);return __assign(__assign({},f),{items:l,type:"array"})}
// NB: type must be an object here, it's the only possibility left...
// in case of objects
var g=(0,schema_util_1.getProperties)(r),y=g.map((function(e){var r=(0,exports.simplifySchema)(e.name,e.schema,i,s);if(r){var t=(0,getReferenceParameterInfo_1.getPossibleReferenceParameterNames)(e.name);
// NB: if the property has a model reference, we just need the model reference, not the whole model. This is only for retreiving, it's not present in the database.
if(!!!g.find((function(e){return t.includes(e.name)})))return{name:e.name,required:e.required,schema:r}}})).filter(js_util_1.notEmpty);return __assign(__assign({},f),{properties:y,type:"object"})};exports.simplifySchema=simplifySchema;
//# sourceMappingURL=simplifySchema.js.map