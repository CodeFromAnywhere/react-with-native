"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.upsert=void 0;var js_util_1=require("js-util"),log_1=require("log"),upsert=function(
/**
 * The items that were already there
 */
e,
/**
 * The items that need to be overwritten or inserted
 */
t){var r=(0,js_util_1.makeArray)(t),u=0,i=e.map((function(e){if(e){if(-1===r.findIndex((function(t){if(!t)return(0,log_1.log)("weird item found in your data, replacing",{type:"debug"}),!0;var r=t.id===e.id,u=t.slug===e.slug;return r||u})))return e;
// NB: it needs to be updated, so simply remove it because the new item is going to be concatenated
u++}
// NB: for every item in the stored data, try to find one that matches
})).filter(js_util_1.notEmpty).concat(t);return{amountUpdated:u,amountInserted:0===u?1:0,newStoredData:i}};exports.upsert=upsert;
//# sourceMappingURL=upsert.js.map