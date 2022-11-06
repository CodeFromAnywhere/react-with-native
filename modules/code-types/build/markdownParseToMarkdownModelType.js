"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownParseToMarkdownModelType = exports.parseMarkdownModelTimestamp = exports.tryParseDate = void 0;
const model_types_1 = require("model-types");
const convert_case_1 = require("convert-case");
/**
 * Tries to parse a date from a string
 * - implements default behavior of `new Date` with a try catch
 * - returns a unix timestamp (ms since 1970 AD)
 *
 * TODO: put in a better location... date-util?
 */
const tryParseDate = (dateString) => {
    try {
        return new Date(dateString).valueOf();
    }
    catch (_a) { }
};
exports.tryParseDate = tryParseDate;
/**
 * First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent
 *
 * If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system
 *
 * If that doesn't succeed, sometimes we'll set it to  the current timestamp
 */
const parseMarkdownModelTimestamp = (parameters, markdownParse, parameterName) => {
    const parameterValue = parameters[parameterName];
    const markdownParseValue = markdownParse[parameterName];
    const parsedParameterValue = typeof parameterValue === "number" && !isNaN(parameterValue)
        ? parameterValue
        : typeof parameterValue === "string"
            ? (0, exports.tryParseDate)(parameterValue)
            : undefined;
    const generatedValue = parameterName === "deletedAt" || parameterName === "openedAt"
        ? 0
        : Date.now();
    const parsedTimestamp = parsedParameterValue !== undefined
        ? parsedParameterValue
        : markdownParseValue !== undefined
            ? markdownParseValue
            : generatedValue;
    return parsedTimestamp;
};
exports.parseMarkdownModelTimestamp = parseMarkdownModelTimestamp;
/**
 * makes a markdownModelType from a markdownParse.
 */
const markdownParseToMarkdownModelType = (markdownParse) => {
    if (!markdownParse)
        return null;
    const { parameters, raw, fileName } = markdownParse;
    const name = parameters.name ? String(parameters.name) : fileName;
    const slug = (0, convert_case_1.kebabCase)(name);
    const id = parameters.id ? String(parameters.id) : (0, model_types_1.generateId)();
    const createdAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "createdAt");
    const createdFirstAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "createdFirstAt");
    const updatedAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "updatedAt");
    const deletedAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "deletedAt");
    const openedAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "openedAt");
    const markdownModelType = Object.assign(Object.assign({}, parameters), { id,
        createdAt,
        createdFirstAt,
        deletedAt,
        updatedAt,
        openedAt, markdown: raw, name,
        slug });
    return markdownModelType;
};
exports.markdownParseToMarkdownModelType = markdownParseToMarkdownModelType;
//# sourceMappingURL=markdownParseToMarkdownModelType.js.map