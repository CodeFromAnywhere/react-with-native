"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.frontmatterParseToString=exports.quotedOrNot=exports.getFrontmatterValueString=exports.stringifyNewlines=void 0;var make_test_1=require("make-test"),js_util_1=require("js-util"),stringifyNewlines=function(t){return t.replaceAll("\n","\\n")};exports.stringifyNewlines=stringifyNewlines;var getFrontmatterValueString=function(t){return void 0===t?null:null===t?"null":"number"==typeof t||"boolean"==typeof t||"boolean"==typeof t?String(t):Array.isArray(t)?t.map(exports.quotedOrNot).map(exports.stringifyNewlines).join(", "):"string"==typeof t?(0,exports.stringifyNewlines)((0,exports.quotedOrNot)(t)):
// NB: according to current support this should never happen
"object"==typeof t?'"'.concat(JSON.stringify(t),'"'):null};exports.getFrontmatterValueString=getFrontmatterValueString;
/**
 * For now, simply quote a string if it contains commas
 *
 * There are probably more edgecases that need to be fixed here
 */
var quotedOrNot=function(t){return t.includes(",")?'"'.concat(t,'"'):t};exports.quotedOrNot=quotedOrNot;
/**
 * Parses frontmatter object into a frontmatter string
 * - includes a newline at the end
 * - string[] becomes a comma separated string
 * TODO: maybe parse xxxAt values into human readable dates
 */
var frontmatterParseToString=function(t){var e=Object.keys(t).map((function(e){var r=t[e],n=(0,exports.getFrontmatterValueString)(r);return null===n?null:"".concat(e,": ").concat(n)})).filter(js_util_1.notEmpty);return 0===e.length?"":"---\n".concat(e.join("\n"),"\n---\n")};exports.frontmatterParseToString=frontmatterParseToString,exports.test=[(0,make_test_1.makeTest)((function(){return(0,exports.frontmatterParseToString)({a:1,b:2,c:!0,d:"string"})}),(function(t){return"---\na: 1\nb: 2\nc: true\nd: string\n---\n"===t})),(0,make_test_1.makeTest)((function(){return(0,exports.frontmatterParseToString)({})}),(function(t){return""===t}))];
//# sourceMappingURL=frontmatterParseToString.js.map