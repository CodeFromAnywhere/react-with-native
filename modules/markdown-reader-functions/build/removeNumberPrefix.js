"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNumberPrefix=void 0;
/**
 * removes number prefixes from a file or folder name. Does not remove extension
 *
 * defaults to untitled if the file or folder has no name after removing numbers.
 */
var removeNumberPrefix=function(e){return e.split(".").reduce((function(e,r,i,o){return e||(isNaN(Number(r))?o.slice(i).join("."):void 0)}),void 0)||"untitled"};exports.removeNumberPrefix=removeNumberPrefix;
//# sourceMappingURL=removeNumberPrefix.js.map