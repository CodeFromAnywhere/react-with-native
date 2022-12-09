"use strict";var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((i=i.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.signupWithPasswordWithContext=void 0;var addDeviceAuthenticationMethodWithContext_1=require("./addDeviceAuthenticationMethodWithContext"),signupWithContext_1=require("./signupWithContext"),convert_case_1=require("convert-case"),asset_functions_node_1=require("asset-functions-node"),signupWithPasswordWithContext=function(t,e,n,i,o,r){return __awaiter(void 0,void 0,void 0,(function(){var s,a,u,c;return __generator(this,(function(h){switch(h.label){case 0:return[4/*yield*/,(0,asset_functions_node_1.processAsset)(i)];case 1:
// processing is a oneliner for this type of functions!
return i=h.sent(),"usernamePassword",o!==r?[2/*return*/,{isSuccessful:!1,message:"Those passwords don't match"}]:[4/*yield*/,(0,addDeviceAuthenticationMethodWithContext_1.addDeviceAuthenticationMethodWithContext)(t,"usernamePassword",n,o)];case 2:return s=h.sent(),a=s.functionContext,u=s.authenticationMethod,s.isSuccessful,c=s.message,(null==u?void 0:u.isAuthenticated)&&a?[4/*yield*/,(0,signupWithContext_1.signupWithContext)(a,{name:e,slug:(0,convert_case_1.slugify)(e),pictureImage:i})]:(console.log("NOT AUTHENTICATED AFTER ADDING DEVICE",{authenticationMethod:u,newFunctionContext:a}),[2/*return*/,{isSuccessful:!1,message:c||"Strange"}]);case 3:return[2/*return*/,h.sent()]}}))}))};exports.signupWithPasswordWithContext=signupWithPasswordWithContext,exports.signupWithPasswordWithContext.isPublic=!0;
//# sourceMappingURL=signupWithPasswordWithContext.js.map