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
import { api } from "api";
import { renderMarkdownContent } from "markdown";
import { useAlert } from "react-with-native-alert";
/**
 * Recursive hook that calls its own function if you click "respond", which creates an additional item in the thread
 */
export var usePromptResultAlert = function () {
    var alert = useAlert();
    var showPromptAlert = function (originalPromptName, textMarkdown, thread, projectRelativeFilePath) {
        var markdownRender = renderMarkdownContent(textMarkdown || "No content", {
            projectRelativeBaseFolderPath: "",
            projectRelativeMarkdownFilePath: "",
        });
        var buttons = [
            { text: "Okay", style: "cancel", onPress: function () { return null; } },
            {
                text: "Share",
                style: "default",
                onPress: function () {
                    // should open share view
                },
            },
            {
                text: "Respond",
                style: "default",
                onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, apiResult;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                response = prompt("What do you want to say?", "");
                                return [4 /*yield*/, api.processChatGptPrompt({
                                        contextContent: null,
                                        selectionContent: null,
                                        commentContent: null,
                                        contextualPromptSlug: undefined,
                                        customPromptContent: response,
                                        saveNewPromptWithName: null,
                                        isHeadless: false,
                                        thread: thread,
                                        projectRelativeFilePath: projectRelativeFilePath,
                                    })];
                            case 1:
                                apiResult = _c.sent();
                                // NB: Recursion!
                                showPromptAlert(originalPromptName, ((_b = (_a = apiResult.result) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.text) || "No response", thread, projectRelativeFilePath);
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
        ];
        alert === null || alert === void 0 ? void 0 : alert(originalPromptName, markdownRender, buttons);
    };
    return showPromptAlert;
};
//# sourceMappingURL=usePromptResultAlert.js.map