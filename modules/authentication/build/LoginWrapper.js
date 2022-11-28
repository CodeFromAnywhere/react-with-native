"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoginWrapper=void 0;var model_types_1=require("model-types"),react_1=require("react"),store_1=require("./store"),LoginWrapper=function(e){var r=e.children,t=(0,store_1.useStore)("api.authToken"),o=t[0],p=t[1],a=t[2].hydrated;
// Ensure there is an authToken
return(0,react_1.useEffect)((function(){a&&(o&&0!==o.length||p((0,model_types_1.generateId)()))}),[o,a]),r};exports.LoginWrapper=LoginWrapper;
//# sourceMappingURL=LoginWrapper.js.map