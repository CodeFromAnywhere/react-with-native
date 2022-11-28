"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastFolder = exports.getFileName = exports.getFolder = exports.getPathCombinations = void 0;
var js_util_1 = require("js-util");
var path_1 = require("./path");
/**
 gets combinations for paths

 input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
 output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]
 */
var getPathCombinations = function () {
    var chunksSegments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        chunksSegments[_i] = arguments[_i];
    }
    return (chunksSegments
        .map(function (x) { return (0, js_util_1.makeArray)(x); })
        // small check to prevent crashes in case there is an invalid type given (not a string)
        .map(function (chunks) { return chunks.filter(js_util_1.notEmpty); })
        .reduce(function (cumSegments, chunks) {
        // first chunk is the combination of itself
        if (cumSegments.length === 0)
            return chunks;
        // all next chunks use the accummualted segments and reduce them
        var nextCumSegments = cumSegments.reduce(function (all, segment) {
            // for every segment add all the chunks to that segment
            var newChunks = chunks.map(function (chunk) { return path_1.path.join(segment, chunk); });
            //add them to all new cumSegments
            return all.concat(newChunks);
        }, []);
        return nextCumSegments;
    }, []));
};
exports.getPathCombinations = getPathCombinations;
/**
   if the path exists:
      - if the pathString is a folder, that is returned.
      - if the pathstring is not a folder, returns the pathstring without the file suffix
      
  if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)
   */
var getFolder = function (pathString) {
    var parsedPath = path_1.path.parse(pathString);
    var hasExtension = parsedPath.ext.length > 0;
    if (hasExtension) {
        // NB: assume it's a file, let's avoid folders with dots!
        var pathChunks = pathString.split("/");
        pathChunks.pop(); //remove the filename
        return pathChunks.join("/");
    }
    else {
        // NB: it's already a folder!
        return pathString;
    }
};
exports.getFolder = getFolder;
/**
 * removes everything before the last slash to get file name
 */
var getFileName = function (pathString) {
    return path_1.path.basename(pathString);
};
exports.getFileName = getFileName;
/**
 * removes everything after the last slash to get folder path
 *
 * input: /Users/king/Documents/some/folder/xyz
 * output: xyz
 *
 * input: /Users/king/Documents/some/folder/xyz.txt
 * output: folder
 */
var getLastFolder = function (pathString) {
    var lastFolder = (0, exports.getFolder)(pathString).split("/").pop();
    // console.log({ pathString, lastFolder });
    return lastFolder;
};
exports.getLastFolder = getLastFolder;
//# sourceMappingURL=js.js.map