"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExploreProjectQuery = void 0;
var api_1 = require("../api");
var react_query_1 = require("react-query");
var store_1 = __importDefault(require("../store"));
var endpoint = "function/explore-project";
var useExploreProjectQuery = function () {
    var authToken = (0, store_1.default)("authToken")[0];
    var selectedBundleId = (0, store_1.default)("selectedBundleId")[0];
    return (0, react_query_1.useQuery)([endpoint, selectedBundleId], function () {
        return (0, api_1.api)(endpoint, "POST", {
            authToken: authToken,
            arguments: { config: { bundleId: selectedBundleId } },
        }).then(function (response) {
            return response;
        });
    });
};
exports.useExploreProjectQuery = useExploreProjectQuery;
//# sourceMappingURL=useExploreProjectQuery.js.map