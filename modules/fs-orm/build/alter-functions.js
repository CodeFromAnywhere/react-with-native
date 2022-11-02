"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},__rest=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.alterAny=exports.alterMarkdown=exports.alterKeyValueMarkdown=exports.alterJsonMultiple=exports.alterJsonSingle=exports.alterCsv=exports.removeMultiple=exports.upsertItems=void 0;var code_types_1=require("code-types"),model_types_1=require("model-types"),csv_util_1=require("csv-util"),fs_util_1=require("fs-util"),key_value_markdown_js_1=require("key-value-markdown-js"),log_1=require("log"),read_csv_file_1=require("read-csv-file"),read_json_file_1=require("read-json-file"),read_kvmd_file_1=require("read-kvmd-file"),read_markdown_file_1=require("read-markdown-file"),removeKeyValueMarkdown_1=require("./removeKeyValueMarkdown"),upsert_1=require("./upsert"),upsertKeyValueMarkdown_1=require("./upsertKeyValueMarkdown"),js_util_1=require("js-util"),makeStoringItem_1=require("../convention/makeStoringItem"),getAugmentedData_1=require("../util/getAugmentedData"),upsertItems=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o,i;return __generator(this,(function(s){
// Special case!
// TODO: we don't support multiple items for this case
return n=(0,js_util_1.makeArray)(r),"keyValueMarkdown"===e?(a=n[0],o=Object.keys(a).find((function(e){return e.startsWith("parent_")&&e.endsWith("Slug")})),i=o?a[o]:void 0,[2/*return*/,(0,exports.alterKeyValueMarkdown)(t,(function(e){
// NB: CategoryStack is overwritten! We are first making sure that categoryStackCalculated is a real existing categoryStackCalculated based on the parent_xxxSlug.
var t=e,r=i?t.find((function(e){return e.slug===i})):void 0,n=o?r?r.categoryStackCalculated.concat(r.slug):[]:a.categoryStackCalculated||[],s=__assign(__assign({},a),{categoryStackCalculated:n,isHeaderCalculated:void 0!==a.isHeaderCalculated&&a.isHeaderCalculated,comment:void 0===a.comment?null:a.comment});return(0,upsertKeyValueMarkdown_1.upsertKeyValueMarkdown)(t,s)}))]):[2/*return*/,(0,exports.alterAny)(e,t,(function(e){return(0,upsert_1.upsert)(e,n)}))]}))}))};exports.upsertItems=upsertItems;
/**
 * Function that lets you remove items from one specific file, for any storage method
 */
var removeMultiple=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o;return __generator(this,(function(i){switch(i.label){case 0:return t.absolutePath,t.modelName,n=__rest(t,["absolutePath","modelName"]),"jsonSingle"===e||"markdown"===e?[4/*yield*/,(0,getAugmentedData_1.getAugmentedData)(t,e)]:[3/*break*/,4];case 1:return a=i.sent(),o=a?a[0]:null,fs_util_1.fs.existsSync(t.absolutePath)&&(0,fs_util_1.canWriteSync)(t.absolutePath)&&o&&r(o)?[4/*yield*/,fs_util_1.fs.rm(t.absolutePath)]:[3/*break*/,3];case 2:return i.sent(),[2/*return*/,{amountRemoved:1}];case 3:return[2/*return*/,{amountRemoved:0}];case 4:return"keyValueMarkdown"===e?[2/*return*/,(0,exports.alterKeyValueMarkdown)(t,(function(e){var t=e.reduce((function(e,t){var a=__assign(__assign({},t),n);return r(a)?(0,removeKeyValueMarkdown_1.removeKeyValueMarkdown)(e,a.slug).newStoredData:e;
// Otherwise it stays the same
}),[]);return{newStoredData:t,isSuccesful:!0}}))]:[2/*return*/,(0,exports.alterAny)(e,t,(function(e){var t=e.map((function(e){return __assign(__assign({},e),n)})),a=t.filter((function(e){return!r(e)})),o=a.map((function(e){return(0,makeStoringItem_1.makeStoringItem)(e)}));return{amountRemoved:a.length-e.length,newStoredData:o,isSuccesful:!0}}))];
// otherwise, we'll remove the item from the array
}}))}))};exports.removeMultiple=removeMultiple;
/**
 * Alters a csv
 */
