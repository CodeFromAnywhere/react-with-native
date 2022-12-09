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
/**
 * Main function to process a prompt. For now it calls `processChatGptPrompt` api and shows an alert afterwards with the result. In some cases we may want to process the prompt differently, e.g. storing it in a queue.
 */
export var processPrompt = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var prompt, showPromptAlert, _a, contextContent, context_projectRelativeFilePath, contextSelection, apiResult;
    var _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                prompt = config.prompt, showPromptAlert = config.showPromptAlert, _a = config.contextualContent, contextContent = _a.contextContent, context_projectRelativeFilePath = _a.context_projectRelativeFilePath, contextSelection = _a.contextSelection;
                return [4 /*yield*/, api.processChatGptPrompt({
                        contextContent: contextContent,
                        selectionContent: contextSelection || null,
                        projectRelativeFilePath: context_projectRelativeFilePath,
                        // not sure about these?
                        commentContent: null,
                        contextualPromptSlug: prompt.slug,
                        customPromptContent: null,
                        saveNewPromptWithName: null,
                        isHeadless: false,
                    })];
            case 1:
                apiResult = _f.sent();
                showPromptAlert(prompt.name, ((_c = (_b = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.text) || "No textual result", (_e = (_d = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.thread, context_projectRelativeFilePath);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=processPrompt.js.map