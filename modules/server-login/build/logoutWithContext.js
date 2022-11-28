"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.logoutWithContext=void 0;var database_1=require("database"),logoutWithContext=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,o,a,s,i;return __generator(this,(function(u){switch(u.label){case 0:return(n=e.device).personIds&&n.currentPersonId?(r=(null===(i=n.currentPersonCalculated)||void 0===i?void 0:i.authenticationMethods)||[],(o=n.personIds.filter((function(e){return e!==n.currentPersonId}))).length===n.personIds.length?[2/*return*/,{isSuccessful:!1,message:"Nobody logged out, this is strange..."}]:[4/*yield*/,database_1.db.update("Device",(function(e){return e.id===n.id}),(function(e){var n=t?e.authenticationMethods.concat(r):e.authenticationMethods;return __assign(__assign({},e),{personIds:o,currentPersonId:o[o.length-1],authenticationMethods:n})}))]):[2/*return*/,{isSuccessful:!1,message:"You were already logged out"}];case 1:return a=u.sent(),[2/*return*/,{isSuccessful:s=!!a.isSuccesful&&1===a.amountUpdated,message:s?"Logged out":a.message||"Something went wrong (No updateResult message)"}]}}))}))};
/**
 * Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */exports.logoutWithContext=logoutWithContext;
//# sourceMappingURL=logoutWithContext.js.map