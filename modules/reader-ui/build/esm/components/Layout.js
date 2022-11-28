import * as React from "react";
import { LayoutGrid } from "layout";
import { Header } from "./Header";
export var Layout = function (props) {
    var children = props.children, augmentedWordObject = props.augmentedWordObject, publicBundleConfig = props.publicBundleConfig, menu = props.menu;
    return (React.createElement(LayoutGrid, { menu: {
            augmentedWords: Object.values(augmentedWordObject || {}),
            webPagesFlat: menu.flat,
            webPagesNested: menu.nested,
            isLoading: false,
        }, header: React.createElement(Header, { publicBundleConfig: publicBundleConfig }) }, children));
};
