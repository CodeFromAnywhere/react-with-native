"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEndpoints = exports.getAppPaths = exports.getServerEndpoints = void 0;
/**
 * This file was auto-generated using the Sensible Boilerplate Creator (npx create-sensible-app).
 * You can edit it in what ever way you see fit.
 */
const core_1 = require("core");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importStar(require("path"));
const sensible_files_1 = require("sensible-files");
const sensible_server_1 = require("sensible-server");
const typeFiles_1 = require("./typeFiles");
const getServerEndpoints = () => {
    const imports = (0, sensible_files_1.importFromFiles)({
        files: (0, sensible_files_1.findFiles)("api", __dirname).map((x) => x.path),
        guard: (moduleExports) => {
            return typeof moduleExports === "object" && Array.isArray(moduleExports);
        },
    });
    return imports.flat();
};
exports.getServerEndpoints = getServerEndpoints;
const getAppPaths = (basePath) => {
    const contents = fs_1.default.readdirSync(basePath, { withFileTypes: true });
    const appPaths = contents
        .filter((x) => x.isDirectory())
        .filter((x) => !x.name.startsWith("."))
        .map((x) => x.name)
        .map((name) => path_1.default.join(basePath, name));
    return appPaths;
};
exports.getAppPaths = getAppPaths;
const getAllEndpoints = () => {
    const appsPath = (0, path_1.resolve)("..");
    const packagesPath = (0, path_1.resolve)("../../packages");
    const appPaths = (0, exports.getAppPaths)(appsPath).concat((0, exports.getAppPaths)(packagesPath));
    const sensibleEndpoints = (0, sensible_server_1.makeSensibleEndpoints)(appsPath, appPaths, typeFiles_1.interpretableTypes, core_1.PublicConstants);
    return (0, exports.getServerEndpoints)().concat(sensibleEndpoints);
};
exports.getAllEndpoints = getAllEndpoints;
