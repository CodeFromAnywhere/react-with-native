"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pathArrayIsOperation=void 0;var fs_util_1=require("fs-util"),pathArrayIsOperation=function(r){var t=!!r.find((function(r){return"package.json"===fs_util_1.path.parse(r).base})),e=!!r.find((function(r){return"tsconfig.json"===fs_util_1.path.parse(r).base}));return t&&e};
/**
 * Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation
 *
 * Handy for `cancelRecursionOn` in `explore`
 */exports.pathArrayIsOperation=pathArrayIsOperation;
//# sourceMappingURL=util.js.map