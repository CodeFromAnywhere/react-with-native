"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParseCsv = void 0;
var js_util_1 = require("js-util");
var make_test_1 = require("make-test");
var parse_primitive_1 = require("parse-primitive");
var example_1 = require("./example");
/**
 * This function parses a CSV into the object it says it has in the header
 */
var tryParseCsv = function (csvString) {
    var _a = csvString.split("\n"), columnsString = _a[0], rowStrings = _a.slice(1);
    var columns = columnsString.split(",").map(function (x) { return x.trim(); });
    var rows = rowStrings.map(function (rowString) {
        var values = rowString.split(",");
        var rowObject = (0, js_util_1.mergeObjectsArray)(columns.map(function (columnName, index) {
            var _a;
            return _a = {}, _a[columnName] = (0, parse_primitive_1.parsePrimitive)(values[index]), _a;
        }));
        return rowObject;
    });
    return rows;
};
exports.tryParseCsv = tryParseCsv;
var test = [
    (0, make_test_1.makeTest)(function () {
        var csvItems = (0, exports.tryParseCsv)(example_1.exampleCsvString);
        return csvItems;
    }, function (result) {
        return JSON.stringify(result) === JSON.stringify(example_1.exampleCsvItems);
    }),
];
//# sourceMappingURL=tryParseCsv.js.map