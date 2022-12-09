"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useUrl=void 0;var use_url_store_1=require("use-url-store"),useUrl=function(e){return{path:(0,use_url_store_1.useCustomUrlStore)("path",{type:"string"}),name:(0,use_url_store_1.useCustomUrlStore)("name",{type:"string"}),type:(0,use_url_store_1.useCustomUrlStore)("type",{type:"string"}),
// for db page
slug:(0,use_url_store_1.useCustomUrlStore)("slug",{type:"string"}),id:(0,use_url_store_1.useCustomUrlStore)("id",{type:"string"})}[e]};exports.useUrl=useUrl;
//# sourceMappingURL=useUrl.js.map