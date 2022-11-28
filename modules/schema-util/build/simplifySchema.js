"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,i=1,n=arguments.length;i<n;i++)for(var t in r=arguments[i])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifySchema=void 0;var log_1=require("log"),schema_util_1=require("./schema-util"),getRefLink_1=require("./getRefLink"),js_util_1=require("js-util"),getReferenceParameterInfo_1=require("./getReferenceParameterInfo"),findFirstCommentTypes_1=require("./findFirstCommentTypes"),simplifySchema=function(
/** The name of the type interface, (this could be used as $ref). */
e,
/** The schema that needs to be simplified */
r,
/** The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file */
i,
/**
 * This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema.
 */
n){Array.isArray(r.type)&&
// let's do this one later
(0,log_1.log)("I don't support this usecase (type is an array of multiple types)... ".concat(r.type.join(",")),{type:"debug"});var t=Array.isArray(r.type)?r.type[0]:r.type,s=e?n.concat(e):n,a=(0,getRefLink_1.getRefLink)(r.$ref),o=!!a&&n.includes(a);if(a&&!o){var _=i.find((function(e){return e.name===a}));_||(0,log_1.log)("ref not present: ".concat(a),{type:"warning"});var c=r.description?"".concat(r.description,"\n\n"):"",m=(null==_?void 0:_.schema)?__assign(__assign({},_.schema),{description:"".concat(c).concat(_.schema.description||"")}):void 0;return m?(0,exports.simplifySchema)(a,m,i,s):void 0}var u=r.description,p=(0,findFirstCommentTypes_1.findFirstCommentTypes)(u),f=__assign({enum:r.enum,circularRefName:a,fullComment:u},p);if("boolean"===t)return __assign(__assign({},f),{type:"boolean"});if("integer"===t||"number"===t)
// NB: integers are also numbers
return __assign(__assign({},f),{type:"number"});if("null"===t)return __assign(__assign({},f),{type:"null"});if("string"===t)return __assign(__assign({},f),{type:"string"});if("array"===t){var l=(0,schema_util_1.getSchemaItems)(r).map((function(r){var t=(0,getRefLink_1.getRefLink)(r.$ref)||null,s=(0,exports.simplifySchema)(t,r,i,e?n.concat(e):n);if(s)return{schema:s,name:t}})).filter(js_util_1.notEmpty);return __assign(__assign({},f),{items:l,type:"array"})}
// NB: type must be an object here, it's the only possibility left...
// in case of objects
var g=(0,schema_util_1.getProperties)(r),y=g.map((function(e){var r=(0,exports.simplifySchema)(e.name,e.schema,i,s);if(r){var n=(0,getReferenceParameterInfo_1.getPossibleReferenceParameterNames)(e.name);
// NB: if the property has a model reference, we just need the model reference, not the whole model. This is only for retreiving, it's not present in the database.
if(!!!g.find((function(e){return n.includes(e.name)})))return{name:e.name,required:e.required,schema:r}}})).filter(js_util_1.notEmpty);return __assign(__assign({},f),{properties:y,type:"object"})};exports.simplifySchema=simplifySchema;
//# sourceMappingURL=simplifySchema.js.map