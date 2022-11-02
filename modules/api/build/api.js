"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{s(n.next(e))}catch(e){a(e)}}function u(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.queries=exports.api=exports.apiWithConfig=exports.untypedApiFunction=exports.AUTH_TOKEN_STORAGE_KEY=void 0;var convert_case_1=require("convert-case"),react_query_1=require("react-query"),server_api_url_1=require("server-api-url"),react_with_native_store_1=require("react-with-native-store"),js_util_1=require("js-util"),sdk_api_keys_1=require("sdk-api-keys");
/**
 *
 */
exports.AUTH_TOKEN_STORAGE_KEY="api.authToken";
/**
 * Used for calling the actual api for a function with some config
 *
 * NB: this is not a typed function as we are just overwriting it so we don't need any inference on this
 */
var untypedApiFunction=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return __awaiter(void 0,void 0,void 0,(function(){var n,i,a,o,u,s,c;return __generator(this,(function(p){switch(p.label){case 0:return[4/*yield*/,(0,react_with_native_store_1.getItem)(exports.AUTH_TOKEN_STORAGE_KEY)];case 1:n=p.sent(),i=t.authToken||n,a=t.apiUrl||server_api_url_1.apiUrl,o="".concat(a,"/function/").concat(e),p.label=2;case 2:return p.trys.push([2,4,,5]),u=new AbortController,s=setTimeout((function(){return u.abort()}),t.timeout||1e4),[4/*yield*/,fetch(o,{method:"POST",signal:t.timeout?u.signal:void 0,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({config:{authToken:i},parameters:r})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return t.timeout||console.warn(e),{isSuccessful:!1,isNotConnected:!0,message:"The API didn't resolve: "+e}}))];case 3:return c=p.sent(),clearTimeout(s),[2/*return*/,c];case 4:return[2/*return*/,{isSuccessful:!1,isNotConnected:!0,message:"The API didn't resolve: "+p.sent()}];case 5:return[2/*return*/]}}))}))};exports.untypedApiFunction=untypedApiFunction,
/**
 * This object contains a api function for every function in the backend
 *
 * The difference from `api` is that it allows you to also insert custom api configurations
 */
exports.apiWithConfig=(0,js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map((function(e){var t,r=((t={})[e]=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return exports.untypedApiFunction.apply(void 0,__spreadArray([e,t],r,!1))},t);return r}))),
/**
 * This object contains an api function for every function in the backend
 *
 *
 * NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so
 */
exports.api=(0,js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map((function(e){var t,r={apiUrl:server_api_url_1.apiUrl},n=((t={})[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return exports.untypedApiFunction.apply(void 0,__spreadArray([e,r],t,!1))},t);return n}))),
/**

This object contains a react-query `useQuery` hook for every api function

 */
exports.queries=(0,js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map((function(e){return e})).map((function(e){var t,r=exports.api[e],n=((t={})[(0,convert_case_1.camelCase)("use-".concat(e))]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=(0,react_query_1.useQuery)(__spreadArray([e],t,!0),(
// @ts-ignore
function(){return r.apply(void 0,t)}),{enabled:!0,refetchOnWindowFocus:"always"});return i},t);return n})));
//# sourceMappingURL=api.js.map