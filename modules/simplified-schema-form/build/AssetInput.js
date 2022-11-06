"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var asset_input_next_1 = require("asset-input-next");
// relative
var renderParameterTitle_1 = require("./renderParameterTitle");
var AssetInput = function (props) {
    var parameter = props.parameter, parameterValue = props.parameterValue, isDebug = props.isDebug, assetInputType = props.assetInputType, onChange = props.onChange;
    var inputTypes = assetInputType.type === "asset"
        ? undefined
        : assetInputType.type === "audio"
            ? ["files", "p2p-media", "project-media", "recordAudio", "youtube"]
            : assetInputType.type === "file"
                ? ["files"]
                : assetInputType.type === "image"
                    ? [
                        "camera",
                        "files",
                        "giphy",
                        "google-images",
                        "unsplashed",
                        "p2p-media",
                        "project-media",
                    ]
                    : assetInputType.type === "video"
                        ? [
                            "files",
                            "p2p-media",
                            "project-media",
                            "recordScreen",
                            "recordVideo",
                            "youtube",
                        ]
                        : undefined;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug, false), (0, jsx_runtime_1.jsx)(asset_input_next_1.AssetsInputNext, { inputTypes: inputTypes, onChange: onChange, value: parameterValue, allowMultiple: assetInputType.isMultiple })] }));
};
exports.AssetInput = AssetInput;
//# sourceMappingURL=AssetInput.js.map