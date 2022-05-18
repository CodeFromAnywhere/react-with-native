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
exports.FlatList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var FlatList = function (props) {
    var data = props.data, ListItem = props.ListItem, connections = props.connections, FooterComponent = props.FooterComponent, HeaderComponent = props.HeaderComponent;
    var myDiv = document.getElementById("rwn-flat-list");
    if (myDiv) {
        myDiv.addEventListener("scroll", function () {
            if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
                connections.fetchNextPage();
            }
        });
    }
    return (jsx_runtime_1.jsxs(react_with_native_1.Div, __assign({ id: "rwn-flat-list", style: {
            display: "flex",
            flexDirection: "column",
            height: "70vh",
            overflow: "scroll",
            overflowX: "hidden",
        } }, { children: [jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ style: { display: "flex", justifyContent: "center", width: "100%" } }, { children: (connections === null || connections === void 0 ? void 0 : connections.isLoading) ? (jsx_runtime_1.jsx(react_with_native_1.ActivityIndicator, { size: 10, color: "white" }, void 0)) : null }), void 0), HeaderComponent, data === null || data === void 0 ? void 0 : data.map(function (item, idx) { return (jsx_runtime_1.jsx(ListItem, { item: item }, idx)); }), FooterComponent] }), void 0));
};
exports.FlatList = FlatList;
exports.default = FlatList;
//# sourceMappingURL=FlatList.js.map