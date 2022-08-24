"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuQuery = void 0;
var api_1 = require("../api");
var react_query_1 = require("react-query");
var useMenuQuery = function () {
    return (0, react_query_1.useQuery)("menu", function () {
        return (0, api_1.api)("get-menu", "GET").then(function (response) {
            return response.menu;
        });
    });
};
exports.useMenuQuery = useMenuQuery;
//# sourceMappingURL=useMenuQuery.js.map