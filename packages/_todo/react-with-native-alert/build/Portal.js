import { useEffect } from "react";
import * as ReactDOM from "react-dom";
var canUseDOM = !!(typeof window !== "undefined" &&
    window.document &&
    window.document.createElement);
var Portal = function (_a) {
    var node = _a.node, children = _a.children;
    var defaultNode = null;
    useEffect(function () {
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
export default Portal;
//# sourceMappingURL=Portal.js.map