"use strict";
/**
TODO:

Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text
*/var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.schemaToTsInterface=void 0;var schema_util_1=require("schema-util"),convert_case_1=require("convert-case"),markdown_parse_js_1=require("markdown-parse-js"),js_util_1=require("js-util"),comment_util_1=require("comment-util"),getDbStorageMethod_1=require("./getDbStorageMethod"),get_path_1=require("get-path"),schemaToTsInterface=function(e,t,n,i){return __awaiter(void 0,void 0,void 0,(function(){var r,o,a,s,l,u,c,d,p,h,f,_,v,m,y,g;return __generator(this,(function(b){return r=null===(g=n.definitions)||void 0===g?void 0:g[t],(o=(0,get_path_1.findOperationBasePath)(e))?(a=n.definitions?Object.keys(n.definitions).map((function(e){var t,i=(0,schema_util_1.getSchema)(null===(t=n.definitions)||void 0===t?void 0:t[e]);return i?{name:e,schema:i}:null})).filter(js_util_1.notEmpty):[],(s="object"==typeof r?r:void 0)?(l=(0,markdown_parse_js_1.parseFrontmatterMarkdownString)((0,comment_util_1.stripComment)((null==i?void 0:i.description)||s.description||"")),u=l.parameters,c=u.operationRelativePath,d=void 0===u.isOperationIndex?(null==i?void 0:i.extensions.includes("TsIndexModelType"))||!1:Boolean(u.isOperationIndex),p=(0,getDbStorageMethod_1.getDbStorageMethod)({typeName:t,frontmatter:u,extensions:null==i?void 0:i.extensions}),h=!!p,f=(0,convert_case_1.slugify)(t),_=(0,get_path_1.getOperationRelativePath)(e,o),v=!!(null==i?void 0:i.hasGeneric),m=!!(null==i?void 0:i.isExported),y=(0,schema_util_1.simplifySchema)(t,s,a,[]),[2/*return*/,{
// identifiers
id:f,name:t,slug:f,operationRelativeTypescriptFilePath:_,hasGeneric:v,isExported:m,rawText:null==i?void 0:i.raw,extensions:null==i?void 0:i.extensions,isOperationIndex:d,operationStorageLocationRelativeFilePath:c?String(c):void 0,
// interface info
description:null==l?void 0:l.raw,dbStorageMethod:p,isDbModel:h,
// TODO:
commentsInside:[],type:{
// TODO: test
typeDefinition:s,simplifiedSchema:y,
// TODO:
typeCoverage:0,rawType:t,
// TODO:
isArray:!1,isEnum:!1,isEnumLiteral:!1,isObject:!1,isPrimitive:!1}}]):[2/*return*/,void 0]):[2/*return*/]}))}))};exports.schemaToTsInterface=schemaToTsInterface;
//# sourceMappingURL=schemaToTsInterface.js.map