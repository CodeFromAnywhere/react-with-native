"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,u=t.length;a<u;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeKeyValueMarkdown=void 0;var getParentSlug_1=require("../convention/getParentSlug"),removeKeyValueMarkdown=function(e,
/** slug to remove */
t){
// Base case
var r=e.find((function(e){return e.slug===t}));if(!r)return{newStoredData:e,amountRemoved:0,message:"slug not found",isSuccesful:!0};if(r.isHeaderCalculated){
// NB: remove all children (items of which the joined categoryStackCalculated starts with headerLocation)
var n=r.categoryStackCalculated.concat(r.slug).join(","),a=e.filter((function(e){var t=e.slug===r.slug,a=e.categoryStackCalculated.join(",").startsWith(n);return!t&&!a}));return{newStoredData:a,amountRemoved:e.length-a.length,isSuccesful:!0,message:"removed header and all it's children"}}
// It's an item...
var u=e.filter((function(e){return(0,getParentSlug_1.getParentSlug)(e)===(0,getParentSlug_1.getParentSlug)(r)}));if(0===u.length)return{isSuccesful:!1,message:"Tautology",newStoredData:e,amountRemoved:0};
// If the item is one of many in a category, we can simply remove it, because the category is still relevant
if(u.length>1){var s=e.filter((function(e){return e.slug!==r.slug}));return{newStoredData:s,isSuccesful:!0,amountRemoved:e.length-s.length,message:"Removed item where item has more items in its category"}}
// the item is the only one in a category (allItemsInThisCategory.length === 1)
var l=u[0],o=e.find((function(e){return e.slug===(0,getParentSlug_1.getParentSlug)(l)})),i=e.filter((function(e){return e.slug!==l.slug&&e.slug!==(0,getParentSlug_1.getParentSlug)(l)}));if(!o)return{isSuccesful:!0,amountRemoved:e.length-i.length,message:"Removed it from the root",newStoredData:i};
/**
    we need to make the category the first item of its parent (or the start of the file)
    
    first remove the item and the category, then add it in the right place
    */var g=(0,getParentSlug_1.getParentSlug)(o),c=i.findIndex((function(e){return e.slug===g})),d=__assign(__assign({},o),{isHeaderCalculated:!1});if(-1===c){
// parent doesn't exist. This means the category should become an item at the root of the file
var f=__spreadArray([d],i,!0);return{isSuccesful:!0,newStoredData:f,amountRemoved:e.length-f.length}}
// parent exists, so, like I said before, we need to make the category the first item of its parent (or the start of the file)
var _=i.slice(0,c),m=i.slice(c+1),v=i[c],S=__spreadArray(__spreadArray(__spreadArray([],_,!0),[v,d],!1),m,!0);return{newStoredData:S,isSuccesful:!0,amountRemoved:e.length-S.length}};
/**
 * Takes stored data and a slug to remove
 */exports.removeKeyValueMarkdown=removeKeyValueMarkdown;
//# sourceMappingURL=removeKeyValueMarkdown.js.map