"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MatchingText=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),MatchingText=function(e){var t=e.truncateLength,n=e.text,s=e.defaultTextClassName,a=e.matchTextClassName,i=e.search,r=n.toLowerCase().indexOf(i.toLowerCase()),h=n.slice(0,r),l=n.slice(r+i.length),_=n.slice(r,r+i.length),c=h.length+i.length+l.length,g=t?c-t:0,u=h.length/(h.length+l.length),o=l.length/(h.length+l.length),x=Math.round(u*g),v=Math.round(o*g);
// 1: find index of search in text
x>h.length&&t&&h.slice(0,h.length-x-2),t&&v>l.length&&l.slice(l.length-v-2);
// 3: render before, match, and after
return-1===r?
// with no match, truncate at truncateLength at the end
(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({title:n,className:s},{children:t&&n.length>t?n.substring(0,t-2)+"..":n})):
/**
     * with a match, the total length needs to be `truncateLength`
     *
     * the `search` result should not be truncated
     *
     * `beforeText` should be truncated at the end to reduce to `truncateLength`
     * `afterText` should be truncated at the beginning to reduce to `truncateLength`
     *
     * it should be truncated as much as needed on both sides, but we must take into account at the length of the sides as well
     */(0,jsx_runtime_1.jsxs)(react_with_native_1.P,__assign({title:n,className:s},{children:[h,(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({className:a},{children:_})),l]}))};exports.MatchingText=MatchingText;
//# sourceMappingURL=MatchingText.js.map