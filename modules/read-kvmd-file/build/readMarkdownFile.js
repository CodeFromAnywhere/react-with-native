"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}l((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.readMarkdownFile=void 0;var fs_util_1=require("fs-util"),markdown_parse_1=require("markdown-parse"),readMarkdownFile=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:return r=fs_util_1.path.parse(e),["md","mdx"].includes(r.ext.slice(1))&&fs_util_1.fs.existsSync(e)?[4/*yield*/,(0,fs_util_1.canRead)(e)]:[2/*return*/,null];case 1:return n.sent()?[4/*yield*/,fs_util_1.fs.readFile(e,"utf8")]:[2/*return*/,null];case 2:return(t=n.sent())?[2/*return*/,(0,markdown_parse_1.mdToJsonParse)(t)]:[2/*return*/,null]}}))}))};exports.readMarkdownFile=readMarkdownFile;
//# sourceMappingURL=readMarkdownFile.js.map