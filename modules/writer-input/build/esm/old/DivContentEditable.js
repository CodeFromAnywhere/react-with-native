import * as React from "react";
import { useEffect, useRef } from "react";
import { Div } from "react-with-native";
import { getContext } from "./getContext";
export var DivContentEditable = function (props) {
    var value = props.value, onChange = props.onChange, withContext = props.withContext, className = props.className;
    var contentRef = useRef(null);
    useEffect(function () {
        if (!contentRef.current)
            return;
        contentRef.current.innerText = value;
    }, [value]);
    return (React.createElement(Div, { contentEditable: true, ref: contentRef, className: className, onPaste: function () {
            // parse all new words into a span per word
        }, onKeyPress: function () {
            var _a;
            var innerText = ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.innerText) || ""; //also innerHTML may be useful
            // IDK how to get this, research it
            var positionIndex = 0;
            var textEditingContext = getContext({
                text: innerText,
                positionIndex: positionIndex,
            });
            withContext === null || withContext === void 0 ? void 0 : withContext(textEditingContext);
            onChange(innerText);
        } }));
};
