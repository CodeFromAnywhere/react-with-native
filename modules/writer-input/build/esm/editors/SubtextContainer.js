import * as React from "react";
import { getSubtext } from "./getSubtext";
/**
 * Returns a string with HTML for the subtext container, given you already have
 */
export var SubtextContainer = function (props) {
    var rawMarkdown = props.rawMarkdown, subtextConfig = props.subtextConfig;
    if (!subtextConfig.isEnabled)
        return null;
    var subtext = getSubtext(rawMarkdown, subtextConfig);
    return (React.createElement("div", { contentEditable: false, spellCheck: false, autoCorrect: "false", "data-is-augmentation": "true", style: { fontSize: 8, backgroundColor: "#CCC", padding: 5 } }, subtext));
};
