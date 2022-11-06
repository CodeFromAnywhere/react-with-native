"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clickable_icon_1 = require("clickable-icon");
var react_with_native_1 = require("react-with-native");
var readableSize_1 = require("./readableSize");
/**

`AssetBlobView` shows an `AssetBlob`

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration

 */
var AssetView = function (props) {
    var asset = props.asset, remove = props.remove;
    /**
     * other type cannot be viewed in the browser easily, downloading a blob is ugly (Name: Unknown). therefore it should not be linked
     */
    var href = asset.type === "other" ? undefined : asset.blobPath;
    var uploadProgress = asset.uploadProgress === undefined || asset.uploadProgress === 0
        ? ""
        : asset.uploadProgress === 1
            ? "✅"
            : "".concat(Math.round(asset.uploadProgress * 100), "%");
    var sizeText = asset.sizeBytes !== undefined
        ? "(".concat((0, readableSize_1.readableSize)(asset.sizeBytes), ")")
        : undefined;
    var src = asset.blobPath || asset.temporaryDestination || asset.remoteUrl;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "relative border border-black rounded-xl p-2 m-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "absolute right-1 top-[-7px]" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2A2F", onClick: function () { return remove(); } }) })), asset.type === "image" && src && ((0, jsx_runtime_1.jsx)(react_with_native_1.Image, { src: src, className: "w-20 aspect-auto" })), (0, jsx_runtime_1.jsxs)(react_with_native_1.A, __assign({ href: href, target: "_blank" }, { children: [asset.name, " ", sizeText, " ", uploadProgress] }))] })));
};
exports.AssetView = AssetView;
//# sourceMappingURL=AssetView.js.map