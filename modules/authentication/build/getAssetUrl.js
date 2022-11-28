"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetUrl = void 0;
var server_api_url_1 = require("server-api-url");
var getAssetUrl = function (backendAsset) {
    return (backendAsset === null || backendAsset === void 0 ? void 0 : backendAsset.apiPath)
        ? "".concat(server_api_url_1.apiUrl, "/").concat(backendAsset.apiPath)
        : undefined;
};
exports.getAssetUrl = getAssetUrl;
//# sourceMappingURL=getAssetUrl.js.map