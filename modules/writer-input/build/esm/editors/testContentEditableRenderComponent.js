import * as React from "react";
import ReactDOMServer from "react-dom/server";
/**
 * Creates an element from the markdown input, and then uses the `toMarkdownString` function to make it markdown again.
 *
 * TODO: use <template>, might be more accurate. See https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
 */
export var testContentEditableRenderComponent = function (ContentEditableRenderComponent, 
/**
 * For doing a realtime test on real data, provide the markdown string to input into the test
 */
markedToken) {
    var subwordConfig = { isEnabled: false };
    var subtextConfig = { isEnabled: false };
    var markdownFileConfig = {
        projectRelativeBaseFolderPath: "",
        projectRelativeMarkdownFilePath: "",
    };
    var inputs = markedToken
        ? [markedToken]
        : ContentEditableRenderComponent.exampleInputs;
    var invalidArray = inputs
        .map(function (input) {
        var rendered = (React.createElement(ContentEditableRenderComponent, { markedToken: input, subwordConfig: subwordConfig, subtextConfig: subtextConfig, markdownFileConfig: markdownFileConfig, 
            // NB: lol, this would cause an infinite loop if enabled, no?
            testModeEnabled: false }));
        var htmlString = ReactDOMServer.renderToString(rendered);
        var span = document.createElement("span");
        span.innerHTML = htmlString.trim();
        var output = ContentEditableRenderComponent.toMarkdownString(span);
        var isValid = input.raw === output;
        return { isValid: isValid, input: input, output: output, span: span };
    })
        .filter(function (result) { return !result.isValid; });
    if (invalidArray.length === 0)
        return true;
    // Log the result if there is something invalid
    console.log({ name: ContentEditableRenderComponent.name, invalidArray: invalidArray });
    return false;
};
