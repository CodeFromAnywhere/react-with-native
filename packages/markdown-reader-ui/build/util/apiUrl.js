"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = void 0;
var server_env_1 = __importDefault(require("server-env"));
var isDev_1 = require("./isDev");
var localhostServer = server_env_1.default.localhostServer, remoteServer = server_env_1.default.remoteServer, runLocalServer = server_env_1.default.runLocalServer;
exports.apiUrl = isDev_1.isDev && runLocalServer ? localhostServer : remoteServer;
//# sourceMappingURL=apiUrl.js.map