var alterCsv=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,i,s,u,l;return __generator(this,(function(_){switch(_.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_csv_file_1.readCsvFile)(r)];case 1:return n=_.sent()||[],a=!n,o=t(n),i=o.newStoredData,s=__rest(o,["newStoredData"]),u=(0,csv_util_1.csvItemArrayToCsvString)(i),[4/*yield*/,(0,fs_util_1.writeStringToFile)(r,u)];case 2:return(l=_.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:l},s)]:[2/*return*/,{isSuccesful:l,message:"Could not write to file"}]}}))}))};exports.alterCsv=alterCsv;
/**
 * Alters a json single file
 */
var alterJsonSingle=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,i,s,u;return __generator(this,(function(l){switch(l.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_json_file_1.readJsonFile)(e.absolutePath)];case 1:return n=l.sent(),a=!n,o=t(n?[n]:[]),i=o.newStoredData,s=__rest(o,["newStoredData"]),[4/*yield*/,(0,fs_util_1.writeJsonToFile)(r,i[0])];case 2:return(u=l.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:u},s)]:[2/*return*/,{isSuccesful:u,message:"Could not write to file"}]}}))}))};exports.alterJsonSingle=alterJsonSingle;
/**
 * Alters a json single file
 */
var alterJsonMultiple=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,i,s,u;return __generator(this,(function(l){switch(l.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_json_file_1.readJsonFile)(e.absolutePath)];case 1:return n=l.sent(),a=!n,o=t(n||[]),i=o.newStoredData,s=__rest(o,["newStoredData"]),[4/*yield*/,(0,fs_util_1.writeJsonToFile)(r,i)];case 2:return(u=l.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:u},s)]:[2/*return*/,{isSuccesful:u,message:"Could not write to file"}]}}))}))};exports.alterJsonMultiple=alterJsonMultiple;var alterKeyValueMarkdown=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,i,s,u,l,_,c;return __generator(this,(function(d){switch(d.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_kvmd_file_1.readKvmdFile)(r,e)];case 1:return n=d.sent(),a=!n,o=(null==n?void 0:n.data)||[],i=t(o),s=i.newStoredData,u=__rest(i,["newStoredData"]),l={parameters:(null==n?void 0:n.parameters)||{},data:s},_=(0,key_value_markdown_js_1.kvmdParseToMarkdownString)(l),[4/*yield*/,(0,fs_util_1.writeStringToFile)(r,_)];case 2:return(c=d.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:c},u)]:[2/*return*/,{isSuccesful:c,message:"Could not write to file"}]}}))}))};exports.alterKeyValueMarkdown=alterKeyValueMarkdown;
/**
 * Alters a markdown file
 */
var alterMarkdown=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r,n,a,o,i,s,u,l,_,c;return __generator(this,(function(d){switch(d.label){case 0:return r=e.absolutePath,[4/*yield*/,(0,read_markdown_file_1.readMarkdownFile)(r)];case 1:return n=d.sent(),a=!n,o=(0,code_types_1.markdownParseToMarkdownModelType)(n),i=t(o?[o]:[]),s=i.newStoredData,u=__rest(i,["newStoredData"]),l=s[0],_=(0,model_types_1.markdownModelTypeToMarkdownString)(l),[4/*yield*/,(0,fs_util_1.writeStringToFile)(r,_)];case 2:return(c=d.sent())?[2/*return*/,__assign({isNewFile:a,isSuccesful:c},u)]:[2/*return*/,{isSuccesful:c,message:"Could not write to file"}]}}))}))};exports.alterMarkdown=alterMarkdown;
/**
 * low level function that alters data from any storage method at a certain location
 *
 * comprises all dbStorageMethods
 */
var alterAny=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(r){return"csv"===e?[2/*return*/,exports.alterCsv.apply(void 0,t)]:"jsonSingle"===e?[2/*return*/,exports.alterJsonSingle.apply(void 0,t)]:"keyValueMarkdown"===e?(
// this case never happens, this is never the case
(0,log_1.log)("Wut??? this case should be prevented by its parent function",{type:"warning"}),[2/*return*/,exports.alterKeyValueMarkdown.apply(void 0,t)]):"markdown"===e?[2/*return*/,exports.alterMarkdown.apply(void 0,t)]:[2/*return*/,exports.alterJsonMultiple.apply(void 0,t)]}))}))};exports.alterAny=alterAny;
//# sourceMappingURL=alter-functions.js.map