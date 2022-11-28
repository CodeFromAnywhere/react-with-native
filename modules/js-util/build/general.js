#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var u in e=arguments[t])Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u]);return r},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.notEmpty=exports.sumAllKeys=exports.sumObjectParameters=exports.getObjectFromParamsString=exports.takeFirst=exports.makeArray=exports.onlyUnique2=exports.onlyUnique=exports.isAllTrue=exports.groupByKey=exports.createEnum=exports.apply=exports.sum=exports.noEmptyString=void 0;var mergeObjectsArray_1=require("./mergeObjectsArray"),noEmptyString=function(r){if(""!==r)return r};exports.noEmptyString=noEmptyString;var sum=function(r){return r.reduce((function(r,e){return"number"!=typeof e&&console.log("WTF",e),r+e}),0)};exports.sum=sum;
// sum([1, 2, 3]);
/**
 * function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.
 */
var apply=function(r,e){return r.reduce((function(r,e){return e(r)}),e)};exports.apply=apply;
/**
 * creates an enum object from a readonly const array so you don't have to
 * ------
 * const taskNames = ["a","b","c"] as const;
 * type TaskNames = typeof taskNames[number];
 * const enummm = createEnum(taskNames);
 * (value of enummm: { a: "a", b: "b", c: "c" })
 */
var createEnum=function(r){return r.reduce((function(r,e){var t;return __assign(__assign({},r),((t={})[e]=e,t))}),{})};exports.createEnum=createEnum;
/**
 * key should be of type string!
 *
 * input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
 * groupByKey(input, "path")
 * ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}
 */
var groupByKey=function(r,e){return r.reduce((function(r,t){var n=r;return n[t[e]]?
// push to existing group-object parameter
n[t[e]].push(t):
// create a new parameter in the group-object
n[t[e]]=[t],n}),{})};exports.groupByKey=groupByKey;
/**
 * checks if all items in an array are true
 */
var isAllTrue=function(r){return!r.find((function(r){return!r}))};
/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */
function onlyUnique(r,e,t){return t.findIndex((function(e){return e===r}))===e}exports.isAllTrue=isAllTrue,exports.onlyUnique=onlyUnique;
/**
 * function that returns a filter function that can be used as a filter for any array. removes duplicates.
 *
 * optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well
 *
 *
 */
var onlyUnique2=function(r){return function(e,t,n){return n.findIndex((function(t){return r?r(t,e):t===e}))===t}};exports.onlyUnique2=onlyUnique2;
/**
 * if something is not an array, returns it as the first element of an array
 *
 * if the input is undefined, an empty array will be returned.
 *
 * NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.
 */
var makeArray=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return r.map((function(r){return r?Array.isArray(r)?r:[r]:[]})).flat()};exports.makeArray=makeArray;
/**
 * takes any type T or an array of T and returns T or the first of the array (which is T)
 */
var takeFirst=function(r){return(0,exports.makeArray)(r)[0]};exports.takeFirst=takeFirst;
/**
 * useful for cli's that only take strings. This creates an object from a string
 *
 * input: "x:a, y:b, z:c"
 * output: { x: "a", y: "b", z: "c" }
 *
 * TODO: would be nice if we can validate this string immediately using a JSON SCHEMA
 */
var getObjectFromParamsString=function(r){return(0,mergeObjectsArray_1.mergeObjectsArray)(r.split(",").map((function(r){return r.trim().split(":")})).map((function(r){var e;return r[0]&&r[1]?((e={})[r[0].trim()]=r[1],e):null})).filter(notEmpty))};exports.getObjectFromParamsString=getObjectFromParamsString;
/** sums all parameters in two objects together */
var sumObjectParameters=function(r,e){var t=Object.keys(r);
// NB: too bad we still need `as TObject` here. I would love to learn how to prevent that
return(0,mergeObjectsArray_1.mergeObjectsArray)(t.map((function(t){var n;return(n={})[t]=r[t]+e[t],n})))};exports.sumObjectParameters=sumObjectParameters;
/**
 * sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined
 */
var sumAllKeys=function(r,e){var t=r.reduce((function(r,t){
// NB: not needed normally, but there seems to be some corrupt data here and there
if(!t)return r;var n=(0,mergeObjectsArray_1.mergeObjectsArray)(e.map((function(e){var n,u=r&&r[e]||0,o=(null==t?void 0:t[e])||0,s=r&&void 0!==r[e]||void 0!==t[e]?u+o:void 0;return(n={})[e]=s,n})));return n}),null);return t};
/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */
function notEmpty(r){return null!=r}exports.sumAllKeys=sumAllKeys,exports.notEmpty=notEmpty;
//# sourceMappingURL=general.js.map