"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGetApiUrl = void 0;
var rest_util_1 = require("rest-util");
/**
 * gets an api url for a context get api
 *
 * returns something like `[apiUrl]/[apiFunctionName][queryString]`
 */
var getGetApiUrl = function (apiUrl, apiFunctionName, query) {
    var ending = "GetApi";
    var apiPath = apiFunctionName.slice(0, apiFunctionName.length - ending.length);
    var queryString = Object.keys(query).length > 0 ? (0, rest_util_1.toQueryString)(query) : "";
    var url = "".concat(apiUrl, "/").concat(apiPath).concat(queryString);
    return url;
};
exports.getGetApiUrl = getGetApiUrl;
//# sourceMappingURL=getGetApiUrl.js.map