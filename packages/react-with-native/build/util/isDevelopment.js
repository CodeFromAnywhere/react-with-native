import { getEnv } from "./getEnv";
export var isDevelopment = function () {
    var isNodeEnvDev = getEnv("NODE_ENV") === "development";
    var isLocalhost = typeof window !== "undefined" &&
        window.location.href.startsWith("http://localhost");
    return isNodeEnvDev || isLocalhost;
};
//# sourceMappingURL=isDevelopment.js.map