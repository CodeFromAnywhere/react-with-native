"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.trimClassName=void 0;var trimClassName=function(t){
// console.log("trimClassName", { className, classNames, trimmedClassName });
return t.split(" ").filter((function(t){return!(""===t||t.startsWith("focus:")||t.startsWith("hover:")||t.startsWith("shadow-")||t.startsWith("cursor-")||"block"===t||"h-screen"===t||"w-screen"===t||"undefined"===t||"select-none"===t)})).join(" ")};exports.trimClassName=trimClassName;
//# sourceMappingURL=trimClassName.native.js.map