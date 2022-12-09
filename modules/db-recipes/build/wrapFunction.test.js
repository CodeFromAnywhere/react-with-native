"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapFunction = void 0;
var wrapFunction = function (originalFunction) {
    var wrappedFunction = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        /**
    do other stuff, both with await and without awaiting
    
    - logging io + cache lookup (@pure tag)
    - logging performance
    - logging errors
    - input validation
    - output validation
    - tracking usage quantity, checking if there is still permission for execution based on credit balance
    */
        console.log("I'm wrapping this function", originalFunction.name);
        return originalFunction.apply(void 0, parameters);
    };
    return wrappedFunction;
};
exports.wrapFunction = wrapFunction;
var testFn = function (a) {
    return "".concat(a).concat(a);
};
var testFnWrapped = (0, exports.wrapFunction)(testFn);
// console.log(testFnWrapped("a"));
//# sourceMappingURL=wrapFunction.test.js.map