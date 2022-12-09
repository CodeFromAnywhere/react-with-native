"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useContext=void 0;var react_1=require("react"),useContext=function(
/**
 * The callback that activates whenever you right-click or long-press
 */
e,n){var t=(0,react_1.useState)(null),o=t[0],r=t[1],c={onContextMenu:function(n){n.preventDefault(),
// NB: needed to stop it from opening anywhere above (mobile)
n.stopPropagation(),function(n){var t,o=n.clientX,r=n.clientY,c=n.screenX,u=n.screenY,i=null===(t=n.currentTarget)||void 0===t?void 0:t.id;e({clientX:o,clientY:r,screenX:c,screenY:u,id:i})}(n)},
// onContextMenuCapture: (event: React.MouseEvent) => {
//   event.preventDefault();
//   event.stopPropagation();
// },
onTouchStart:function(t){
// Only allow for a single timeout
if(!o&&(null==n?void 0:n.longTouchDurationMs)){var c=setTimeout((function(){return function(n){var t,o=n.touches.item(n.touches.length-1),c=o.clientX,u=o.clientY,i=o.screenX,l=o.screenY,s=null===(t=n.currentTarget)||void 0===t?void 0:t.id;e({clientX:c,clientY:u,screenX:i,screenY:l,id:s}),r(null)}(t)}),n.longTouchDurationMs);r(c)}},onTouchEnd:function(){o&&clearTimeout(o)},onClick:function(e){return e.stopPropagation()},style:{userSelect:"none"}};return c};
/**
 * Use this if you want to create a completely custom behavior from a context action. On top of the default `.onContextMenu` behavior, this hook enables the possibility for a custom hold duration on mobile.
 */exports.useContext=useContext;
//# sourceMappingURL=useContext.js.map