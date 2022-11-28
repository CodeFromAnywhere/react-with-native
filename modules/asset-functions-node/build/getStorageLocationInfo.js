"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStorageLocationInfo=void 0;var filename_conventions_1=require("filename-conventions"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),convert_case_1=require("convert-case"),getStorageLocationInfo=function(e,t){if(e.includes("/".concat(filename_conventions_1.sourceFolderName,"/"))){
/**
         *In typescript, the asset can be stored in the `/assets` folder of the operation. The alt is in the markdown.
         */
var a=(0,get_path_1.findOperationBasePath)(e);if(a)return{type:"typescript",absoluteAssetBaseFolderPath:fs_util_1.path.join(a,"assets")}}if(t&&e.includes("/".concat(filename_conventions_1.databaseFolderName,"/"))){var o=e.split("/".concat(filename_conventions_1.databaseFolderName,"/"))[0].concat("/".concat(filename_conventions_1.databaseFolderName));
/**
         * In database models, the asset can be stored in
         *
         * - in `[modelName]-assets` folder inside of `db` if the data is stored in the root of the db
         * - in the same folder as the data itself if the data is stored in folders and more separated files
         */
return{type:"database",absoluteAssetBaseFolderPath:(0,get_path_1.makeRelative)(e,o).split("/").length>1?fs_util_1.path.parse(e).dir:fs_util_1.path.join(o,"".concat((0,convert_case_1.kebabCase)(t),"-assets"))}}
/**
     * In markdown, the asset can be stored in the same folder as the markdown file. The alt is in the markdown. The filename can be something else, should be kept original unless changed
     */return{type:"markdown",absoluteAssetBaseFolderPath:fs_util_1.path.parse(e).dir}};exports.getStorageLocationInfo=getStorageLocationInfo;
//# sourceMappingURL=getStorageLocationInfo.js.map