"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kvmdDataMap = void 0;
/**
 * DEPRECATED: probably never needed, unless I make it useful
 *
 * mapper function to give a kvmd data object other parameters.
 *
 * NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.
 */
var kvmdDataMap = function (data, _a) {
    var keyName = _a.keyName, valueName = _a.valueName, categoryStackCalculatedName = _a.categoryStackCalculatedName, commentName = _a.commentName;
    var newDataObject = data.map(function (item) {
        var _a;
        var newData = (_a = {},
            _a[keyName || "name"] = item.name,
            _a[valueName || "value"] = item.value,
            _a[commentName || "comment"] = item.comment,
            _a[categoryStackCalculatedName || "categoryStackCalculated"] = item.categoryStackCalculated,
            _a);
        return newData;
    });
    return newDataObject;
};
exports.kvmdDataMap = kvmdDataMap;
//# sourceMappingURL=kvmdDataMap.js.map