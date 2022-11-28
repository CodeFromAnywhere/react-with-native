#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateSdk_1 = require("./generateSdk");
var saveInAssets = process.argv.slice(2)[0];
(0, generateSdk_1.generateSdk)({
    saveInAssets: !!saveInAssets,
    manualProjectRoot: "/Users/king/King/bundled/passionfruit",
});
//# sourceMappingURL=generateSdk.cli.js.map