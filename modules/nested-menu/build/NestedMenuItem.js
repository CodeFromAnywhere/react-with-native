"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedMenuItem=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),next_a_link_1=require("next-a-link"),useExpanded_1=require("./useExpanded"),store_1=require("./store"),NestedMenuItem=function(e){var t=e.title,n=e.children,r=e.icon,i=e.onClick,s=e.onDoubleClick,a=e.onContextMenu,_=e.rightIcon,l=e.target,u=e.href,c=e.showChildren,o=e.level,x=e.headersClickable,d=(0,react_with_native_router_1.useRouter)().asPath.substring(1),h=(0,useExpanded_1.useExpanded)(u),g=h[0],v=h[1],m=h[2],f=h[3],j=(0,store_1.useStore)("menu.isMobileMenuEnabled"),p=(j[0],j[1]),w=d===u,b=o||0,k=n&&n.length>0&&c,N=x||!k,C=N?"".concat(w?"text-blue-500":""," hover:text-blue-800 "):void 0,y=w?void 0:N?u&&0!==u.length?u:"/":void 0;return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full flex flex-row justify-center items-center pr-4 ".concat(N?"hover:bg-gray-200 hover:dark:bg-gray-800 ".concat(w?"bg-gray-200 dark:bg-gray-800 ":""):"")},{children:[(0,jsx_runtime_1.jsxs)(next_a_link_1.ALink,__assign({style:{paddingLeft:10*b+5,paddingBottom:10,paddingTop:10},className:"flex flex-row justify-between",textClassName:"flex flex-1 text-xs",href:y,target:l,onDoubleClick:s,onContextMenu:a,onClick:function(){g&&w?f():(null==i||i(),m(),p(!1))}},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Span,__assign({
//line-clamp-1 truncate text-ellipsis
textClassName:C},{children:[r||"",t]})),(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({className:"flex flex-row"},{children:_?(0,jsx_runtime_1.jsx)(react_with_native_1.Span,{children:_}):null}))]})),k?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"text-3xl cursor-pointer",onClick:function(){return v()}},{children:g?"▾":"▸"})):null]})),k&&g?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"w-full"},{children:n.map((function(e,t){return(0,jsx_runtime_1.jsx)(exports.NestedMenuItem,__assign({},e,{headersClickable:x,level:b+1}),"menu-".concat(u,"-").concat(t))}))})):null]}))};exports.NestedMenuItem=NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map