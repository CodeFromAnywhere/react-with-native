"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllPackages = void 0;
var get_path_1 = require("get-path");
var explore_1 = require("./explore");
var filename_conventions_1 = require("filename-conventions");
var findAllPackages = function (config) {
    return (0, explore_1.explore)({
        basePath: (config === null || config === void 0 ? void 0 : config.basePath) || (0, get_path_1.getPathsWithOperations)(),
        search: "package.json",
        exact: true,
        extension: "json",
        searchLevel: "fileName",
        ignore: filename_conventions_1.generatedFolders.concat(["src", "assets", "data"]),
    });
};
exports.findAllPackages = findAllPackages;
//# sourceMappingURL=findAllPackages.js.map