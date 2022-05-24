"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpretableTypes = exports.typeExamples = exports.endpointExamples = exports.types = exports.endpoints = void 0;
const path_1 = require("path");
const sensible_core_1 = require("sensible-core");
const sensible_files_1 = require("sensible-files");
// the next line resolves the address of the core folder. We know this is there because of the sensible convention
const basePath = (0, path_1.resolve)("../../packages/core/src");
exports.endpoints = (0, sensible_files_1.findFiles)("endpoint", basePath);
exports.types = (0, sensible_files_1.findFiles)("type", basePath);
exports.endpointExamples = (0, sensible_files_1.findFiles)("endpoint.example", basePath);
exports.typeExamples = (0, sensible_files_1.findFiles)("type.example", basePath);
const relativeFolders = exports.endpoints
    .concat(exports.types)
    .concat(exports.endpointExamples)
    .concat(exports.typeExamples)
    .map((folderPath) => folderPath.relativeFolder || "other");
const uniqueRelativeFolders = relativeFolders.filter(sensible_core_1.onlyUnique);
const initialInterpretableTypes = {};
exports.interpretableTypes = uniqueRelativeFolders.reduce((all, key) => {
    return {
        ...all,
        [key]: {
            endpoints: exports.endpoints
                .filter((folderPath) => folderPath.relativeFolder === key)
                .map((x) => x.path),
            types: exports.types
                .filter((folderPath) => folderPath.relativeFolder === key)
                .map((x) => x.path),
            endpointExamples: exports.endpointExamples
                .filter((folderPath) => folderPath.relativeFolder === key)
                .map((x) => x.path),
            typeExamples: exports.typeExamples
                .filter((folderPath) => folderPath.relativeFolder === key)
                .map((x) => x.path),
        },
    };
}, initialInterpretableTypes);
