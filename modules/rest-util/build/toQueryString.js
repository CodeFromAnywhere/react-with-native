"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toQueryString=void 0;var isValidEntry_1=require("./isValidEntry"),toQueryString=function(t){var r;return t&&(null===(r=Object.entries(t))||void 0===r?void 0:r.filter(isValidEntry_1.isValidEntry).length)>0?"?"+Object.entries(t).filter(isValidEntry_1.isValidEntry).map((function(t){var r=t[0],e=t[1],i=encodeURIComponent(String(e));return"".concat(r,"=").concat(i)})).join("&"):""};
/**
 * returns something like `?x=a&y=b&z=c`
 */exports.toQueryString=toQueryString;
//# sourceMappingURL=toQueryString.js.map