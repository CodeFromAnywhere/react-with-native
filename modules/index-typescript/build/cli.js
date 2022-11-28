"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var indexTypescript_1=require("./indexTypescript"),cli=function(){var e=process.argv.slice(2),i=e.pop();if(i){var r="null"===i?null:i;
// NB: last argument has been removed, which should be the manualProjectRoot
(0,indexTypescript_1.indexTypescript)({filePaths:e,manualProjectRoot:r,showLogging:!0})}};
/**
 * Executes indexTypescript for some files.
 *
 * NB: Ensure the last argument is the manualProjectRoot or null if there is none
 */cli();
//# sourceMappingURL=cli.js.map