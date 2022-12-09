var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useContextMenu } from "context-menu";
import { useAlert } from "react-with-native-alert";
import { processPrompt } from "./processPrompt";
import { usePromptResultAlert } from "./usePromptResultAlert";
/**
 * Provides the props needed to render a context-menu that allows you to add prompts and other things into your database. All actions require api access.
 */
export var useSelectionPromptsMenu = function (selectionPrompts, contextualContent) {
    var showPromptAlert = usePromptResultAlert();
    /**
     * TODO: also sort them here based on which selection you make (`.contextualContent.contextSelection`) and your settings (probably isFavorite first, but other sorting may be beneficial.
     */
    var promptItems = selectionPrompts.map(function (prompt) {
        var item = {
            onClick: function () {
                return processPrompt({ prompt: prompt, contextualContent: contextualContent, showPromptAlert: showPromptAlert });
            },
            getTitle: function () { return prompt.name; },
            // TODO: not sure if this is the right level, but eventually we want to filter based on the selection, maybe
            getIsEnabled: function () { return true; },
        };
        return item;
    });
    var alert = useAlert();
    var selectionWordCount = contextualContent.contextSelection
        ? contextualContent.contextSelection.split(" ").length
        : 0;
    var isStatement = selectionWordCount > 1;
    var isWord = selectionWordCount === 1;
    var _a = useContextMenu({
        items: __spreadArray([
            {
                onClick: function () {
                    alert === null || alert === void 0 ? void 0 : alert("Not implemented yet", "should add the word into the WordMatrix, providing its category, your personal agreement/disagreement, and possibly a description/opnion and some prompts that should be executed on it (there's much more here)");
                },
                getTitle: function () { return "🧠 Add word"; },
                getIsEnabled: function () { return isWord; },
            },
            {
                onClick: function () {
                    alert === null || alert === void 0 ? void 0 : alert("Not implemented yet", "should add the statement into the database, providing its type, your personal agreement/disagreement, and possibly an opinion (maybe more?)");
                },
                getTitle: function () { return "🧠 Add statement"; },
                getIsEnabled: function () { return isStatement; },
            },
            {
                getTitle: function () { return "🕊 Free-form prompt"; },
                getIsEnabled: function () { return true; },
                onClick: function () {
                    alert === null || alert === void 0 ? void 0 : alert("Not implemented yet", "Should allow to ask a free question about this selection, should allow you to choose which context should be provided, if any (free form text input with a preset is probably easiest, for programmers)");
                },
            },
            {
                getTitle: function () { return "🎤 Speak"; },
                getIsEnabled: function () { return true; },
                onClick: function () {
                    alert === null || alert === void 0 ? void 0 : alert("Not implemented yet", "Should record your audio, convert into text by whisper, and make it select any of these actions, or the free-form prompt. Would be nice if this option is there by default, also for other menus, or it's even accessible via other ways, but this is a great way to try it out first.");
                },
            }
        ], promptItems, true),
    }), renderContextMenu = _a.renderContextMenu, openContextMenuProps = _a.openContextMenuProps, onClose = _a.onClose;
    return {
        renderContextMenu: renderContextMenu,
        openContextMenuProps: openContextMenuProps,
        onClose: onClose,
    };
};
//# sourceMappingURL=useSelectionPromptsMenu.js.map