"use strict";
/**
 Insert an array or item inside of an array before a certain index
 
 Example:

 ```ts

 const testArray = [1, 2, 3, 4, 5];
 const result = insertAt(testArray, [99, 100], 2);
 console.log({ testArray, result });

 ```
 */var __read=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var n,a,o=t.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(r){a={error:r}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i},__spreadArray=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,a=0,o=e.length;a<o;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return r.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.putIndexAtIndex=exports.findLastIndex=exports.removeIndexFromArray=exports.insertAt=void 0;var insertAt=function(r,e,
/**
 *
 */
t){var n=Array.isArray(e)?e:[e],a=r.slice(0,t),o=r.slice(t);
// NB: slice makes copies
return __spreadArray(__spreadArray(__spreadArray([],__read(a),!1),__read(n),!1),__read(o),!1)};exports.insertAt=insertAt;
/**
 removes an index from an array

 example:
 
 ```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```
 */
var removeIndexFromArray=function(r,e){var t=r.slice(0,e),n=r.slice(e+1);return __spreadArray(__spreadArray([],__read(t),!1),__read(n),!1)};exports.removeIndexFromArray=removeIndexFromArray;
/**
 * finds the last index of an array where a certain filter holds true
 */
var findLastIndex=function(r,e){var t;return null===(t=r.map((function(r,e){return{item:r,index:e}})).filter((function(r){var t=r.item;return e(t)})).pop())||void 0===t?void 0:t.index};exports.findLastIndex=findLastIndex;
/**
 * Takes an item from an index of an array and put it somewhere at another index
 */
var putIndexAtIndex=function(r,e,t){var n=r[e],a=(0,exports.removeIndexFromArray)(r,e);return(0,exports.insertAt)(a,n,t)};exports.putIndexAtIndex=putIndexAtIndex;
//# sourceMappingURL=array-modifications.js.map