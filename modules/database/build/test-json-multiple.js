"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.testJsonMultiple = void 0;
var common_types_1 = require("common-types");
var test_db_1 = require("./test-db");
var generateSlugTestModel = function () {
    return {
        // Needed for deletion later
        id: (0, common_types_1.generateId)(),
        language: "en",
        markdown: "wut?",
        special: true,
        name: "test",
        description: "test",
    };
};
/**
  
  NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it
  

   */
var testJsonMultiple = function () { return __awaiter(void 0, void 0, void 0, function () {
    var firstInstance, firstId, setResult, getResult, pushResult, getResult2, removeResult, getResult3, updateResult, getResult4;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                firstInstance = generateSlugTestModel();
                firstId = firstInstance.id;
                return [4 /*yield*/, test_db_1.testDb.set("JsonMultipleTestModel", [firstInstance])];
            case 1:
                setResult = _c.sent();
                console.log({ setResult: setResult });
                return [4 /*yield*/, test_db_1.testDb.get("JsonMultipleTestModel")];
            case 2:
                getResult = _c.sent();
                console.log({ getResult: getResult });
                if (getResult.length !== 1) {
                    console.log("Invalid length");
                    process.exit(1);
                }
                return [4 /*yield*/, test_db_1.testDb.push("JsonMultipleTestModel", generateSlugTestModel())];
            case 3:
                pushResult = _c.sent();
                console.log({ pushResult: pushResult });
                return [4 /*yield*/, test_db_1.testDb.get("JsonMultipleTestModel")];
            case 4:
                getResult2 = _c.sent();
                console.log({ getResult2: getResult2 });
                if (getResult2.length !== 2) {
                    console.log("Invalid length");
                    process.exit(1);
                }
                return [4 /*yield*/, test_db_1.testDb.remove("JsonMultipleTestModel", function (content) { return content.id !== firstId; })];
            case 5:
                removeResult = _c.sent();
                console.log({ removeResult: removeResult });
                if (removeResult.amountRemoved !== 1) {
                    console.log("Invalid amount removed");
                    process.exit(1);
                }
                return [4 /*yield*/, test_db_1.testDb.get("JsonMultipleTestModel")];
            case 6:
                getResult3 = _c.sent();
                console.log({ getResult3: getResult3 });
                if (getResult3.length !== 1) {
                    console.log("Invalid length");
                    process.exit(1);
                }
                return [4 /*yield*/, test_db_1.testDb.update("JsonMultipleTestModel", function (content) { return content.id === firstId; }, function (old) {
                        var newItem = __assign(__assign({}, old), { special: false });
                        return newItem;
                    })];
            case 7:
                updateResult = _c.sent();
                console.log({ updateResult: updateResult });
                if (updateResult.rowsUpdated !== 1) {
                    console.log("Invalid rows updated", {
                        firstId: firstId,
                        updateResult: updateResult.data,
                    });
                    process.exit(1);
                }
                if (((_a = updateResult.data) === null || _a === void 0 ? void 0 : _a[0].special) !== false) {
                    console.log({ firstItem: (_b = updateResult.data) === null || _b === void 0 ? void 0 : _b[0] }, "special should be flase");
                    process.exit(1);
                }
                return [4 /*yield*/, test_db_1.testDb.get("JsonMultipleTestModel")];
            case 8:
                getResult4 = _c.sent();
                console.log({ getResult4: getResult4 });
                if (getResult4.length !== 1) {
                    console.log("Invalid length");
                    process.exit(1);
                }
                console.log("Csv Test Succeeded!");
                return [2 /*return*/, true];
        }
    });
}); };
exports.testJsonMultiple = testJsonMultiple;
//# sourceMappingURL=test-json-multiple.js.map