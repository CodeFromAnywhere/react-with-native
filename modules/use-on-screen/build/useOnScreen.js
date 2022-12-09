"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useOnScreen=void 0;var react_1=require("react");
/**
 * checks wheter or not a certain element is in the browsers screen view, or not.
 */function useOnScreen(e){var n=(0,react_1.useState)(!1),r=n[0],t=n[1],u="undefined"==typeof window?null:new IntersectionObserver((function(e){var n=e[0];return t(n.isIntersecting)}));return(0,react_1.useEffect)((function(){if(u)
// Remove the observer as soon as the component is unmounted
return e.current&&(null==u||u.observe(e.current)),function(){null==u||u.disconnect()}}),[u]),r}exports.useOnScreen=useOnScreen;
//# sourceMappingURL=useOnScreen.js.map