"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateMarkdownInstance=exports.generateKvmdInstance=exports.generateJsonSingleInstance=exports.randomName=exports.generateSlugTestModel=exports.generateCsvInstance=exports.testDb=void 0;var model_types_1=require("model-types"),fs_orm_1=require("fs-orm"),dbConfig={modelQueryConfig:{CsvTestModel:{dbStorageMethod:"csv"},JsonMultipleTestModel:{dbStorageMethod:"jsonMultiple"},DefaultTestModel:{dbStorageMethod:"jsonSingle"},MarkdownTestModel:{dbStorageMethod:"markdown"},KeyValueMarkdownTestModel:{dbStorageMethod:"keyValueMarkdown"},
// real models
OperationIndex:{dbStorageMethod:"jsonSingle"},OperationConfig:{dbStorageMethod:"markdown",operationRelativePath:"OPERATION.md"},TsConfig:{dbStorageMethod:"jsonSingle",operationRelativePath:"tsconfig.json"},PackageJson:{dbStorageMethod:"jsonSingle",operationRelativePath:"package.json"}}};
/**
 * a db is created with models from all different db storage methods
 */
exports.testDb=(0,fs_orm_1.createDb)(dbConfig);var getRanomAge=function(){return Math.round(99*Math.random())},generateCsvInstance=function(){return{
// Needed for deletion later
id:(0,model_types_1.generateId)(),age:getRanomAge(),name:(0,exports.randomName)(),description:"hello world"}};exports.generateCsvInstance=generateCsvInstance;var generateSlugTestModel=function(){return{
// Needed for deletion later
id:(0,model_types_1.generateId)(),name:(0,exports.randomName)(),language:"en",markdown:"wut?",special:!0,description:"test"}};exports.generateSlugTestModel=generateSlugTestModel;var randomName=function(){return"name".concat(Math.round(888888*Math.random()))};exports.randomName=randomName;var generateJsonSingleInstance=function(){return{
// Needed for deletion later
id:(0,model_types_1.generateId)(),description:"ehey",special:!0,markdown:" jaja dit is gewoon markdown \n\n mooi he \n\n # header \n\n test",name:(0,exports.randomName)()}};exports.generateJsonSingleInstance=generateJsonSingleInstance;var generateKvmdInstance=function(){var e=(0,model_types_1.generateId)();return{slug:e,
// Needed for deletion later
id:e,isHeaderCalculated:!0,categoryStackCalculated:[],comment:"comment",value:"value",name:e}};exports.generateKvmdInstance=generateKvmdInstance;var generateMarkdownInstance=function(){return{
// Needed for deletion later
id:(0,model_types_1.generateId)(),age:19,canBeNull:null,markdown:" jaja dit is gewoon markdown \n\n mooi he \n\n # header \n\n test",name:(0,exports.randomName)(),stringA:"A",stringB:"B",stringC:"C",yes:!0,canBeUndefined:void 0}};exports.generateMarkdownInstance=generateMarkdownInstance;
//# sourceMappingURL=test-db.js.map