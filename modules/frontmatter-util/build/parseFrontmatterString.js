"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseFrontmatterString=void 0;
/**
 * Parse a string as stored in frontmatter back to the original string
 */
var parseFrontmatterString=function(r){return(r.includes(",")?r.substring(1,r.length-1):r).replaceAll("\\n","\n")};exports.parseFrontmatterString=parseFrontmatterString;
//# sourceMappingURL=parseFrontmatterString.js.map