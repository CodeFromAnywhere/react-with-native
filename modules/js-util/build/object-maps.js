"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapKeys = exports.mapValuesSync = exports.objectValuesMap = exports.objectMapSync = exports.objectMapAsync = void 0;
var general_1 = require("./general");
var getObjectKeysArray_1 = require("./getObjectKeysArray");
var mergeObjectsArray_1 = require("./mergeObjectsArray");
/**
 * Map an object asynchronously and return the same object with the mapped result in its values
 *
 * Example usage:
 *
 *
```ts

  const srcFileContentObject = {
    "index.ts": indexString,
    "public-local.ts": publicLocalTypescriptFileString,
    "public.ts": publicTypescriptFileString,
  };

  const srcFileWriteSuccessObject = await objectMapAsync(srcFileContentObject, async (operationRelativeTypescriptFilePath,content)=>{

    try {
      await fs.writeFile(
        path.join(operationBasePath, "src", operationRelativeTypescriptFilePath),
        content,
        "utf8"
      );

      return true;
    
    } catch {
      return false;
    }

  });

```

 */
var objectMapAsync = function (object, mapFn) { return __awaiter(void 0, void 0, void 0, function () {
    var keys, result, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                keys = (0, getObjectKeysArray_1.getObjectKeysArray)(object);
                _a = mergeObjectsArray_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(keys.map(function (key) { return __awaiter(void 0, void 0, void 0, function () {
                        var value, _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    value = object[key];
                                    _b = {};
                                    _a = key;
                                    return [4 /*yield*/, mapFn(key, value)];
                                case 1: return [2 /*return*/, (_b[_a] = _c.sent(), _b)];
                            }
                        });
                    }); }))];
            case 1:
                result = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, result];
        }
    });
}); };
exports.objectMapAsync = objectMapAsync;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * Example usage:
 *
 * ```ts
 *
const result = objectMapSync({ hello: "world", isTrue: true }, (key,value) => {
  return `${value}123`;
});
```
 */
var objectMapSync = function (object, mapFn) {
    var valueObjectParts = (0, getObjectKeysArray_1.getObjectKeysArray)(object).map(function (key) {
        var _a;
        return _a = {}, _a[key] = mapFn(key, object[key]), _a;
    });
    var merged = (0, mergeObjectsArray_1.mergeObjectsArray)(valueObjectParts);
    return merged;
};
exports.objectMapSync = objectMapSync;
/**
 * not sure if this is the best way, but it does save some lines of code!
 *
 * maps over an object's values with a map function
 *
 * DEPRECATED in favour of objectMapSync and objectMapAsync
 */
var objectValuesMap = function (object, mapFn) {
    return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(key, object[key]);
        return result;
    }, {});
};
exports.objectValuesMap = objectValuesMap;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * sync
 */
var mapValuesSync = function (object, mapFn) {
    var valueObjectParts = Object.keys(object).map(function (key) {
        var _a;
        return _a = {}, _a[key] = mapFn(object[key]), _a;
    });
    return (0, mergeObjectsArray_1.mergeObjectsArray)(valueObjectParts);
};
exports.mapValuesSync = mapValuesSync;
/**
 * maps over all keys in an object and replaces them using a mapfn
 */
var mapKeys = function (object, mapFn) { return __awaiter(void 0, void 0, void 0, function () {
    var keyPairs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(Object.keys(object).map(function (oldKey) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = { oldKey: oldKey };
                                return [4 /*yield*/, mapFn(oldKey)];
                            case 1: return [2 /*return*/, (_a.newKey = _b.sent(), _a)];
                        }
                    });
                }); }))];
            case 1:
                keyPairs = _a.sent();
                return [2 /*return*/, (0, mergeObjectsArray_1.mergeObjectsArray)(keyPairs
                        .map(function (pair) {
                        var _a;
                        return pair.newKey ? (_a = {}, _a[pair.newKey] = object[pair.oldKey], _a) : null;
                    })
                        .filter(general_1.notEmpty))];
        }
    });
}); };
exports.mapKeys = mapKeys;
//# sourceMappingURL=object-maps.js.map