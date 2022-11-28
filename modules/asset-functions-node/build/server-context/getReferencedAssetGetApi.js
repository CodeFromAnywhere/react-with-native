"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(s,i){function o(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReferencedAssetGetApi=void 0;var js_util_1=require("js-util"),findAbsoluteAssetPathFromReference_1=require("../util/findAbsoluteAssetPathFromReference"),serverDownloadReply_1=require("../util/serverDownloadReply"),getReferencedAssetGetApi=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,s,i,o,a;return __generator(this,(function(u){switch(u.label){case 0:return e?(t="1"===(0,js_util_1.takeFirst)(e.query.isDownload),r=(0,js_util_1.takeFirst)(e.query.projectRelativeReferencingFilePath),n=(0,js_util_1.takeFirst)(null==e?void 0:e.query.referencingFileRelativeAssetPath),[4/*yield*/,(0,findAbsoluteAssetPathFromReference_1.findAbsoluteAssetPathFromReference)(r,n)]):[2/*return*/,{isSuccessful:!1,message:"No server context provided"}];case 1:return s=u.sent(),i=s.absoluteAssetPath,o=s.message,a=s.isSuccessful,i?[2/*return*/,(0,serverDownloadReply_1.serverDownloadReply)(i,t)]:[2/*return*/,{isSuccessful:a,message:o}]}}))}))};exports.getReferencedAssetGetApi=getReferencedAssetGetApi;
//# sourceMappingURL=getReferencedAssetGetApi.js.map