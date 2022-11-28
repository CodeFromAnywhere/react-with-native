"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAssetDirectlyGetApi=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),serverDownloadReply_1=require("../util/serverDownloadReply"),getAssetDirectlyGetApi=function(e){
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
var t="1"===(0,js_util_1.takeFirst)(null==e?void 0:e.query.isDownload),s=(0,js_util_1.takeFirst)(null==e?void 0:e.query.projectRelativeAssetPath);
// Quick hack to keep it secure, only allow public stuff
if(!s.startsWith("public/"))return{isSuccessful:!1,message:"not allowed for now, only public data"};var r=(0,get_path_1.getProjectRoot)();if(!r)return{isSuccessful:!1,message:"No project root"};if(!s)return console.log({p:null==e?void 0:e.query}),{isSuccessful:!1,message:"No path given"};var i=fs_util_1.path.join(r,s);return fs_util_1.fs.existsSync(i)?(0,serverDownloadReply_1.serverDownloadReply)(i,t):{isSuccessful:!1,message:"Invalid file"}};exports.getAssetDirectlyGetApi=getAssetDirectlyGetApi;
//# sourceMappingURL=getAssetDirectlyGetApi.js.map