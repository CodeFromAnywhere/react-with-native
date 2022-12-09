"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculatePackageJsonDependencies=exports.isImportFromOptionalFile=exports.isAbsoluteImportBuiltin=exports.getPackageNameFromAbsoluteImport=void 0;var js_util_1=require("js-util"),module_1=require("module"),get_path_1=require("get-path"),filename_conventions_1=require("filename-conventions"),getPackageNameFromAbsoluteImport=function(e){var t=e.split("/"),n=t[0];if(n&&0!==n.length)return(n.startsWith("@")?t.slice(0,2).join("/"):n).split(":").pop();
// NB: scoped packages look like `@company/package` and should be parsed correctly as well
};exports.getPackageNameFromAbsoluteImport=getPackageNameFromAbsoluteImport;
/**
 * returns true if the absolute import is built in into node
 */
var isAbsoluteImportBuiltin=function(e){var t=(0,exports.getPackageNameFromAbsoluteImport)(e);return!!t&&module_1.builtinModules.includes(t)};exports.isAbsoluteImportBuiltin=isAbsoluteImportBuiltin;
/**
 * returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency
 */
var isImportFromOptionalFile=function(e){var t=(0,get_path_1.getSrcRelativeFileId)(e.operationRelativeTypescriptFilePath);return(0,filename_conventions_1.hasSubExtension)(t,filename_conventions_1.frontendOptionalFileSubExtensions)};exports.isImportFromOptionalFile=isImportFromOptionalFile;var isImportGenerated=function(e){return e.isModuleFromMonorepo&&(0,filename_conventions_1.isGeneratedOperationName)(e.module)},calculatePackageJsonDependencies=function(
/**
 * Current dependencies object in your operation
 */
e,
/**
 * All imports found in your operation
 */
t,
/**
 * All package-json's in your monorepo
 */
n,o){var r=t.filter((function(e){return e.isAbsolute})).filter((function(e){return!(0,exports.isAbsoluteImportBuiltin)(e.module)})).filter((function(e){return!(0,exports.isImportFromOptionalFile)(e)})).filter((0,js_util_1.onlyUnique2)((function(e,t){return e.module===t.module}))),i=r.filter((function(e){return"value"===e.type})),s=r.filter((function(e){return o&&e.isModuleFromMonorepo&&!(0,filename_conventions_1.isGeneratedOperationName)(e.module)})),a=i.filter(isImportGenerated).length>0,l=r.filter((function(e){return!e.isModuleFromMonorepo})),u=(0,js_util_1.mergeObjectsArray)(l.map((function(t){var n,o=(0,exports.getPackageNameFromAbsoluteImport)(t.module);if(o){var r=null==e?void 0:e[o];
/**
         * TODO: fetch this from monorepo
         */return(n={})[o]="*"!==r&&void 0!==r?r:"*",n}})).filter(js_util_1.notEmpty)),p=(0,js_util_1.mergeObjectsArray)(s.map((function(e){var t,o=(0,exports.getPackageNameFromAbsoluteImport)(e.module);if(o){var r=n.find((function(e){return e.name===o}));if(r){var i=r.version;if(i)return(t={})[o]=i,t}}})).filter(js_util_1.notEmpty));
/**
     *  NB: imports of types are removed and need not to be installed for running this package
     */return{newDependencies:__assign(__assign(__assign({},e),p),u),hasGeneratedDependenciesIndexed:a}};
/**
 * Calculates new packageJson dependencies object based on imports found in the whole operation.
 *
 * For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)
 *
 * Generated packages are not added to dependencies. Instead a config is added saying this operation only works within a monorepo since it has generated operation deps that are not on the npm registry
 *
 * For external modules, uses the version that was already present in dependencies, or uses "*"
 *
 * Also keeps the dependencies that were already there, nothing is removed.
 *
 *
 */exports.calculatePackageJsonDependencies=calculatePackageJsonDependencies;
//# sourceMappingURL=calculatePackageJsonDependencies.js.map