"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ReactDOM = __importStar(require("react-dom"));
var canUseDOM = !!(typeof window !== "undefined" &&
    window.document &&
    window.document.createElement);
var Portal = function (_a) {
    var node = _a.node, children = _a.children;
    var defaultNode = null;
    (0, react_1.useEffect)(function () {
        return function () {
            if (defaultNode) {
                document.body.removeChild(defaultNode);
            }
            defaultNode = null;
        };
    }, []);
    if (!canUseDOM) {
        return null;
    }
    if (!node && !defaultNode) {
        defaultNode = document.createElement("div");
        document.body.appendChild(defaultNode);
    }
    return ReactDOM.createPortal(children, node || defaultNode);
};
exports.default = Portal;
//# sourceMappingURL=Portal.js.map