"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.indexDbModelFolders=exports.indexDbModels=exports.typescriptIndexModels=void 0;
// NB: I'm creating circular imports if I start using any k-type things in convert-case, so be careful.
const convert_case_1=require("convert-case");exports.typescriptIndexModels=["TsBuildError","TsLintWarning","TsExport","TsImport","TsComment","TsInterface","TsFunction","TsVariable"],
/**
 * All type interfaces that are used to index stuff, which are added to the database
 *
 * NB: It's not handy to get this from the database because this is used to generate the database xD
 */
exports.indexDbModels=[...exports.typescriptIndexModels,"OperationIndex"],exports.indexDbModelFolders=exports.indexDbModels.map(convert_case_1.kebabCase).map((e=>`${e}s`));
//# sourceMappingURL=TypescriptIndex.js.map