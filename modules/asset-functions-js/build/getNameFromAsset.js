"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNameFromAsset=void 0;
/**
 * Returns a preliminary filename, based on the `Asset`
 */
var getNameFromAsset=function(e){return"audio"===e.type?"untitled.mp3":"image"===e.type?"untitled.jpeg":"video"===e.type?"untitled.mp4":e.originalFilename};exports.getNameFromAsset=getNameFromAsset;
//# sourceMappingURL=getNameFromAsset.js.map