#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forAllFolders_1 = require("../forAllFolders");
var _a = process.argv.slice(2), type = _a[0], command = _a[1], fileName = _a[2], basePath = _a[3], folderName = _a[4], shellString = _a[5];
(0, forAllFolders_1.forAllFolders)({
    basePath: basePath,
    command: command,
    fileName: fileName,
    folderName: folderName,
    shell: Boolean(shellString),
    type: type,
});
//
//# sourceMappingURL=forAllFolders.cli.js.map