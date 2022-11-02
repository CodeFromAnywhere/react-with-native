"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.upsert=void 0;var js_util_1=require("js-util"),log_1=require("log"),upsert=function(
/**
 * The items that were already there
 */
e,
/**
 * The items that need to be overwritten or inserted
 */
t,
/**
 * If true, the upserting will fail if there are occuring items with equal slugs/ids
 */
r){var u=(0,js_util_1.makeArray)(t),a=0,i=e.map((function(e){if(e){if(-1===u.findIndex((function(t){if(!t)return(0,log_1.log)("weird item found in your data, replacing",{type:"debug"}),!0;var r=t.id===e.id,u=void 0!==t.slug&&t.slug===e.slug;
// NB: sometimes slug can be undefined for some models.
return r||u})))return e;
// NB: it needs to be updated, so simply remove it because the new item is going to be concatenated
a++}
// NB: for every item in the stored data, try to find one that matches
})).filter(js_util_1.notEmpty).concat(t);return r&&a>0?{amountUpdated:0,amountInserted:0,newStoredData:e,amountRemoved:0,isSuccesful:!1,message:"The creation failed because you already have an item with this name"}:{amountUpdated:a,amountInserted:0===a?1:0,newStoredData:i}};exports.upsert=upsert;
//# sourceMappingURL=upsert.js.map