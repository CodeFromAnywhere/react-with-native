import { useAsset } from "asset-view";
import { destructureOptionalObject } from "js-util";
import { ALink } from "next-a-link";
import * as React from "react";
import { Div, P } from "react-with-native";
import { isDev } from "server-api-url";
export var ReaderPageHeader = function (props) {
    var _a;
    var markdownFile = props.markdownFile, projectRelativeMarkdownPath = props.projectRelativeMarkdownPath;
    if (!markdownFile)
        return null;
    var src = destructureOptionalObject(useAsset(markdownFile.headerImage, projectRelativeMarkdownPath, !isDev)).src;
    var backgroundImage = src ? "url(\"".concat(src, "\")") : undefined;
    console.log({ backgroundImage: backgroundImage });
    return (React.createElement(Div, { style: {
            backgroundImage: backgroundImage,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center 75%",
        }, className: "w-full ".concat(markdownFile.headerBig ? "h-screen" : "h-[350px]", " flex flex-col items-center justify-center") },
        markdownFile.headerTitle ? (React.createElement(P, { className: "drop-shadow-lg decoration-8 font-bold text-white text-4xl" }, markdownFile.headerTitle)) : null,
        markdownFile.headerSubTitle ? (React.createElement(P, { className: "drop-shadow-lg text-white text-2xl" }, markdownFile.headerSubTitle)) : null, (_a = markdownFile.header_markdownCallToActions) === null || _a === void 0 ? void 0 :
        _a.map(function (cta) {
            var title = cta.title, description = cta.description, ctaButtonText = cta.ctaButtonText, hostname = cta.hostname, path = cta.path;
            console.log({ cta: cta, ctaButtonText: ctaButtonText, hostname: hostname });
            return (React.createElement(ALink, { href: path, title: description, className: "bg-blue-500 rounded-full p-4 flex items-center justify-center" }, title));
        })));
};
