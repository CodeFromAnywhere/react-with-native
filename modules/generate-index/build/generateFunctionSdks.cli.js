#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateFunctionSdks_1 = require("./generateFunctionSdks");
var manualProjectRoot = process.argv.slice(2)[0];
(0, generateFunctionSdks_1.generateFunctionSdks)({ manualProjectRoot: manualProjectRoot });
//# sourceMappingURL=generateFunctionSdks.cli.js.map