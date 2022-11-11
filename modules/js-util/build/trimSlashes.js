"use strict";
/**
 * Trims a slash on both sides in any path
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports.trimSlashes=void 0;var trimSlashes=function(e){var t="/"===e.charAt(0),r="/"===e.charAt(e.length-1),s=t?e.slice(1):e;return r?s.slice(0,s.length-1):s};exports.trimSlashes=trimSlashes;
//# sourceMappingURL=trimSlashes.js.map