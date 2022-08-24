"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageTitle = exports.pages = exports.pagesObject = void 0;
var index_1 = __importDefault(require("./pages/index"));
exports.pagesObject = {
    index: index_1.default,
};
// these keys are put in an array
var pageKeys = Object.keys(exports.pagesObject);
// then we generate an PageType object for every page,
// based on the pagesObject and the pageKey, and put the result in an array
exports.pages = pageKeys.map(function (pageKey) { return (__assign(__assign({}, exports.pagesObject[pageKey].options), { component: exports.pagesObject[pageKey], key: pageKey })); });
/**
 * utility function to get a title from a page
 */
var getPageTitle = function (page) {
    return page.title || page.key.charAt(0).toUpperCase().concat(page.key.slice(1));
};
exports.getPageTitle = getPageTitle;
//# sourceMappingURL=pages.js.map