"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetDbModelQuery = void 0;
var api_1 = require("../api");
var react_query_1 = require("react-query");
var store_1 = __importDefault(require("../store"));
var endpoint = "function/get-db-model";
var useGetDbModelQuery = function (modelName) {
    var _a = (0, store_1.default)("authToken"), authToken = _a[0], _ = _a[1], hydrated = _a[2].hydrated;
    var skip = !modelName || !hydrated;
    var dependencies = [endpoint, modelName];
    return (0, react_query_1.useQuery)(dependencies, function () {
        return (0, api_1.api)(endpoint, "POST", {
            authToken: authToken,
            arguments: { interfaceName: modelName },
        }).then(function (response) {
            return response;
        });
    }, { enabled: !skip });
};
exports.useGetDbModelQuery = useGetDbModelQuery;
//# sourceMappingURL=useGetDbModelQuery.js.map