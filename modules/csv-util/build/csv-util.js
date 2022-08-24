"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.csvModelDataToString=void 0;
/**
 * make csv string from a csv model type
 */
var csvModelDataToString=function(n,t){var o,r=null===(o=t.properties)||void 0===o?void 0:o.map((function(n){return n.name}));if(r){var e=r.join(","),i=n.map((function(n){return r.map((function(t){return String(n[t])})).join(",")}));return"".concat(e,"\n").concat(i.join("\n"))}};exports.csvModelDataToString=csvModelDataToString;
//# sourceMappingURL=csv-util.js.map