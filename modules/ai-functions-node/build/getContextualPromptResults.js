"use strict";var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function u(t){try{l(n.next(t))}catch(t){a(t)}}function i(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,i)}l((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getContextualPromptResults=void 0;var database_1=require("database"),js_util_1=require("js-util"),getContextualPromptResults=function(t){return __awaiter(void 0,void 0,void 0,(function(){var e,r,n,o,a;return __generator(this,(function(u){switch(u.label){case 0:return e=(0,js_util_1.destructureOptionalObject)(t),r=e.prompt_projectRelativePath,n=e.promptSlugs,[4/*yield*/,database_1.db.get("ContextualPromptResult")];case 1:return o=u.sent().map(js_util_1.omitUndefinedValues),a=r?null==o?void 0:o.filter((function(t){return t.prompt_projectRelativePath===r})):o,[2/*return*/,n?a.filter((function(t){return!!t.contextualPromptSlug&&!!n.includes(t.contextualPromptSlug)})):a]}}))}))};exports.getContextualPromptResults=getContextualPromptResults;
//# sourceMappingURL=getContextualPromptResults.js.map