import * as React from "react";
export var Subword = function (props) {
    var word = props.word;
    return (React.createElement("span", { style: { borderColor: "red", border: 1 } },
        React.createElement("div", null, word),
        React.createElement("div", { style: { color: "red", paddingRight: 6 }, contentEditable: false, "data-is-augmentation": "true" },
            "xxx",
            word)));
};
Subword.example = [
    function () {
        return React.createElement(Subword, { subwordConfig: {}, word: "test" });
    },
];
/**
 * The ultimate typescript database stores data in typescript
 */
var add = function (a, b) { return a + b; };
add.example = [function () { return add(1, 2); }];
// (await db.get("Example")).filter(x=>x.name==="add")
