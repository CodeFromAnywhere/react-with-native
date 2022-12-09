"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var simplified_schema_form_1 = require("simplified-schema-form");
var datasetconfig_json_1 = __importDefault(require("code-types/db/ts-interfaces/datasetconfig.json"));
var initialValue = {};
var _a = (0, simplified_schema_form_1.useTsInterfaceForm)(datasetconfig_json_1.default, initialValue), Form = _a[0], value = _a[1], onChange = _a[2];
//# sourceMappingURL=DatasetConfigForm.js.map