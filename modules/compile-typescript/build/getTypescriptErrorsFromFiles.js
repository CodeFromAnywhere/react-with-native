"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTypescriptErrorsFromFiles=void 0;var log_1=require("log"),fs_util_1=require("fs-util"),model_types_1=require("model-types"),typescript_1=__importDefault(require("typescript")),get_path_1=require("get-path"),js_util_1=require("js-util");
/**
 * uses official typescript compiler to check all given files for compilation errors
 */
function getTypescriptErrorsFromFiles(e){var t=e.filePaths,r=e.debug;try{var i=typescript_1.default.createProgram(t,{}),a=i.emit(void 0,(function(e){r&&console.log("emitted ".concat(e,", not writing."))})),s=typescript_1.default.getPreEmitDiagnostics(i).concat(a.diagnostics).map((function(e){var r=null,i=t[0],a=(0,get_path_1.findOperationBasePath)(i);
// TODO: Fix this! Obviously this isn't correct
if(a){var s=(0,get_path_1.getOperationPathParse)(i);if(s){var o=(0,fs_util_1.getLastFolder)(a),l=s.operationRelativeTypescriptFilePath;if(e.file&&e.start){var p=typescript_1.default.getLineAndCharacterOfPosition(e.file,e.start),n=p.line,u=p.character;r={message:c=typescript_1.default.flattenDiagnosticMessageText(e.messageText,"\n"),operationName:o,operationRelativeTypescriptFilePath:l,line:n+1,character:u+1,id:(0,model_types_1.generateId)(),
// TODO: later I can give this the name of the error maybe
name:"TsBuildError",slug:"ts-build-error"}}else{var c=typescript_1.default.flattenDiagnosticMessageText(e.messageText,"\n");r={id:(0,model_types_1.generateId)(),message:c,
// TODO: later I can give this the name of the error maybe
name:"TsBuildError",slug:"ts-build-error",operationRelativeTypescriptFilePath:s.operationRelativeTypescriptFilePath}}return r}}})).filter(js_util_1.notEmpty);return s}catch(e){return(0,log_1.log)("WTF raar ".concat(e),{type:"error"}),[]}}exports.getTypescriptErrorsFromFiles=getTypescriptErrorsFromFiles;
//# sourceMappingURL=getTypescriptErrorsFromFiles.js.map