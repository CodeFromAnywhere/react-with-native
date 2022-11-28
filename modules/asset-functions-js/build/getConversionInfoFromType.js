"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getConversionInfoFromType=void 0;
/**
 * Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...
 *
 * Here the extension is decided.
 *
 * NB: we also need to convert the file itself in case of mp3
 */
var getConversionInfoFromType=function(e){var o=(null==e?void 0:e.split("/"))||[],t=o.length>0?o[0]:void 0,r=o.length>0?o[o.length-1]:void 0;return console.log({uploadMimeType:e,lastPart:r}),"audio/mp4"===e||"wav"===r||"x-m4a"===r||"audio"===t?{uploadMimeType:e,targetFormat:"mp3"}:"quicktime"===r||"video"===t?{uploadMimeType:e,targetFormat:"mp4"}:"image"===t?{uploadMimeType:e,targetFormat:"jpg"}:{uploadMimeType:e,targetFormat:r,isUnchecked:!0}};exports.getConversionInfoFromType=getConversionInfoFromType;
//# sourceMappingURL=getConversionInfoFromType.js.map