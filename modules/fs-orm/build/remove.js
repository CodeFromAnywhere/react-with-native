"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.remove=void 0;var log_1=require("log"),remove=function(e,r,o){var t=e.filter((function(e){if(!e)return(0,log_1.log)("Weird value found in your data, removing",{type:"debug"}),!0;var t=r.includes(e.id),u=o.includes(e.slug);return!t&&!u}));return{amountRemoved:t.length-e.length,newStoredData:t,isSuccesful:!0}};
/**
 * Takes stored data and an id or slug to remove
 *
 * NB: this works for every storage method except for key value markdown
 */exports.remove=remove;
//# sourceMappingURL=remove.js.map