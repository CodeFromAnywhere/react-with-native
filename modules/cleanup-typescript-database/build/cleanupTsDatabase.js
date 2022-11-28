"use strict";var __awaiter=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,o){function u(e){try{i(r.next(e))}catch(e){o(e)}}function s(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(u,s)}i((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var a,r,n,o,u={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(n=u.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){u.label=o[1];break}if(6===o[0]&&u.label<n[1]){u.label=n[1],n=o;break}if(n&&u.label<n[2]){u.label=n[2],u.ops.push(o);break}n[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.cleanupTsDatabase=exports.shouldDeleteTsModel=void 0;var get_package_source_paths_1=require("get-package-source-paths"),database_1=require("database"),get_path_1=require("get-path"),code_types_1=require("code-types"),shouldDeleteTsModel=function(e,t,a){return!e.operationName||(e.operationName!==t||(!e.operationRelativePath||!a.includes(e.operationRelativeTypescriptFilePath)))};exports.shouldDeleteTsModel=shouldDeleteTsModel;
/**
 * From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.
 */
var cleanupTsDatabase=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var a,r,n;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,(0,get_path_1.getOperationPath)(e)];case 1:
//console.log({ operationBasePath });
return(a=o.sent())?[4/*yield*/,(0,get_package_source_paths_1.getPackageSourcePaths)({operationBasePath:a})]:[2/*return*/];case 2:return r=o.sent().map((function(e){return(0,get_path_1.getOperationRelativePath)(e,a)})),[4/*yield*/,Promise.all(code_types_1.typescriptIndexModels.map((function(a){return database_1.db.remove(a,(function(t){
/*
                            if (shouldRemove) {
                              console.log({
                                modelName,
                                operationRelativePaths,
                                model: model.name,
                                shouldRemove,
                                ts: model.operationRelativeTypescriptFilePath,
                              });
                            }*/
return(0,exports.shouldDeleteTsModel)(t,e,r)}),{operationName:e,manualProjectRoot:t})})))];case 3:return n=o.sent(),[2/*return*/,{amountRemoved:n.reduce((function(e,t){return e+(t.amountRemoved||0)}),0)}]}}))}))};exports.cleanupTsDatabase=cleanupTsDatabase;
//# sourceMappingURL=cleanupTsDatabase.js.map