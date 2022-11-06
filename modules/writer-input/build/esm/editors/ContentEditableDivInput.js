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
import { notEmpty } from "js-util";
import { useEffect, useRef } from "react";
import { Div } from "react-with-native";
import { metaClickableClassName } from "../editors/MarkedToken";
/**
 * Iterates over all child-nodes in the editor, replaces text with a segment, and replaces nodes with a flat list of segments
 *
 * Returns all textSegments in an array
 */
export var getTextSegments = function (element) {
    if (element === null)
        return [];
    var children = Array.from(element.childNodes);
    var textSegments = children
        .map(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
            return {
                text: node.nodeValue || "",
                node: node,
            };
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
            // NB: not sure which nodes contain ID, but this must work
            if (node.nodeName === "DIV") {
                // NB: because nodeName is DIV, it must be a HTMLDivElement
                var divElement = node;
                var isAugmentation = divElement.dataset.isAugmentation === "true";
                if (isAugmentation)
                    return;
            }
            if (node.nodeName === "BR") {
                return { text: "\n", node: node };
            }
            else {
                return getTextSegments(node);
            }
        }
        return;
    })
        .filter(notEmpty)
        .flat();
    return textSegments;
};
/**
 * Div that is `contentEditable` by default and has possibilities for color/style highlighting, autocomplete, subtexts and tooltips
 */
export var ContentEditableDivInput = function (props) {
    var value = props.value, onChange = props.onChange, divProps = props.divProps, parseTextContentToHtmlString = props.parseTextContentToHtmlString, markdownParseRenderConfig = props.markdownParseRenderConfig, subtextConfig = props.subtextConfig, subwordConfig = props.subwordConfig;
    useEffect(function () {
        // NB: `value` changes whenever we call onChange, if the component is used as intended
        updateEditor(value);
        /**
         * Every time the value changes, we need to create all click listeners...
         */
        /**
         * For every meta clickable, add an event listener for when we click on it.
         *
         * If that happens, check if the meta key is enabled.
         *
         * If that's true, use the data-href property and go to that URL
         */
        var listeners = Array.from(document.getElementsByClassName(metaClickableClassName))
            .map(function (element) {
            if (element.tagName !== "DIV")
                return;
            var listener = function (clickEvent) {
                if (clickEvent.metaKey) {
                    console.log("clicked an image elemen with the metakey enabled... let's go?", {
                        datasetHref: element.dataset.href,
                        dataHref: element["data-href"],
                    });
                }
            };
            element.addEventListener("click", listener);
            return { divElement: element, listener: listener };
        })
            .filter(notEmpty);
        return function () {
            /**
             * Clean up
             */
            listeners.map(function (item) {
                var divElement = item.divElement, listener = item.listener;
                divElement.removeEventListener("click", listener);
            });
        };
    }, [value]);
    var editor = useRef(null);
    var getEditorContent = function () {
        var textSegments = getTextSegments(editor.current);
        var textContent = textSegments.map(function (_a) {
            var text = _a.text;
            return text;
        }).join("");
        // console.log("OK", { textSegments, textContent });
        return { textSegments: textSegments, textContent: textContent };
    };
    /**
     * Executed every time input changes by user input.
     *
     * Ensures the innerHTML is updated for the editor, while the selection stays the same
     *
     * NB: to also allow for non-user-based changes, we need to restoreSelection in a different way, probably.
     */
    function updateEditor(value) {
        // 1) get selection, segments and the full content (without styling)
        var selection = window.getSelection();
        // NB: this never happens I assume
        if (!selection)
            return;
        var textSegments = getEditorContent().textSegments;
        // 2) Use the `textSegments` to find `anchorIndex` and `focusIndex`
        var anchorIndex = null;
        var focusIndex = null;
        var currentIndex = 0;
        textSegments.forEach(function (_a) {
            var text = _a.text, node = _a.node;
            if (node.isEqualNode(selection.anchorNode)) {
                anchorIndex = currentIndex + selection.anchorOffset;
            }
            if (node.isEqualNode(selection.focusNode)) {
                focusIndex = currentIndex + selection.focusOffset;
            }
            currentIndex += text.length;
        });
        if (!editor.current)
            return;
        var newInnerHTML = parseTextContentToHtmlString(value, "markdown", subtextConfig, subwordConfig, markdownParseRenderConfig);
        // console.log({ value, newInnerHTML });
        // 3) Recalculate the inner HTML of the editor based on the raw text string
        editor.current.innerHTML = newInnerHTML;
        if (anchorIndex === null || focusIndex === null)
            return;
        // 4) restore selection as index of the new string
        restoreSelection(anchorIndex, focusIndex);
    }
    /**
     * Restores selection after updating inner HTML
     */
    function restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
        var selection = window.getSelection();
        if (selection === null)
            return;
        var textSegments = getTextSegments(editor.current);
        var anchorNode = editor.current;
        if (anchorNode === null)
            return;
        var anchorIndex = 0;
        var focusNode = editor.current;
        if (focusNode === null)
            return;
        var focusIndex = 0;
        var currentIndex = 0;
        textSegments.forEach(function (_a) {
            var text = _a.text, node = _a.node;
            var startIndexOfNode = currentIndex;
            var endIndexOfNode = startIndexOfNode + text.length;
            if (startIndexOfNode <= absoluteAnchorIndex &&
                absoluteAnchorIndex <= endIndexOfNode) {
                anchorNode = node;
                anchorIndex = absoluteAnchorIndex - startIndexOfNode;
            }
            if (startIndexOfNode <= absoluteFocusIndex &&
                absoluteFocusIndex <= endIndexOfNode) {
                focusNode = node;
                focusIndex = absoluteFocusIndex - startIndexOfNode;
            }
            currentIndex += text.length;
        });
        selection.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
    }
    /**
     * onInput doesn't always register enters
     *
     * onKeyPress is already registered before the content is inside, so that also causes problems.
     *
     * onKeyUp seems to be the only event that really works well
     *
     * (Only tested in Safari!)
     */
    var onKeyUp = function () {
        // console.log({ innerText: editor.current?.innerText });
        var textContent = getEditorContent().textContent;
        // NB: editor.current?.innerText would be nice, but it doesn't work because it adds an extra newline...
        // Besides that, it also is unable to strip certain HTML
        onChange(textContent);
    };
    return (React.createElement(Div, null,
        React.createElement(Div, __assign({ ref: editor, onKeyUp: onKeyUp, contentEditable: true, spellCheck: false }, divProps))));
};
