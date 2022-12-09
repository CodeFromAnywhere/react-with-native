"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModelFromUrl = void 0;
var js_util_1 = require("js-util");
var react_with_native_router_1 = require("react-with-native-router");
/**
 * takes the model from the url
 */
var useModelFromUrl = function () {
    var router = (0, react_with_native_router_1.useRouter)();
    var paths = router.query.paths ? (0, js_util_1.makeArray)(router.query.paths) : [];
    var modelQuery = paths.pop();
    return modelQuery;
};
exports.useModelFromUrl = useModelFromUrl;
//# sourceMappingURL=useModelQuery.js.map