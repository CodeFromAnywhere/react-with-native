"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getQueryPart=void 0;
/**
 * creates a query-string with one key for all strings in an array
 */
var getQueryPart=function(e,t){return e.map((function(e){return"".concat(t,"=").concat(e)})).join("&")};exports.getQueryPart=getQueryPart;
//# sourceMappingURL=url-util.js.map