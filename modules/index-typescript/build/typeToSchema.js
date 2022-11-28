"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getParamSchema=exports.typeToSchema=exports.getMinMaxValidation=exports.isPrimitive=exports.symbols=void 0;var lodash_1=require("lodash");require("reflect-metadata");var ts_morph_1=require("ts-morph"),ajvMap={number:"imum",string:"Length",array:"Items",object:"Properties"};exports.symbols={controller:Symbol(),route:Symbol(),basePath:Symbol(),validations:Symbol()};var toSnack=function(e){return e.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()})).replace(/^-/,"")},definitions={},isPrimitive=function(e){return e.isBoolean()||e.isNumber()||e.isString()};
// const project = new Project({
//   tsConfigFilePath: process.cwd() + "/tsconfig.json",
// });
// const sourceFiles = project.getSourceFiles();
// const allClasses: { [name: string]: ClassDeclaration } = {};
// sourceFiles.forEach((s) => {
//   s.getClasses().forEach((c) => {
//     allClasses[c.getName() as string] = c;
//   });
// });
exports.isPrimitive=isPrimitive;var getMinMaxValidation=function(e,t,r){var i=t.toLowerCase();return(0,lodash_1.set)({},e+ajvMap[i],r)};function handleExplicitValidation(e,t,r){return void 0===r&&(r=[]),r.forEach((function(r){var i=r.getName();switch(i){case"min":case"max":var a=+r.getArguments()[0].getText();t=(0,lodash_1.merge)(t,(0,exports.getMinMaxValidation)(i,e,a));break;case"time":case"date":case"dateTime":case"duration":case"uri":case"uriReference":case"uriTemplate":case"email":case"hostname":case"ipv4":case"ipv6":case"uuid":case"jsonPointer":case"relativeJsonPointer":t=(0,lodash_1.merge)(t,{format:toSnack(i)})}})),t}exports.getMinMaxValidation=getMinMaxValidation;var getObjectSchema=function(e,t,r){void 0===r&&(r={});var i={
// schema = {} handleExplicitValidation("object", schema, decorators);
type:"object",properties:{}};i.required=i.required||[];var a=e.getText(),n=e.getNonNullableType().getText();return i.optional=n!==a,e.getNonNullableType().getProperties().forEach((function(e){var t,a=e.getName(),n=e.hasFlags(ts_morph_1.SymbolFlags.GetAccessor);if(!["request","reply"].includes(a)&&!n){var o=e.getValueDeclarationOrThrow(),s=o.getDecorators?o.getDecorators():[];i.properties[a]=__assign(__assign({},(0,exports.getParamSchema)(o.getType(),s,e)||{}),r[a]||{}),i.properties[a]||(console.warn("missing type for - "+a),i.properties[a]={type:"object"}),!0!==i.properties[a].optional&&(null===(t=i.required)||void 0===t||t.push(a)),delete i.properties[a].optional}})),i.required.length||delete i.required,i},typeToSchema=function(e){return(0,exports.getParamSchema)(e)};
/**
 * calculates the schema of a type
 *
 * this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.
 *
 * NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.
 *
 * TODO: Test and improve this one
 */exports.typeToSchema=typeToSchema;var getParamSchema=function(e,t,r){var i,a,n,o;void 0===t&&(t=[]),void 0===r&&(r=void 0);var s=e.getText(),l=e.getNonNullableType(),u=l.getText(),p={};if(p.optional=u!==s,l.isArray())return(p=handleExplicitValidation("array",p,t)).type="array",
// NB: recursion!
p.items=(0,exports.getParamSchema)(l.getArrayElementTypeOrThrow(),[])||{},Object.keys(p.items).forEach((function(e){return delete p.items[e].optional})),delete p.items.optional,p;if("Date"===l.getText())return p.type="string",p.format="date-time",p;if((0,exports.isPrimitive)(l))return p.type=s.replace(" | undefined",""),"string"===p.type&&(p.allOf=[{transform:["trim"]},{minLength:1}]),p=handleExplicitValidation(l.getText(),p,t);if(l.isClass()||l.isInterface()){var c=l.getText().split(").")[1]||l.getText(),m=s.split('").')[0].split('import("')[1];if(m&&m.includes("/node_modules/"))return p;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var d=m&&!(null==m?void 0:m.includes("/node_modules/"))?require(m)[c]:void 0;if(m&&!d)return console.log("not found type: ".concat(c)),p;
// NB: we seem not to have it, see https://medium.com/jspoint/introduction-to-reflect-metadata-package-and-its-ecmascript-proposal-8798405d7d88
// I installed reflect-metdata and added as require on top. Hope that works!
var g=d&&// @ts-ignore
Reflect.getMetaData(exports.symbols.validations,d.prototype)||{};return p.$ref="#/definitions/"+c,definitions[c]||(definitions[c]=getObjectSchema(e,t,g)),p}if(l.isObject())return p=getObjectSchema(e,t);
// enum --------------------------------------
if(l.isEnumLiteral()&&r){c=r.getName();var f=null===(a=null===(i=null==r?void 0:r.getValueDeclarationOrThrow())||void 0===i?void 0:i.getSourceFile().getEnum((function(e){return e.getName()===l.getText()})))||void 0===a?void 0:a.getMembers();return(v={}).enum=null==f?void 0:f.map((function(e){return e.getName()})),v["x-enumNames"]=null==f?void 0:f.map((function(e){return e.getValue()})),v.type=(null===(n=v.enum)||void 0===n?void 0:n[0])?typeof(null===(o=v.enum)||void 0===o?void 0:o[0]):void 0,definitions[c]=v,p.$ref="#/definitions/"+c,p}if(l.isEnum()){var v;c=(0,lodash_1.last)(l.getText().split("."));return(v={}).enum=l.getUnionTypes().map((function(e){return e.getLiteralValueOrThrow()})),v["x-enumNames"]=l.getUnionTypes().map((function(e){return(0,lodash_1.last)(e.getText().split("."))})),v.type=typeof v.enum[0],definitions[c]=v,p.$ref="#/definitions/"+c,p}var h=e.getUnionTypes().filter((function(e){return!e.isUndefined()}));return h.length>1?(p.oneOf=h.map((function(e){return(0,exports.getParamSchema)(e,t)})),p.oneOf[0]||(delete p.oneOf,p.enum=h.map((function(e){return e.getText().slice(1,-1)})),p["x-enumNames"]=h.map((function(e){return e.getText().slice(1,-1)})),p.type=typeof p.enum[0]),p):void 0};exports.getParamSchema=getParamSchema;
// export const getMethodSchema = (c, m) => {
//   const method = allClasses[c.name]?.getMethodOrThrow(m);
//   const description = method?.getJsDocs()[0]?.getDescription();
//   let responseType = method?.getReturnType();
//   if (responseType?.getTypeArguments()[0])
//     responseType = responseType?.getTypeArguments()[0];
//   const responseSchema = responseType ? getParamSchema(responseType) : {};
//   delete responseSchema?.optional;
//   return {
//     description,
//     responses: responseSchema ? { 201: { schema: responseSchema } } : undefined,
//   };
// };
//# sourceMappingURL=typeToSchema.js.map