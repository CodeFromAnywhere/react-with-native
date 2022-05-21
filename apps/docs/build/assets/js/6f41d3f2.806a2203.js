"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15],{876:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),i=["components"],l={},c="Introduction",u={unversionedId:"about",id:"about",title:"Introduction",description:"Why?",source:"@site/../../docs/1.about.md",sourceDirName:".",slug:"/about",permalink:"/about",draft:!1,editUrl:"https://github.com/Code-From-Anywhere/react-with-native/tree/main/apps/docs/../../docs/1.about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docSidebar",next:{title:"Core",permalink:"/react-with-native"}},s={},p=[{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2},{value:"Tailwind",id:"tailwind",level:2},{value:"Differences from react-native and react",id:"differences-from-react-native-and-react",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To solve react-native-web's severe limitations."),(0,o.kt)("li",{parentName:"ol"},"To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible."),(0,o.kt)("li",{parentName:"ol"},"To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native."),(0,o.kt)("li",{parentName:"ol"},"Because most companies come from the react side and want an app later, not the other way around.")),(0,o.kt)("h2",{id:"how"},"How?"),(0,o.kt)("p",null,"We simply create wrappers for all html tags and react(native) components to make them compatible with the other platform. We use ",(0,o.kt)("inlineCode",{parentName:"p"},".native.tsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".ios.tsx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".android.tsx")," files to let metro bundler import the correct files."),(0,o.kt)("h2",{id:"tailwind"},"Tailwind"),(0,o.kt)("p",null,"Tailwind is a peer dependency! Without it, ",(0,o.kt)("inlineCode",{parentName:"p"},"react-with-native")," still works, but lots of components won't have a default styling and you need to supply your own classNames via ",(0,o.kt)("inlineCode",{parentName:"p"},"replaceClassName")),(0,o.kt)("h2",{id:"differences-from-react-native-and-react"},"Differences from react-native and react"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you need to apply your text-related classNames to the text itself directly or if your children are a string you can add textClassName as a prop.")))}f.isMDXComponent=!0}}]);