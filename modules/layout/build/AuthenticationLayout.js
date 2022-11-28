"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthenticationLayout=void 0;var jsx_runtime_1=require("react/jsx-runtime"),authentication_1=require("authentication"),api_1=require("api"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),Header_1=require("./Header"),LayoutGrid_1=require("./LayoutGrid"),AuthenticationLayout=function(t){var e,i,n,r,a=null===(e=api_1.queries.useGetPublicBundleConfig().data)||void 0===e?void 0:e.result,u=t.nextPage,o=t.pageProps,s=t.menu,_=t.customHeader,c=t.custom404Page,d=(0,react_with_native_router_1.useRouter)().asPath.substring(1).split("?")[0],l={login:authentication_1.LoginForm,signup:authentication_1.SignupForm,"edit-profile":authentication_1.UpdateMeForm,profile:authentication_1.PublicProfile,"2fa":authentication_1.AuthenticationMethodsCrud},h=u,v=!!(null===(i=null==s?void 0:s.queryPaths)||void 0===i?void 0:i.includes(d)),p=!!(null===(n=null==s?void 0:s.webPagesFlat)||void 0===n?void 0:n.find((function(t){return t.queryPath===d}))),g=!!(null===(r=null==s?void 0:s.webPagesFlat)||void 0===r?void 0:r.find((function(t){return t.queryPath.startsWith(d)}))),x=v||p||""===d||g,j=l[d],f=c||(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:"Could not find this page, are you sure you got it?"}),y=x?(0,jsx_runtime_1.jsx)(h,__assign({},o)):j?(0,jsx_runtime_1.jsx)(j,{}):f,m=(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:void 0!==_?_:(0,jsx_runtime_1.jsx)(Header_1.Header,{publicBundleConfig:a})});return(0,jsx_runtime_1.jsx)(authentication_1.LoginWrapper,{children:(0,jsx_runtime_1.jsx)(LayoutGrid_1.LayoutGrid,__assign({header:m,menu:s},{children:y}))})};exports.AuthenticationLayout=AuthenticationLayout;
//# sourceMappingURL=AuthenticationLayout.js.map