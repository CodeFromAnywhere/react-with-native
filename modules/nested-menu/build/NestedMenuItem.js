"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedMenuItem=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),next_a_link_1=require("next-a-link"),useExpanded_1=require("./useExpanded"),NestedMenuItem=function(e){var t=e.title,n=e.children,i=e.icon,r=e.onClick,s=e.onDoubleClick,a=e.onContextMenu,_=e.rightIcon,l=e.target,u=e.href,c=e.showChildren,o=e.level,x=e.headersClickable,h=(0,react_with_native_router_1.useRouter)().asPath.substring(1),d=(0,useExpanded_1.useExpanded)(u),v=d[0],g=d[1],m=d[2],f=d[3],j=h===u,p=o||0,w=n&&n.length>0&&c,b=x||!w,N=b?"".concat(j?"text-blue-500":""," hover:text-blue-800 "):void 0,k=j?void 0:b?u&&0!==u.length?u:"/":void 0;return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full flex flex-row justify-center items-center pr-4 ".concat(b?"hover:bg-gray-200 dark:hover:bg-gray-800 ".concat(j?"bg-gray-200 ":""):"")},{children:[(0,jsx_runtime_1.jsxs)(next_a_link_1.ALink,__assign({style:{paddingLeft:10*p+5,paddingBottom:10,paddingTop:10},className:"flex flex-row justify-between",textClassName:"flex flex-1 text-xs",href:k,target:l,onDoubleClick:s,onContextMenu:a,onClick:function(e){v&&j?f():(null==r||r(),m())}},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Span,__assign({
//line-clamp-1 truncate text-ellipsis
textClassName:N},{children:[i||"",t]})),(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({className:"flex flex-row"},{children:_?(0,jsx_runtime_1.jsx)(react_with_native_1.Span,{children:_}):null}))]})),w?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"text-3xl cursor-pointer",onClick:function(){return g()}},{children:v?"▾":"▸"})):null]})),w&&v?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"w-full"},{children:n.map((function(e,t){return(0,jsx_runtime_1.jsx)(exports.NestedMenuItem,__assign({},e,{headersClickable:x,level:p+1}),"menu-".concat(u,"-").concat(t))}))})):null]}))};exports.NestedMenuItem=NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map