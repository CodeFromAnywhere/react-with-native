"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtensionFromAsset=void 0;var fs_util_js_1=require("fs-util-js"),getExtensionFromAsset=function(e){var t="audio"===e.type?"mp3":"image"===e.type?"jpeg":"video"===e.type?"mp4":void 0;return t||(e.originalFilename?(0,fs_util_js_1.getExtension)(e.originalFilename):e.relativePath?(0,fs_util_js_1.getExtension)(e.relativePath):void 0)};
/**
 * Returns a preliminary filename, based on the `Asset`
 */exports.getExtensionFromAsset=getExtensionFromAsset;
//# sourceMappingURL=getExtensionFromAsset.js.map