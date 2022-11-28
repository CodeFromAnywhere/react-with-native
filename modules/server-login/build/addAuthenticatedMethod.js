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
exports.addAuthenticatedMethod = void 0;
var database_1 = require("database");
var model_types_1 = require("model-types");
var sms_1 = require("sms");
var mail_1 = require("mail");
var encryptPassword_1 = require("./encryptPassword");
var isPhoneNumber_1 = require("./isPhoneNumber");
var isValidPassword_1 = require("./isValidPassword");
/**
 * sends an email or sms, or already confirms in case of emailPassword
 */
var addAuthenticatedMethod = function (method, handle, shouldBeUnique, credential) { return __awaiter(void 0, void 0, void 0, function () {
    var otp, text, authenticationMethod, mailResult, otp_1, body, updateResult, smsResult, encryptedCredential_1, updateResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(method === "email")) return [3 /*break*/, 2];
                // send email to `handle`
                if (!(0, model_types_1.isEmail)(handle)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide a correct email",
                        }];
                }
                otp = Math.round(100000 + Math.random() * 900000);
                text = "Please verify your email with this code: ".concat(otp, ". You have 10 minutes.");
                authenticationMethod = {
                    method: "email",
                    handle: handle,
                    isAuthenticated: false,
                    otp: otp,
                };
                return [4 /*yield*/, (0, mail_1.sendMail)({
                        to: handle,
                        subject: "Verify your email",
                        text: text,
                    })];
            case 1:
                mailResult = _a.sent();
                if (!mailResult) {
                    return [2 /*return*/, { isSuccessful: false, message: "Couldn't send email" }];
                }
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Code sent, please verify.",
                        authenticationMethod: authenticationMethod,
                    }];
            case 2:
                if (!(method === "phoneNumber")) return [3 /*break*/, 5];
                // send sms to `handle`
                if (!(0, isPhoneNumber_1.isPhoneNumber)(handle)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide a correct phone number",
                        }];
                }
                otp_1 = Math.round(100000 + Math.random() * 900000);
                body = "Please verify your phone number with this code: ".concat(otp_1, ". You have 10 minutes.");
                return [4 /*yield*/, database_1.db.update("Device", function (item) { return item.id === deviceId; }, function (old) { return (__assign(__assign({}, old), { authenticationMethods: old.authenticationMethods.concat({
                            method: "phoneNumber",
                            handle: handle,
                            isAuthenticated: false,
                            otp: otp_1,
                        }) })); })];
            case 3:
                updateResult = _a.sent();
                return [4 /*yield*/, (0, sms_1.sendSms)({ to: handle, body: body })];
            case 4:
                smsResult = _a.sent();
                if (!smsResult) {
                    return [2 /*return*/, { isSuccessful: false, message: "Couldn't send sms" }];
                }
                return [2 /*return*/, { isSuccessful: true, message: "Code sent, please verify." }];
            case 5:
                if (!(method === "usernamePassword")) return [3 /*break*/, 8];
                // add username and password to the authenticated methods
                if (!credential || !(0, isValidPassword_1.isValidPassword)(credential)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide a valid password",
                        }];
                }
                return [4 /*yield*/, (0, encryptPassword_1.encryptPassword)(credential)];
            case 6:
                encryptedCredential_1 = _a.sent();
                return [4 /*yield*/, database_1.db.update("Device", function (item) { return item.id === deviceId; }, function (old) { return (__assign(__assign({}, old), { authenticationMethods: old.authenticationMethods.concat({
                            method: "usernamePassword",
                            handle: handle,
                            encryptedCredential: encryptedCredential_1,
                            isAuthenticated: true,
                        }) })); })];
            case 7:
                updateResult = _a.sent();
                return [2 /*return*/, { isSuccessful: true, message: "Username/password has been set." }];
            case 8: return [2 /*return*/, { isSuccessful: false, message: "method not implemented yet" }];
        }
    });
}); };
exports.addAuthenticatedMethod = addAuthenticatedMethod;
//# sourceMappingURL=addAuthenticatedMethod.js.map