"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProjectRelativePaths=void 0;var filename_conventions_1=require("filename-conventions"),get_path_1=require("get-path"),js_util_1=require("js-util"),k_explore_1=require("k-explore"),getProjectRelativePaths=function(
// functionContext: FunctionContext,
e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,a,o,i,l,s,c,u,_,f,p;return __generator(this,(function(h){switch(h.label){case 0:return t=(0,js_util_1.destructureOptionalObject)(e),r=t.earliestUpdatedAt,t.filterDraft,t.filterGenerated,t.filterPrivate,n=t.type,a=t.sort,(o=(0,get_path_1.getProjectRoot)())?(i=(0,get_path_1.getRootPath)("operations"))&&(0,get_path_1.getRootPath)(filename_conventions_1.databaseFolderName)&&(l=(0,get_path_1.getRootPath)("text"))?"todo"!==n?[3/*break*/,2]:[4/*yield*/,(0,k_explore_1.findAllTodoFolderPaths)(i)]:[2/*return*/]:[2/*return*/];case 1:return c=h.sent(),[3/*break*/,3];case 2:c=[i,l],h.label=3;case 3:return s=c,u=void 0!==r,[4/*yield*/,(0,k_explore_1.explore)({basePath:s,includeStats:u||"recent"===a,extension:"md",ignore:__spreadArray([filename_conventions_1.databaseFolderName],filename_conventions_1.generatedFolders,!0)})];case 4:return _=h.sent(),f=_.filter((function(e){var t;if(!u)return!0;var n=null===(t=e.stats)||void 0===t?void 0:t.updatedAt;
// shouldn't happen
return!!n&&r<n})),p="recent"===a?f.sort((function(e,t){return e.stats.createdAt<t.stats.createdAt?1:-1})):f,[2/*return*/,p.map((function(e){return e.path})).map((function(e){return(0,get_path_1.makeRelative)(e,o)}))]}}))}))};exports.getProjectRelativePaths=getProjectRelativePaths;
//# sourceMappingURL=getProjectRelativePaths.js.map