"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutPostApi = void 0;
var reply_1 = __importDefault(require("server/reply"));
/**
 * Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */
var logoutPostApi = function () {
    var logoutResult = {
        isSuccessful: true,
        message: "Logged out",
    };
    //cookie("authToken", "").
    return reply_1.default.send(logoutResult);
};
exports.logoutPostApi = logoutPostApi;
//# sourceMappingURL=logoutPostApi.js.map