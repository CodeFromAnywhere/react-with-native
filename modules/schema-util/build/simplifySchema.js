"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,i=1,n=arguments.length;i<n;i++)for(var t in r=arguments[i])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifySchema=void 0;var log_1=require("log"),schema_util_1=require("./schema-util"),js_util_1=require("js-util"),simplifySchema=function(
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
(0,log_1.log)("I don't support this usecase (type is an array of multiple types)... ".concat(r.type.join(",")),{type:"warning"});var t=Array.isArray(r.type)?r.type[0]:r.type,s=e?n.concat(e):n,a=(0,schema_util_1.getRefLink)(r.$ref),u=!!a&&n.includes(a);if(a&&!u){var o=i.find((function(e){return e.name===a}));
// we already encountered this ref before, let's avoid infinite recursion here.
// @ts-ignore
return o||(0,log_1.log)("Strange, ref was not present in the possible refs",{type:"warning"}),(null==o?void 0:o.schema)?(0,exports.simplifySchema)(a,null==o?void 0:o.schema,i,s):void 0}var _={description:r.description,enum:r.enum,circularRefName:a};if("boolean"===t)return __assign(__assign({},_),{type:"boolean"});if("integer"===t||"number"===t)
// NB: integers are also numbers
return __assign(__assign({},_),{type:"number"});if("null"===t)return __assign(__assign({},_),{type:"null"});if("string"===t)return __assign(__assign({},_),{type:"string"});if("array"===t){var c=(0,schema_util_1.getSchemaItems)(r).map((function(r){var t=(0,schema_util_1.getRefLink)(r.$ref)||null;return{schema:(0,exports.simplifySchema)(t,r,i,e?n.concat(e):n),name:t}}));return __assign(__assign({},_),{items:c,type:"array"})}
// NB: type must be an object here, it's the only possibility left...
// in case of objects
var l=(0,schema_util_1.getProperties)(r),p=l.map((function(e){var r=["Slug","Id"].map((function(r){return e.name.concat(r)}));
// NB: if the property has a model reference, we just need the model reference, not the whole model. This is only for retreiving, it's not present in the database.
if(!l.find((function(e){return r.includes(e.name)})))return{name:e.name,required:e.required,schema:(0,exports.simplifySchema)(e.name,e.schema,i,s)}})).filter(js_util_1.notEmpty);return __assign(__assign({},_),{properties:p,type:"object"})};exports.simplifySchema=simplifySchema;
//# sourceMappingURL=simplifySchema.js.map