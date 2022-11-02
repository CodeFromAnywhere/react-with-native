"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImplicitId=void 0;var convert_case_1=require("convert-case"),getImplicitId=function(e){return(0,convert_case_1.slugify)(e)};
/**
Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown
 */exports.getImplicitId=getImplicitId;
//# sourceMappingURL=getImplicitId.js.map