"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImplicitId = void 0;
var convert_case_1 = require("convert-case");
/**
Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown
 */
var getImplicitId = function (title) {
    return (0, convert_case_1.slugify)(title);
};
exports.getImplicitId = getImplicitId;
//# sourceMappingURL=getImplicitId.js.map