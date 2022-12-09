"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbModel = void 0;
var database_1 = require("database");
var js_util_1 = require("js-util");
/**
 * gets all instances of an db data interface from the db in a typesafe way */
var getDbModel = function (
/**
 * the interfaceName you want to get
 */
interfaceName, 
/**
 * optionally, provide a configuration
 */
datasetConfig, 
/**
 * This search should be done on the deepest JSON value's of the whole thing. The purpose is not limiting the content to user, but rather just a nice user experience where one can quickly search
 */
search) { return __awaiter(void 0, void 0, void 0, function () {
    var data, slicedStartData, slicedLimitData, hasMore, filteredData, sortedData, searchedData, subsetData, ignoredData, finalData;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!interfaceName) {
                    return [2 /*return*/, { data: [], hasMore: false, message: "No interfaceName posted" }];
                }
                return [4 /*yield*/, database_1.db.get(interfaceName)];
            case 1:
                data = _d.sent();
                slicedStartData = data.slice(datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.startFromIndex);
                slicedLimitData = (datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.maxRows)
                    ? slicedStartData.slice(0, datasetConfig.maxRows)
                    : slicedStartData;
                hasMore = slicedLimitData.length < slicedStartData.length;
                filteredData = ((_a = datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.filter) === null || _a === void 0 ? void 0 : _a.length)
                    ? datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.filter.reduce(function (filteredData, datasetFilter) {
                        var newFilteredData = filteredData.filter(function (item) {
                            var key = datasetFilter.objectParameterKey;
                            var value = item[key];
                            if (datasetFilter.operator === "equal") {
                                return String(value) === datasetFilter.value;
                            }
                            if (datasetFilter.operator === "notEqual") {
                                return String(value) === datasetFilter.value;
                            }
                            var lowercaseValue = String(value).toLowerCase();
                            var lowercaseDatasetValue = String(datasetFilter.value).toLowerCase();
                            if (datasetFilter.operator === "endsWith") {
                                return lowercaseValue.endsWith(lowercaseDatasetValue);
                            }
                            if (datasetFilter.operator === "startsWith") {
                                return lowercaseValue.startsWith(lowercaseDatasetValue);
                            }
                            if (datasetFilter.operator === "includes") {
                                return lowercaseValue.includes(lowercaseDatasetValue);
                            }
                            if (datasetFilter.operator === "includesLetters") {
                                return (0, js_util_1.hasAllLetters)(lowercaseValue, lowercaseDatasetValue);
                            }
                            if (datasetFilter.operator === "greaterThan" &&
                                datasetFilter.value !== null &&
                                datasetFilter.value !== undefined) {
                                return Number(value) > Number(datasetFilter.value);
                            }
                            if (datasetFilter.operator === "lessThan" &&
                                datasetFilter.value !== null &&
                                datasetFilter.value !== undefined) {
                                return Number(value) < Number(datasetFilter.value);
                            }
                            if (datasetFilter.operator === "greaterThanOrEqual" &&
                                datasetFilter.value !== null &&
                                datasetFilter.value !== undefined) {
                                return Number(value) >= Number(datasetFilter.value);
                            }
                            if (datasetFilter.operator === "lessThanOrEqual" &&
                                datasetFilter.value !== null &&
                                datasetFilter.value !== undefined) {
                                return Number(value) <= Number(datasetFilter.value);
                            }
                            return false;
                        });
                        return newFilteredData;
                    }, slicedLimitData)
                    : slicedLimitData;
                sortedData = (datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.sort)
                    ? datasetConfig.sort.reduce(function (sortedData, datasetSort) {
                        var newSortedData = sortedData.sort(function (a, b) {
                            // @ts-ignore
                            var valueA = a[datasetSort.objectParameterKey];
                            // @ts-ignore
                            var valueB = b[datasetSort.objectParameterKey];
                            var directionMultiplier = datasetSort.sortDirection === "ascending" ? 1 : -1;
                            return Number(valueA) < Number(valueB)
                                ? directionMultiplier
                                : directionMultiplier * -1;
                        });
                        return newSortedData;
                    }, filteredData)
                    : filteredData;
                searchedData = search && search.length > 0
                    ? sortedData.filter(function (item) {
                        var searchable = Object.values(item)
                            .map(function (value) { return JSON.stringify(value); })
                            .join(",")
                            .toLowerCase();
                        return searchable.includes(search.toLowerCase());
                    })
                    : sortedData;
                subsetData = ((_b = datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.objectParameterKeys) === null || _b === void 0 ? void 0 : _b.length)
                    ? searchedData.map(function (item) {
                        return (0, js_util_1.getSubsetFromObject)(item, datasetConfig.objectParameterKeys);
                    })
                    : searchedData;
                ignoredData = ((_c = datasetConfig === null || datasetConfig === void 0 ? void 0 : datasetConfig.ignoreObjectParameterKeys) === null || _c === void 0 ? void 0 : _c.length)
                    ? subsetData.map(function (item) {
                        return (0, js_util_1.removeOptionalKeysFromObjectStrings)(item, datasetConfig.ignoreObjectParameterKeys);
                    })
                    : subsetData;
                finalData = ignoredData;
                return [2 /*return*/, {
                        datasetConfig: datasetConfig,
                        data: finalData,
                        hasMore: hasMore,
                    }];
        }
    });
}); };
exports.getDbModel = getDbModel;
//# sourceMappingURL=getDbModel.js.map