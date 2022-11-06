import * as React from "react";
import { Div } from "react-with-native";
import SubtextConfigIndex from "writer-types/db/ts-interfaces/subtextconfig.json";
import SubwordConfigIndex from "writer-types/db/ts-interfaces/subwordconfig.json";
import { useStore } from "../store";
import { SimplifiedSchemaForm } from "simplified-schema-form";
export var WriterConfigForm = function () {
    var _a = useStore("subtextConfig"), subtextConfig = _a[0], setSubtextConfig = _a[1];
    var _b = useStore("subwordConfig"), subwordConfig = _b[0], setSubwordConfig = _b[1];
    var values = [subtextConfig, subwordConfig];
    return (React.createElement(Div, null,
        React.createElement(SimplifiedSchemaForm, { id: "writerConfig", onChange: function (values) {
                var _a = values, newSubtextConfig = _a[0], newSubwordConfig = _a[1];
                setSubtextConfig(newSubtextConfig);
                setSubwordConfig(newSubwordConfig);
            }, parameters: [
                {
                    name: "SubtextConfig",
                    required: true,
                    isDbModel: false,
                    simplifiedSchema: SubtextConfigIndex.type
                        .simplifiedSchema,
                },
                {
                    name: "SubwordConfig",
                    required: true,
                    isDbModel: false,
                    simplifiedSchema: SubwordConfigIndex.type
                        .simplifiedSchema,
                },
            ], values: values })));
};
