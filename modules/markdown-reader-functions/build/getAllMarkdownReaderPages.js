"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,a){return new(t||(t=Promise))((function(n,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}l((a=a.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],a=0}finally{t=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var a,n=0,o=r.length;n<o;n++)!a&&n in r||(a||(a=Array.prototype.slice.call(r,0,n)),a[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllMarkdownReaderPages=void 0;var get_path_1=require("get-path"),js_util_1=require("js-util"),k_explore_1=require("k-explore"),getOperationPages_1=require("./getOperationPages"),getMarkdownReaderPages_1=require("./getMarkdownReaderPages"),getTodoPages_1=require("./getTodoPages"),getMarkdownModelPages_1=require("./getMarkdownModelPages"),read_json_file_1=require("read-json-file"),fs_util_1=require("fs-util"),getAllMarkdownReaderPages=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,a,n,o,i,s,l,u;return __generator(this,(function(d){switch(d.label){case 0:return(r=(null==e?void 0:e.manualProjectRoot)||(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,read_json_file_1.readJsonFile)(fs_util_1.path.join(r,"public-bundle-config.json"))]:[2/*return*/];case 1:return t=d.sent(),a=null==t?void 0:t.bundleMarkdownReaderConfig,[4/*yield*/,(0,k_explore_1.findAllDocsFolderPaths)(!0)];case 2:return n=d.sent(),[4/*yield*/,(0,getMarkdownReaderPages_1.getMarkdownReaderPages)({projectRoot:r,basePaths:n,
// remove docs prefix if docs should be shown as in root
mapQueryPath:(null==a?void 0:a.docsInRoot)?function(e){return e.startsWith("docs/")?e.slice("docs/".length):// NB: "docs/README.md" becomes "docs", which should, in turn, become "" in this case...
"docs"===e?"":e}:void 0})];case 3:return o=d.sent(),[4/*yield*/,(0,getOperationPages_1.getOperationPages)(r,a)];case 4:return i=d.sent(),[4/*yield*/,(0,getMarkdownModelPages_1.getMarkdownModelPages)(r)];case 5:return s=d.sent(),[4/*yield*/,(0,getTodoPages_1.getTodoPages)(r)];case 6:return l=d.sent(),u=(null==a?void 0:a.docsInRoot)?void 0:{queryPath:"",filePath:"README.md",isMenuItem:!0},[2/*return*/,__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([u],o,!0),i,!0),[
// `/dictionary` page with all words/definitions, categorised
{queryPath:"dictionary",isMenuItem:!0}],!1),s,!0),l,!0).filter(js_util_1.notEmpty).filter((0,js_util_1.onlyUnique2)((function(e,r){return e.queryPath===r.queryPath})))]}}))}))};exports.getAllMarkdownReaderPages=getAllMarkdownReaderPages;
//# sourceMappingURL=getAllMarkdownReaderPages.js.map