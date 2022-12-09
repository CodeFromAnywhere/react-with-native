import { getSrc } from "asset-view";
import { notEmpty } from "js-util";
import * as React from "react";
import { useState, useEffect } from "react";
import { Div } from "react-with-native";
import { useMultiAudio } from "./useMultiAudio";
import { ShortMarkdownSlide } from "./ShortMarkdownSlide";
export var ShortMarkdownPlayer = function (props) {
    var shortMarkdown = props.shortMarkdown, projectRelativeFilePath = props.projectRelativeFilePath;
    var _a = useState(null), slide = _a[0], setSlide = _a[1];
    var audioUrls = (shortMarkdown === null || shortMarkdown === void 0 ? void 0 : shortMarkdown.audioWithViewsArray.filter(function (x) { return !!x.audioPath; }).map(function (x) {
        if (!x.audioPath || !projectRelativeFilePath)
            return;
        var src = getSrc({ relativePath: x.audioPath }, projectRelativeFilePath).src;
        return { audioKey: x.audioKey, src: src };
    }).filter(notEmpty)) || [];
    var audioPlayer = useMultiAudio(audioUrls.map(function (x) { return x.src; }));
    var items = shortMarkdown === null || shortMarkdown === void 0 ? void 0 : shortMarkdown.audioWithViewsArray.map(function (x) { return x.viewEmbeds; }).flat();
    useEffect(function () {
        if (!items)
            return;
        if (slide === null)
            return;
        // 1 - find corresponding item
        var item = items[slide];
        // 2 - find the audio connected to it and where it should start for that audio
        var audioIndex = audioUrls.findIndex(function (x) { return x.audioKey === item.audioKey; });
        if (audioIndex === -1)
            return;
        // 3 - stop the previous audio, start next audio
        audioPlayer.toggle(audioIndex)();
    }, [slide]);
    if (!shortMarkdown)
        return null;
    if (!projectRelativeFilePath)
        return null;
    if (!items)
        return null;
    return (React.createElement(Div, { className: "h-[80vh] overflow-auto snap-mandatory snap-y" }, items.map(function (item, index) {
        return (React.createElement("div", { id: "slide".concat(index) },
            React.createElement(ShortMarkdownSlide, { projectRelativeFilePath: projectRelativeFilePath, setSlide: setSlide, isAutoplay: true, item: item, index: index, key: "slidekey".concat(index) })));
    })));
};
