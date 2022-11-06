#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFolderWhereMatch = void 0;
var fs_util_1 = require("fs-util");
var log_1 = require("log");
/**
 * recursive. goes up a folder until it finds a package.json
 */
var findFolderWhereMatch = function (fullSourcePath, 
/**
 * match must be truthy in order to match, and falsy if it's not a match
 *
 * the result of the matchFunction will be returned at the end of the recursion
 */
matchFunction) {
    if (fullSourcePath === undefined) {
        console.log("WTF");
        process.exit(1);
    }
    // Basecase to make sure that the provided sourcepath is valid
    if (!fs_util_1.fs.existsSync(fullSourcePath)) {
        (0, log_1.log)("full source path invalid ".concat(fullSourcePath), { type: "debug" });
        return;
    }
    // Basecase to make sure that it doesn't go on infinitely, even if package.json doesn't exist anywhere
    if (fullSourcePath === "/") {
        (0, log_1.log)("folder was not found, went all the way to root '/'", {
            type: "debug",
        });
        return;
    }
    var matchResult = matchFunction(fullSourcePath);
    if (matchResult)
        return { folderPath: fullSourcePath, matchResult: matchResult };
    return (0, exports.findFolderWhereMatch)(fs_util_1.path.join(fullSourcePath, ".."), matchFunction);
};
exports.findFolderWhereMatch = findFolderWhereMatch;
//# sourceMappingURL=findFolderWhereMatch.js.map