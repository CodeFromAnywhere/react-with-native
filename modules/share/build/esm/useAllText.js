import React from "react";
export var useAllText = function () {
    // Use a state to store the current value of the body element's text
    var _a = React.useState(typeof document === "undefined" ? undefined : document.body.innerText), text = _a[0], setText = _a[1];
    // When the text of the body element changes, update the state
    React.useEffect(function () {
        if (typeof document === "undefined")
            return;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === "childList") {
                    setText(document.body.innerText);
                }
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
        // Return a cleanup function that stops observing changes
        return function () { return observer.disconnect(); };
    }, []);
    // Return the current text of the body element
    return text;
};
