#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function u(e){try{i(n.next(e))}catch(e){o(e)}}function s(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(u,s)}i((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=r.call(e,u)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeObjectParameters=exports.notEmpty=exports.mergeObjectsArray=exports.sumAllKeys=exports.sumObjectParameters=exports.getObjectFromParamsString=exports.getSubsetFromObject=exports.takeFirst=exports.objectValuesMap=exports.makeArray=exports.onlyUnique2=exports.onlyUnique=exports.mapValuesSync=exports.mapValues=exports.mapKeys=exports.isAllTrue=exports.groupByKey=exports.createEnum=exports.apply=void 0;
/**
 * function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.
 */
var apply=function(e,r){return e.reduce((function(e,r){return r(e)}),r)};exports.apply=apply;
/**
 * creates an enum object from a readonly const array so you don't have to
 * ------
 * const taskNames = ["a","b","c"] as const;
 * type TaskNames = typeof taskNames[number];
 * const enummm = createEnum(taskNames);
 * (value of enummm: { a: "a", b: "b", c: "c" })
 */
var createEnum=function(e){return e.reduce((function(e,r){var t;return __assign(__assign({},e),((t={})[r]=r,t))}),{})};exports.createEnum=createEnum;
/**
 * key should be of type string!
 *
 * input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
 * groupByKey(input, "path")
 * ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}
 */
var groupByKey=function(e,r){return e.reduce((function(e,t){var n=e;return n[t[r]]?
// push to existing group-object parameter
n[t[r]].push(t):
// create a new parameter in the group-object
n[t[r]]=[t],n}),{})};exports.groupByKey=groupByKey;
/**
 * checks if all items in an array are true
 */
var isAllTrue=function(e){return!e.find((function(e){return!e}))};exports.isAllTrue=isAllTrue;
/**
 * maps over all keys in an object and replaces them using a mapfn
 */
var mapKeys=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,Promise.all(Object.keys(e).map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return t={oldKey:e},[4/*yield*/,r(e)];case 1:return[2/*return*/,(t.newKey=n.sent(),t)]}}))}))})))];case 1:return t=n.sent(),[2/*return*/,(0,exports.mergeObjectsArray)(t.map((function(r){var t;return r.newKey?((t={})[r.newKey]=e[r.oldKey],t):null})).filter(notEmpty))]}}))}))};exports.mapKeys=mapKeys;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * NB: TODO: the current type interface leads this object to be detyped if it had a clear type. I hope I can find a way to solve this!
 */
var mapValues=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,Promise.all(Object.keys(e).map((function(t){return __awaiter(void 0,void 0,void 0,(function(){var n,a;return __generator(this,(function(o){switch(o.label){case 0:return a={},n=t,[4/*yield*/,r(e[t])];case 1:return[2/*return*/,(a[n]=o.sent(),a)]}}))}))})))];case 1:return t=n.sent(),[2/*return*/,(0,exports.mergeObjectsArray)(t)]}}))}))};exports.mapValues=mapValues;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * sync
 */
var mapValuesSync=function(e,r){var t=Object.keys(e).map((function(t){var n;return(n={})[t]=r(e[t]),n}));return(0,exports.mergeObjectsArray)(t)};
/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */
function onlyUnique(e,r,t){return t.findIndex((function(r){return r===e}))===r}exports.mapValuesSync=mapValuesSync,exports.onlyUnique=onlyUnique;
/**
 * function that returns a filter function that can be used as a filter for any array. removes duplicates.
 *
 * optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well
 *
 *
 */
var onlyUnique2=function(e){return function(r,t,n){return n.findIndex((function(t){return e?e(t,r):t===r}))===t}};exports.onlyUnique2=onlyUnique2;
/**
 * if something is not an array, returns it as the first element of an array
 *
 * if the input is undefined, an empty array will be returned.
 *
 * NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.
 */
var makeArray=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.map((function(e){return e?Array.isArray(e)?e:[e]:[]})).flat()};
/**
 * not sure if this is the best way, but it does save some lines of code!
 *
 * maps over an object's values with a map function
 */
function objectValuesMap(e,r){return Object.keys(e).reduce((function(t,n){return t[n]=r(e[n],n),t}),{})}exports.makeArray=makeArray,exports.objectValuesMap=objectValuesMap;
/**
 * takes any type T or an array of T and returns T or the first of the array (which is T)
 */
var takeFirst=function(e){return(0,exports.makeArray)(e)[0]};exports.takeFirst=takeFirst;
/**
 * takes an object and a subset of its keys and returns a subset of that object
 *
 * input: { x: "a", y: "b", z: "c" } and ["x"]
 *
 * output: { x: "a" }
 */
var getSubsetFromObject=function(e,r){return r.reduce((function(r,t){var n;return __assign(__assign({},r),((n={})[t]=e[t],n))}),{})};exports.getSubsetFromObject=getSubsetFromObject;
/**
 * useful for cli's that only take strings. This creates an object from a string
 *
 * input: "x:a, y:b, z:c"
 * output: { x: "a", y: "b", z: "c" }
 *
 * TODO: would be nice if we can validate this string immediately using a JSON SCHEMA
 */
var getObjectFromParamsString=function(e){return(0,exports.mergeObjectsArray)(e.split(",").map((function(e){return e.trim().split(":")})).map((function(e){var r;return e[0]&&e[1]?((r={})[e[0].trim()]=e[1],r):null})).filter(notEmpty))};exports.getObjectFromParamsString=getObjectFromParamsString;
/** sums all parameters in two objects together */
var sumObjectParameters=function(e,r){var t=Object.keys(e);
// NB: too bad we still need `as TObject` here. I would love to learn how to prevent that
return(0,exports.mergeObjectsArray)(t.map((function(t){var n;return(n={})[t]=e[t]+r[t],n})))};exports.sumObjectParameters=sumObjectParameters;
/**
 * sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined
 */
var sumAllKeys=function(e,r){return e.reduce((function(e,t){
// NB: not needed normally, but there seems to be some corrupt data here and there
return t?(0,exports.mergeObjectsArray)(r.map((function(r){var n,a=e&&e[r]||0,o=(null==t?void 0:t[r])||0,u=e&&void 0!==e[r]||void 0!==t[r]?a+o:void 0;return(n={})[r]=u,n}))):e}),null)};exports.sumAllKeys=sumAllKeys;var mergeObjectsArray=function(e){return e.reduce((function(e,r){return __assign(__assign({},e),r)}),{})};
/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */
function notEmpty(e){return null!=e}exports.mergeObjectsArray=mergeObjectsArray,exports.notEmpty=notEmpty;
/**
 * merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.
 *
 * In short: merges two objects, for every parameter, use the default as a fallback
 *
 * NB: could be useful to rewrite this later if I need multiple levels of defaults... The only provided argument can just be a T[], which reduces that by using deeper and deeper fallbacks. For example, VSCode does this with settings: you have workspace settings, user settings, and global settings
 */
var mergeObjectParameters=function(e,r){return Object.keys(__assign(__assign({},e),r)).reduce((function(t,n){var a;return __assign(__assign({},t),((a={})[n]=(null==e?void 0:e[n])||(null==r?void 0:r[n]),a))}),{})};exports.mergeObjectParameters=mergeObjectParameters;
//# sourceMappingURL=general.js.map