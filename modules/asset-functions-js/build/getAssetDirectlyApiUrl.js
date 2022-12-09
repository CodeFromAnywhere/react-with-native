"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetDirectlyApiUrl = void 0;
var api_1 = require("api");
var server_api_url_1 = require("server-api-url");
var getAssetDirectlyApiUrl = function (projectRelativeAssetPath) {
    return (0, api_1.getGetApiUrl)(server_api_url_1.apiUrl, "function/getAssetDirectlyGetApi", {
        projectRelativeAssetPath: projectRelativeAssetPath,
    });
};
exports.getAssetDirectlyApiUrl = getAssetDirectlyApiUrl;
//# sourceMappingURL=getAssetDirectlyApiUrl.js.map