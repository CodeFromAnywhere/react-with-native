"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevelopment = void 0;
var getEnv_1 = require("./getEnv");
var isDevelopment = function () {
    var isNodeEnvDev = (0, getEnv_1.getEnv)("NODE_ENV") === "development";
    var isLocalhost = typeof window !== "undefined" &&
        window.location.href.startsWith("http://localhost");
    return isNodeEnvDev || isLocalhost;
};
exports.isDevelopment = isDevelopment;
//# sourceMappingURL=isDevelopment.js.map