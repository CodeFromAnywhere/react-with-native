"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStore=exports.createUseStore=exports.createStoreProvider=void 0;var jsx_runtime_1=require("react/jsx-runtime"),React=__importStar(require("react")),react_1=require("react"),storage_1=require("./storage"),debug=!1,contexts={},getKey=function(e,t){return t?"".concat(t,".").concat(e):e},contextKey=function(e){return"".concat(e,"Context")},StoreContextProvider=function(e){var t=e.DynamicContext,r=e.children,n=e.config,o=e.storeKey,i=(0,react_1.useState)(!1),a=i[0],c=i[1],u=(0,react_1.useState)(null==n?void 0:n.initialValues[o]),s=u[0],l=u[1],f=null==n?void 0:n.baseKey;
// On mount, get the current value from storage
(0,react_1.useEffect)((function(){var e=getKey(o,f);(0,storage_1.getItem)(e).then((function(t){debug&&console.log("Hydrated store for ".concat(e,":"),t),l(t),c(!0)}))}),[]);var _=null==n?void 0:n.initialValues;return(0,jsx_runtime_1.jsx)(t.Provider,__assign({value:function(e){var t=getKey(e,f),r=_[e];return[void 0!==s?s:void 0!==r?r:null,function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:
//should do a deep equal here, and only set the store and item if the value actually has changed
//@ts-ignore
return l(e),[4/*yield*/,(0,storage_1.setItem)(t,e)];case 1:return r.sent(),[2/*return*/]}}))}))},{hydrated:a}]}},{children:r}))},createStoreProvider=function(e){e.debug&&(debug=e.debug),debug&&console.log("Create StoreProvider");var t=Object.keys(e.initialValues),r=t.reduce((function(e,t){var r,n=React.createContext(null);return __assign(__assign({},e),((r={})[contextKey(t)]=n,r))}),{});contexts=__assign(__assign({},contexts),r);
// console.log({ keys, contexts });
var n=function(r){var n=r.children;return t.reduce((function(t,r){var n=contexts[contextKey(r)];
// console.log({ context });
return(0,jsx_runtime_1.jsx)(StoreContextProvider,__assign({config:e,storeKey:r,DynamicContext:n},{children:t}))}),n)};return function(e){var t=e.children;return(0,jsx_runtime_1.jsx)(n,{children:t})}};exports.createStoreProvider=createStoreProvider;var getContext=function(e){return contexts[contextKey(e)]},createUseStore=function(e){debug&&console.log("Create useStore");return function(t){if(!Object.keys(e).includes(t))throw new Error("Using undefined key in useStore: ".concat(t));var r=getContext(t);if(!r)throw new Error("Failed loading the context with key: ".concat(t,". Did you wrap your component/app with a StoreProvider?"));var n=React.useContext(r),o=typeof n;return"function"!==o&&console.error("useStoreHookType for ".concat(t," is ").concat(o,"... wtf?")),null==n?void 0:n(t)}};
/**
 * Function to create a hook for accessing the store
 */exports.createUseStore=createUseStore;
/**

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
  itemA: TypeA;
  itemB: TypeB;
} = {
  itemA: "",
  itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰

 */
var createStore=function(e){return{StoreProvider:(0,exports.createStoreProvider)({initialValues:e}),useStore:(0,exports.createUseStore)(e)}};exports.createStore=createStore;
//# sourceMappingURL=general.js.map