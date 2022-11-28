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
pathStack, config) {
    if (pathStack === void 0) { pathStack = []; }
    var target = config === null || config === void 0 ? void 0 : config.target;
    var getHref = config === null || config === void 0 ? void 0 : config.getHref;
    // base case
    if (!nestedPathObject)
        return;
    var menu = Object.keys(nestedPathObject).map(function (path) {
        var newPathStack = pathStack.concat(path);
        var fullPath = newPathStack.join("/");
        var children = (0, exports.nestedPathObjectToNestedMenuRecursive)(nestedPathObject[path], newPathStack, config);
        var href = getHref ? getHref(fullPath) : fullPath;
        var menuItem = {
            // NB: if there is no path, the title  of the page should be "home"
            title: path.length === 0 ? "Home" : path,
            href: href,
            target: target,
            children: children,
        };
        return menuItem;
    });
    return menu;
};
exports.nestedPathObjectToNestedMenuRecursive = nestedPathObjectToNestedMenuRecursive;
//# sourceMappingURL=nestedPathObjectToNestedMenu.js.map