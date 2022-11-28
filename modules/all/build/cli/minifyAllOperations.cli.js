#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minifyAllOperations_1 = require("../minifyAllOperations");
var debug = process.argv.slice(2)[0];
(0, minifyAllOperations_1.minifyAllOperations)({ basePath: undefined, shell: !!debug });
//# sourceMappingURL=minifyAllOperations.cli.js.map