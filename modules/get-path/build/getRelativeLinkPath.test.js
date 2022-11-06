"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getProjectRoot_1 = require("./getProjectRoot");
var getRelativeLinkPath_1 = require("./getRelativeLinkPath");
var test = function () {
    var from = __filename;
    var root = (0, getProjectRoot_1.getProjectRoot)();
    if (!root)
        return;
    var to = "".concat(root, "/README.md");
    console.log((0, getRelativeLinkPath_1.getRelativeLinkPath)(from, to));
};
test();
//# sourceMappingURL=getRelativeLinkPath.test.js.map