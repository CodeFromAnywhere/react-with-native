"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEndpoint = void 0;
/**
 * This file was auto-generated using the Sensible Boilerplate Creator (npx create-sensible-app).
 * You can edit it in what ever way you see fit.
 */
const path_1 = __importDefault(require("path"));
const sensible_server_1 = require("sensible-server");
const typeFiles_1 = require("./typeFiles");
const schemasFolderPath = path_1.default.join(__dirname, "..", "schemas");
exports.makeEndpoint = (0, sensible_server_1.createMakeEndpoint)(typeFiles_1.interpretableTypes, schemasFolderPath);
