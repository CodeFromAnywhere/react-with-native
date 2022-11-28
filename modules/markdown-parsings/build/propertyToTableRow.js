"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyToTableRow = void 0;
var propertyToTableRow = function (property) {
    var _a;
    var requiredString = property.required ? "" : "(optional)";
    var descriptionString = ((_a = property.schema.description) === null || _a === void 0 ? void 0 : _a.replaceAll("\n", "<br />")) || "";
    // TODO: stack deeper objects and make sure to also print tables for those
    return "| ".concat(property.name, " ").concat(requiredString, " | ").concat(property.schema.type, " | ").concat(descriptionString, " |");
};
exports.propertyToTableRow = propertyToTableRow;
//# sourceMappingURL=propertyToTableRow.js.map