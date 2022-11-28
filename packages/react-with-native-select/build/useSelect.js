"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSelect=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),Select_1=require("./Select"),useSelect=function(e,t,
/**
 * Optionally you can do other things with the value as well, like setting it to a global store
 */
r){var u=e||[],s=(0,react_1.useState)(t||null),n=s[0],c=s[1];return[function(){return(0,jsx_runtime_1.jsx)(Select_1.Select,{className:"bg-transparent",title:"Test",onChange:function(e){c(e),e&&(null==r||r(e))},value:n,options:u})},n,c]};exports.useSelect=useSelect;
//# sourceMappingURL=useSelect.js.map