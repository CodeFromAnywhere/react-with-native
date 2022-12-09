import { useEffect, useState } from "react";
export var useLastSelection = function () {
    // Initialize a ref to store the last selection
    var _a = useState(null), selection = _a[0], setSelection = _a[1];
    // Create a callback that updates the ref when the user makes a selection
    var updateLastSelection = function () {
        var _a;
        if (typeof window === "undefined")
            return null;
        var newSelection = ((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) || null;
        setSelection(newSelection);
        return null;
    };
    // Add the event listener when the hook is called
    useEffect(function () {
        // Add the event listener to the document, so it will fire whenever the user makes a selection anywhere on the page
        document.addEventListener("selectionchange", updateLastSelection);
        // Return a cleanup function that removes the event listener
        return function () {
            document.removeEventListener("selectionchange", updateLastSelection);
        };
    }, []); // We only want to add the event listener once, so we pass an empty array as the second argument to useEffect
    // Return the last selection
    return selection;
};
