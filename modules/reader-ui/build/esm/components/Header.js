import * as React from "react";
import { ClickableIcon } from "clickable-icon";
import { ALink } from "next-a-link";
import { Div, P } from "react-with-native";
import { publicEnvironmentVariables, publicLocalEnvironmentVariables, } from "sdk-env-public";
import { useStore } from "../store";
export var Header = function (props) {
    var _a, _b, _c, _d;
    var _e = useStore("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _e[0], setIsMobileMenuEnabled = _e[1];
    var publicBundleConfig = props.publicBundleConfig;
    var title = publicLocalEnvironmentVariables.markdownReaderTitle ||
        publicEnvironmentVariables.markdownReaderTitle ||
        (publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.name);
    return (React.createElement(Div, { style: {
            backgroundColor: (_a = props.publicBundleConfig) === null || _a === void 0 ? void 0 : _a.primaryColor,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        } },
        React.createElement(ALink, { href: typeof window !== "undefined"
                ? location.protocol + "//" + location.host
                : "#", style: { fontSize: 32 } }, (_b = props.publicBundleConfig) === null || _b === void 0 ? void 0 : _b.emoji),
        React.createElement(Div, null,
            React.createElement(P, { className: "font-bold text-white " }, title),
            React.createElement(P, { className: "text-xs text-white italic" }, (_c = props.publicBundleConfig) === null || _c === void 0 ? void 0 : _c.description)),
        React.createElement(Div, { className: "flex flex-row" },
            React.createElement(Div, { className: "lg:hidden" },
                React.createElement(ClickableIcon, { emoji: "\uD83D\uDD0D", onClick: function () { return setIsMobileMenuEnabled(!isMobileMenuEnabled); } })),
            ((_d = props.publicBundleConfig) === null || _d === void 0 ? void 0 : _d.isGitRepoPublic) &&
                props.publicBundleConfig.gitRepoUrl ? (React.createElement(ALink, { target: "_blank", href: props.publicBundleConfig.gitRepoUrl }, "GitHub")) : null)));
};
