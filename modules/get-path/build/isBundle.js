"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isBundle=void 0;var fs_util_1=require("fs-util"),read_json_file_1=require("read-json-file"),getProjectRoot_1=require("./getProjectRoot"),isBundle=function(e){var o,r=e||(0,getProjectRoot_1.getProjectRoot)();if(!r)return!1;
// get package-json and check operation config
var t=(0,read_json_file_1.readJsonFileSync)(fs_util_1.path.join(r,"package.json"));return(null===(o=null==t?void 0:t.operation)||void 0===o?void 0:o.isBundle)||!1};exports.isBundle=isBundle;
//# sourceMappingURL=isBundle.js.map