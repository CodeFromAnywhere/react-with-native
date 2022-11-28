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
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var authentication_1 = require("authentication");
var menu_1 = require("menu");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var Header_1 = require("./Header");
var store_1 = require("./store");
var Layout = function (props) {
    var publicBundleConfig = props.publicBundleConfig, nextPage = props.nextPage, pageProps = props.pageProps, menu = props.menu, customHeader = props.customHeader;
    var router = (0, react_with_native_router_1.useRouter)();
    var path = router.asPath.substring(1);
    var pages = {
        login: authentication_1.LoginForm,
        signup: authentication_1.SignupForm,
        "edit-profile": authentication_1.UpdateMeForm,
        profile: function () { return "should show person's profile"; },
    };
    var _a = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _a[0], setIsMobileMenuEnabled = _a[1];
    var renderMenu = function () {
        return menu ? (0, jsx_runtime_1.jsx)(menu_1.Menu, __assign({}, menu, { message: undefined })) : null;
    };
    /**
     * I run into this problem all the time
     *
     * https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working
     *
     * final solution came from here
     *
     * https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes
     *
     * Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!
     *
     * My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!
     */
    var NextPage = nextPage;
    var children = pages[path] ? pages[path]() : (0, jsx_runtime_1.jsx)(NextPage, __assign({}, pageProps));
    var header = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: customHeader !== undefined ? (customHeader) : ((0, jsx_runtime_1.jsx)(Header_1.Header, { publicBundleConfig: publicBundleConfig })) }));
    return ((0, jsx_runtime_1.jsx)("main", __assign({ className: "dark:bg-zinc-900 dark:text-white" }, { children: (0, jsx_runtime_1.jsxs)(authentication_1.LoginWrapper, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "lg:invisible absolute top-0 left-0 w-screen h-screen" }, { children: [header, isMobileMenuEnabled ? (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: renderMenu() }) : children] })), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-screen h-screen flex flex-1 invisible lg:visible flex-col" }, { children: [header, (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "h-full overflow-hidden flex-1 flex ".concat((menu === null || menu === void 0 ? void 0 : menu.menuPosition) === "left" ? "flex-row-reverse" : "flex-row") }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "min-h-0 overflow-y-scroll w-full h-full inline-block" }, { children: children })), menu ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "inline-block min-h-0 overflow-y-scroll h-full w-80" }, { children: renderMenu() }))) : null] }))] }))] }) })));
};
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map