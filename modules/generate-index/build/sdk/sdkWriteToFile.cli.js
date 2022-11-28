#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sdkWriteToFile_1 = require("./sdkWriteToFile");
var saveInAssets = process.argv.slice(2)[0];
(0, sdkWriteToFile_1.sdkWriteToFile)({ saveInAssets: !!saveInAssets });
//# sourceMappingURL=sdkWriteToFile.cli.js.map