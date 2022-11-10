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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMany = void 0;
var mapItem = function (mapFn, currentValue, index, array) { return __awaiter(void 0, void 0, void 0, function () {
    var reason_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = {
                    status: "fulfilled"
                };
                return [4 /*yield*/, mapFn(currentValue, index, array)];
            case 1: return [2 /*return*/, (_a.value = _b.sent(),
                    _a)];
            case 2:
                reason_1 = _b.sent();
                return [2 /*return*/, {
                        status: "rejected",
                        reason: reason_1,
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); };
function worker(id, generator, mapFn, result) {
    return __awaiter(this, void 0, void 0, function () {
        var generator_1, generator_1_1, _a, currentValue, index, array, mappedResult, e_1_1;
        var e_1, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, 6, 7]);
                    generator_1 = __values(generator), generator_1_1 = generator_1.next();
                    _c.label = 1;
                case 1:
                    if (!!generator_1_1.done) return [3 /*break*/, 4];
                    _a = __read(generator_1_1.value, 3), currentValue = _a[0], index = _a[1], array = _a[2];
                    return [4 /*yield*/, mapItem(mapFn, currentValue, index, array)];
                case 2:
                    mappedResult = _c.sent();
                    // NB: if mappedResult gets rejected, change nothing!
                    if (mappedResult.status === "fulfilled") {
                        result[index] = mappedResult.value;
                    }
                    _c.label = 3;
                case 3:
                    generator_1_1 = generator_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (generator_1_1 && !generator_1_1.done && (_b = generator_1.return)) _b.call(generator_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
/**
 * NB: Do I really need this? Would be nice not to use generators.
 */
function arrayGenerator(array) {
    var index, currentValue, generatorTuple;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < array.length)) return [3 /*break*/, 4];
                currentValue = array[index];
                generatorTuple = [currentValue, index, array];
                return [4 /*yield*/, generatorTuple];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                index++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
/**
 Lets you map over any array with a async function while setting a max. concurrency

 Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70
 */
var mapMany = function (array, mapFn, limit) { return __awaiter(void 0, void 0, void 0, function () {
    var result, generator, realLimit, workers, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = [];
                if (array.length === 0) {
                    return [2 /*return*/, result];
                }
                generator = arrayGenerator(array);
                realLimit = Math.min(limit || array.length, array.length);
                workers = new Array(realLimit);
                for (i = 0; i < realLimit; i++) {
                    workers.push(worker(i, generator, mapFn, result));
                }
                // console.log(`Initialized ${limit} workers`);
                return [4 /*yield*/, Promise.all(workers)];
            case 1:
                // console.log(`Initialized ${limit} workers`);
                _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.mapMany = mapMany;
//# sourceMappingURL=mapMany.js.map