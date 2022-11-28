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
Object.defineProperty(exports, "__esModule", { value: true });
var test_db_1 = require("./test-db");
var test = function () {
    test_db_1.testDb.update("MarkdownTestModel", function (item) { var _a; return ((_a = item.categoryStackCalculated) === null || _a === void 0 ? void 0 : _a[0]) === "hello"; }, function (item) { return (__assign(__assign({}, item), { categoryStackCalculated: ["bye", "world"] })); });
};
test();
//# sourceMappingURL=updateNested.test.js.map