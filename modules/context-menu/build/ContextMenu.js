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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextMenu = exports.useContext = exports.DEFAULT_LONGPRESS_DURATION_MS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_popper_1 = require("react-popper");
exports.DEFAULT_LONGPRESS_DURATION_MS = 500;
var useContext = function (
/**
 * The callback that activates whenever you right-click or long-press
 */
callback, config) {
    var _a = (0, react_1.useState)(null), timeoutRef = _a[0], setTimeoutRef = _a[1];
    var openTouchMenu = function (event) {
        var _a;
        var touch = event.touches.item(event.touches.length - 1);
        var clientX = touch.clientX, clientY = touch.clientY, screenX = touch.screenX, screenY = touch.screenY;
        var id = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.id;
        callback({ clientX: clientX, clientY: clientY, screenX: screenX, screenY: screenY, id: id });
        setTimeoutRef(null);
    };
    var openContextMenu = function (event) {
        var _a;
        var clientX = event.clientX, clientY = event.clientY, screenX = event.screenX, screenY = event.screenY;
        var id = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.id;
        callback({ clientX: clientX, clientY: clientY, screenX: screenX, screenY: screenY, id: id });
    };
    var onTouchStart = function (event) {
        // Only allow for a single timeout
        if (timeoutRef)
            return;
        if (!(config === null || config === void 0 ? void 0 : config.longTouchDurationMs))
            return;
        var timeout = setTimeout(function () { return openTouchMenu(event); }, config.longTouchDurationMs);
        setTimeoutRef(timeout);
    };
    /**
     * Required for ensuring that you don't close  the menu immediately when opening it on mobile, because a click-event is also fired there
     */
    var onClick = function (mouseEvent) {
        return mouseEvent.stopPropagation();
    };
    var onTouchEnd = function () {
        if (timeoutRef) {
            clearTimeout(timeoutRef);
        }
    };
    var onContextMenu = function (event) {
        event.preventDefault();
        // NB: needed to stop it from opening anywhere above (mobile)
        event.stopPropagation();
        openContextMenu(event);
    };
    //
    var contextProps = {
        onContextMenu: onContextMenu,
        // onContextMenuCapture: (event: React.MouseEvent) => {
        //   event.preventDefault();
        //   event.stopPropagation();
        // },
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd,
        onClick: onClick,
        style: { userSelect: "none" },
    };
    return contextProps;
};
exports.useContext = useContext;
var useContextMenu = function (props) {
    var _a = (0, react_1.useState)(null), contextEvent = _a[0], setContextEvent = _a[1];
    (0, react_1.useEffect)(function () {
        // Needed to make it go away when clicking outside of the menu
        if (typeof window === "undefined")
            return;
        window.addEventListener("click", function (mouseEvent) {
            setContextEvent(null);
        });
    }, []);
    var contextProps = (0, exports.useContext)(function (contextEvent) {
        setContextEvent(contextEvent);
        console.log("callback called", props);
    }, { longTouchDurationMs: 200 });
    var virtualReference = (0, react_1.useMemo)(function () { return ({
        // This is going to create a virtual reference element
        getBoundingClientRect: function () {
            var clientRect = {
                top: (contextEvent === null || contextEvent === void 0 ? void 0 : contextEvent.clientY) || 10,
                left: (contextEvent === null || contextEvent === void 0 ? void 0 : contextEvent.clientX) || 10,
                bottom: 20,
                right: 100,
                width: 0,
                height: 0,
                x: 0,
                y: 0,
                toJSON: function () {
                    return "";
                },
            };
            return clientRect;
        },
    }); }, [contextEvent]);
    var popperRef = (0, react_1.useRef)(null);
    var _b = (0, react_popper_1.usePopper)(virtualReference, popperRef.current, { strategy: "fixed", placement: "auto-start" }), styles = _b.styles, attributes = _b.attributes;
    var contextMenu = contextEvent ? ((0, jsx_runtime_1.jsx)("div", __assign({ onClick: function (e) {
            // NB: needed to ensure it doesn't close due to the window.click
            e.stopPropagation();
        }, style: styles.popper }, attributes.popper, { children: props.renderContext({ id: contextEvent.id }) }))) : null;
    var openContextMenuProps = __assign(__assign({}, contextProps), { ref: popperRef });
    return { openContextMenuProps: openContextMenuProps, contextMenu: contextMenu };
};
exports.useContextMenu = useContextMenu;
//# sourceMappingURL=ContextMenu.js.map