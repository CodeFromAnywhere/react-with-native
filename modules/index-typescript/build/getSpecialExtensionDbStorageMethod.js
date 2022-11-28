"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSpecialExtensionDbStorageMethod=void 0;
/** returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod */
var getSpecialExtensionDbStorageMethod=function(e){if(e){
/**
     * put any models here that should, if they are used as extension, have a db model generated
     */
var o={TsIndexModelType:"jsonMultiple",OperationIndexModelType:"jsonMultiple",DefaultModelType:"jsonMultiple",SlugModelType:"jsonMultiple",CsvModelType:"csv",KeyValueMarkdownModelType:"keyValueMarkdown",CategoryModelType:"jsonMultiple",MarkdownModelType:"markdown"},t=Object.keys(o),l=e.find((function(e){return t.includes(e)}));if(l)return o[l]}};exports.getSpecialExtensionDbStorageMethod=getSpecialExtensionDbStorageMethod;
//# sourceMappingURL=getSpecialExtensionDbStorageMethod.js.map