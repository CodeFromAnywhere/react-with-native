import * as React from "react";
import { Div, P } from "react-with-native";
/**
 * Renders markdown frontmatter parameters (and optionally a spacer)
 */
export var renderFrontmatter = function (parameters, config) {
    var frontMatterKeys = Object.keys(parameters);
    return frontMatterKeys.length > 0 ? (React.createElement(Div, null,
        React.createElement(Div, null, frontMatterKeys.map(function (key) { return (React.createElement(P, null,
            key,
            ": ",
            parameters[key])); })),
        (config === null || config === void 0 ? void 0 : config.renderSpacer) ? React.createElement(P, null, "------------") : null)) : null;
};
