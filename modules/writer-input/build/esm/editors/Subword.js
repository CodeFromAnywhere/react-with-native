import * as React from "react";
export var Subword = function (props) {
    var word = props.word;
    return (React.createElement("span", { style: { borderColor: "red", border: 1 } },
        React.createElement("div", null, word),
        React.createElement("div", { style: { color: "red", paddingRight: 6 }, contentEditable: false, "data-is-augmentation": "true" },
            "xxx",
            word)));
};
