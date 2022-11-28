#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAndWriteImportsExports_1 = require("./findAndWriteImportsExports");
var _a = process.argv.slice(2), operationBasePath = _a[0], manualProjectRoot = _a[1];
(0, findAndWriteImportsExports_1.findAndWriteImportsExports)(operationBasePath, manualProjectRoot);
//# sourceMappingURL=findAndWriteImportsExports.cli.js.map