"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDbInterfacesQuery = void 0;
var api_1 = require("../api");
var react_query_1 = require("react-query");
var store_1 = __importDefault(require("../store"));
var endpoint = "function/get-db-interfaces";
var key = endpoint;
var useDbInterfacesQuery = function () {
    var authToken = (0, store_1.default)("authToken")[0];
    return (0, react_query_1.useQuery)(key, function () {
        return (0, api_1.api)(endpoint, "POST", { authToken: authToken }).then(function (response) {
            return response.dbInterfaces;
        });
    });
};
exports.useDbInterfacesQuery = useDbInterfacesQuery;
//# sourceMappingURL=useDbInterfacesQuery.js.map