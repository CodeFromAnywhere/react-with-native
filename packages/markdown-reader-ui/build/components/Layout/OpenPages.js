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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPages = exports.getActivePage = exports.renderOpenPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var common_types_1 = require("common-types");
var react_1 = require("react");
var react_with_native_2 = require("react-with-native");
var react_with_native_alert_1 = require("react-with-native-alert");
var react_with_native_router_1 = require("react-with-native-router");
var rest_util_1 = require("rest-util");
var useHotKey_1 = require("../../hooks/useHotKey");
var store_1 = __importDefault(require("../../store"));
var typeIcons_1 = require("../../util/typeIcons");
// @ts-ignore
var AiOutlineClose_svg_1 = __importDefault(require("../../../assets/AiOutlineClose.svg"));
// @ts-ignore
var BsPin_svg_1 = __importDefault(require("../../../assets/BsPin.svg"));
var react_with_native_3 = require("react-with-native");
var ALink_1 = require("../ALink");
var renderIcon = function (_a) {
    var svgSrc = _a.svgSrc, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ onClick: onClick, className: "hover:bg-yellow-100 rounded-sm p-1" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_3.Svg, { src: svgSrc, className: "w-4 h-4 text-gray-900 dark:text-gray-200" }) })));
};
var renderOpenPage = function (openPage, i, openPages, setOpenPages) {
    var router = (0, react_with_native_router_1.useRouter)();
    var query = (0, js_util_1.mapValuesSync)(router.query, function (value) { return (0, js_util_1.takeFirst)(value); });
    var type = Object.keys(typeIcons_1.typeIcons).includes(openPage.query.type || "")
        ? openPage.query.type
        : "other";
    var typeIcon = typeIcons_1.typeIcons[type];
    var isActive = (0, exports.getActivePage)(router.pathname) === openPage.page &&
        !Object.keys(openPage.query).find(function (key) { return openPage.query[key] !== query[key]; });
    var name = openPage.query.name || "Untitled";
    var title = openPage.page === "explore"
        ? "".concat(typeIcon, " ").concat(name)
        : openPage.page === "index"
            ? "".concat(typeIcon, " ").concat(name)
            : openPage.page === "db"
                ? "\uD83D\uDCE6 ".concat(openPage.query.model)
                : openPage.page === "menu"
                    ? "📁"
                    : "?";
    var clickableIcons = [
        {
            visible: openPage.pinned,
            svgSrc: BsPin_svg_1.default,
            onClick: function (e) {
                var newOpenPages = openPages.map(function (x) {
                    return x.id === openPage.id ? __assign(__assign({}, x), { pinned: false }) : x;
                });
                setOpenPages(newOpenPages);
            },
        },
        {
            visible: !openPage.pinned,
            svgSrc: AiOutlineClose_svg_1.default,
            onClick: function (e) {
                e.stopPropagation();
                var newOpenPages = openPages.filter(function (x) {
                    return x.id === openPage.id ? false : true;
                });
                setOpenPages(newOpenPages);
                // if you were there, go to another page that's open
                if (isActive) {
                    var anotherPage = newOpenPages[0];
                    if (anotherPage) {
                        router.push("/".concat(anotherPage.page).concat((0, rest_util_1.toQueryString)(anotherPage.query)));
                    }
                    else {
                        router.push("/");
                    }
                }
            },
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_2.Div, __assign({ className: "m-0.5 flex flex-row items-center border rounded-md border-gray-900 ".concat(isActive
            ? "bg-gray-50 dark:bg-gray-900"
            : "bg-gray-200 dark:bg-gray-700") }, { children: [(0, jsx_runtime_1.jsx)(ALink_1.ALink, __assign({ onDoubleClick: function () {
                    if (openPage.temporary) {
                        setOpenPages(openPages.concat(__assign(__assign({}, openPage), { temporary: false })));
                    }
                }, onContextMenu: function (e) {
                    e.preventDefault();
                    var newOpenPages = openPages.map(function (x) {
                        return x.id === openPage.id ? __assign(__assign({}, x), { pinned: !x.pinned }) : x;
                    });
                    setOpenPages(newOpenPages);
                }, href: "/".concat(openPage.page).concat((0, rest_util_1.toQueryString)(openPage.query)) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "".concat(openPage.temporary ? "italic text-gray-400 dark:text-gray-700" : "") }, { children: title })) }), "p".concat(i)), clickableIcons.filter(function (x) { return x.visible; }).map(renderIcon)] })));
};
exports.renderOpenPage = renderOpenPage;
var goToOpenPage = function (openPage) {
    var router = (0, react_with_native_router_1.useRouter)();
    if (openPage) {
        router.push("".concat(openPage.page).concat((0, rest_util_1.toQueryString)(openPage.query)));
    }
    else {
        router.push("/");
    }
};
var getActivePage = function (pathname) {
    var p = pathname.substring(1);
    if (p === "")
        return "index";
    return p;
};
exports.getActivePage = getActivePage;
var OpenPages = function () {
    var router = (0, react_with_native_router_1.useRouter)();
    var query = (0, js_util_1.mapValuesSync)(router.query, function (value) { return (0, js_util_1.takeFirst)(value); });
    var alert = (0, react_with_native_alert_1.useAlert)();
    var _a = (0, react_1.useState)(true), showOpenPages = _a[0], setShowOpenPages = _a[1];
    var _b = (0, store_1.default)("openPages"), openPages = _b[0], setOpenPages = _b[1];
    var currentOpenPage = {
        page: (0, exports.getActivePage)(router.pathname),
        query: query,
        lastOpenedAt: 0,
        temporary: true,
        /*** NB: id isn't correct */
        id: (0, common_types_1.generateId)(),
    };
    var currentPageOpenPage = openPages.find(function (x) {
        return x.page === "explore" &&
            x.query.path === currentOpenPage.query.path &&
            x.query.name === currentOpenPage.query.name &&
            x.query.type === currentOpenPage.query.type;
    });
    var allOpenPages = !!currentPageOpenPage
        ? openPages
        : openPages.concat(currentOpenPage);
    (0, useHotKey_1.useHotKey)([openPages, currentPageOpenPage, currentOpenPage], function (_a) {
        var altKey = _a.altKey, code = _a.code, shiftKey = _a.shiftKey;
        // new file
        if (altKey && code === "KeyN") {
            goToOpenPage(undefined);
        }
        // `alt+o` change viewmode for files: hidden, wrapped, slider
        if (altKey && code === "KeyO") {
            setShowOpenPages(function (value) { return !value; });
        }
        // `alt(+shift)+tab` go to next/previous open page
        if (altKey && code === "Tab") {
            if (shiftKey) {
                alert === null || alert === void 0 ? void 0 : alert("Previous page");
            }
            else {
                alert === null || alert === void 0 ? void 0 : alert("Next page");
            }
        }
        // close current page
        if (altKey && code === "KeyW") {
            if (currentPageOpenPage) {
                setOpenPages(openPages.filter(function (x) { return x.id !== currentPageOpenPage.id; }));
            }
            else {
                // just go some other place
                goToOpenPage(openPages[0]);
            }
        }
    });
    return showOpenPages ? ((0, jsx_runtime_1.jsx)(react_with_native_2.Div, __assign({ className: "bg-gray-100 dark:bg-gray-900" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_2.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: allOpenPages.map(function (openPage, index) {
                return (0, exports.renderOpenPage)(openPage, index, openPages, setOpenPages);
            }) })) }))) : null;
};
exports.OpenPages = OpenPages;
//# sourceMappingURL=OpenPages.js.map