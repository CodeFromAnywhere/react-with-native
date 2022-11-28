"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFileWithExtension=exports.hasSameProjectPath=exports.getInstanceNames=void 0;var fs_util_1=require("fs-util"),getInstanceNames=function(e,
// NB: I tried with  <T extends TsIndexModelType> but didn't work with a map over an object... strange...
t){return e.filter((0,exports.hasSameProjectPath)(t)).map((function(e){return e.name}))};
/**
 * returns the paths of instances in a file, like functions, variables or interfaces
 */exports.getInstanceNames=getInstanceNames;
/**
 * function that returns a filter function that can check if some object (that extends an TsIndexModelType) has the same relative file path from the project root
 */
var hasSameProjectPath=function(e){return function(t){return t.projectRelativePath===e}};exports.hasSameProjectPath=hasSameProjectPath;var getFileWithExtension=function(e){return fs_util_1.path.parse(e).base};exports.getFileWithExtension=getFileWithExtension;
//# sourceMappingURL=util.js.map