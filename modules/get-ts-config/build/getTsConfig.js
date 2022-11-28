#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTsConfig = void 0;
var read_json_file_1 = require("read-json-file");
var fs_util_1 = require("fs-util");
var getTsConfig = function (packageFolder) {
    var jsonPath = fs_util_1.path.join(packageFolder, "tsconfig.json");
    var json = (0, read_json_file_1.readJsonFile)(jsonPath);
    return json;
};
exports.getTsConfig = getTsConfig;
//# sourceMappingURL=getTsConfig.js.map