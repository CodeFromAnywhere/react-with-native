"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCommonAncestor=void 0;
/**
 * Finds the common ancestor for two absolute pahts
 */
var getCommonAncestor=function(e,o){var t=e.split("/"),n=o.split("/"),r=t.findIndex((function(e,o,t){return n[o]!==e}));return t.slice(0,r).join("/")};exports.getCommonAncestor=getCommonAncestor;
//# sourceMappingURL=getCommonAncestor.js.map