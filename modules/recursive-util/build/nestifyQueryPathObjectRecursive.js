"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,a=0,i=e.length;a<i;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return r.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.nestifyQueryPathObjectRecursive=void 0;var nestifyQueryPathObjectRecursive=function(r,e){console.log({level:e});var t=r.reduce((function(r,t,n,a){var i=(t.queryPathRemainder||t.queryPath).split("/").find((function(r){return 0!==r.length}));if(!!r.find((function(r){return r.queryPathChunk===i})))
// Base case 1: if we already have it, skip it, go to the next
return r;var s=a.filter((function(r){return r.queryPath!==t.queryPath})).filter((function(r){return(r.queryPathRemainder||r.queryPath).startsWith(i+"/")})).map((function(r){
// everything after the first part
var e=r.queryPath.split(i)[1];return __assign(__assign({},r),{queryPathRemainder:e})})),u=__assign(__assign({},t),{
// queryPath: folderQueryPath,
children:0===s.length?void 0:__spreadArray([t],(0,exports.nestifyQueryPathObjectRecursive)(s,(e||0)+1),!0),queryPathChunk:i});
// add the new one to the array
return __spreadArray(__spreadArray([],r,!0),[u],!1)}),[]);return t};exports.nestifyQueryPathObjectRecursive=nestifyQueryPathObjectRecursive;
//# sourceMappingURL=nestifyQueryPathObjectRecursive.js.map