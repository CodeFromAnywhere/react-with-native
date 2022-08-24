"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPossibleModelFiles=void 0;const convert_case_1=require("convert-case"),getPossibleModelFiles=e=>{const s=(0,convert_case_1.kebabCase)(e);return[`${s}.json`,`${s}s.json`,`${s}.csv`,`${s}s.csv`,`${s}.md`,`${s}s.md`]};
/**
 * gets all fileNames that should be only used for this model, by convention
 */exports.getPossibleModelFiles=getPossibleModelFiles;
//# sourceMappingURL=getPossibleModelFiles.js.map