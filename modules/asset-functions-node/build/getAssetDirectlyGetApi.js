"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetDirectlyGetApi = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var serverDownloadReply_1 = require("./util/serverDownloadReply");
/**
 Useful for getting assets directly, for example for the `SelectMedia` component for `project`-media

 Requires more access rights
 */
var getAssetDirectlyGetApi = function (ctx) {
    /**
    
    const authToken = (ctx as any).cookies?.authToken;
    const authToken2 = ctx.cookie?.authToken;
  
    console.log({
      authToken,
      authToken2,
      cookie: ctx.cookie,
      cookies: (ctx as any).cookies,
      headers: ctx.req.headers,
    });
    const isAuthed = functionAuthPlugin("uploadAsset", authToken);
    if (!isAuthed) {
      return {
        isSuccessful: false,
        isUnauthorized: true,
        message: "You can only do this when authenticated",
      };
    }
    */
    var isDownload = (0, js_util_1.takeFirst)(ctx.query.isDownload) === "1";
    var projectRelativeAssetPath = (0, js_util_1.takeFirst)(ctx.query.projectRelativeAssetPath);
    var projectRoot = (0, get_path_1.getProjectRoot)();
    if (!projectRoot) {
        return {
            isSuccessful: false,
            message: "No project root",
        };
    }
    if (!projectRelativeAssetPath) {
        console.log({ p: ctx.query });
        return {
            isSuccessful: false,
            message: "No path given",
        };
    }
    var absoluteAssetPath = fs_util_1.path.join(projectRoot, projectRelativeAssetPath);
    var exists = fs_util_1.fs.existsSync(absoluteAssetPath);
    if (!exists) {
        return {
            isSuccessful: false,
            message: "Invalid file",
        };
    }
    return (0, serverDownloadReply_1.serverDownloadReply)(absoluteAssetPath, isDownload);
};
exports.getAssetDirectlyGetApi = getAssetDirectlyGetApi;
//# sourceMappingURL=getAssetDirectlyGetApi.js.map