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
import * as React from "react";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import { SimplifiedSchemaForm, useReferencableModelData, } from "simplified-schema-form";
import { useState } from "react";
/**
 * Renders a form for frontmatter without save button
 */
export var FrontmatterForm = function (props) {
    var onChange = props.onChange, projectRelativeMarkdownFilePath = props.projectRelativeMarkdownFilePath, markdownParse = props.markdownParse;
    var immutableFrontmatterSchema = useState(props.frontmatterSchema)[0];
    console.log({
        parameters: markdownParse.parameters,
    });
    var referencableModelData = useReferencableModelData(immutableFrontmatterSchema);
    return (React.createElement(SimplifiedSchemaForm, { id: projectRelativeMarkdownFilePath, parameters: [
            {
                name: "Frontmatter",
                required: true,
                isDbModel: true,
                simplifiedSchema: immutableFrontmatterSchema,
            },
        ], onChange: function (_a) {
            var frontmatter = _a[0];
            var newMarkdownParse = __assign(__assign({}, markdownParse), { parameters: frontmatter });
            var newMarkdownString = markdownParseToMarkdownString(newMarkdownParse);
            onChange(newMarkdownString);
        }, values: [markdownParse.parameters], projectRelativeStorageFilePath: projectRelativeMarkdownFilePath, referencableModelData: referencableModelData }));
};
