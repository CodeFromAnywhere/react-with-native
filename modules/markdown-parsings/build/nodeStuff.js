"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,o){return new(t||(t=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}l((o=o.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],o=0}finally{t=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var o,n=0,a=r.length;n<a;n++)!o&&n in r||(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.projectToMd=exports.bundleToMd=exports.bundleToBookMd=exports.operationToMd=exports.bundleFolderWithMarkdown=void 0;var get_path_1=require("get-path"),log_1=require("log"),db_1=require("db"),bundle_util_1=require("bundle-util"),js_util_1=require("js-util"),markdown_parse_js_1=require("markdown-parse-js"),fs_util_1=require("fs-util"),merge_1=require("./merge"),bundleFolderWithMarkdown=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){
return[2/*return*/,""]}))}))};exports.bundleFolderWithMarkdown=bundleFolderWithMarkdown;
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
var operationToMd=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,o,n,a,i;return __generator(this,(function(u){switch(u.label){case 0:return e.isSummary,r=e.manualProjectRoot,t=e.operationName,(o=r||(0,get_path_1.getProjectRoot)())?[4/*yield*/,(0,get_path_1.getOperationPath)(t,{manualProjectRoot:o})]:((0,log_1.log)("Projectroot not found",{type:"error"}),[2/*return*/]);case 1:return(n=u.sent())?(a=fs_util_1.path.join(n,"docs"),fs_util_1.fs.existsSync(a)?[4/*yield*/,(0,exports.bundleFolderWithMarkdown)(a)]:[3/*break*/,3]):((0,log_1.log)("Operation not found",{type:"error"}),[2/*return*/]);case 2:return i=u.sent(),[3/*break*/,4];case 3:i="",u.label=4;case 4:return i,[4/*yield*/,db_1.db.get("TsInterface",{operation:t})];case 5:return u.sent().filter((function(e){return e.isDbModel})),[2/*return*/,""]}}))}))};exports.operationToMd=operationToMd;
/**

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles

 */
var bundleToBookMd=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,o,n,a,i,u;return __generator(this,(function(l){switch(l.label){case 0:return r=e.bundleConfig,e.coverImagePath,e.title,t=e.isModulesIncluded,o=e.manualProjectRoot,n=(0,bundle_util_1.getBundleSummary)(r),r.docsRelativeFolderPath,a=t?[]:n.moduleNames,i=__spreadArray(__spreadArray(__spreadArray([],n.appNames,!0),n.packageNames,!0),a,!0),[4/*yield*/,Promise.all(i.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,exports.operationToMd)({operationName:e,manualProjectRoot:o,mergeDocsInline:!0,returnType:"string"})];case 1:return(r=t.sent())?[2/*return*/,(0,markdown_parse_js_1.mdToJsonParse)(r)]:[2/*return*/]}}))}))})))];case 1:return u=l.sent().filter(js_util_1.notEmpty),(0,merge_1.mergeMarkdownParse)(u),[2/*return*/]}}))}))};exports.bundleToBookMd=bundleToBookMd;
/**
 *
 * creates a summary for a whole bundle
 *
 * NB: Related to `bundleToBookMd`
 */
var bundleToMd=function(e){e.bundleConfigId,e.includeModules
/**
       - explain operation config itself, e.g. which apps there are and an outline of the packages and modules
    
       - extract all needed operations from bundle config (with or without modules) and use operationToMd for those
      
       - extract docs and readmes from bundle config and bundle those
      */;return""};exports.bundleToMd=bundleToMd;
/**
 * summarizes the whole OS project into a markdown string
 */
var projectToMd=function(e){e.includeTodo;
/**
    
     - the folder structure should be the outline
     - hierarchically delve into folders with all its content (md and operations)
  
     */return""};exports.projectToMd=projectToMd;
//# sourceMappingURL=nodeStuff.js.map