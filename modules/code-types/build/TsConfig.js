"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptTarget = exports.NewLineKind = exports.ModuleDetectionKind = exports.ModuleResolutionKind = exports.ModuleKind = exports.JsxEmit = exports.ImportsNotUsedAsValues = void 0;
var ImportsNotUsedAsValues;
(function (ImportsNotUsedAsValues) {
    ImportsNotUsedAsValues[ImportsNotUsedAsValues["Remove"] = 0] = "Remove";
    ImportsNotUsedAsValues[ImportsNotUsedAsValues["Preserve"] = 1] = "Preserve";
    ImportsNotUsedAsValues[ImportsNotUsedAsValues["Error"] = 2] = "Error";
})(ImportsNotUsedAsValues = exports.ImportsNotUsedAsValues || (exports.ImportsNotUsedAsValues = {}));
var JsxEmit;
(function (JsxEmit) {
    JsxEmit[JsxEmit["None"] = 0] = "None";
    JsxEmit[JsxEmit["Preserve"] = 1] = "Preserve";
    JsxEmit[JsxEmit["React"] = 2] = "React";
    JsxEmit[JsxEmit["ReactNative"] = 3] = "ReactNative";
    JsxEmit[JsxEmit["ReactJSX"] = 4] = "ReactJSX";
    JsxEmit[JsxEmit["ReactJSXDev"] = 5] = "ReactJSXDev";
})(JsxEmit = exports.JsxEmit || (exports.JsxEmit = {}));
var ModuleKind;
(function (ModuleKind) {
    ModuleKind[ModuleKind["None"] = 0] = "None";
    ModuleKind[ModuleKind["CommonJS"] = 1] = "CommonJS";
    ModuleKind[ModuleKind["AMD"] = 2] = "AMD";
    ModuleKind[ModuleKind["UMD"] = 3] = "UMD";
    ModuleKind[ModuleKind["System"] = 4] = "System";
    ModuleKind[ModuleKind["ES2015"] = 5] = "ES2015";
    ModuleKind[ModuleKind["ES2020"] = 6] = "ES2020";
    ModuleKind[ModuleKind["ES2022"] = 7] = "ES2022";
    ModuleKind[ModuleKind["ESNext"] = 99] = "ESNext";
    ModuleKind[ModuleKind["Node16"] = 100] = "Node16";
    ModuleKind[ModuleKind["NodeNext"] = 199] = "NodeNext";
})(ModuleKind = exports.ModuleKind || (exports.ModuleKind = {}));
var ModuleResolutionKind;
(function (ModuleResolutionKind) {
    ModuleResolutionKind[ModuleResolutionKind["Classic"] = 1] = "Classic";
    ModuleResolutionKind[ModuleResolutionKind["NodeJs"] = 2] = "NodeJs";
    ModuleResolutionKind[ModuleResolutionKind["Node16"] = 3] = "Node16";
    ModuleResolutionKind[ModuleResolutionKind["NodeNext"] = 99] = "NodeNext";
})(ModuleResolutionKind = exports.ModuleResolutionKind || (exports.ModuleResolutionKind = {}));
var ModuleDetectionKind;
(function (ModuleDetectionKind) {
    /**
     * Files with imports, exports and/or import.meta are considered modules
     */
    ModuleDetectionKind[ModuleDetectionKind["Legacy"] = 1] = "Legacy";
    /**
     * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
     */
    ModuleDetectionKind[ModuleDetectionKind["Auto"] = 2] = "Auto";
    /**
     * Consider all non-declaration files modules, regardless of present syntax
     */
    ModuleDetectionKind[ModuleDetectionKind["Force"] = 3] = "Force";
})(ModuleDetectionKind = exports.ModuleDetectionKind || (exports.ModuleDetectionKind = {}));
var NewLineKind;
(function (NewLineKind) {
    NewLineKind[NewLineKind["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
    NewLineKind[NewLineKind["LineFeed"] = 1] = "LineFeed";
})(NewLineKind = exports.NewLineKind || (exports.NewLineKind = {}));
var ScriptTarget;
(function (ScriptTarget) {
    ScriptTarget[ScriptTarget["ES3"] = 0] = "ES3";
    ScriptTarget[ScriptTarget["ES5"] = 1] = "ES5";
    ScriptTarget[ScriptTarget["ES2015"] = 2] = "ES2015";
    ScriptTarget[ScriptTarget["ES2016"] = 3] = "ES2016";
    ScriptTarget[ScriptTarget["ES2017"] = 4] = "ES2017";
    ScriptTarget[ScriptTarget["ES2018"] = 5] = "ES2018";
    ScriptTarget[ScriptTarget["ES2019"] = 6] = "ES2019";
    ScriptTarget[ScriptTarget["ES2020"] = 7] = "ES2020";
    ScriptTarget[ScriptTarget["ES2021"] = 8] = "ES2021";
    ScriptTarget[ScriptTarget["ES2022"] = 9] = "ES2022";
    ScriptTarget[ScriptTarget["ESNext"] = 99] = "ESNext";
    ScriptTarget[ScriptTarget["JSON"] = 100] = "JSON";
    ScriptTarget[ScriptTarget["Latest"] = 99] = "Latest";
})(ScriptTarget = exports.ScriptTarget || (exports.ScriptTarget = {}));
//# sourceMappingURL=TsConfig.js.map