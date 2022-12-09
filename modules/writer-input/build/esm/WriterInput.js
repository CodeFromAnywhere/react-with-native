import * as React from "react";
import { useEffect } from "react";
import { Div } from "react-with-native";
import { api, queries } from "api";
import { DbPage } from "db-crud";
import { FancyLoader } from "fancy-loader";
import { getWriterType } from "filename-conventions";
import { getFolderJs } from "fs-util-js";
import { mdToJsonParse } from "markdown-parse-js";
import { ContextualPromptResultsTab } from "prompt-components";
import { isDev } from "server-api-url";
import { ShortStudio } from "short-markdown-writer-input";
// relative
import { WriterConfigForm } from "./config/WriterConfigForm";
import { FrontmatterForm } from "./FrontmatterForm";
import { TitleContainer } from "./TitleContainer";
import { getWriterTypeFromContent } from "./util/getWriterTypeFromContent";
// import { SmartContentEditableDivInput } from "./editors/SmartContentEditableDivInput";
import { EditWriterInput } from "./EditWriterInput";
import { MarkdownView } from "./MarkdownView";
import { useStore } from "./store";
var vscodeOpen = api.vscodeOpen;
/**
Writer input for any utf8 based text, file or no file
*/
export var WriterInput = function (props) {
    var _a = useStore("writerView"), writerView = _a[0], setWriterView = _a[1];
    var type = props.type, projectRelativeFilePath = props.projectRelativeFilePath, reload = props.reload, value = props.value, onChange = props.onChange, markdownModelName = props.markdownModelName, initialWriterView = props.initialWriterView, augmentedWordObject = props.augmentedWordObject, isLoading = props.isLoading, save = props.save, isSaved = props.isSaved, hideButtons = props.hideButtons, className = props.className;
    var projectRelativeBaseFolderPath = getFolderJs(projectRelativeFilePath);
    var projectRelativeMarkdownFilePath = projectRelativeFilePath;
    useEffect(function () {
        if (initialWriterView) {
            setWriterView === null || setWriterView === void 0 ? void 0 : setWriterView(initialWriterView);
        }
    }, []);
    var filename = projectRelativeFilePath === null || projectRelativeFilePath === void 0 ? void 0 : projectRelativeFilePath.split("/").pop();
    var extension = filename === null || filename === void 0 ? void 0 : filename.split(".").pop();
    // Detect type either based on forced type, filename or on content (in descending order)
    var writerType = type
        ? type
        : extension
            ? getWriterType(extension)
            : getWriterTypeFromContent(value);
    var icon = writerType === "markdown" ? "✍️" : writerType === "typescript" ? "⌘" : "📃";
    var canRenderWriterInput = projectRelativeBaseFolderPath !== undefined &&
        projectRelativeMarkdownFilePath !== undefined;
    var renderWriter = function () {
        var _a, _b, _c;
        var frontmatterSchemaQuery = queries.useGetFrontmatterSchema(markdownModelName);
        var markdownParse = mdToJsonParse(value, filename, {
            frontmatterSchema: (_a = frontmatterSchemaQuery.data) === null || _a === void 0 ? void 0 : _a.result,
            noFinal: true,
        });
        var markdownParseRenderConfig = {
            augmentedWordObject: augmentedWordObject,
            projectRelativeBaseFolderPath: projectRelativeBaseFolderPath || "",
            projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath || "",
            isDev: isDev,
            isStatic: false,
        };
        return (React.createElement(Div, { className: "flex flex-col flex-1 px-4" },
            writerView === "shortStudio" ? (React.createElement(ShortStudio, { onChange: onChange, value: value, projectRelativeFilePath: projectRelativeFilePath || "", markdownModelName: markdownModelName })) : null,
            writerView === "postable" ? React.createElement(Div, null, "This is postable") : null,
            writerView === "todoOffers" ? React.createElement(Div, null, "This is todo offers") : null,
            writerView === "prompt-results" && projectRelativeFilePath ? (React.createElement(ContextualPromptResultsTab, { projectRelativeFilePath: projectRelativeFilePath })) : null,
            writerView === "prompts" ? (React.createElement(DbPage, { modelName: "ContextualPrompt", filter: function (item) {
                    return item.projectRelativeFilePath === projectRelativeFilePath;
                } })) : null,
            writerView === "config" ? React.createElement(WriterConfigForm, null) : null,
            writerView === "frontmatter" &&
                !frontmatterSchemaQuery.isLoading &&
                ((_b = frontmatterSchemaQuery.data) === null || _b === void 0 ? void 0 : _b.result) &&
                projectRelativeMarkdownFilePath ? (React.createElement(FrontmatterForm, { modelName: markdownModelName, key: projectRelativeMarkdownFilePath, markdownParse: markdownParse, projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath, frontmatterSchema: (_c = frontmatterSchemaQuery.data) === null || _c === void 0 ? void 0 : _c.result, onChange: onChange })) : null,
            writerView === "edit" || writerView === undefined ? (React.createElement(EditWriterInput, { onChange: onChange, value: value, projectRelativeFilePath: projectRelativeFilePath || "", markdownModelName: markdownModelName })) : null,
            writerView === "view" || writerView === "presentation" ? (React.createElement(MarkdownView, { view: writerView, markdownParse: markdownParse, markdownParseRenderConfig: markdownParseRenderConfig })) : null));
    };
    return (React.createElement(Div, { className: "flex flex-col flex-1 ".concat(className) },
        hideButtons || !setWriterView ? null : (React.createElement(TitleContainer, { buttons: [
                {
                    onClick: function () { return save === null || save === void 0 ? void 0 : save(); },
                    emoji: "💾",
                    title: "Save",
                    isEnabled: isSaved === false && !!save,
                },
                {
                    onClick: function () { return setWriterView("edit"); },
                    emoji: "✏️",
                    title: "Edit",
                    isActive: writerView === "edit",
                    isEnabled: true,
                },
                {
                    onClick: function () { return setWriterView("view"); },
                    emoji: "👁",
                    title: "View",
                    isActive: writerView === "view",
                },
                {
                    onClick: function () {
                        // TODO; ALSO MAKE FULLSCREEN HERE
                        setWriterView("presentation");
                    },
                    emoji: "📽",
                    title: "Present",
                    isActive: writerView === "presentation",
                    isEnabled: writerType === "markdown",
                },
                {
                    onClick: function () {
                        setWriterView("frontmatter");
                    },
                    emoji: "🧩",
                    title: "About",
                    isActive: writerView === "frontmatter",
                    isEnabled: writerType === "markdown" && !!markdownModelName,
                },
                {
                    onClick: function () {
                        setWriterView("config");
                    },
                    emoji: "⚙️",
                    title: "Configuration",
                    isActive: writerView === "config",
                },
                {
                    onClick: function () {
                        setWriterView("postable");
                    },
                    emoji: "💬",
                    title: "Postables",
                    isActive: writerView === "postable",
                    isEnabled: projectRelativeFilePath === null || projectRelativeFilePath === void 0 ? void 0 : projectRelativeFilePath.endsWith(".postable.md"),
                },
                {
                    onClick: function () {
                        setWriterView("shortStudio");
                    },
                    emoji: "🎙",
                    title: "Short Studio",
                    isActive: writerView === "shortStudio",
                    isEnabled: projectRelativeFilePath === null || projectRelativeFilePath === void 0 ? void 0 : projectRelativeFilePath.endsWith(".short.md"),
                },
                {
                    onClick: function () {
                        setWriterView("todoOffers");
                    },
                    emoji: "📖",
                    title: "Todo Offers",
                    isActive: writerView === "todoOffers",
                    isEnabled: projectRelativeFilePath === null || projectRelativeFilePath === void 0 ? void 0 : projectRelativeFilePath.includes("/todo/"),
                },
                {
                    onClick: function () {
                        setWriterView("prompts");
                    },
                    emoji: "💡",
                    title: "Prompts",
                    isActive: writerView === "prompts",
                    isEnabled: true,
                },
                {
                    onClick: function () {
                        setWriterView("prompt-results");
                    },
                    emoji: "🤯",
                    title: "Prompt-results",
                    isActive: writerView === "prompt-results",
                    isEnabled: true,
                },
                {
                    onClick: function () {
                        vscodeOpen({
                            files: [{ projectRelativePath: projectRelativeFilePath }],
                        });
                    },
                    emoji: "💻",
                    title: "Code",
                    isEnabled: projectRelativeFilePath !== undefined,
                },
                {
                    isEnabled: !!reload,
                    onClick: reload || (function () { return null; }),
                    component: isLoading ? function () { return React.createElement(FancyLoader, null); } : undefined,
                    emoji: isLoading ? undefined : "↻",
                    title: isLoading ? "Loading" : "Reload",
                },
            ], title: filename ? "".concat(icon, " ").concat(filename) : undefined },
            React.createElement(Div, null))),
        canRenderWriterInput
            ? renderWriter()
            : "Can't render.... need `projectRelativeFilePath`"));
};
