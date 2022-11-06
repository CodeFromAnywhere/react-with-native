import { MarkedParagraph } from "./MarkedParagraph";
import { MarkedText } from "./MarkedText";
import { testContentEditableRenderComponent } from "./testContentEditableRenderComponent";
/**
 * Can be used to test all `ContentEditableRenderComponent`s with example inputs
 *
 * Instead you can also enable devmode and just check it on the live examples
 */
export var testAllContentEditableRenderComponents = function () {
    var allComponents = [
        MarkedText,
        MarkedParagraph,
    ];
    var results = allComponents.map(function (component) {
        return {
            name: component.name,
            isValid: testContentEditableRenderComponent(component),
        };
    });
    console.log(results);
};
