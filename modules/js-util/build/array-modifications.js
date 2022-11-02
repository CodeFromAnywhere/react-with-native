"use strict";
/**
 Insert an array or item inside of an array before a certain index
 
 Example:

 ```ts

 const testArray = [1, 2, 3, 4, 5];
 const result = insertAt(testArray, [99, 100], 2);
 console.log({ testArray, result });

 ```
 */var __read=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var a,n,o=t.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(r){n={error:r}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}return i},__spreadArray=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var a,n=0,o=e.length;n<o;n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return r.concat(a||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findLastIndex=exports.removeIndexFromArray=exports.insertAt=void 0;var insertAt=function(r,e,
/**
 *
 */
t){var a=Array.isArray(e)?e:[e],n=r.slice(0,t),o=r.slice(t);
// NB: slice makes copies
return __spreadArray(__spreadArray(__spreadArray([],__read(n),!1),__read(a),!1),__read(o),!1)};exports.insertAt=insertAt;
/**
 removes an index from an array

 example:
 
 ```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```
 */
var removeIndexFromArray=function(r,e){var t=r.slice(0,e),a=r.slice(e+1);return __spreadArray(__spreadArray([],__read(t),!1),__read(a),!1)};exports.removeIndexFromArray=removeIndexFromArray;
/**
 * finds the last index of an array where a certain filter holds true
 */
var findLastIndex=function(r,e){var t;return null===(t=r.map((function(r,e){return{item:r,index:e}})).filter((function(r){var t=r.item;return e(t)})).pop())||void 0===t?void 0:t.index};exports.findLastIndex=findLastIndex;
//# sourceMappingURL=array-modifications.js.map