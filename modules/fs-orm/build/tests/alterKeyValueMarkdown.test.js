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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var convert_case_1 = require("convert-case");
var fs_util_1 = require("fs-util");
var alter_functions_1 = require("../alter/alter-functions");
var removeKeyValueMarkdown_1 = require("../alter/removeKeyValueMarkdown");
var test = function () {
    var absolutePath = fs_util_1.path.join(__dirname, "../..", "assets", "test.md");
    var dbFileLocation = {
        absolutePath: absolutePath,
        modelName: "Test",
        operationName: "fs-orm",
        projectRelativePath: absolutePath,
        operationRelativePath: absolutePath,
    };
    (0, alter_functions_1.alterKeyValueMarkdown)(dbFileLocation, function (storedData) {
        var realStoredData = storedData;
        var slug = "item";
        var ids = {
            id: slug,
            name: (0, convert_case_1.humanCase)(slug),
            slug: slug,
        };
        var storingItem = __assign(__assign({}, ids), { comment: "yoyoyo", isHeader: false, value: "you are amazing", categoryStack: ["category-sub-sub"] });
        var result = (0, removeKeyValueMarkdown_1.removeKeyValueMarkdown)(realStoredData, "toremove");
        var newStoredData = result.newStoredData, rest = __rest(result, ["newStoredData"]);
        console.log({ rest: rest });
        return result;
    });
};
test();
//# sourceMappingURL=alterKeyValueMarkdown.test.js.map