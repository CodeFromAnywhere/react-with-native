"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.indexDbModelFolders=exports.indexDbModels=void 0;
// NB: I'm creating circular imports if I start using any k-type things in convert-case, so be careful.
const convert_case_1=require("convert-case");
/**
 * All type interfaces that are used to index stuff, which are added to the database
 *
 * NB: Maybe we could simply get this from the database? Haha, not sure if that's handy, because this is used to generate the database xD
 */exports.indexDbModels=["TsBuildError","TsLintWarning","TsExport","TsImport","TsComment","TsInterface","TsFunction","TsVariable","File"],exports.indexDbModelFolders=exports.indexDbModels.map(convert_case_1.kebabCase).map((e=>`${e}s`));
//# sourceMappingURL=TypescriptIndex.js.map