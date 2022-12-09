"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openWhatsapp = void 0;
var rest_util_1 = require("rest-util");
var openWhatsapp = function (_a) {
    var _b;
    var phone = _a.phone, text = _a.text;
    var url = "https://api.whatsapp.com/send/" +
        (0, rest_util_1.toQueryString)({ phone: phone, text: text, app_absent: 0 });
    (_b = window.open(url, "_blank")) === null || _b === void 0 ? void 0 : _b.focus();
};
exports.openWhatsapp = openWhatsapp;
//# sourceMappingURL=openWhatsapp.js.map