var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { useLastSelection } from "share";
import { useAlert } from "react-with-native-alert";
import { useHotkeys } from "hotkeys";
import { getContext } from "./getContext";
import { queries } from "api";
import { getFileTypeFromPath } from "filename-conventions";
import { useSelectionPromptsMenu } from "prompt-components";
/**
TextArea with ability to enhance personal database and execute prompts


QUESTION:

How to make color highlighting?

I guess we need to wrap all words with a span and make it contenteditable, so we can create a editor where we are styling all words that are written

We can then also change the value of the word if you are NOT editing that word.

So you would only see the true value of a word when your cursor is on that word

TODO:

- replace the textarea with a div contenteditable
- make selectionStart and selectionEnd still working (on the original text)
- whenever you stop editing a word, it needs to be wrapped with a span and styled with a function taking that word and returning a style
- whenver you start a new word through a separator, an empty span should be created
- the span of the current word being edited must have a location (x,y). get that exact location so we can render an autocompletion intellisense
  
*/
export var ContextTextArea = function (props) {
    var _a, _b;
    var value = props.value, onChange = props.onChange, withContext = props.withContext, className = props.className, projectRelativeFilePath = props.projectRelativeFilePath;
    var fileType = getFileTypeFromPath(props.projectRelativeFilePath);
    var contextualPromptsQuery = queries.useGetContextualPrompts(fileType === "other" ? undefined : fileType);
    var alert = useAlert();
    var contextSelection = useLastSelection();
    var selectionPrompts = ((_b = (_a = contextualPromptsQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.selectionContextualPrompts) || [];
    var _c = useSelectionPromptsMenu(selectionPrompts, {
        contextContent: value,
        context_projectRelativeFilePath: projectRelativeFilePath,
        contextSelection: contextSelection,
    }), onClose = _c.onClose, openContextMenuProps = _c.openContextMenuProps, renderContextMenu = _c.renderContextMenu;
    // EDITOR HOTKEYS
    useHotkeys([], function (_a) {
        var code = _a.code, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey, shiftKey = _a.shiftKey, key = _a.key;
        if (code === "Escape") {
            // go out of intellisense
            alert === null || alert === void 0 ? void 0 : alert("ESCAPE");
            onClose();
        }
        if (ctrlKey && code === "Space") {
            // intellisense on
            alert === null || alert === void 0 ? void 0 : alert("intellisense on");
        }
        if (altKey && code === "KeyZ") {
            if (shiftKey) {
                alert === null || alert === void 0 ? void 0 : alert("redo");
            }
            else {
                alert === null || alert === void 0 ? void 0 : alert("undo");
            }
        }
        if (metaKey && key === "b") {
            alert === null || alert === void 0 ? void 0 : alert("bold");
        }
        if (metaKey && key === "i") {
            alert === null || alert === void 0 ? void 0 : alert("italic");
        }
    });
    return (React.createElement(React.Fragment, null,
        renderContextMenu(),
        React.createElement("div", __assign({ className: className }, openContextMenuProps, { ref: openContextMenuProps.ref, onClick: function () { return onClose(); } }),
            React.createElement("textarea", { className: className, value: value, onChange: function (e) {
                    var newText = e.target.value;
                    var positionIndex = e.target.selectionStart;
                    var textEditingContext = getContext({
                        text: newText,
                        positionIndex: positionIndex,
                    });
                    withContext === null || withContext === void 0 ? void 0 : withContext(textEditingContext);
                    onChange(newText);
                } }))));
};
