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
exports.useInfiniteGetDbModel = void 0;
var api_1 = require("api");
var getDbModel = api_1.api.getDbModel;
var react_query_1 = require("react-query");
var useInfiniteGetDbModel = function (modelName, datasetConfig, limit) {
    var dependencies = ["getDbModel", modelName];
    var hook = (0, react_query_1.useInfiniteQuery)(dependencies, function (context) {
        var params = context.pageParam;
        // @ts-ignore
        var result = getDbModel(modelName, __assign(__assign({}, datasetConfig), { startFromIndex: (datasetConfig.startFromIndex || 0) + ((params === null || params === void 0 ? void 0 : params.start) || 0), maxRows: datasetConfig.maxRows || (params === null || params === void 0 ? void 0 : params.limit) || limit }));
        return result;
    }, {
        getNextPageParam: function (lastPage, allPages) {
            var _a, _b, _c, _d;
            var realLimit = ((_b = (_a = lastPage.result) === null || _a === void 0 ? void 0 : _a.datasetConfig) === null || _b === void 0 ? void 0 : _b.maxRows) || limit;
            var oldStart = ((_d = (_c = lastPage.result) === null || _c === void 0 ? void 0 : _c.datasetConfig) === null || _d === void 0 ? void 0 : _d.startFromIndex) || 0;
            var pageParam = {
                start: oldStart + realLimit,
                limit: realLimit,
            };
            return pageParam;
        },
    });
    return hook;
};
exports.useInfiniteGetDbModel = useInfiniteGetDbModel;
//# sourceMappingURL=useGetDbModelQuery.js.map