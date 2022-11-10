"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAsync = void 0;
/**
 * mapAsync makes it possible to map over an array async without having to do the promise.all afterwards
 *
 * It saves a lot of lines of code, and makes it more readable
 * Example usage:
 *
 *
 * ```ts
 *
 * const myNumbers = [1, 2, 3, 4, 5];
 *
 * const doubleAsync = (num) => Promise.resolve(num + num);
 * const sqrtAsync = (sum) => Promise.resolve(sum * sum);
 * const halfAsync = (time) => Promise.resolve(time / 2);
 *
 * const doubleSqrtHalfs = await mapAsync(myNumbers, doubleAsync)
  .then((sums) => mapAsync(sums, sqrtAsync))
  .then((times) => mapAsync(times, halfAsync));
```
 */
var mapAsync = function (array, callback) {
    var u = Promise.all(array.map(callback));
    return u;
};
exports.mapAsync = mapAsync;
//# sourceMappingURL=mapAsync.js.map