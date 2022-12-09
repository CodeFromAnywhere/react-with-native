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
import * as React from "react";
import { useAlert } from "react-with-native-alert";
import { useSelect } from "react-with-native-select";
import { useLastSelection } from "share";
import { processPrompt } from "./processPrompt";
import { usePromptResultAlert } from "./usePromptResultAlert";
/**
 * Component that shows a selectbox for different prompts that can be applied on this file
 */
export var FilePromptSelect = function (props) {
    var items = props.items, contextContent = props.contextContent, context_projectRelativeFilePath = props.context_projectRelativeFilePath;
    var contextSelection = useLastSelection();
    var showPromptAlert = usePromptResultAlert();
    var alert = useAlert();
    var selectItems = items === null || items === void 0 ? void 0 : items.map(function (prompt) {
        var item = { label: prompt.name, value: prompt.id };
        return item;
    });
    var allSelectItems = [{ label: "Select a prompt", value: "" }].concat(selectItems || []);
    var _a = useSelect(allSelectItems, undefined, function (selection) { return __awaiter(void 0, void 0, void 0, function () {
        var id, prompt;
        return __generator(this, function (_a) {
            id = selection === null || selection === void 0 ? void 0 : selection.value;
            prompt = items === null || items === void 0 ? void 0 : items.find(function (x) { return x.id === id; });
            if (!prompt) {
                alert === null || alert === void 0 ? void 0 : alert("Invalid value");
                return [2 /*return*/];
            }
            setValue(null);
            processPrompt({
                prompt: prompt,
                contextualContent: {
                    contextContent: contextContent,
                    context_projectRelativeFilePath: context_projectRelativeFilePath,
                    contextSelection: contextSelection,
                },
                showPromptAlert: showPromptAlert,
            });
            return [2 /*return*/];
        });
    }); }), SelectComponent = _a[0], _ = _a[1], setValue = _a[2];
    return React.createElement(SelectComponent, null);
};
//# sourceMappingURL=FilePromptSelect.js.map