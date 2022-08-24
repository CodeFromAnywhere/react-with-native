"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = exports.getQueryStrings = exports.isEmail = void 0;
var sensible_core_1 = require("sensible-core");
function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
exports.isEmail = isEmail;
var getQueryStrings = function (query) {
    var queryStrings = (0, sensible_core_1.objectMap)(query, function (arrayOrStringOrUndefined) {
        return Array.isArray(arrayOrStringOrUndefined)
            ? arrayOrStringOrUndefined[0]
            : arrayOrStringOrUndefined;
    });
    return queryStrings;
};
exports.getQueryStrings = getQueryStrings;
/**
 *
 */
var isValidQueryEntry = function (_a) {
    var _ = _a[0], value = _a[1];
    return value !== undefined && value !== "" && value !== null;
};
/**
 *
 */
var toQueryString = function (query) {
    var _a;
    var hasQuery = query && ((_a = Object.entries(query)) === null || _a === void 0 ? void 0 : _a.filter(isValidQueryEntry).length) > 0;
    return hasQuery
        ? "?" +
            Object.entries(query)
                .filter(isValidQueryEntry)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                var encodedValue = encodeURIComponent(String(value));
                return "".concat(key, "=").concat(encodedValue);
            })
                .join("&")
        : "";
};
exports.toQueryString = toQueryString;
//# sourceMappingURL=Util.js.map