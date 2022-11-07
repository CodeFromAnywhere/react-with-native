#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var explore_1 = require("./explore");
var getArgument = function (number) {
    return process.argv[1 + number];
};
var arg1 = getArgument(1);
var arg2 = getArgument(2);
(0, explore_1.explore)({ basePath: undefined });
//# sourceMappingURL=cli.js.map