"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigation = void 0;
var router_1 = require("next/router");
function useNavigation() {
    var router = (0, router_1.useRouter)();
    return {
        addListener: function () { },
        canGoBack: function () { return true; },
        dispatch: function () { },
        getParent: function () { },
        getState: function () { },
        goBack: function () {
            router.back();
        },
        isFocused: function () { },
        removeListener: function () { },
        reset: function () { },
        setOptions: function () { },
        setParams: function () { },
        navigate: function (screen, params) {
            router.push(screen, { query: params });
        },
    };
}
exports.useNavigation = useNavigation;
//# sourceMappingURL=useNavigation.js.map