#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeAll_1 = require("../removeAll");
var _a = process.argv.slice(2), folderName = _a[0], basePath = _a[1];
(0, removeAll_1.removeAll)({ folderName: folderName, basePath: basePath, type: "folder" });
//# sourceMappingURL=removeAll.cli.js.map