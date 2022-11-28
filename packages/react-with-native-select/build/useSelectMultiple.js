"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,u=arguments.length;r<u;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useSelectMultiple=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),SelectMultiple_1=require("./SelectMultiple"),useSelectMultiple=function(e,t,
/**
 * Optionally you can do other things with the value as well, like setting it to a global store
 */
r,u){var i=e||[],l=(0,react_1.useState)(t||[]),n=l[0],s=l[1],a=function(e){s(e),e&&(null==r||r(e))};return[function(){return(0,jsx_runtime_1.jsx)(SelectMultiple_1.SelectMultipleInput,__assign({},u,{onChange:a,value:n,options:i}))},n,a]};exports.useSelectMultiple=useSelectMultiple;
//# sourceMappingURL=useSelectMultiple.js.map