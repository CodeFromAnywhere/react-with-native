"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPreferredExtensionFromType=void 0;
/**
 * Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...
 *
 * Here the extension is decided.
 *
 * NB: we also need to convert the file itself in case of mp3
 */
var getPreferredExtensionFromType=function(e){return"audio/mp4"===e?"mp3":null==e?void 0:e.split("/").pop()};exports.getPreferredExtensionFromType=getPreferredExtensionFromType;
//# sourceMappingURL=getPreferredExtensionFromType.js.map