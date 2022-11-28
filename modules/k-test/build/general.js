#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var make_test_1 = require("make-test");
// NB: Tried, but doesn't work, probably because it only invalidates cache for one file, not all the files that are required by that file... we need a separate process
// const requireWithoutCache = (filePath: string) => {
//   delete require.cache[path.resolve(filePath)];
//   return require(filePath);
// };
/**
 * example function that can be tested
 */
var sum = function (a, b) { return a + b; };
/**
 * test for example function
 */
exports.test = [
    (0, make_test_1.makeTest)(function () { return sum(1, 2); }, function (result) { return result === 3; }),
    (0, make_test_1.makeTest)(function () { return sum(0, 0); }, function (result) { return result === 0; }),
    (0, make_test_1.makeTest)(function () { return sum(5, 5); }, function (result) { return result === 10; }),
];
//# sourceMappingURL=general.js.map