"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vscodeOpen = void 0;
var api_1 = require("../api");
var vscodeOpen = function (paths, authToken) {
    (0, api_1.api)("function/vscode-open", "POST", {
        arguments: { config: { paths: paths } },
        authToken: authToken,
    });
};
exports.vscodeOpen = vscodeOpen;
//# sourceMappingURL=vscodeOpen.js.map