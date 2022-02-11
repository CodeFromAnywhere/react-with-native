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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export var AlertContext = React.createContext({});
export var AlertProvider = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children;
    var _f = useState([]), alerts = _f[0], setAlerts = _f[1];
    var _g = useState(""), value = _g[0], setValue = _g[1];
    var textInputRef = useRef(null);
    var theAlert = alerts[0];
    useEffect(function () {
        var _a;
        (_a = textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textInputRef, alerts.length]);
    var alert = useCallback(function (title, message, buttons, options) {
        setValue("");
        console.log("lengte", alerts.length);
        // alerts copy.
        var newAlerts = __spreadArray([], alerts, true);
        if (!alerts.map(function (x) { return x.options.key; }).includes(options.key)) {
            newAlerts.push({ title: title, message: message, buttons: buttons, options: options });
        }
        //NB: copy needed!!!
        setAlerts(__spreadArray([], newAlerts, true));
    }, [setValue, alerts, setAlerts]);
    return (React.createElement(AlertContext.Provider, { value: alert },
        children,
        alerts.length > 0 ? (React.createElement(View, { style: {
                position: "absolute",
                top: 0,
                bottom: ((_b = theAlert.options) === null || _b === void 0 ? void 0 : _b.textInput) ? 200 : 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                justifyContent: "center",
                alignItems: "center",
            } },
            React.createElement(View, { style: {
                    backgroundColor: "#DDD",
                    borderRadius: 20,
                    width: "80%",
                    alignItems: "center",
                } },
                (theAlert.title || theAlert.message) && (React.createElement(View, { style: { padding: 20 } },
                    theAlert.title && (React.createElement(Text, { style: {
                            fontWeight: "bold",
                            fontSize: 18,
                            textAlign: "center",
                        } }, theAlert.title)),
                    theAlert.message && (React.createElement(Text, { style: { textAlign: "center" } }, theAlert.message)))),
                ((_c = theAlert.options) === null || _c === void 0 ? void 0 : _c.component) && (React.createElement(View, { style: { padding: 20 } }, theAlert.options.component)),
                ((_d = theAlert.options) === null || _d === void 0 ? void 0 : _d.textInput) && (React.createElement(View, { style: { padding: 20, width: "100%" } },
                    React.createElement(TextInput, { value: value, onChangeText: setValue, ref: textInputRef, style: {
                            fontSize: 18,
                            backgroundColor: "white",
                            width: "100%",
                            borderRadius: 3,
                            padding: 3,
                        }, keyboardType: (_e = theAlert.options) === null || _e === void 0 ? void 0 : _e.keyboardType }))),
                React.createElement(View, { style: { width: "100%", height: 1, backgroundColor: "#BBB" } }),
                theAlert.buttons ? (React.createElement(View, { style: {
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                    } }, theAlert.buttons.map(function (button, index) { return (React.createElement(TouchableOpacity, { key: "".concat(theAlert.options.key, "button").concat(index), style: {
                        justifyContent: "center",
                        alignItems: "center",
                        height: 40,
                        flex: 1,
                        borderRightColor: "#BBB",
                        borderRightWidth: index < theAlert.buttons.length - 1 ? 1 : 0,
                    }, onPress: function () {
                        var _a;
                        var newAlerts = __spreadArray([], alerts, true);
                        newAlerts.shift();
                        console.log("newAlerts", newAlerts.length);
                        // NB: we need to make a copy here, otherwise it has the same reference and the component thinks that it didn't change.
                        setAlerts(__spreadArray([], newAlerts, true));
                        setValue("");
                        (_a = button.onPress) === null || _a === void 0 ? void 0 : _a.call(button, value);
                    } },
                    React.createElement(Text, { style: {
                            color: "blue",
                            fontSize: 18,
                        } }, button.text))); }))) : (React.createElement(TouchableOpacity, { style: {
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 40,
                    }, onPress: function () {
                        var newAlerts = alerts.filter(function (x) { return x.options.key !== theAlert.options.key; });
                        console.log("newAlerts", newAlerts.lenth);
                        // NB: we need to make a copy here, otherwise it has the same reference and the component thinks that it didn't change.
                        setAlerts(__spreadArray([], newAlerts, true));
                    } },
                    React.createElement(Text, { style: { color: "blue", fontSize: 18 } }, getText("ok"))))))) : null));
};
// create the consumer as higher order component
export var withAlert = function (ChildComponent) { return function (props) {
    return (React.createElement(AlertContext.Consumer, null, function (context) { return React.createElement(ChildComponent, __assign({}, props, { alert: context })); }));
}; };
//# sourceMappingURL=MCZ.Alert.native.js.map