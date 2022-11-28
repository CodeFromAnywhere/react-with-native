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
exports.runModelEndToEndTest = void 0;
var test_db_1 = require("./test-db");
/**
  NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it
   */
var runModelEndToEndTest = function (modelName, generateInstance) { return __awaiter(void 0, void 0, void 0, function () {
    var firstInstance, firstId, setResult, getResult, pushResult, getResult2, removeResult, getResult3, updateResult, getResult4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                firstInstance = generateInstance();
                firstId = firstInstance.id;
                return [4 /*yield*/, test_db_1.testDb.set(modelName, [firstInstance])];
            case 1:
                setResult = _a.sent();
                return [4 /*yield*/, test_db_1.testDb.get(modelName)];
            case 2:
                getResult = _a.sent();
                if (getResult.length !== 1) {
                    console.log({ setResult: setResult, getResult: getResult });
                    console.log("Invalid length");
                    process.exit(1);
                }
                else {
                    console.log("".concat(modelName, " Set test passed"));
                }
                return [4 /*yield*/, test_db_1.testDb.upsert(modelName, generateInstance())];
            case 3:
                pushResult = _a.sent();
                return [4 /*yield*/, test_db_1.testDb.get(modelName)];
            case 4:
                getResult2 = _a.sent();
                if (getResult2.length !== 2) {
                    console.log({ pushResult: pushResult, getResult2: getResult2 });
                    console.log("Invalid length");
                    process.exit(1);
                }
                else {
                    console.log("".concat(modelName, " Push test passed"));
                }
                return [4 /*yield*/, test_db_1.testDb.remove(modelName, 
                    // NB: we don't remove first Id
                    function (content) { return content.id !== firstId; })];
            case 5:
                removeResult = _a.sent();
                if (removeResult.amountRemoved !== 1) {
                    console.log({ removeResult: removeResult });
                    console.log("Invalid amount removed");
                    process.exit(1);
                }
                else {
                    console.log("".concat(modelName, " Remove test: correct amount removed"));
                }
                return [4 /*yield*/, test_db_1.testDb.get(modelName)];
            case 6:
                getResult3 = _a.sent();
                if (getResult3.length !== 1) {
                    console.log({ getResult3: getResult3 });
                    console.log("Invalid length");
                    process.exit(1);
                }
                else {
                    console.log("".concat(modelName, " Remove test passed"));
                }
                return [4 /*yield*/, test_db_1.testDb.update(modelName, function (content) { return content.id === firstId; }, function (content) {
                        return __assign(__assign({}, content), { id: "NEWIDDDD" });
                    })];
            case 7:
                updateResult = _a.sent();
                if (updateResult.amountUpdated !== 1) {
                    console.log({ updateResult: updateResult });
                    console.log("Invalid rows updated", { firstId: firstId });
                    process.exit(1);
                }
                else {
                    console.log("".concat(modelName, " Update test: right amount of rows updated"));
                }
                return [4 /*yield*/, test_db_1.testDb.get(modelName)];
            case 8:
                getResult4 = _a.sent();
                if (getResult4[0].id !== "NEWIDDDD") {
                    console.log({ firstItem: getResult4[0] }, "id != NEWIDDDD");
                    process.exit(1);
                }
                else {
                    console.log("".concat(modelName, " Update test passed"));
                }
                if (getResult4.length !== 1) {
                    console.log({ getResult4: getResult4 });
                    console.log("Invalid length");
                    process.exit(1);
                }
                console.log("Test Succeeded for ".concat(modelName));
                return [2 /*return*/, true];
        }
    });
}); };
exports.runModelEndToEndTest = runModelEndToEndTest;
//# sourceMappingURL=test-e2e.js.map