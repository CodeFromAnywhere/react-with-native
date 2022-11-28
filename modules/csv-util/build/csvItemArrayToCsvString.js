"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.csvItemArrayToCsvString = void 0;
var make_test_1 = require("make-test");
var sync_1 = require("csv-stringify/sync");
var example_1 = require("./example");
/**
 * make csv string from a csv model type
 */
var csvItemArrayToCsvString = function (csvModelData) {
    if (csvModelData.length === 0)
        return "";
    var result = (0, sync_1.stringify)(csvModelData, { header: true });
    return result;
    /**
  
  NB: first I did my own native raw implementation, but this doesn't have good newline support, so I fell back to csv modules (https://csv.js.org/stringify/api/)
   
    // let propertyNames = simplifiedSchema?.properties?.map((x) => x.name);
  
    const longestItem = csvModelData.reduce(
      (previous, current) => {
        const keysAmount = Object.keys(current).length;
        if (keysAmount > previous.keysAmount) {
          return { keysAmount, item: current };
        }
        return previous;
      },
      { keysAmount: 0, item: undefined } as {
        keysAmount: number;
        item: T | undefined;
      }
    ).item!;
  
    const propertyNames = Object.keys(longestItem);
  
    const headerString = propertyNames.join(",");
  
    const rowStrings = csvModelData.map((row) => {
      return propertyNames!
        .map((propertyName) => String(row[propertyName]))
        .join(",");
    });
  
    return `${headerString}\n${rowStrings.join("\n")}`;
    */
};
exports.csvItemArrayToCsvString = csvItemArrayToCsvString;
exports.test = (0, make_test_1.makeTest)(function () {
    return (0, exports.csvItemArrayToCsvString)(example_1.exampleCsvItems);
}, function (result) {
    return result === example_1.exampleCsvString;
});
//# sourceMappingURL=csvItemArrayToCsvString.js.map