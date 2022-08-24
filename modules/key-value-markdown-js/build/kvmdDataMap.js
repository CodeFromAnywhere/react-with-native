"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.kvmdDataMap=void 0;
/**
 * DEPRECATED: probably never needed, unless I make it useful
 *
 * mapper function to give a kvmd data object other parameters.
 *
 * NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.
 */
var kvmdDataMap=function(a,e){var t=e.keyName,m=e.valueName,r=e.categoryStackName,o=e.commentName,c=a.map((function(a){var e;return(e={})[t||"name"]=a.name,e[m||"value"]=a.value,e[o||"comment"]=a.comment,e[r||"categoryStack"]=a.categoryStack,e}));return c};exports.kvmdDataMap=kvmdDataMap;
//# sourceMappingURL=kvmdDataMap.js.map