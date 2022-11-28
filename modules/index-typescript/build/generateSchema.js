"use strict";
/**
TODO: NB: Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well. NB: this doesn't really solve it still... there will still be duplication.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text


NB:

unsupported features of ts-json-schema-generator are, among other things, function type interfaces.

More info:

https://github.com/vega/ts-json-schema-generator/issues/98
https://github.com/vega/ts-json-schema-generator/issues/104

Until this is solved, it will be difficult to get types of nested functions (other option would be to try and do it with ts-morph)

*/var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateSchema=exports.hasDefinition=exports.tryCreateSchema=void 0;var ts_json_schema_generator_1=require("ts-json-schema-generator"),log_1=require("log"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),schemaToTsInterface_1=require("./schemaToTsInterface"),database_1=require("database"),tryCreateSchema=function(e){try{return{schema:(0,ts_json_schema_generator_1.createGenerator)(e).createSchema(e.type)}}catch(e){return{error:String(e)}}};function hasDefinition(e){return null!==e.type.typeDefinition}exports.tryCreateSchema=tryCreateSchema,exports.hasDefinition=hasDefinition;
/**
 * If existing schema is not stale, just require it.
 * Otherwise, generate it for a file
 *
 * NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!

 */
var generateSchema=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o,i,s,c,u,l,f,p,h,_;return __generator(this,(function(d){switch(d.label){case 0:return n=[],(a=(0,get_path_1.findOperationBasePath)(e))?(o=(0,get_path_1.makeRelative)(e,a),i=(0,fs_util_1.getLastFolder)(a),"src/index.ts"===o?(
// should not index index
(0,log_1.log)("This should never happen, operationRelativePath is src/index"),[2/*return*/,[]]):(s=fs_util_1.path.join(a,"tsconfig.json"),fs_util_1.fs.existsSync(s)?[3/*break*/,2]:(c="no tsconfig found for ".concat(e,", not generating schemas"),(0,log_1.log)(c,{type:"error"}),n.push(c),[4/*yield*/,database_1.db.update("Operation",(function(e){return e.name===i}),(function(e){return(0,js_util_1.mergeNestedObject)(e,{operation:{buildResultIndexed:{indexInteracesErrors:n}}})}),{operationName:i})]))):((0,log_1.log)("No operation base path"),[2/*return*/,[]]);case 1:case 3:return d.sent(),[2/*return*/,[]];case 2:return u={
// skipTypeCheck: true,
path:e,tsconfig:s,skipTypeCheck:!0,type:"*"},l=(0,exports.tryCreateSchema)(u),f=l.schema,p=l.error,f&&f.definitions?[3/*break*/,4]:(h="No schema/definitions found for ".concat(e,". Error: ").concat(p),(0,log_1.log)(h,{type:"warning"}),[4/*yield*/,database_1.db.update("Operation",(function(e){return e.name===i}),(function(e){return(0,js_util_1.mergeNestedObject)(e,{operation:{buildResultIndexed:{indexInteracesErrors:[h]}}})}),{operationName:i})]);case 4:return _=Object.keys(f.definitions).map((function(n){var a=t.find((function(e){return e.name===n})),o=!!a,i=r.includes(n),s=n.startsWith("NamedParameters");if(o||i||s)return(0,schemaToTsInterface_1.schemaToTsInterface)(e,n,f,a);
// console.log({ definitionNames: Object.keys(schema.definitions) });
(0,log_1.log)("Skipping type ".concat(n),{type:"debug"},{tsMorphFoundTypeAlso:o,isImportedType:i,isNamedParameters:s})})),[4/*yield*/,Promise.all(_)];case 5:return[2/*return*/,d.sent().filter(js_util_1.notEmpty)]}}))}))};exports.generateSchema=generateSchema;
//# sourceMappingURL=generateSchema.js.map