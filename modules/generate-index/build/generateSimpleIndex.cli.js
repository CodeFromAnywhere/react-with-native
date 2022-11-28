#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateSimpleIndex_1 = require("./generateSimpleIndex");
var operationName = process.argv.slice(2)[0];
(0, generateSimpleIndex_1.generateSimpleIndex)({ operationName: operationName });
//# sourceMappingURL=generateSimpleIndex.cli.js.map