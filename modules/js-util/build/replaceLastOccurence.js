"use strict";var __read=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,c=t.call(e),o=[];try{for(;(void 0===r||r-- >0)&&!(n=c.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(t=c.return)&&t.call(c)}finally{if(a)throw a.error}}return o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.replaceLastOccurence=exports.reverseString=void 0;var reverseString=function(e){return e.split("").reverse().join("")};exports.reverseString=reverseString;
/**
 * Replaces the last occerence of something in a string by something else
 *
 * Example:
 *
 * ```ts
 * const result = replaceLastOccurence("theBestSlugSlugSlug", "Slug", "Slack");
 * console.log(result); // returns theBestSlugSlugSlack
 * ```
 *
 * NB: this is not the most efficient method, as it reverses the string by making it an array, twice. It can probably be done more efficiently by using `String.lastIndexOf`
 */
var replaceLastOccurence=function(e,r,t){var n=__read([e,r,t].map(exports.reverseString),3),a=n[0],c=n[1],o=n[2],s=a.replace(c,o);return(0,exports.reverseString)(s)};exports.replaceLastOccurence=replaceLastOccurence;
//# sourceMappingURL=replaceLastOccurence.js.map