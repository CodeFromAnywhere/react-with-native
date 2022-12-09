"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.loginWithContext=void 0;var database_1=require("database"),findLoggedInPersonsWithContext_1=require("./findLoggedInPersonsWithContext"),loginWithContext=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,i,o,s;return __generator(this,(function(a){switch(a.label){case 0:return t=e.device,[4/*yield*/,(0,findLoggedInPersonsWithContext_1.findLoggedinPersonsWithContext)(e)];case 1:return(n=a.sent()).isSuccessful?(r=null===(s=n.persons)||void 0===s?void 0:s.map((function(e){return e.id})),[4/*yield*/,database_1.db.update("Device",(function(e){return e.id===t.id}),(function(e){return __assign(__assign({},e),{personIds:r})}))]):[2/*return*/,{isSuccessful:n.isSuccessful,message:n.message}];case 2:return i=a.sent(),[2/*return*/,{isSuccessful:o=i.isSuccesful||!1,message:o?"Logged in":i.message||"Something went wrong (weird)"}]}}))}))};exports.loginWithContext=loginWithContext;
//# sourceMappingURL=loginWithContext.js.map