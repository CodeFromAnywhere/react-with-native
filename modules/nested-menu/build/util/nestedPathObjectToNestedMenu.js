"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestedPathObjectToNestedMenuRecursive = void 0;
/**
 * Transform a nested path object into a nested menu (MenuType), recursively
 */
var nestedPathObjectToNestedMenuRecursive = function (
/**
 * your nested path object that you want to create a menu for
 */
nestedPathObject, 
/**
 * used for recursion to get the final url (defaults to empty array)
 */
pathStack) {
    if (pathStack === void 0) { pathStack = []; }
    if (!nestedPathObject)
        return;
    var menu = Object.keys(nestedPathObject).map(function (path) {
        var newPathStack = pathStack.concat(path);
        var fullPath = newPathStack.join("/");
        var children = (0, exports.nestedPathObjectToNestedMenuRecursive)(nestedPathObject[path], newPathStack);
        var menuItem = {
            title: path,
            href: fullPath,
            children: children,
            showChildren: true,
        };
        return menuItem;
    });
    return menu;
};
exports.nestedPathObjectToNestedMenuRecursive = nestedPathObjectToNestedMenuRecursive;
//# sourceMappingURL=nestedPathObjectToNestedMenu.js.map