"use strict";
/**
 * KISS; fuck grammar
 *
 * If we are going to apply grammar here, it becomes impossible to create typescript rules that can detect and convert plural/singular parameter names.
 *
 * To pluralize any word we simply attach an "s" at the end
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingular = exports.isPlural = exports.singularize = exports.pluralize = void 0;
var pluralize = function (parameterName) {
    return parameterName.concat("s");
};
exports.pluralize = pluralize;
/**
 * Removes the 's' if it is found at the end of the parameter name
 */
var singularize = function (parameterName) {
    return parameterName.endsWith("s")
        ? parameterName.substring(0, parameterName.length - 1)
        : parameterName;
};
exports.singularize = singularize;
var isPlural = function (parameterName) {
    return parameterName.endsWith("s");
};
exports.isPlural = isPlural;
var isSingular = function (parameterName) {
    return !(0, exports.isPlural)(parameterName);
};
exports.isSingular = isSingular;
//# sourceMappingURL=pluralize.js.map