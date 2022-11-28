"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = void 0;
var sdk_env_public_1 = require("sdk-env-public");
var port_conventions_1 = require("port-conventions");
var isDev_1 = require("./isDev");
var hostname = typeof window !== "undefined" ? window.location.hostname : "localhost";
var runRemoteServer = sdk_env_public_1.publicLocalEnvironmentVariables.runRemoteServer ||
    sdk_env_public_1.publicEnvironmentVariables.runRemoteServer;
// same ip as the ip used in the browser (not only localhost)
var localhostServer = "http://".concat(hostname, ":").concat(port_conventions_1.ports["function-server"]);
exports.apiUrl = !isDev_1.isDev || runRemoteServer
    ? sdk_env_public_1.publicEnvironmentVariables.remoteServer
    : localhostServer;
//# sourceMappingURL=apiUrl.js.map