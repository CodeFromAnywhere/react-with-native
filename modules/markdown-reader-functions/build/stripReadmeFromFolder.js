"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stripReadmeFromFolder=void 0;
/**
 * To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md
 */
var stripReadmeFromFolder=function(e){var r="/readme.md";return e.toLowerCase().endsWith(r)?e.slice(0,e.length-r.length):e};exports.stripReadmeFromFolder=stripReadmeFromFolder;
//# sourceMappingURL=stripReadmeFromFolder.js.map