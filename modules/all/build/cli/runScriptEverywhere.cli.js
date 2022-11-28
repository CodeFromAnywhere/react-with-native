#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runScriptEverywhere_1 = require("../runScriptEverywhere");
var _a = process.argv.slice(2), script = _a[0], startIndex = _a[1];
(0, runScriptEverywhere_1.runScriptEverywhere)(script, startIndex ? Number(startIndex) : undefined);
//# sourceMappingURL=runScriptEverywhere.cli.js.map