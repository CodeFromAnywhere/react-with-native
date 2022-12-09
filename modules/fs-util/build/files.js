#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(c,s){function o(e){try{i(r.next(e))}catch(e){s(e)}}function a(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var n;e.done?c(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}i((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,c,s,o={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(t=1,r&&(c=2&a[0]?r.return:a[0]?r.throw||((c=r.return)&&c.call(r),0):r.next)&&!(c=c.call(r,a[1])).done)return c;switch(r=0,c&&(a=[2&a[0],c.value]),a[0]){case 0:case 1:c=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(c=o.trys,(c=c.length>0&&c[c.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!c||a[1]>c[0]&&a[1]<c[3])){o.label=a[1];break}if(6===a[0]&&o.label<c[1]){o.label=c[1],c=a;break}if(c&&o.label<c[2]){o.label=c[2],o.ops.push(a);break}c[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e],r=0}finally{t=c=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.writeStringToFile=exports.writeJsonToFile=exports.canExecuteSync=exports.canWriteSync=exports.canReadSync=exports.canSeeSync=exports.canExecute=exports.canWrite=exports.canRead=exports.canSee=exports.canAccessSync=exports.canAccess=exports.writeToFiles=void 0;var log_1=require("log"),fs_1=require("./fs"),js_1=require("./js"),writeToFiles=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n;return __generator(this,(function(t){switch(t.label){case 0:return 0,0,n=Object.keys(e).map((function(n){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(c){switch(c.label){case 0:return t=e[n],[4/*yield*/,(0,exports.writeJsonToFile)(n,t)];case 1:return(r=c.sent())&&0,r||0,[2/*return*/,r]}}))}))})),[4/*yield*/,Promise.all(n)];case 1:return t.sent(),[2/*return*/]}}))}))};exports.writeToFiles=writeToFiles;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
var canAccess=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4/*yield*/,fs_1.fs.access(e,n)];case 1:return t.sent(),[2/*return*/,!0];case 2:return t.sent(),[2/*return*/,!1];case 3:return[2/*return*/]}}))}))};exports.canAccess=canAccess;
/**
 * uses fs.access to determine if something can be accessed
 *
 * Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).
 */
var canAccessSync=function(e,n){try{return fs_1.fs.accessSync(e,n),!0}catch(e){return!1}};exports.canAccessSync=canAccessSync;
/**
 * File is visible to the calling process
 */
var canSee=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.F_OK)]}))}))};exports.canSee=canSee;
/**
 * File is readable to the calling process
 */
var canRead=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.R_OK)]}))}))};exports.canRead=canRead;
/**
 * File is writable to the calling process
 */
var canWrite=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.W_OK)]}))}))};exports.canWrite=canWrite;
/**
 * File is executable to the calling process
 */
var canExecute=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.canAccess)(e,fs_1.fs.constants.X_OK)]}))}))};exports.canExecute=canExecute;
/**
 * File is visible to the calling process
 */
var canSeeSync=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.canAccessSync)(e,fs_1.fs.constants.F_OK)]}))}))};exports.canSeeSync=canSeeSync;
/**
 * File is readable to the calling process
 */
var canReadSync=function(e){return(0,exports.canAccessSync)(e,fs_1.fs.constants.R_OK)};exports.canReadSync=canReadSync;
/**
 * File is writable to the calling process
 */
var canWriteSync=function(e){return(0,exports.canAccessSync)(e,fs_1.fs.constants.W_OK)};exports.canWriteSync=canWriteSync;
/**
 * File is executable to the calling process
 */
var canExecuteSync=function(e){return(0,exports.canAccessSync)(e,fs_1.fs.constants.X_OK)};exports.canExecuteSync=canExecuteSync;
/**
 * write json to a file
 *
 * makes the dir and file if they don't exist
 */
var writeJsonToFile=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(c){switch(c.label){case 0:return n?(t=JSON.stringify(n,null,2),r=(0,js_1.getFolder)(e),fs_1.fs.existsSync(r)?[3/*break*/,2]:[4/*yield*/,fs_1.fs.mkdir(r,{recursive:!0})]):(console.log({p:e,data:n}),[2/*return*/,!1]);case 1:
//first, make sure the folder exists
c.sent(),c.label=2;case 2:
//then write it
return[4/*yield*/,fs_1.fs.writeFile(e,t,"utf8")];case 3:
//then write it
return c.sent(),[2/*return*/,!0]}}))}))};exports.writeJsonToFile=writeJsonToFile;
/**
 * write string to a file
 *
 * makes the dir and file if they don't exist
 */
var writeStringToFile=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return null==n||"string"!=typeof n?((0,log_1.log)("Incorrect data provided",n),[2/*return*/,!1]):(t=(0,js_1.getFolder)(e),fs_1.fs.existsSync(t)?[3/*break*/,2]:[4/*yield*/,fs_1.fs.mkdir(t,{recursive:!0})]);case 1:
//first, make sure the folder exists
r.sent(),r.label=2;case 2:
//then write it
return[4/*yield*/,fs_1.fs.writeFile(e,n,"utf8")];case 3:
//then write it
return r.sent(),[2/*return*/,!0]}}))}))};exports.writeStringToFile=writeStringToFile;
//# sourceMappingURL=files.js.map