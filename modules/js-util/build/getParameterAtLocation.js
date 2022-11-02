"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getParameterAtLocation=void 0;
/**
 * utility function to get a parameter inside of a nested object
 */
var getParameterAtLocation=function(t,e){var r=t[e[0]];return 1===e.length?r:(0,exports.getParameterAtLocation)(r,e.slice(1))};exports.getParameterAtLocation=getParameterAtLocation;
//# sourceMappingURL=getParameterAtLocation.js.map