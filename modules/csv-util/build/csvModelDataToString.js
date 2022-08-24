"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.csvModelDataToString=void 0;var make_test_1=require("make-test"),example_1=require("./example"),csvModelDataToString=function(e,
/**
 * if not given, takes the item with the most keys
 */
t){var n,r=null===(n=null==t?void 0:t.properties)||void 0===n?void 0:n.map((function(e){return e.name}));if(!r){var o=e.reduce((function(e,t){var n=Object.keys(t).length;return n>e.keysAmount?{keysAmount:n,item:t}:e}),{keysAmount:0,item:void 0}).item;r=Object.keys(o)}var a=r.join(","),i=e.map((function(e){return r.map((function(t){return String(e[t])})).join(",")}));return"".concat(a,"\n").concat(i.join("\n"))};exports.csvModelDataToString=csvModelDataToString,exports.test=(0,make_test_1.makeTest)((function(){return(0,exports.csvModelDataToString)(example_1.exampleCsvItems)}),(function(e){return!1}));
//# sourceMappingURL=csvModelDataToString.js.map