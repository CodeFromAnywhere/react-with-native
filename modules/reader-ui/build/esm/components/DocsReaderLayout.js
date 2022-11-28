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
import { getQueryPath } from "markdown-reader-functions-js";
import * as React from "react";
import { useRouter } from "react-with-native-router";
import { Dictionary } from "./Dictionary";
import { Layout } from "./Layout";
import { ReaderPageContent } from "./ReaderPageContent";
export var DocsReaderLayout = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var router = useRouter();
    var queryPath = getQueryPath(router.query);
    var word = Array.isArray((_a = router.query) === null || _a === void 0 ? void 0 : _a.word)
        ? (_c = (_b = router.query) === null || _b === void 0 ? void 0 : _b.word) === null || _c === void 0 ? void 0 : _c[0]
        : router.query.word;
    return (React.createElement(Layout, { publicBundleConfig: props.publicBundleConfig, augmentedWordObject: (_d = props.content) === null || _d === void 0 ? void 0 : _d.augmentedWordObject, menu: props.menu }, queryPath === "dictionary" && ((_e = props.content) === null || _e === void 0 ? void 0 : _e.augmentedWordObject) ? (React.createElement(Dictionary, { augmentedWordObject: (_f = props.content) === null || _f === void 0 ? void 0 : _f.augmentedWordObject, word: word })) : (React.createElement(ReaderPageContent, __assign({}, props.content)))));
};
