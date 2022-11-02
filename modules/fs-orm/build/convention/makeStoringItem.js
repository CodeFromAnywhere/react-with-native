"use strict";
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
exports.makeStoringItem = void 0;
var makeStoringItem = function (item) {
    var operationName = item.operationName, projectRelativePath = item.projectRelativePath, operationRelativePath = item.operationRelativePath, rest = __rest(item, ["operationName", "projectRelativePath", "operationRelativePath"]);
    return rest;
};
exports.makeStoringItem = makeStoringItem;
//# sourceMappingURL=makeStoringItem.js.map