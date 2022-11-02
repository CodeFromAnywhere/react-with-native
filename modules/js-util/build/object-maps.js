"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function c(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(c,s)}u((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=c.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=r.call(e,c)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapKeys=exports.mapValuesSync=exports.objectValuesMap=exports.objectMapSync=exports.objectMapAsync=void 0;var general_1=require("./general"),getObjectKeysArray_1=require("./getObjectKeysArray"),mergeObjectsArray_1=require("./mergeObjectsArray"),objectMapAsync=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t,n;return __generator(this,(function(a){switch(a.label){case 0:return t=(0,getObjectKeysArray_1.getObjectKeysArray)(e),n=mergeObjectsArray_1.mergeObjectsArray,[4/*yield*/,Promise.all(t.map((function(t){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o;return __generator(this,(function(c){switch(c.label){case 0:return n=e[t],o={},a=t,[4/*yield*/,r(t,n)];case 1:return[2/*return*/,(o[a]=c.sent(),o)]}}))}))})))];case 1:return[2/*return*/,n.apply(void 0,[a.sent()])]}}))}))};exports.objectMapAsync=objectMapAsync;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * Example usage:
 *
 * ```ts
 *
const result = objectMapSync({ hello: "world", isTrue: true }, (key,value) => {
  return `${value}123`;
});
```
 */
var objectMapSync=function(e,r){var t=(0,getObjectKeysArray_1.getObjectKeysArray)(e).map((function(t){var n;return(n={})[t]=r(t,e[t]),n}));return(0,mergeObjectsArray_1.mergeObjectsArray)(t)};exports.objectMapSync=objectMapSync;
/**
 * not sure if this is the best way, but it does save some lines of code!
 *
 * maps over an object's values with a map function
 *
 * DEPRECATED in favour of objectMapSync and objectMapAsync
 */
var objectValuesMap=function(e,r){return Object.keys(e).reduce((function(t,n){return t[n]=r(n,e[n]),t}),{})};exports.objectValuesMap=objectValuesMap;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * sync
 */
var mapValuesSync=function(e,r){var t=Object.keys(e).map((function(t){var n;return(n={})[t]=r(e[t]),n}));return(0,mergeObjectsArray_1.mergeObjectsArray)(t)};exports.mapValuesSync=mapValuesSync;
/**
 * maps over all keys in an object and replaces them using a mapfn
 */
var mapKeys=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,Promise.all(Object.keys(e).map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return t={oldKey:e},[4/*yield*/,r(e)];case 1:return[2/*return*/,(t.newKey=n.sent(),t)]}}))}))})))];case 1:return t=n.sent(),[2/*return*/,(0,mergeObjectsArray_1.mergeObjectsArray)(t.map((function(r){var t;return r.newKey?((t={})[r.newKey]=e[r.oldKey],t):null})).filter(general_1.notEmpty))]}}))}))};exports.mapKeys=mapKeys;
//# sourceMappingURL=object-maps.js.map