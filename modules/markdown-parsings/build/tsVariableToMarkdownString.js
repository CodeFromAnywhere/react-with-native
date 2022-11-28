"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tsVariableToMarkdownString=void 0;var js_util_1=require("js-util"),tsVariableToMarkdownString=function(t){return["# 📄 ".concat(t.name," (").concat(t.isExported?"exported":"unexported"," ").concat(t.classification,")"),t.description].filter(js_util_1.notEmpty).join("\n\n")};
/**
 */exports.tsVariableToMarkdownString=tsVariableToMarkdownString;
//# sourceMappingURL=tsVariableToMarkdownString.js.map