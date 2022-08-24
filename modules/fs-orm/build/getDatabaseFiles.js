"use strict";var __awaiter=this&&this.__awaiter||function(e,t,o,a){return new(o||(o=Promise))((function(i,s){function n(e){try{r(a.next(e))}catch(e){s(e)}}function l(e){try{r(a.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,l)}r((a=a.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDatabaseFiles=void 0;
// monorepo
const log_1=require("log"),convert_case_1=require("convert-case"),k_explore_1=require("k-explore"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),getPossibleModelFiles_1=require("./getPossibleModelFiles"),getDatabaseFiles=(e,t,o)=>__awaiter(void 0,void 0,void 0,(function*(){const a=(null==t?void 0:t.manualProjectRoot)||(0,get_path_1.getProjectRoot)();if(!a)return[];
// we need to make the convention here
const i=(0,convert_case_1.kebabCase)(e),s=`${i}s`
/**
     * based on configuration and convention, we will fill this array with the files to get data from
     */;let n=[];
// If operation is provided, it's always JSON files, and it's always an Index Model (for now)
if(t.operation){
/** array with one or more operations */
const e="*"===t.operation?yield(0,k_explore_1.exploreOperationFolders)({basePath:(0,get_path_1.getPathsWithOperations)({
// NB: this makes it possible to get other operations
manualProjectRoot:null==t?void 0:t.manualProjectRoot})}):yield(0,get_path_1.getOperationPath)(t.operation,{manualProjectRoot:null==t?void 0:t.manualProjectRoot});if(!e)return(0,log_1.log)(`Operation(s) not found (${t.operation}`,{type:"error"}),[];
// NB: some of these may not exist!
const o=(0,fs_util_1.getPathCombinations)(e,"index",s).filter((e=>fs_util_1.fs.existsSync(e)));n=(yield(0,k_explore_1.explore)({basePath:o,ignore:t.ignoreOperationIndexFiles,search:t.operationIndexFiles,extension:"json"})).map((e=>e.path))}else if(t.folders)
// only looks for `{kebabCase(model)}s?.ext` in these folders (recursively) or *.ext if `all` is true
n=(yield(0,k_explore_1.explore)({basePath:t.folders,search:t.all?void 0:(0,getPossibleModelFiles_1.getPossibleModelFiles)(e),exact:!t.all,extension:["json","md","csv"]})).map((e=>e.path));else{
// Default location for any model
const o=(0,get_path_1.getRootPath)("information",{manualProjectRoot:null==t?void 0:t.manualProjectRoot}),a=(yield(0,k_explore_1.explore)({basePath:(0,fs_util_1.getPathCombinations)(o,[i,`${i}s`]),extension:["json","csv","md"]})).map((e=>e.path));
// looks for `/information/[model]s?.json` and `/information/[model]s?/*.json
n=(0,fs_util_1.getPathCombinations)(o,(0,getPossibleModelFiles_1.getPossibleModelFiles)(e)).concat(a)}return o?n.map((e=>e.substring(a.length))):n}));exports.getDatabaseFiles=getDatabaseFiles;
//# sourceMappingURL=getDatabaseFiles.js.map