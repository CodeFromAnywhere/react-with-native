#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateOperationIndex_1 = require("./generateOperationIndex");
var operationName = process.argv.slice(2)[0];
(0, generateOperationIndex_1.generateOperationIndex)({ operationName: operationName });
//# sourceMappingURL=generateOperationIndex.cli.js.map