"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.propertyToTableRow=void 0;var noNewlines_1=require("./noNewlines"),propertyToTableRow=function(e){var o=e.required?"":"(optional)",r=(0,noNewlines_1.noNewlines)(e.schema.description)||"";
// TODO: stack deeper objects and make sure to also print tables for those
return"| ".concat(e.name," ").concat(o," | ").concat(e.schema.type," | ").concat(r," |")};exports.propertyToTableRow=propertyToTableRow;
//# sourceMappingURL=propertyToTableRow.js.map