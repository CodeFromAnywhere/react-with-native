"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMarkdownInstance = exports.generateKvmdInstance = exports.generateJsonSingleInstance = exports.randomName = exports.generateSlugTestModel = exports.generateCsvInstance = exports.testDb = void 0;
var model_types_1 = require("model-types");
var fs_orm_1 = require("fs-orm");
/*
export type Person = { name: string; age: number, firstName?:string };

const isSuccesful: boolean = true; //boolean
const text: string = "hello world";
const amount: number = 88;
const numbers: string[] = ["1", "2", "3", "4", "5"];
const person: Person = { age: 29, name: "John Doe" };

const students: Person[] = [
  { name: "Henrik", age: 1 + 1, firstName:"jlskjfklsjf" },
  { name: "Suyog", age: 1 + 1 },
];
*/
/*

kebab-case : file names, endpoint, paths, urls
camelCase : variable names and functions
PascalCase : types, interfaces, classes and components

*/
var dbConfig = {
    modelQueryConfig: {
        CsvTestModel: { dbStorageMethod: "csv" },
        JsonMultipleTestModel: { dbStorageMethod: "jsonMultiple" },
        DefaultTestModel: { dbStorageMethod: "jsonSingle" },
        MarkdownTestModel: { dbStorageMethod: "markdown" },
        KeyValueMarkdownTestModel: { dbStorageMethod: "keyValueMarkdown" },
        // real models
        TsConfig: {
            dbStorageMethod: "jsonSingle",
            operationRelativePath: "tsconfig.json",
        },
    },
};
/**
 * a db is created with models from all different db storage methods
 */
exports.testDb = (0, fs_orm_1.createDb)(dbConfig);
var getRanomAge = function () { return Math.round(Math.random() * 99); };
var generateCsvInstance = function () {
    return {
        // Needed for deletion later
        id: (0, model_types_1.generateId)(),
        age: getRanomAge(),
        name: (0, exports.randomName)(),
        description: "hello world",
    };
};
exports.generateCsvInstance = generateCsvInstance;
var generateSlugTestModel = function () {
    return {
        // Needed for deletion later
        id: (0, model_types_1.generateId)(),
        name: (0, exports.randomName)(),
        markdown: "wut?",
        special: true,
        description: "test",
    };
};
exports.generateSlugTestModel = generateSlugTestModel;
var randomName = function () { return "name".concat(Math.round(Math.random() * 888888)); };
exports.randomName = randomName;
var generateJsonSingleInstance = function () {
    return {
        // Needed for deletion later
        id: (0, model_types_1.generateId)(),
        description: "ehey",
        special: true,
        markdown: " jaja dit is gewoon markdown \n\n mooi he \n\n # header \n\n test",
        name: (0, exports.randomName)(),
    };
};
exports.generateJsonSingleInstance = generateJsonSingleInstance;
var generateKvmdInstance = function () {
    var id = (0, model_types_1.generateId)();
    return {
        slug: id,
        // Needed for deletion later
        id: id,
        isHeaderCalculated: true,
        categoryStackCalculated: [],
        comment: "comment",
        value: "value",
        name: id,
    };
};
exports.generateKvmdInstance = generateKvmdInstance;
var generateMarkdownInstance = function () {
    return {
        // Needed for deletion later
        id: (0, model_types_1.generateId)(),
        age: 19,
        canBeNull: null,
        markdown: " jaja dit is gewoon markdown \n\n mooi he \n\n # header \n\n test",
        name: (0, exports.randomName)(),
        stringA: "A",
        stringB: "B",
        stringC: "C",
        yes: true,
        canBeUndefined: undefined,
    };
};
exports.generateMarkdownInstance = generateMarkdownInstance;
//# sourceMappingURL=test-db.js.map