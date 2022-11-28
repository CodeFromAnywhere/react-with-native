"use strict";var __awaiter=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{s(n.next(e))}catch(e){r(e)}}function l(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,l)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.shouldSkip=void 0;var database_1=require("database"),filename_conventions_1=require("filename-conventions"),folder_get_updated_at_1=require("folder-get-updated-at"),fs_util_1=require("fs-util"),isOperationBuildNeeded_1=require("./isOperationBuildNeeded"),shouldSkip=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,o,n,i,r,a,l,s,u,d,c,p,f;return __generator(this,(function(_){switch(_.label){case 0:return t=e.operationBasePath,e.debug,o=e.force,n=e.rebuildUpdatedAt,i=e.operationManualProjectRoot,r=(0,fs_util_1.getLastFolder)(t),o?(console.log("Not skipping (force)"),[2/*return*/,!1]):[4/*yield*/,database_1.db.get("Operation",{operationName:r,manualProjectRoot:i})];case 1:return a=_.sent()[0],(null===(c=a.operation)||void 0===c?void 0:c.folderNameIndexed)?n&&(!(null===(p=a.operation)||void 0===p?void 0:p.lastRebuildAt)||a.operation.lastRebuildAt<=n)?(console.log("Not skipping because rebuild updated"),[2/*return*/,!1]):(l=fs_util_1.path.join(t,"src"),[4/*yield*/,(0,folder_get_updated_at_1.folderGetUpdatedAt)({folderPath:l})]):(console.log("Not skipping because no folderNameIndexed (likely never indexed) "),[2/*return*/,!1]);case 2:return s=_.sent(),!(null===(f=a.operation)||void 0===f?void 0:f.lastRebuildAt)||a.operation.lastRebuildAt<=s?(console.log("Not skipping because src updated"),[2/*return*/,!1]):fs_util_1.fs.existsSync(fs_util_1.path.join(t,filename_conventions_1.databaseFolderName))?(u=!fs_util_1.fs.existsSync(fs_util_1.path.join(t,filename_conventions_1.buildFolderName)),d=(0,isOperationBuildNeeded_1.isOperationBuildNeeded)(t),u&&d?(console.log("Not skipping because noBuildFolder"),[2/*return*/,!1]):[2/*return*/,!0]):(console.log("Not skipping because has no db folder "),[2/*return*/,!1])}}))}))};exports.shouldSkip=shouldSkip;
//# sourceMappingURL=shouldSkip.js.map