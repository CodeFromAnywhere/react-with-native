"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
var log_1 = require("log");
/**
 * Takes stored data and an id or slug to remove
 *
 * NB: this works for every storage method except for key value markdown
 */
var remove = function (storedData, ids, slugs) {
    var newStoredData = storedData.filter(function (x) {
        if (!x) {
            (0, log_1.log)("Weird value found in your data, removing", { type: "debug" });
            return true;
        }
        var matchId = ids.includes(x.id);
        var matchSlug = slugs.includes(x.slug);
        return !matchId && !matchSlug;
    });
    var amountRemoved = newStoredData.length - storedData.length;
    return { amountRemoved: amountRemoved, newStoredData: newStoredData, isSuccesful: true };
};
exports.remove = remove;
//# sourceMappingURL=remove.js.map