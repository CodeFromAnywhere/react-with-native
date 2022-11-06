"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_util_1 = require("fs-util");
var getCommonAncestor_1 = require("./getCommonAncestor");
var getProjectRoot_1 = require("./getProjectRoot");
var test = function () {
    var path1 = __filename;
    var path2 = fs_util_1.path.join((0, getProjectRoot_1.getProjectRoot)(), "README.md");
    console.log({ path1: path1, path2: path2 }, (0, getCommonAncestor_1.getCommonAncestor)(path1, path2));
};
test();
//# sourceMappingURL=getCommonAncestor.test.js.map