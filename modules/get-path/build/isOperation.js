"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isOperation=void 0;var fs_util_1=require("fs-util"),isOperation=function(s){var i=fs_util_1.path.join(s,"package.json"),t=fs_util_1.fs.existsSync(i),e=fs_util_1.path.join(s,"tsconfig.json"),o=fs_util_1.fs.existsSync(e);
// NB: must have these two in order to be an operation at all
return!(!t||!o)};
/**
 * Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json
 */exports.isOperation=isOperation;
//# sourceMappingURL=isOperation.js.map