"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDefaultLocationPattern=exports.getLocationPattern=void 0;var convert_case_1=require("convert-case"),pluralize_1=require("pluralize"),getLocationPattern=function(t,e,a){var o=a.operationRelativePath,n=a.projectRelativePath;return o||(n||(0,exports.getDefaultLocationPattern)(t,e))};exports.getLocationPattern=getLocationPattern;
/**
 * DB main storage convention
 */
var getDefaultLocationPattern=function(t,e){var a=(0,pluralize_1.pluralize)((0,convert_case_1.kebabCase)(e));return"jsonMultiple"===t?"db/".concat(a,".json"):"keyValueMarkdown"===t?"db/".concat(a,".md"):"csv"===t?"db/".concat(a,".csv"):"jsonSingle"===t?"db/".concat(a,"/*.json"):"markdown"===t?"db/".concat(a,"/*.md"):void 0};exports.getDefaultLocationPattern=getDefaultLocationPattern;
//# sourceMappingURL=getLocationPattern.js.map