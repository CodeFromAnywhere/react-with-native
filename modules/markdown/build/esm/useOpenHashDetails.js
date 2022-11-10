import React from "react";
export var useOpenHashDetails = function () {
    React.useEffect(function () {
        var openHashDetailsEventHandler = function () {
            //  console.log("openHashEventHander");
            if (typeof window === "undefined")
                return;
            var hash = location.hash.substring(1);
            if (!hash)
                return;
            //  console.log(`hash: ${hash}`);
            var idElement = document.getElementById(hash);
            var maybeDetails = idElement === null || idElement === void 0 ? void 0 : idElement.closest("details");
            // console.log({ idElement, maybeDetails });
            if (!idElement || !maybeDetails)
                return;
            maybeDetails.open = true;
            //console.log("OPENED");
            scrollToId(idElement);
        };
        var scrollToId = function (idElement) {
            //console.log("Scroll To ID");
            history.scrollRestoration = "manual";
            idElement.scrollIntoView({ behavior: "smooth" });
            history.scrollRestoration = "auto";
        };
        if (document.readyState === "complete") {
            openHashDetailsEventHandler();
        }
        addEventListener("load", openHashDetailsEventHandler);
        addEventListener("hashchange", openHashDetailsEventHandler);
        return function () {
            removeEventListener("hashchange", openHashDetailsEventHandler);
            removeEventListener("load", openHashDetailsEventHandler);
        };
    }, []);
};
