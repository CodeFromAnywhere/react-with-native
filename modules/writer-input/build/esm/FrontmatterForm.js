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
import { findAssetParametersRecursively } from "asset-functions-js";
import { frontmatterToObject, objectToFrontmatter } from "frontmatter-util";
import { makeArray, takeFirst } from "js-util";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import * as React from "react";
import { useState } from "react";
import { SimplifiedSchemaForm, useReferencableModelData, } from "simplified-schema-form";
/**
 * Renders a form for frontmatter without save button
 */
export var FrontmatterForm = function (props) {
    var onChange = props.onChange, projectRelativeMarkdownFilePath = props.projectRelativeMarkdownFilePath, markdownParse = props.markdownParse, modelName = props.modelName, frontmatterSchema = props.frontmatterSchema;
    var immutableFrontmatterSchema = useState(props.frontmatterSchema)[0];
    var referencableModelData = useReferencableModelData(immutableFrontmatterSchema);
    var uploadAssetsThenSetMarkdownString = function (parameters) { return __awaiter(void 0, void 0, void 0, function () {
        var frontmatter, assetParameters, realFrontmatter, newMarkdownParse, newMarkdownString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    frontmatter = parameters[0];
                    assetParameters = findAssetParametersRecursively(frontmatter);
                    // NB: because it's too complex and we don't need this in the case of frontmatter, we can just only look at the base level, because frontmatter has just the base level. We therefore skip any items with a stack.
                    return [4 /*yield*/, Promise.all(assetParameters.map(function (assetParameter) { return __awaiter(void 0, void 0, void 0, function () {
                            var item, isCorrectType, hasUploaded, uploadedItem, _a, newAsset;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (assetParameter.stack) {
                                            console.log("WARNING. Stack detected in assetParameters item, shouldn't happen for frontmatter");
                                            return [2 /*return*/];
                                        }
                                        item = frontmatter[assetParameter.parameterName];
                                        isCorrectType = typeof item === "object";
                                        hasUploaded = item && isCorrectType
                                            ? !!makeArray(item).find(function (x) { return x.relativePath; })
                                            : false;
                                        if (!(item && isCorrectType && !hasUploaded)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, api.processAssetUpload(makeArray(item))];
                                    case 1:
                                        _a = (_b.sent()).result;
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a = item;
                                        _b.label = 3;
                                    case 3:
                                        uploadedItem = _a;
                                        newAsset = !uploadedItem || !isCorrectType
                                            ? undefined
                                            : assetParameter.assetInputType.isMultiple
                                                ? makeArray(uploadedItem)
                                                : takeFirst(uploadedItem);
                                        frontmatter[assetParameter.parameterName] = newAsset;
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    // NB: because it's too complex and we don't need this in the case of frontmatter, we can just only look at the base level, because frontmatter has just the base level. We therefore skip any items with a stack.
                    _a.sent();
                    realFrontmatter = objectToFrontmatter(frontmatter, frontmatterSchema);
                    newMarkdownParse = __assign(__assign({}, markdownParse), { parameters: realFrontmatter });
                    newMarkdownString = markdownParseToMarkdownString(newMarkdownParse);
                    onChange(newMarkdownString);
                    return [2 /*return*/];
            }
        });
    }); };
    var frontmatterParse = frontmatterToObject(markdownParse.parameters, frontmatterSchema);
    console.log({ frontmatterParse: frontmatterParse, frontmatter: markdownParse.parameters });
    return (React.createElement(SimplifiedSchemaForm, { modelName: modelName, id: projectRelativeMarkdownFilePath, parameters: [
            {
                name: "Frontmatter",
                required: true,
                isDbModel: true,
                simplifiedSchema: immutableFrontmatterSchema,
            },
        ], onChange: uploadAssetsThenSetMarkdownString, values: [frontmatterParse], projectRelativeStorageFilePath: projectRelativeMarkdownFilePath, referencableModelData: referencableModelData }));
};
