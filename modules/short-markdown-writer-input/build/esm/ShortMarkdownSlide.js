import * as React from "react";
import { Div, P } from "react-with-native";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { getSrc } from "asset-view";
import { isDev } from "server-api-url";
import { useOnScreen } from "use-on-screen";
export var ShortMarkdownSlide = function (props) {
    var _a, _b;
    var item = props.item, index = props.index, projectRelativeFilePath = props.projectRelativeFilePath, setSlide = props.setSlide, isAutoplay = props.isAutoplay;
    var _c = useState(null), timeoutRef = _c[0], setTimeoutRef = _c[1];
    var slideRef = useRef(null);
    var isOnScreen = useOnScreen(slideRef);
    useEffect(function () {
        if (isOnScreen) {
            setSlide(index);
            var durationMs = item.durationMs;
            console.log({ index: index, durationMs: durationMs });
            if (!durationMs) {
                return;
            }
            var timeout = setTimeout(function () {
                if (isAutoplay) {
                    console.log("times up, should scroll to next!");
                    setSlide(index + 1);
                    var nextElement = document.getElementById("slide".concat(index + 1));
                    if (!nextElement) {
                        console.log("Couldn't find next");
                        return;
                    }
                    console.log("scrolling into view the next element", nextElement.id, "????", nextElement.getBoundingClientRect());
                    nextElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, durationMs);
            setTimeoutRef(timeout);
        }
        if (!isOnScreen && timeoutRef) {
            clearTimeout(timeoutRef);
        }
        return function () {
            if (timeoutRef) {
                clearTimeout(timeoutRef);
            }
        };
    }, [isOnScreen]);
    var src = item.viewPath && projectRelativeFilePath
        ? getSrc({ relativePath: item.viewPath }, projectRelativeFilePath, !isDev)
            .src
        : undefined;
    return (React.createElement(Div, { ref: slideRef, className: "relative snap-center h-[80vh] flex justify-center items-center border-2 border-black" },
        src ? (((_a = item.viewPath) === null || _a === void 0 ? void 0 : _a.endsWith(".png")) ? (React.createElement(Div, { className: "absolute top-0 left-0 w-full h-full bg-blue-200" },
            React.createElement(Image, { src: src, width: "100%", objectFit: "fill", layout: "fill" }))) : ((_b = item.viewPath) === null || _b === void 0 ? void 0 : _b.endsWith(".mov")) ? (React.createElement(Div, { className: "absolute top-0 left-0 w-full h-full bg-blue-200" },
            React.createElement("video", { muted: true, src: src, autoPlay: true, loop: true, preload: "none", width: "100%", style: { objectFit: "fill" } }))) : null) : null,
        item.title ? React.createElement(P, { className: "text-8xl font-bold" }, item.title) : null));
};
