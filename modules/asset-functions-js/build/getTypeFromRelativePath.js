"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTypeFromRelativePath=void 0;var fs_util_js_1=require("fs-util-js"),getTypeFromRelativePath=function(e){var t=(0,fs_util_js_1.getExtension)(e);return"mp3"===t?"audio":"mp4"===t?"video":"jpeg"===t?"image":"other"};exports.getTypeFromRelativePath=getTypeFromRelativePath;
//# sourceMappingURL=getTypeFromRelativePath.js.map