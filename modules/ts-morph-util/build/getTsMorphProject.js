#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTsMorphProject = void 0;
var fs_1 = require("fs");
var fs_util_1 = require("fs-util");
var fs_util_2 = require("fs-util");
var log_1 = require("log");
var ts_morph_1 = require("ts-morph");
/**
 * returns a ts-morph Project given a operationFolderPath, if a tsconfig.json can be found
 */
var getTsMorphProject = function (operationFolderPath) {
    var tsConfigFilePath = fs_util_1.path.join(operationFolderPath, "tsconfig.json");
    var tsConfigExists = fs_util_2.fs.existsSync(tsConfigFilePath);
    var srcExists = (0, fs_1.existsSync)(fs_util_1.path.join(operationFolderPath, "src"));
    if (!tsConfigExists || !srcExists) {
        (0, log_1.log)("This is not an operation: ".concat(operationFolderPath, ". (src folder or tsconfig.json are not present)"), { type: "error" });
        return;
    }
    var project = new ts_morph_1.Project({ tsConfigFilePath: tsConfigFilePath, libFolderPath: "src" });
    return project;
};
exports.getTsMorphProject = getTsMorphProject;
//# sourceMappingURL=getTsMorphProject.js.map