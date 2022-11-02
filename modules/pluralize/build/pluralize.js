"use strict";
/**
 * KISS; fuck grammar
 *
 * If we are going to apply grammar here, it becomes impossible to create typescript rules that can detect and convert plural/singular parameter names.
 *
 * To pluralize any word we simply attach an "s" at the end
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports.isSingular=exports.isPlural=exports.singularize=exports.pluralize=void 0;var pluralize=function(r){return r.concat("s")};exports.pluralize=pluralize;
/**
 * Removes the 's' if it is found at the end of the parameter name
 */
var singularize=function(r){return r.endsWith("s")?r.substring(0,r.length-1):r};exports.singularize=singularize;var isPlural=function(r){return r.endsWith("s")};exports.isPlural=isPlural;var isSingular=function(r){return!(0,exports.isPlural)(r)};exports.isSingular=isSingular;
//# sourceMappingURL=pluralize.js.map