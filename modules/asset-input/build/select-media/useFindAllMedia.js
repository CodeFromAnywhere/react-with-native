"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindAllMedia = void 0;
var react_query_1 = require("react-query");
var api_1 = require("api");
var findAllMedia = api_1.api.findAllMedia;
var useFindAllMedia = function (searchQuery) {
    var queryResult = (0, react_query_1.useQuery)(["findAllMedia", searchQuery], function () { return findAllMedia(searchQuery, "projectRelative"); }, { enabled: true });
    return queryResult;
};
exports.useFindAllMedia = useFindAllMedia;
//# sourceMappingURL=useFindAllMedia.js.map