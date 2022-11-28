"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MeAuthenticationInfo=void 0;var jsx_runtime_1=require("react/jsx-runtime"),api_1=require("api"),js_util_1=require("js-util"),router_1=require("next/router"),PictureWithInfoDropdown_1=require("./PictureWithInfoDropdown"),react_with_native_notification_1=require("react-with-native-notification"),cool_toast_1=require("cool-toast"),asset_view_1=require("asset-view"),MeAuthenticationInfo=function(){var e,t,n,r,i,o=api_1.queries.useGetMeWithContext(),u=(0,js_util_1.destructureOptionalObject)(null===(t=null===(e=o.data)||void 0===e?void 0:e.result)||void 0===t?void 0:t.device),a=(0,router_1.useRouter)(),c=u.currentPersonCalculated?{pictureUrl:(0,asset_view_1.itemGetBackendAssetUrl)({item:u.currentPersonCalculated,backendAsset:u.currentPersonCalculated.pictureImage}),info:null===(n=u.currentPersonCalculated)||void 0===n?void 0:n.name,data:u.currentPersonCalculated}:{info:"Sign in",pictureUrl:void 0},s=(null===(r=u.persons)||void 0===r?void 0:r.map((function(e){return{pictureUrl:(0,asset_view_1.itemGetBackendAssetUrl)({item:e,backendAsset:e.pictureImage}),info:e.name,data:e,isCurrent:e.id===u.currentPersonId}})))||[];return(0,jsx_runtime_1.jsx)(PictureWithInfoDropdown_1.PictureWithInfoDropdown,{current:c,dropdown:s,extraItems:[{text:"2FA Settings",onClick:function(){return a.push("/2fa")}},{text:"Edit your profile",onClick:function(){return a.push("/edit-profile")}},{text:"See your profile",onClick:function(){return a.push("/profile?id=".concat(u.currentPersonId))}},{text:"Login into another account",onClick:function(){return a.push("/login")}},{text:"Create a new account",onClick:function(){return a.push("/signup")}},{text:"Logout from ".concat(null===(i=u.currentPersonCalculated)||void 0===i?void 0:i.name),onClick:function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){switch(r.label){case 0:return[4/*yield*/,api_1.api.logoutWithContext()];case 1:return e=r.sent(),t=e.result,e.isSuccessful,n=e.message,o.refetch(),(0,cool_toast_1.successToast)((null==t?void 0:t.message)||n||"something went wrong (no message)"),[2/*return*/]}}))}))}}],isLoading:o.isLoading,onClickCurrent:u.currentPersonCalculated?void 0:function(){return a.push("/signup")},onSelectDropdownItem:function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return(null==e?void 0:e.id)?[4/*yield*/,api_1.api.switchCurrentPersonWithContext(null==e?void 0:e.id)]:[3/*break*/,2];case 1:t=n.sent().result,(0,react_with_native_notification_1.toast)({title:(null==t?void 0:t.isSuccessful)?"Done":"Error",body:(null==t?void 0:t.message)||"Somethign went wrong"},{hideProgressBar:!0,position:"bottom-right",type:"success"}),o.refetch(),n.label=2;case 2:return[2/*return*/]}}))}))}})};exports.MeAuthenticationInfo=MeAuthenticationInfo;
//# sourceMappingURL=MeAuthenticationInfo.js.map