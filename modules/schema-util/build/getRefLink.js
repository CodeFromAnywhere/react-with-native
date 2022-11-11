"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRefLink=void 0;
/**
 * gets the $ref from a schema and parses the interface name from it
 */
var getRefLink=function(e){var t;return null===(t=null==e?void 0:e.split("/").pop())||void 0===t?void 0:t.replaceAll("%3C","<").replaceAll("%3E",">")};exports.getRefLink=getRefLink;
//# sourceMappingURL=getRefLink.js.map