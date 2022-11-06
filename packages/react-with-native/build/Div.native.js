"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Div=void 0;var jsx_runtime_1=require("react/jsx-runtime"),React=__importStar(require("react")),react_native_1=require("react-native"),tailwind_rn_1=require("tailwind-rn"),trimClassName_1=require("../../util/trimClassName"),util_1=require("../../util/util"),PureDiv=function(e,t){var r=e.native,i=e.textClassName,n=e.className,a=e.children,s=e.style,l=e.scroll,_=(0,tailwind_rn_1.useTailwind)(),o=__rest(r||{},[]),u=n?_((0,trimClassName_1.trimClassName)(n)):{},c=l?react_native_1.ScrollView:react_native_1.View;return(0,jsx_runtime_1.jsx)(c,__assign({style:[u,s]},o,{ref:t},{children:(0,util_1.wrapInTextIfNeeded)(a,i)}))};exports.Div=React.forwardRef(PureDiv);
//# sourceMappingURL=Div.native.js.map