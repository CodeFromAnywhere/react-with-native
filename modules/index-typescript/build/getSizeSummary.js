"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSizeSummary=void 0;var path_util_1=require("path-util"),getSizeSummary=function(e){var t=e.length,r=e.split("\n").length,i=(0,path_util_1.byteCount)(e);return{characters:t,lines:r,bytes:i,bytesPerCharacter:i/t,charactersPerLine:Math.round(t/r),linesPerFile:r,numberOfFiles:1}};
/**
 * takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes
 *
 * TODO: this is not the right place for this function
 */exports.getSizeSummary=getSizeSummary;
//# sourceMappingURL=getSizeSummary.js.map