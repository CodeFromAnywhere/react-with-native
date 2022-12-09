"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function l(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownPageInfo=void 0;var fs_util_1=require("fs-util"),read_markdown_file_1=require("read-markdown-file"),get_path_1=require("get-path"),getChildren_1=require("./getChildren"),getMarkdownPageInfo=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,a,o,i,l,u,c,s,f,d,p,h,_,w,g,v,b;return __generator(this,(function(y){switch(y.label){case 0:return t=e.contentPage,n=e.markdownCallToActions,r=e.projectRoot,a=e.queryPath,o=e.webOperationName,i=e.webPages,l=(0,fs_util_1.getOneFolderUpPath)(a),u=(0,getChildren_1.getChildren)(i,l),c=a.split("/").pop(),s=u.findIndex((function(e){return c===e})),f=u[s-1],d=f?"".concat(l,"/").concat(f):null,p=u[s+1],h=p?"".concat(l,"/").concat(p):null,(_=(null===(b=t.pageData)||void 0===b?void 0:b.projectRelativeFilePath)?fs_util_1.path.join(r,t.pageData.projectRelativeFilePath):void 0)?[4/*yield*/,(0,read_markdown_file_1.readMarkdownFileToModel)(_,o,n)]:[3/*break*/,2];case 1:return g=y.sent(),[3/*break*/,3];case 2:g=null,y.label=3;case 3:return w=g,v=_?(0,get_path_1.makeRelative)(_,r):null,[2/*return*/,{markdownFile:w,nextQueryPath:h,previousQueryPath:d,projectRelativeMarkdownPath:v}]}}))}))};exports.getMarkdownPageInfo=getMarkdownPageInfo;
//# sourceMappingURL=getMarkdownPageInfo.js.map