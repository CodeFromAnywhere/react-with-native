#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function s(e){try{u(n.next(e))}catch(e){a(e)}}function i(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeTest=exports.isResultOfInterface=void 0;
/**
 * TODO: need validate-json-schema. also this can be its own little package, as it can be used in many other places
 *
 * not sure if this should be part of make-test at all, because we want operations to be able to operate independently without the os, right? so then it won't work because you don't always have indexes...
 */
var isResultOfInterface=function(e,t){return!0};exports.isResultOfInterface=isResultOfInterface;
/**
 * create a test that is testable with `runAllTests`...
 */
var makeTest=function(
/**
 * callback that calls the function to test with a certain input
 */
e,
/** If not given, assumes it passes if it returns the type interface it says it returns (and it doesn't crash) */
t){
// NB: don't execute the test immideately, so we return a callback that actually tests
return function(){return __awaiter(void 0,void 0,void 0,(function(){var r,n,o,a,s;return __generator(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4/*yield*/,e()];case 1:return r=i.sent(),n={},o=(0,exports.isResultOfInterface)(r,n),(a=t?o&&t(r):o)||console.dir({response:"❌ TEST FAILED",test:e.toString(),result:r},{depth:999}),[2/*return*/,a];case 2:return s=i.sent(),
// TODO: check if toString here returns the right thing (a string representation of the function to test). otherwise, find a different solution.
console.log("❌ TEST FAILED: ".concat(e.toString()),s),[2/*return*/,!1];case 3:return[2/*return*/]}}))}))}};exports.makeTest=makeTest;
//# sourceMappingURL=general.js.map