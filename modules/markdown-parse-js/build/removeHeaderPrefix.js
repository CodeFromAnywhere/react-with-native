"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.removeHeaderPrefix=void 0;var make_test_1=require("make-test"),removeHeaderPrefix=function(e){return e.split("").reduce((function(e,r){var t=e.isHeaderPrefix&&"#"===r;return{string:t?"":e.string.concat(r),isHeaderPrefix:t}}),{string:"",isHeaderPrefix:!0}).string.trim()};
/**
 * removes header prefix (##### etc) and trims whats behind that
 */exports.removeHeaderPrefix=removeHeaderPrefix,exports.test=(0,make_test_1.makeTest)((function(){return(0,exports.removeHeaderPrefix)("#### Header")}),(function(e){return"Header"===e}));
//# sourceMappingURL=removeHeaderPrefix.js.map