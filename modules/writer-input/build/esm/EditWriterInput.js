var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { api, queries } from "api";
import { ClickableIcon } from "clickable-icon";
import { errorToast } from "cool-toast";
import { getFileTypeFromPath } from "filename-conventions";
import { getFileOrFolderName } from "fs-util-js";
import dynamic from "next/dynamic";
import { FilePromptSelect } from "prompt-components";
import * as React from "react";
import { useState } from "react";
import { Div } from "react-with-native";
import { ContextTextArea } from "./old/ContextTextArea";
// import { ContextTextArea } from "./old/ContextTextArea";
var AssetInput = dynamic(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, import("react-with-native-form-asset-input")];
        case 1: return [2 /*return*/, (_a.sent()).AssetInput];
    }
}); }); }, { ssr: false });
/**


the newer one, eventually to replace `ContextTextArea`
<SmartContentEditableDivInput
  writerType={writerType}
  value={value}
  onChange={onChange}
  markdownParseRenderConfig={markdownParseRenderConfig}
/>

*/
export var EditWriterInput = function (props) {
    var _a, _b;
    var onChange = props.onChange, value = props.value, projectRelativeFilePath = props.projectRelativeFilePath, markdownModelName = props.markdownModelName;
    var fileType = getFileTypeFromPath(projectRelativeFilePath);
    var contextualPromptsQuery = queries.useGetContextualPrompts(fileType === "other" ? undefined : fileType);
    var _c = useState(value.length), lastIndex = _c[0], setLastIndex = _c[1];
    var _d = useState(false), showAssetUpload = _d[0], setShowAssetUpload = _d[1];
    var toggleAssetUpload = function () { return setShowAssetUpload(!showAssetUpload); };
    var AssetUpload = function () {
        return (React.createElement(Div, { className: "flex flex-row" },
            React.createElement(ClickableIcon, { emoji: showAssetUpload ? "❌" : "📂", onClick: function () { return toggleAssetUpload(); } }),
            showAssetUpload ? (React.createElement(Div, null,
                React.createElement(AssetInput, { config: {}, fieldName: "upload", uniqueFieldId: "upload", onChange: function (newBackendAssets) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResult, assetsMarkdownString, before, after, newText;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (newBackendAssets.length === 0)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, api.processAssetUpload(newBackendAssets)];
                                case 1:
                                    apiResult = _a.sent();
                                    // 2) receive back the actual relativePath
                                    if (!apiResult.result) {
                                        errorToast("Couldn't upload your assets");
                                        return [2 /*return*/];
                                    }
                                    assetsMarkdownString = apiResult.result
                                        .map(function (backendAsset) {
                                        return "![".concat(backendAsset.alt || "", "](").concat(backendAsset.relativePath, ")");
                                    })
                                        .join("\n");
                                    before = value.substring(0, lastIndex);
                                    after = value.substring(lastIndex);
                                    newText = "".concat(before).concat(assetsMarkdownString).concat(after);
                                    onChange(newText);
                                    toggleAssetUpload();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, extra: {
                        projectRelativeReferencingFilePath: projectRelativeFilePath,
                        defaultAssetName: getFileOrFolderName(projectRelativeFilePath),
                        allowMultiple: true,
                        modelName: markdownModelName,
                        size: "md",
                        theme: "Outlined",
                    }, value: [] }))) : null));
    };
    return (React.createElement(Div, { className: "w-full h-full flex flex-1 flex-col" },
        React.createElement(Div, { className: "flex flex-row" },
            React.createElement(AssetUpload, null),
            React.createElement(FilePromptSelect, { contextContent: value, context_projectRelativeFilePath: projectRelativeFilePath, items: (_b = (_a = contextualPromptsQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.pageContextualPrompts })),
        React.createElement(ContextTextArea, { withContext: function (context) {
                setLastIndex(context.positionIndex);
                // console.log(`Context`, context);
            }, className: "w-full bg-transparent flex flex-1", onChange: onChange, value: value, projectRelativeFilePath: projectRelativeFilePath })));
};
