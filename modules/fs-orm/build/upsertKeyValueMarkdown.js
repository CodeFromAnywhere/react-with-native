"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.upsertKeyValueMarkdown=exports.findParent=void 0;var log_1=require("log"),js_util_1=require("js-util"),getParentSlug_1=require("../convention/getParentSlug"),findParent=function(e,t){return e.categoryStackCalculated.concat(e.slug).join(",")===t.join(",")};exports.findParent=findParent;
/**
 *
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function
 *
 * - otherwise inserts, at the right category, in the right place in the array
 *
 * BEWARE:
 *
 * - the categoryStackCalculated must be existing in the markdownfile.
 * - you cannot insert a header, always insert an item with `isHeaderCalculated:false`
 */
var upsertKeyValueMarkdown=function(e,t){
// First case: try to update if the slug is the same
var a=0,r=e.map((function(e){return e.slug===t.slug?(a++,__assign(__assign({},t),{isHeaderCalculated:e.isHeaderCalculated})):e}));if(a>0)return{amountUpdated:a,amountInserted:0,newStoredData:r};
// If no "update", let's insert
if(t.isHeaderCalculated){
// Headers cannot be inserted.
var n="\n      This case is not supported.\n       \nYou cannot insert a header because it will not have any items, which is not what we want.\n\nIf you create items for a parent-item, the parent-item will convert into a header.\n";return(0,log_1.log)("upsertKeyValueMarkdown: ".concat(n),{type:"warning"}),{isSuccesful:!1,newStoredData:e,amountInserted:0,amountUpdated:0,message:n}}
// insert an item
var s=e.findIndex((function(e){return e.slug===(0,getParentSlug_1.getParentSlug)(t)})),i=e[s];
// If there is no parent, insert it at the start of the file
if(!i)return{isSuccesful:!0,amountInserted:1,newStoredData:__spreadArray([t],e,!0)};if(i.isHeaderCalculated)return{amountInserted:1,newStoredData:(0,js_util_1.insertAt)(e,(0,js_util_1.makeArray)(t),s+1),isSuccesful:!0,message:"Inserted the item in the header parent"};
/**
             
    The parent is an item. in this case:
  
    1) the parent needs to become a category
    2) the item needs to be placed under it
    3) the parent should be removed
    4) the last item that has the same categoryStackCalculated as the parent should be found
    5) This new category with its sole item needs to be placed as the last item value of its parent (below other items, but above sub categories)
  
    */
// 1
var u=__assign(__assign({},i),{isHeaderCalculated:!0}),o=[u,t],l=(0,js_util_1.removeIndexFromArray)(e,s),d=(0,js_util_1.findLastIndex)(l,(function(e){return e.categoryStackCalculated.join(",")===u.categoryStackCalculated.join(",")&&!e.isHeaderCalculated}))||
// NB: not sure if this would fix all edgecases but if the only item in a category is the one that we removed, the finalItemIndex is the parentIndex -1 (but now it's a category)
s-1;
// 2
return{amountUpdated:1,amountInserted:1,newStoredData:(0,js_util_1.insertAt)(l,o,d+1),message:"Inserted into an item (made that item a category, moved it)"}};exports.upsertKeyValueMarkdown=upsertKeyValueMarkdown;
//# sourceMappingURL=upsertKeyValueMarkdown.js.map