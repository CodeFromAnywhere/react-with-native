"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasSubExtension=void 0;var js_util_1=require("js-util"),hasSubExtension=function(e,s,
/**
 * if true, also returns true if the extension is the complete name of the file
 */
t){var i=(0,js_util_1.makeArray)(s),n=e.split("."),r=1===n.length,u=n.pop(),o=i.includes(u);return(!!t||!r)&&o};
/**
 * Returns true if a fileid includes one of the specified subextensions.
 */exports.hasSubExtension=hasSubExtension;
//# sourceMappingURL=hasSubExtension.js.map