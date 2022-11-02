"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeObjects=exports.mergeObjectParameters=void 0;var omitUndefinedValues_1=require("./omitUndefinedValues"),mergeObjectParameters=function(e,r){return Object.keys(__assign(__assign({},e),r)).reduce((function(t,s){var n;return __assign(__assign({},t),((n={})[s]=(null==e?void 0:e[s])||(null==r?void 0:r[s]),n))}),{})};
/**
 * merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.
 *
 * In short: merges two objects, for every parameter, use the default as a fallback
 *
 * DEPRECATED: in favor of mergeObjects
 */exports.mergeObjectParameters=mergeObjectParameters;
/**
 * merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.
 *
 * Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely
 *
 * Please note that you can provide partial objects as well, as long as you are sure that the final object is full, the type interface is correct.
 *
 * Please note that if a latter object has a key which holds "undefined", it will NOT overwrite it. Anything else WILL
 */
var mergeObjects=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(0!==e.length){var t=e[0],s=e.reduce((function(e,r){if(!r)return e;var t=(0,omitUndefinedValues_1.omitUndefinedValues)(r);return e?__assign(__assign({},e),t):r;
// NB: we cannot guarantee this based on the input!
}),t);return s}};exports.mergeObjects=mergeObjects;
//# sourceMappingURL=object-merge.js.map