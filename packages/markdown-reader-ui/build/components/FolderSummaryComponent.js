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
exports.FolderSummaryComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_minimal_pie_chart_1 = require("react-minimal-pie-chart");
var react_with_native_1 = require("react-with-native");
var defaultSize = 100;
var codeColor = "blue";
var dataColor = "darkblue";
var textColor = "lightblue";
var k = function (number) {
    var ks = number / 1000 < 1
        ? Math.round(number / 100) / 10
        : Math.round(number / 1000);
    return number < 1000 ? "".concat(number) : "".concat(ks, "K");
};
/**
 Render folder summary:

- make piecharts showing distribution of code, data and text
  - in files
  - in lines
  - in characters
- circles should become bigger depending on measured amount
- circles should have label inside saying the X files the K lines (2 numbers e.g. 0.2K) and the K or M characters/bytes (no decimal e.g. 90K)

 */
var FolderSummaryComponent = function (folderSummary) {
    // NB: start with the second component, which is lines (the most interesting)
    var _a = (0, react_1.useState)(1), viewNumber = _a[0], setViewNumber = _a[1];
    var getData = function (key) {
        var _a, _b, _c;
        var codeAmount = ((_a = folderSummary.codeSize) === null || _a === void 0 ? void 0 : _a[key]) || 0;
        var dataAmount = ((_b = folderSummary.dataSize) === null || _b === void 0 ? void 0 : _b[key]) || 0;
        var textAmount = ((_c = folderSummary.textSize) === null || _c === void 0 ? void 0 : _c[key]) || 0;
        var data = [
            {
                title: codeAmount > 0 ? "Code (".concat(k(codeAmount), ")") : "",
                value: codeAmount,
                color: codeColor,
            },
            {
                title: dataAmount > 0 ? "Data (".concat(k(dataAmount), ")") : "",
                value: dataAmount,
                color: dataColor,
            },
            {
                title: textAmount > 0 ? "Text (".concat(k(textAmount), ")") : "",
                value: textAmount,
                color: textColor,
            },
        ];
        return data;
    };
    var getTitle = function (key) {
        return getData(key)
            .map(function (x) { return x.title; })
            .filter(function (x) { return x.length > 0; })
            .join(" - ");
    };
    var _b = ["numberOfFiles", "lines", "characters"].map(getData), numberOfFiles = _b[0], lines = _b[1], characters = _b[2];
    var linesNumberLength = String(Math.round(folderSummary.size.lines)).length;
    var factor = linesNumberLength <= 3 ? 1 : linesNumberLength - 2;
    var charts = [
        (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: "Files:" })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: getTitle("numberOfFiles") }), (0, jsx_runtime_1.jsx)(react_minimal_pie_chart_1.PieChart, { style: { width: defaultSize * factor, height: defaultSize * factor }, data: numberOfFiles })] }),
        (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: "Lines:" })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: getTitle("lines") }), (0, jsx_runtime_1.jsx)(react_minimal_pie_chart_1.PieChart, { animate: true, style: { width: defaultSize * factor, height: defaultSize * factor }, data: lines })] }),
        (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: "Characters:" })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: getTitle("characters") }), (0, jsx_runtime_1.jsx)(react_minimal_pie_chart_1.PieChart, { animate: true, style: { width: defaultSize * factor, height: defaultSize * factor }, data: characters })] }),
    ];
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ onClick: function () { return setViewNumber((viewNumber + 1) % charts.length); } }, { children: charts[viewNumber] })));
};
exports.FolderSummaryComponent = FolderSummaryComponent;
//# sourceMappingURL=FolderSummaryComponent.js.map