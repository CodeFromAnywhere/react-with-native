"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivContentEditable = exports.ContextTextArea = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var getContext_1 = require("./getContext");
/**
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
var ContextTextArea = function (props) {
    var value = props.value, onChange = props.onChange, withContext = props.withContext, className = props.className;
    return ((0, jsx_runtime_1.jsx)("textarea", { className: className, value: value, onKeyPress: function (e) {
            console.log({ e: e });
        }, onChange: function (e) {
            var newText = e.target.value;
            var positionIndex = e.target.selectionStart;
            var textEditingContext = (0, getContext_1.getContext)({
                text: newText,
                positionIndex: positionIndex,
            });
            withContext === null || withContext === void 0 ? void 0 : withContext(textEditingContext);
            onChange(newText);
        } }));
};
exports.ContextTextArea = ContextTextArea;
var DivContentEditable = function (props) {
    var value = props.value, onChange = props.onChange, withContext = props.withContext, className = props.className;
    var contentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!contentRef.current)
            return;
        contentRef.current.innerText = value;
    }, [value]);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { contentEditable: true, ref: contentRef, className: className, onPaste: function (e) {
            // parse all new words into a span per word
        }, onKeyPress: function (e) {
            var _a;
            var innerText = ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.innerText) || ""; //also innerHTML may be useful
            // IDK how to get this, research it
            var positionIndex = 0;
            var textEditingContext = (0, getContext_1.getContext)({
                text: innerText,
                positionIndex: positionIndex,
            });
            withContext === null || withContext === void 0 ? void 0 : withContext(textEditingContext);
            onChange(innerText);
        } }));
};
exports.DivContentEditable = DivContentEditable;
//# sourceMappingURL=editors.js.map